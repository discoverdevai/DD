---
title: "AI-Built App to Production: The Founder's Guide"
description: "Built with Lovable, Bolt, v0 or Cursor and stuck before launch? What breaks, what to check, fix or rebuild, real costs and timelines, in one guide."
locale: en
translationKey: ai-app-to-production
h1: "How to take an AI-built app to production"
shortTitle: "AI-built app to production"
pillar: prototype-to-launch
role: pillar
primaryKeyword: "AI app to production"
author: discoverdev
takeaways:
  - "Working in the demo and ready for real users are different milestones. The gap is mostly in parts you cannot see: data access rules, secret keys, sign-up settings and payment checks."
  - "Our view: most AI-built apps need a fix list, not a rewrite. Rebuild only when you cannot own the code or the data model is wrong at the core."
  - "You can run a first-pass check yourself in an afternoon. Free scans help, but the tools' own docs say they do not guarantee security."
  - "Put the code, database, payments, domain and email in accounts you own before launch. Give others access, not ownership."
  - "Published market prices for outside help run from a $199 audit to $50,000–150,000 rescues. Compare what each one delivers, not only the price."
tags: [security, fix-or-rebuild, code-ownership]
sources:
  - "https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/"
  - "https://supabase.com/docs/guides/database/postgres/row-level-security"
  - "https://supabase.com/docs/guides/api/api-keys"
  - "https://supabase.com/docs/guides/deployment/going-into-prod"
  - "https://supabase.com/docs/guides/database/database-advisors"
  - "https://supabase.com/docs/guides/platform/backups"
  - "https://docs.stripe.com/keys-best-practices"
  - "https://docs.stripe.com/webhooks"
  - "https://docs.lovable.dev/introduction/faq"
  - "https://docs.lovable.dev/features/security"
  - "https://docs.lovable.dev/integrations/github"
  - "https://cvemon.intruder.io/cves/CVE-2025-48757"
  - "https://www.superblocks.com/blog/lovable-rls-breach"
  - "https://vallettasoftware.com/vibe-audit"
  - "https://www.rapidevelopers.com/lovable-security-audit"
  - "https://justinmckelvey.com/blog/vibe-coding-cost"
  - "https://www.metacto.com/services/vibe-code-rescue"
publishedAt: 2026-10-16
updatedAt: 2026-10-16
faqs: []
relatedService: review
related: ["en/ai-built-app-security-holes", "en/lovable-launch-checklist"]
draft: false
---

**TL;DR:** An app built with Lovable, Bolt, v0 or Cursor can work well in a demo and still not be ready for real users. The gap is rarely the screens. It is the parts you cannot see: who can read which data, where secret keys live, who can sign up, and whether payments are confirmed on the server. These gaps can be fixed. In our view, most AI-built apps need a fix list, not a rewrite. Rebuild only when you cannot get the code or the data model is wrong at the core. Before launch, check six areas: data access rules, secret keys, sign-up settings, payments, backups and account ownership. Free scans are a good first step, but the tools' own docs say scans do not guarantee security. For apps that handle personal data or money, an outside review before launch is a sensible step. Published prices for that help range from a $199 audit to six-figure rescues. This week, move every account into your name, run the free checks in this guide, and write down what your app must never get wrong.

You built something real. It signs people in, saves their data and maybe takes payments. Friends have tried it, and it works. Now you want strangers to use it, and something feels off.

That feeling is worth listening to. Working in the demo and ready for strangers are different milestones. A demo proves the idea. Production means the app keeps working, and keeps data safe, when people you have never met use it in ways you did not plan.

Our view is simple: most AI-built apps need a fix list, not a rewrite. AI app builders are good at building what you ask for. The gaps sit in a short list of places, and you can check most of them yourself. This guide covers what changes at launch, what usually breaks, how to check, when to fix or rebuild, what help costs, who should own what, and what to do this week.

## What changes between demo and production?

Production adds strangers, real data and real money. In a demo, you are the only user and nothing is at stake. In production, people you do not know will sign up, some will test your limits, and every record they save is data you are responsible for. The code may not change at all. The risk around it does.

| | In the demo | In production |
|---|---|---|
| Users | You and a few friends | Strangers, including some who poke at your app |
| Data | Test records | Names, emails, files, payment history |
| Payments | Test mode | Real cards, refunds, failed charges, disputes |
| Errors | You see them and retry | Users leave, or support emails pile up |
| Access | Every request is "you" | Each user must see only their own records |
| Running costs | Free tiers | Hosting, database and AI bills that grow with use |

The biggest change is access. In a demo, every request comes from you, so a missing access rule never shows. With two real users, the same gap can let one person read the other's records.

This is not a niche problem. OWASP, the open security community that ranks common web risks, puts **broken access control** at number one in its [Top 10 for 2025](https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/). Its examples include viewing or editing someone else's account by changing an ID in a request.

The other change is time. A demo needs to work for ten minutes while you watch. A product needs to work at 3 a.m. on a Sunday with nobody watching. That means backups, error alerts, and a plan for when a payment fails.

In practice, "production" adds a short list of jobs that a demo never needed:

- **Knowing when something breaks.** Error alerts that reach a person, not a log nobody reads.
- **Recovering when something breaks.** A backup you have restored at least once, and a way to roll back a bad release.
- **Answering users.** A support email that someone checks, and a way to look up what happened to one user's account.
- **Changing safely.** A copy of the app where you test changes before real users see them, so a new prompt does not break checkout on a Friday night.
- **Knowing your costs.** A rough idea of what each new user adds to your hosting, database and AI bills.

None of these jobs is hard on its own. Together, they are the difference between an app that works and an app you can run. If you are a solo founder, decide now who does each one, even if the answer is "me, for now".

## What usually breaks in AI-built apps?

The common breaks are in authorization, not features. Authorization means the rules about who can see and change what. AI app builders make the screens and flows you describe. They do not always add the rules that keep users apart, keep secret keys off the browser, or confirm payments on the server.

Here are the holes that matter most before launch.

- **Data access rules are missing or too loose.** Many AI-built apps use Supabase as their database. Supabase relies on **Row Level Security (RLS)**: rules inside the database that decide, row by row, which records each user can read or change. Supabase's docs say to enable RLS on every table in an exposed schema, and warn that a table without it is ["readable and writable by any role with a grant on it"](https://supabase.com/docs/guides/database/postgres/row-level-security). Lovable's own [security docs](https://docs.lovable.dev/features/security) name misconfigured RLS rules as a common cause of data leaks.
- **Secret keys end up in browser code.** Some keys are meant to be public. Others unlock everything. A Supabase secret key bypasses every RLS policy, so Supabase says it belongs only in backend code ([Supabase API keys](https://supabase.com/docs/guides/api/api-keys)). Stripe says the same about its secret keys: publishable keys can go in web pages, but secret keys must stay on your server ([Stripe key practices](https://docs.stripe.com/keys-best-practices)).
- **Anyone can sign up with any email.** If sign-up is open and email confirmation is off, people can create accounts with addresses they do not own. Supabase's [production checklist](https://supabase.com/docs/guides/deployment/going-into-prod) tells you to enable email confirmations and to protect your Supabase account with multi-factor authentication.
- **Payments are trusted without checking.** A **webhook** is a message one service sends to your server when something happens, such as Stripe telling your app a payment succeeded. Stripe says to verify every webhook's signature before acting on it. Without that check, an attacker could send fake events to unlock orders or accounts ([Stripe webhooks](https://docs.stripe.com/webhooks)).
- **There are no backups.** Supabase backs up Pro, Team and Enterprise projects daily. For Free projects, it recommends exporting your own data regularly ([Supabase backups](https://supabase.com/docs/guides/platform/backups)).
- **Fixes create new bugs.** Each new prompt fixes one thing and breaks another. This is a code quality problem more than a security one. It decides whether a new developer can safely take over.

A public example shows what is at stake. A CVE is a public ID for a known security flaw. The record for **CVE-2025-48757** describes insufficient RLS in Lovable through April 15, 2025, which let remote attackers without an account read or write database tables of generated sites. It carries a critical score of 9.3. Lovable disputes the record and says each customer is responsible for protecting their own app's data ([CVE record on Intruder's cvemon](https://cvemon.intruder.io/cves/CVE-2025-48757)). According to [Superblocks](https://www.superblocks.com/blog/lovable-rls-breach), a follow-up scan found "303 endpoints across 170 projects" without proper RLS. Exposed data included emails, phone numbers, payment status and API keys. Lovable has since added security scanning.

The lesson is not that AI tools are unsafe. Lovable, Bolt, v0 and Cursor are strong tools, and we use AI tools in our own work. The lesson is that authorization is your job, whatever tool wrote the code. For each hole with a 5-minute check, read [the security holes AI-built apps ship with](/insights/ai-built-app-security-holes).

Not sure where your app stands? [Take the 3-minute launch check.](/launch-check)

## How do you check your app before launch?

Check six areas before launch: data access rules, secret keys, sign-up settings, payments, backups and account ownership. You can do a first pass yourself in an afternoon using the free tools already in your stack. The table below shows what to check, how to check it, and what a pass looks like.

| Area | What to check | How to check | A pass looks like |
|---|---|---|---|
| Data access | RLS is on for every table with user data | Open the Security Advisor in your Supabase dashboard. It flags public tables with RLS off ([Supabase advisors](https://supabase.com/docs/guides/database/database-advisors)) | No "RLS disabled" warnings |
| Cross-user access | User A cannot read user B's records | Sign in as two test users. Change a record ID in the address bar or a request | The second user gets nothing back |
| Secret keys | No secret keys in browser code | Open your live site's JavaScript files and search for `sk_live`, `sk_test` and `sb_secret` | Only publishable keys appear |
| Sign-up | Who can create an account, and whether email is confirmed | Check the sign-up and "Confirm email" settings in your auth provider | Settings match your plan, and email is confirmed |
| Payments | Webhooks are verified on the server, and repeats are handled | Ask your developer to show the signature check and how repeated events are skipped | Both exist in server code |
| Backups | You can restore yesterday's data | Check your database plan's backup settings, then try one restore | A restore has worked at least once |
| Ownership | Code, database, payments and domain are in your name | List each account and the email that owns it | Every account sits under your company email |

Built-in scans are a good first step. Lovable runs a quick scan each time you publish and offers a deeper scan of your app's code. Its own FAQ says these scans "support secure development but do not guarantee it" ([Lovable FAQ](https://docs.lovable.dev/introduction/faq)). The same FAQ suggests a professional security review for apps that handle sensitive data or critical functions. If you built with Lovable, [this Lovable launch checklist](/insights/lovable-launch-checklist) goes item by item.

A scan cannot tell you whether the rules match your business. It can see that a policy exists. It cannot know that coaches should see their own students but not another coach's students. Superblocks makes this point about Lovable's first scan: it checked whether an RLS policy existed, not whether it actually blocked access. That judgement needs a person who understands the product.

If you want that person to be outside your team, you have options. Freelancers, specialist firms and studios all offer pre-launch reviews. DiscoverDev's [Launch-Ready Review](/launch-ready) is one of them. Senior engineers review your app with read-only access in about 5 working days. You get a written report, a ranked fix list, a keep, fix or replace verdict, and a fixed quote for the fixes. The fee is fixed, quoted after a free 30-minute call, and credited to the fix if you hire us for it. No useful findings, no charge: if we find no issue we rate medium severity or higher, you pay nothing.

## Should you fix or rebuild?

Fix, in most cases. Rebuild only when the foundation is wrong: you cannot get the code, the data model does not fit how your business works, or the stack cannot do what the product must do. Messy code alone is not a reason to start over. In our view, messy code on a sound data model is worth fixing.

Founders often fear the answer will be "rebuild everything". Ask for evidence instead. A good verdict names the signal behind it, part by part. The table shows the signals we look for and what each one points to.

| Signal | Points to | Why |
|---|---|---|
| Holes are in access rules, keys or settings | Fix | These are policy and configuration changes, not structural ones |
| Payments work but webhooks are not verified or repeats are not handled | Fix | Add server-side checks and duplicate handling |
| Bugs multiply with each prompt, but the data model is sound | Refactor parts | Clean up the worst areas and add tests around them |
| One feature is a tangle, such as booking or billing logic | Replace that part | Rewrite one area and keep the rest |
| You cannot export the code or get into the accounts | Recover first, then decide | You cannot fix what you cannot reach |
| The data model is wrong at the core, such as no concept of teams when you sell to teams | Rebuild | Every feature sits on the data model |
| The stack cannot meet a hard need, such as offline mobile use | Rebuild that layer | Patching around a hard limit costs more over time |

A few plain definitions help here. **Fix** means changing settings, rules and small pieces of code. **Refactor** means rewriting parts of the code so they are easier to understand and change, without changing what the app does. **Rebuild** means starting a new codebase, often reusing the design, the data and what you learned.

One test is useful. Imagine the top five issues are fixed. Could a new developer then work on this code without breaking things each week? If yes, fix. If no, look hard at the data model before you spend more.

You can also gather your own evidence before anyone else looks. Three questions help:

- **Can you get the code?** If the code sits in an account you cannot reach, recovering it comes before any other decision.
- **Does the data model match your business?** Write down your main things (users, teams, orders, bookings) and how they relate. Then compare with the database tables. Small gaps are fine. A missing core idea is not.
- **Where do bugs come from?** If most bugs come from one feature, that feature may need replacing. If they come from everywhere, the code may need a refactor first.

The cost of being wrong runs both ways. Rebuilding too early throws away working features and months of learning. Fixing too long keeps you paying for patches on a foundation that will not hold. A clear verdict before you spend costs less than either mistake.

## What does it cost and how long does it take?

Costs come in three layers: a check, the fixes, and running costs after launch. Published market prices for an outside check run from free to about $10,000. Full rescues are listed at $50,000–150,000. A check takes hours to days. Fixes take days to weeks. A rebuild takes weeks to months, depending on app size and what the check finds.

Here are published prices from firms in this market. We saw them on their sites on October 15–16, 2026. Prices change, so check each source before you compare.

| Type of help | What the firm says you get | Published price | Source |
|---|---|---|---|
| Entry audit | A senior engineer reads the repo and ranks risks; cleanup is quoted separately | From $199 | [Valletta Software](https://vallettasoftware.com/vibe-audit) |
| Fixed-scope security audit | Audit of a standard Lovable app, about 5 business days, read-only, fee credited toward fixes | $1,000 fixed | [RapidDev](https://www.rapidevelopers.com/lovable-security-audit) |
| Pre-launch professional review | A specialist's range for a security review before launch | $2,000–10,000 | [Justin McKelvey](https://justinmckelvey.com/blog/vibe-coding-cost) |
| Fixes after problems appear | The same author's range for rescue fixes | $3,500–15,000 | [Justin McKelvey](https://justinmckelvey.com/blog/vibe-coding-cost) |
| Full rebuild | The same author's range | $25,000–50,000 | [Justin McKelvey](https://justinmckelvey.com/blog/vibe-coding-cost) |
| Full rescue engagement | A free 48-hour audit, then a fixed-scope rescue | $50,000–150,000 | [metacto](https://www.metacto.com/services/vibe-code-rescue) |

What moves the price is mostly scope and judgement. A bigger app with more user roles, payments and sensitive data takes longer to check. A scan lists problems. A review decides what to do about them and prices the fix. Before you compare quotes, ask each provider three questions. Will I get a ranked list or a raw dump? Will you say fix or rebuild, and why? Is the fee credited if you do the fixes?

Timelines follow the same layers.

- **Your own first pass:** an afternoon with the table above.
- **An outside review:** often about a week. Ours takes about 5 working days.
- **Fixes:** days for settings and rules, longer for payment logic or refactors.
- **A rebuild:** weeks to months. For reference, our own fixed-price builds run 8–12 weeks.

Do not forget running costs. Hosting, database plans, email sending and AI usage all grow with users. Backups may need a paid database plan. AI bills can grow faster than users, because cost follows every request. An [EdTech AI platform in Egypt we worked with cut its AI costs by 60–90%](/work/edtech-ai-agents) across three AI agents. The changes included a shared cache across users, routing each task to a suitable model, and trimming the text sent to the model.

## Who should own the code and accounts?

You should. Put the code, database, hosting, payments, domain and email sender in accounts registered to your company email, with you as owner. Give developers and agencies access as members, not owners. If someone leaves, you remove their access and keep everything. This is practical advice, not legal advice. A contract is the backup, not the plan.

| Account | Why it matters | Check that |
|---|---|---|
| Code repository (for example GitHub) | The code is the product | Your company owns the organization; others are members |
| App builder workspace (Lovable, Bolt, v0) | Where the app is edited and published | You are the workspace owner |
| Database (for example Supabase) | Holds all user data | The project sits in your organization, with multi-factor sign-in on |
| Hosting and deployment | Keeps the app online | Billing and admin are in your name |
| Payments (for example Stripe) | Money reaches your bank | The account and payouts are in your company's name |
| Domain and DNS | Your address on the web | The registrar account is yours |
| Email sending | Sign-up and password emails | The sender domain and account are yours |
| AI provider keys | Usage is billed to whoever owns the key | Keys and billing are on your account |

AI app builders make code ownership simpler than it used to be. Lovable's FAQ says the apps and code you create are yours. When you connect a Lovable project to GitHub, Lovable creates a new repository from it, and changes sync both ways ([Lovable GitHub docs](https://docs.lovable.dev/integrations/github)). You can clone that repository and keep working in any editor.

The catch is where the repository lives. Connect it to a GitHub organization your company owns, not a freelancer's personal account. The same goes for Supabase, Stripe and your domain. Moving accounts later is possible, but it is slower and riskier once real users depend on them.

## What should you do this week?

Start with ownership, then run the free checks, then decide on help. Most of the steps below take minutes, not days. Together they tell you whether you can launch, need a short fix list first, or need a deeper look. Write down what you find as you go. That list is your starting point either way.

1. **List every account.** Code, app builder, database, hosting, payments, domain, email and AI keys. Move ownership of each to your company email.
2. **Connect your code to a repository you own.** If you use Lovable, connect GitHub to your company's organization.
3. **Run the database security check.** Open the Supabase Security Advisor and fix any table with RLS off.
4. **Test with two accounts.** Sign in as two users and try to open each other's records.
5. **Search your live site for secret keys.** If you find one, treat it as exposed and rotate it today. Stripe and Supabase both describe how in their key guides.
6. **Check sign-up settings.** Decide who may sign up, and turn on email confirmation.
7. **Test a payment end to end in test mode.** Confirm your server checks the webhook signature and handles the same event twice without charging or fulfilling twice.
8. **Turn on backups and try one restore.**
9. **Write down what must never go wrong.** For example: "No user sees another user's data" or "No one gets access without paying."
10. **Decide.** Launch, fix first, or get an outside review.

Your app working in the demo is a real milestone. Getting it ready for strangers is the next one, and it is usually a list of specific fixes, not a fresh start. If you want a second pair of eyes before launch, a senior review is one option. Either way, start with the checks above, and start this week, not launch week.
