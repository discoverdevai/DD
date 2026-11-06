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
c=$(code "$BASE/build/"); [[ $c =~ ^30[178]$ ]] && ok "trailing slash redirects ($c)" || bad "/build/ returned $c (expected redirect)"

echo "Search and AI bots (SEO-AEO spec audit Nov 6, §1.1 / §30): robots.txt allows them all, so each should get 200"
# A 403 here is often the WAF checking the bot's IP (spoofed UA), not a real block: confirm in Search Console / Bing / CF logs.
for ua in "Googlebot/2.1" "bingbot/2.0" "Applebot/0.1" "OAI-SearchBot/1.0" "GPTBot/1.1" "ChatGPT-User/1.0" "ClaudeBot/1.0" "Claude-SearchBot/1.0" "PerplexityBot/1.0"; do
  c=$(curl -s -o /dev/null -w '%{http_code}' --max-time 20 -A "Mozilla/5.0 (compatible; $ua)" "$BASE/")
  if [[ $c == 200 ]]; then ok "$c $ua"; elif [[ $c == 403 ]]; then echo "  warn 403 $ua (check WAF / AI Crawl Control)"; else bad "$c $ua"; fi
done

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
