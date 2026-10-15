#!/usr/bin/env bash
# Live/preview smoke test. Usage: bash qa/smoke.sh https://discoverdev.ai
# Checks: every route 200, old routes redirect (301/308) to the right path in one hop,
# unknown URL returns 404, robots/sitemap/llms.txt live, security headers present, apex/https.
set -u
BASE="${1:-https://discoverdev.ai}"; BASE="${BASE%/}"
DIR="$(cd "$(dirname "$0")" && pwd)"
fail=0; ok(){ printf '  ok   %s\n' "$1"; }; bad(){ printf '  FAIL %s\n' "$1"; fail=$((fail+1)); }
code(){ curl -s -o /dev/null -w '%{http_code}' --max-time 20 "$1"; }

echo "Routes ($BASE)"
grep -v '^\s*#' "$DIR/routes.txt" | sed '/^\s*$/d' | while read -r r; do
  opt=0; [[ $r == \?* ]] && { opt=1; r="${r#\?}"; }
  c=$(code "$BASE$r"); if [[ $c == 200 ]]; then ok "$c $r"; elif [[ $opt == 1 ]]; then echo "  skip $c $r (optional)"; else bad "$c $r"; echo x >> /tmp/smoke_fail.$$; fi
done
[[ -f /tmp/smoke_fail.$$ ]] && { fail=$((fail+$(wc -l < /tmp/smoke_fail.$$))); rm -f /tmp/smoke_fail.$$; }

echo "Redirects"
while read -r from to; do
  [[ -z ${from:-} || $from == \#* ]] && continue
  out=$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' --max-time 20 "$BASE$from")
  c=${out%% *}; loc=${out#* }
  if [[ $c =~ ^30[178]$ && ( $loc == "$BASE$to" || $loc == "$to" ) ]]; then ok "$c $from -> $to"
  else bad "$from expected 301 -> $to, got '$out'"; fi
done < "$DIR/redirects.txt"

echo "System"
c=$(code "$BASE/this-page-does-not-exist-qa"); [[ $c == 404 ]] && ok "unknown URL -> 404" || bad "unknown URL returned $c (must be 404, not the homepage)"
for f in /robots.txt /llms.txt /sitemap-index.xml /.well-known/security.txt /favicon.svg; do c=$(code "$BASE$f"); [[ $c == 200 ]] && ok "$c $f" || bad "$c $f"; done
c=$(code "$BASE/about/"); [[ $c =~ ^30[178]$ ]] && ok "trailing slash redirects ($c)" || bad "/about/ returned $c (expected redirect)"

echo "Headers"
H=$(curl -sI --max-time 20 "$BASE/" | tr -d '\r')
for h in strict-transport-security content-security-policy x-content-type-options referrer-policy permissions-policy; do
  echo "$H" | grep -qi "^$h:" && ok "$h" || bad "missing header: $h"; done
echo "$H" | grep -qi '^x-robots-tag:.*noindex' && bad "x-robots-tag noindex on production!" || ok "no noindex header"
if [[ $BASE == https://discoverdev.ai ]]; then
  c=$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' "http://discoverdev.ai/"); [[ $c == 30* ]] && ok "http -> https ($c)" || bad "http not redirected: $c"
  c=$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' "https://www.discoverdev.ai/"); [[ $c == 30*discoverdev.ai/ ]] && ok "www -> apex ($c)" || bad "www not redirected to apex: $c"
fi
echo; [[ $fail == 0 ]] && echo "SMOKE PASS" || { echo "SMOKE FAIL: $fail issue(s)"; exit 1; }
