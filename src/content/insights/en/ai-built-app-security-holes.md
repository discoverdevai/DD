---
title: "Vibe Coding Security: Common Holes in AI-Built Apps"
description: "Exposed keys, missing row-level security, open sign-ups and unverified webhooks. The security holes AI-built apps ship with, and how to check yours."
locale: en
translationKey: ai-built-app-security-holes
h1: "Vibe coding security: the holes AI-built apps ship with"
shortTitle: "Security holes in AI-built apps"
pillar: prototype-to-launch
role: cluster
parent: en/ai-app-to-production
primaryKeyword: "vibe coding security"
author: discoverdev
takeaways:
  - "AI app builders ship the features you ask for. Authorization, the rules about who can see and change what, is still your job."
  - "Check four holes first: row-level security, secret keys in browser code, open sign-ups, and unverified payment webhooks."
  - "CVE-2025-48757 showed what missing row-level security can expose: emails, phone numbers, payment status and API keys."
  - "Each check below takes about five minutes. Fixing what you find can take longer, so start before launch week."
tags: [security, supabase, payments]
sources:
  - "https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/"
  - "https://docs.lovable.dev/features/security"
  - "https://supabase.com/docs/guides/database/postgres/row-level-security"
  - "https://supabase.com/docs/guides/database/database-advisors"
  - "https://supabase.com/docs/guides/api/api-keys"
  - "https://supabase.com/docs/guides/auth/general-configuration"
  - "https://supabase.com/docs/guides/deployment/going-into-prod"
  - "https://docs.stripe.com/keys-best-practices"
  - "https://docs.stripe.com/webhooks"
  - "https://docs.stripe.com/checkout/fulfillment"
  - "https://cvemon.intruder.io/cves/CVE-2025-48757"
  - "https://www.superblocks.com/blog/lovable-rls-breach"
publishedAt: 2026-10-16
updatedAt: 2026-10-16
faqs: []
relatedService: review
related: ["en/ai-app-to-production", "en/lovable-launch-checklist", "en/fix-or-rebuild-ai-app"]
draft: false
---

The AI ships what you asked for. It does not ship authorization.

That is our view, and it explains most security holes in AI-built apps. Authorization means the rules about who can see and change what. You asked for a sign-up page, a dashboard and a checkout. The tool built them. You probably did not ask "make sure user A can never read user B's data", so nobody checked it.

This is not a knock on the tools. Lovable, Bolt, v0 and Cursor build real apps fast, and we use AI tools in our own work. But the holes below show up whatever tool wrote the code, and they are easy to miss because the app looks fine from the outside.

This guide names the common holes and shows how to check each one in about five minutes. It is part of our founder's guide to [taking an AI-built app to production](/insights/ai-app-to-production), which covers fix or rebuild, costs and ownership.

## Is a vibe-coded app secure by default?

No. No app is secure by default, however it was built. Vibe coding means building an app by describing it to an AI tool. The tool builds what you describe. Security depends on rules you may not have described: who can read each record, which keys stay on the server, and who may sign up or pay.

Broken access control, where users can reach data or actions they should not, is the top risk in the [OWASP Top 10 for 2025](https://top10.owasp.org/2025/A01_2025-Broken_Access_Control/). OWASP is an open security community, and its list is a common reference for web risks. Its examples include opening someone else's account by changing an ID, and acting as an admin without being one.

The tool makers say this plainly too. Lovable's [security docs](https://docs.lovable.dev/features/security) say that you are responsible for making sure your app meets the security needs of its use case. They also say: "Misconfigured RLS rules are a common cause of data leaks."

So the honest answer is: your app may be fine, but you do not know until you check. The next five sections cover the holes worth checking first.

## Is row-level security on for every table?

It should be, for every table that holds user data. **Row Level Security (RLS)** is a database feature that decides, row by row, which records each user can read or change. Many AI-built apps use Supabase, and in those apps RLS is often the only thing standing between one user and everyone else's data.

Supabase's [RLS guide](https://supabase.com/docs/guides/database/postgres/row-level-security) says to enable RLS on every table in an exposed schema. It warns that a table in an exposed schema without RLS is "readable and writable by any role with a grant on it". In plain words: anyone with your project's public address and key may be able to read or change it.

RLS being on is step one. The rules, called **policies**, matter just as much. When RLS is on with no policies, Supabase blocks access through the public key until you add policies. A policy that says "allow everyone" is as open as having no RLS at all. A good policy usually compares the row's owner to the signed-in user. Supabase gives you `auth.uid()` for this: it returns the ID of the user making the request.

**How to check in five minutes:**

1. Open your Supabase dashboard and go to the **Security Advisor**. It runs a check called `rls_disabled_in_public` that flags public tables with RLS off ([Supabase advisors](https://supabase.com/docs/guides/database/database-advisors)).
2. Or run this in the SQL editor. Any row showing `false` needs attention:

```sql
select tablename, rowsecurity
from pg_tables
where schemaname = 'public';
```

3. Create two test accounts. Sign in as the first and create a record. Sign in as the second and try to open that record, for example by changing its ID in the address bar.

One more trap: where does a user's role live? If the role ("admin", "member") sits in a table that users can update for their own row, a normal user may be able to make themselves an admin. Try changing your own role as a normal user. It should fail.

## Are any secret keys in your front-end code?

There should be none. Front-end code runs in the user's browser, so anyone can read it. Publishable keys are made for that and are safe to show. Secret keys are not. A secret key in the browser hands your full database or payment account to anyone who opens the page and looks.

Two examples from the docs:

- **Supabase.** The secret key bypasses every RLS policy you have. Supabase says it belongs only in backend code, never in a browser, a shipped app or source control ([Supabase API keys](https://supabase.com/docs/guides/api/api-keys)). Publishable keys are safe to expose, because they only reach what RLS allows.
- **Stripe.** Secret keys are account credentials, like a username and password. Publishable keys are safe in web pages, but secret keys must stay on your server. Stripe adds that bad actors scan public code for keys all the time ([Stripe key practices](https://docs.stripe.com/keys-best-practices)).

AI provider keys, such as an OpenAI key, follow the same rule. If your app calls the AI provider straight from the browser, the key is visible, and anyone can run up your bill.

**How to check in five minutes:**

1. Open your live site in Chrome. Open the developer tools, go to the **Sources** tab, and search all files.
2. Search for `sk_live`, `sk_test` and `sb_secret`. Also search for your AI provider's key prefix.
3. Check your environment settings. In most Vite and Next.js projects, variables that start with `VITE_` or `NEXT_PUBLIC_` are built into browser code. A secret key should never have that prefix.

If you find a secret key, treat it as exposed. Stripe says to rotate an exposed key right away, even if you are not sure anyone saw it. Supabase's guide says to fix the cause of the leak first, create a new key, switch every part of your app to it, and only then delete the old one.

## Who can sign up, and is email verified?

Decide who should be able to sign up, then make the settings match. Many apps leave sign-up open to anyone, with no email check. That lets people create accounts with addresses they do not own, and it lets bots in. If your app is invite-only in your head but open in practice, you have a hole.

In Supabase, two settings matter ([Supabase auth settings](https://supabase.com/docs/guides/auth/general-configuration)):

- **Allow new users to sign up.** If this is off, only existing users can sign in.
- **Confirm email.** If this is on, users must confirm their email before their first sign-in.

Supabase's [production checklist](https://supabase.com/docs/guides/deployment/going-into-prod) tells you to enable email confirmations and to use your own email server (custom SMTP) for sign-up emails. It also covers rate limits on sign-in attempts.

**How to check in five minutes:**

1. Sign up with a fresh email address. Do not click the confirmation link. Can you still sign in? If yes, email is not verified.
2. As that new user, type the address of an admin page straight into the browser. Hidden buttons are not security. The check must happen on the server or in the database.
3. Look at your user list for accounts you do not recognise.

## Are payment webhooks verified on the server?

They must be. A **webhook** is a message one service sends to your server when something happens, such as Stripe telling your app a payment succeeded. If your server does not verify that the message really came from Stripe, anyone can send a fake "payment succeeded" message and get what they did not pay for.

Stripe's [webhook guide](https://docs.stripe.com/webhooks) is clear on four points:

- **Verify the signature.** Every event carries a `Stripe-Signature` header. Your server checks it with the endpoint's signing secret, which starts with `whsec_`. Without this, an attacker could send fake events to fulfil orders or grant access.
- **Expect duplicates.** The same event can arrive more than once. Log the event IDs you have processed and skip repeats.
- **Do not rely on order.** Stripe does not promise events arrive in the order they happened.
- **Reply fast.** Return a success code before doing slow work, or the delivery may time out and retry.

There is a quieter version of this hole. Some apps mark an order as paid when the customer lands on the "thank you" page. Stripe's [fulfilment guide](https://docs.stripe.com/checkout/fulfillment) says you cannot rely on that page alone, because a customer can pay and then lose their connection before it loads. Worse, if the browser writes "paid" to the database, a user may be able to write it too.

**How to check in five minutes:**

1. Ask your developer, or search your server code, for the signature check. In Stripe's libraries it is often a call named `constructEvent`.
2. In Stripe's Workbench, open **Webhooks** and look at **Event deliveries**. Failed deliveries mean your server is missing events.
3. Find where your app sets an order or subscription to "paid". It should happen on the server, after a verified webhook.

## What did CVE-2025-48757 show?

It showed what missing RLS can expose at scale. CVE-2025-48757 is a public security record about insufficient RLS policies in Lovable through April 15, 2025. The record says remote attackers without an account could read or write database tables of generated sites. It has a critical score of 9.3. Lovable disputes the record.

Here is what the public sources say.

- **The record.** The CVE entry describes insufficient RLS policies that allowed unauthenticated read and write access to database tables of generated sites. Lovable, the supplier, disputes it and says each customer is responsible for protecting their own app's data ([CVE record on Intruder's cvemon](https://cvemon.intruder.io/cves/CVE-2025-48757)).
- **The scale.** According to [Superblocks](https://www.superblocks.com/blog/lovable-rls-breach), a researcher's follow-up scan found "303 endpoints across 170 projects" without proper RLS.
- **The data.** Superblocks lists exposed usernames and emails, phone numbers, payment and subscription status, and API keys.
- **The timeline.** The researcher reported the issue to Lovable on March 21, 2025. Lovable released a security scan with Lovable 2.0 on April 24, 2025. The CVE was published at the end of May 2025.
- **The scan's limit.** Superblocks notes that the first scan checked whether an RLS policy existed, not whether it blocked unwanted access.

Two lessons follow. First, this was not a clever attack. It was missing or loose data rules, the first hole in this guide. Second, "a policy exists" is not the same as "the policy is right". Only a test with two real accounts, or a person reading the rules against your business, tells you that.

Not sure where your app stands? [Take the 3-minute launch check.](/launch-check)

## How do you check all of this before launch?

Run the five-minute checks above, then write down what you find. The table puts them in one place, with a rough guide to how big each fix is. Fix effort depends on your app, so treat it as a starting point, not a quote. Anything marked "rotate today" should not wait for launch.

| Hole | How to check (about 5 minutes) | Fix effort (rough guide) |
|---|---|---|
| RLS off on a table | Supabase Security Advisor, or the SQL query above | Small per table, once you know who should see what |
| Policies too loose | Two test accounts; try to open the other's records | Small to medium |
| Users can change their own role | Try to update your own role as a normal user | Medium |
| Secret key in browser code | Search your live site's files for `sk_live`, `sk_test`, `sb_secret` | Small to move; rotate the key today |
| AI provider key in browser | Search for the key prefix; check whether AI calls go through your server | Medium: needs a server function |
| Open sign-up, no email check | Sign up with a fresh address and skip the confirmation link | Small: a setting |
| Admin pages reachable | Type an admin address as a normal user | Medium |
| Webhook not verified | Look for the signature check in server code | Small to medium |
| Repeat events not handled | Look for a log of processed event IDs | Small to medium |
| "Paid" set from the browser | Find where the paid status is written | Medium |

If every row passes, you have covered the holes in this guide. If some fail, you now have a specific list, which is far better than a vague worry.

Some founders want a second pair of eyes before real users arrive. That is what DiscoverDev's [Launch-Ready Review](/launch-ready) is for. Senior engineers review your app with read-only access in about 5 working days. You get a written report, a ranked fix list, a keep, fix or replace verdict, and a fixed quote for the fixes. The fee is fixed, quoted after a free 30-minute call, and credited to the fix. No useful findings, no charge: if we find no issue we rate medium severity or higher, you pay nothing.

If you built with Lovable, the [Lovable launch checklist](/insights/lovable-launch-checklist) adds the items beyond security: backups, payments, code ownership and accounts.

Security holes are only one part of getting ready for real users. For the full path, including when to fix and when to rebuild, read our guide to [taking an AI-built app to production](/insights/ai-app-to-production).
