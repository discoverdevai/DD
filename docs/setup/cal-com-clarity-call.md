# Cal.com setup: the Clarity call (copy and paste)

For V1.0 the site offers one booking: the free clarity call. Everything below comes from `context/03-copy.md` §1.5 and §14, `04` §7.3, `07` §10 and decision D-42. No promise is made that `09` does not support (no reply time, no WhatsApp, no quote deadline).

## 0. Account
1. Create the account at cal.com with the company email (hello@discoverdev.ai or Mohamed's work email). Turn on 2FA.
2. Username: `discoverdev` (or the closest free one). **This is the value for `PUBLIC_CAL_USERNAME`.**
3. Profile name: DiscoverDev. Profile picture: the DiscoverDev mark from `public/brand/`. Time zone: Africa/Cairo (GMT+2). Language: English.
4. Settings > Appearance: brand colour `#1240BE`, light theme.
5. Connect a calendar (the one that should block busy times) and set "add new bookings to" that calendar.

## 1. Event type: Clarity call
| Setting | Value |
|---|---|
| Title | Clarity call |
| URL / slug | `clarity-call` (exact; the site links to `cal.com/<username>/clarity-call`) |
| Duration | 30 minutes |
| Price | Free |
| Location | Cal Video (no account needed for the guest). Add Google Meet later if preferred. |
| Booking limits | Max 4 per day (adjust to the team) |
| Minimum notice | 12 hours |
| Buffer | 10 minutes before, 10 minutes after |
| Slot interval | 30 minutes |
| Requires confirmation | Off (instant booking) |
| Hidden | No |

### Description (paste as is; markdown works)
```
A 30-minute call to hear what you're building. No pitch. You leave with a next step, even if we're not the right fit.

On the call:
- We ask what you have, or plan to build, and what worries you.
- We tell you plainly what we'd do, and what we wouldn't.
- You leave with a next step. We send a written summary and, if it fits, a fixed quote.

Who you'll meet: a senior member of our product team.

Calls run in US and Gulf hours. If no time suits you, email hello@discoverdev.ai.

We use your answers only to prepare for your call. Privacy notice: https://discoverdev.ai/privacy
```

### Booking questions (this order; labels exactly as written)
| # | Label | Type | Required | Options |
|---|---|---|---|---|
| 1 | Your name | Name (built in) | Yes | |
| 2 | Email | Email (built in) | Yes | |
| 3 | Where are you now? | Select | Yes | I have an idea · I have a prototype or early MVP · My product is live · I run a software house or agency |
| 4 | What do you need most? | Select | Yes | Test an idea · Get my app ready to launch · Build a product · Grow my team · Not sure yet |
| 5 | How did you hear about us? | Select | Yes | Google · ChatGPT or another AI assistant · LinkedIn · Clutch · Referral · Reddit · Other |

Do not add: phone, budget, company size, free-text boxes, "additional notes" (turn the built-in notes field off). Add the guest list option off.

Advanced: "Add the answers to the calendar event description" on, so the team sees them in the invite.

### After the booking
- **Redirect on booking:** leave OFF for the first dry run. If the site's `booking_completed` event still fires with it ON, set it to `https://discoverdev.ai/book/confirmed` (see `07` §10.4 step 6).
- **Confirmation email subject:** Your DiscoverDev clarity call is booked
- **Confirmation email text** (Workflows > "When event is booked" > send email to attendee):
```
Hi {ATTENDEE_FIRST_NAME},

Your 30-minute clarity call is booked for {EVENT_DATE_YYYY-MM-DD} at {EVENT_TIME} ({TIMEZONE}).

What to expect: we listen, ask questions and tell you plainly what we'd do. No pitch. You leave with a next step, and a written summary from us afterwards.

Need a different time? Use the reschedule link in this email. Questions before the call? Reply to this email or write to hello@discoverdev.ai.

The DiscoverDev team
```
- **Reminders** (Workflows): email 24 hours before and 1 hour before. Text for both:
```
Hi {ATTENDEE_FIRST_NAME}, a reminder of your DiscoverDev clarity call on {EVENT_DATE_YYYY-MM-DD} at {EVENT_TIME} ({TIMEZONE}). Join link: {LOCATION_URL}. Need another time? Use the reschedule link in your booking email.
```
- **Follow-up** (optional, 2 hours after the call): "Thank you for your time today. A written summary follows from the person you spoke with." Only keep it if someone actually sends the summary.

## 2. Availability (decision D-42; the owner sets the final hours)
Schedule name: DiscoverDev hours. Time zone: Africa/Cairo.
| Days | Hours (Cairo) | Why |
|---|---|---|
| Monday to Thursday | 12:00 to 20:00 | Gulf afternoons and US East mornings (09:00 to 13:00 EST) |
| Sunday | 12:00 to 17:00 | Gulf working week |
| Friday, Saturday | off | |
Add date overrides for public holidays and leave days. Check that "guest sees times in their own time zone" is on (it is by default).

## 3. Second event for testing (hidden)
Title: QA test · slug `qa-test` · 15 minutes · Hidden · same questions as above. Used for the dry run in `07` §10.4. Cancel the test booking afterwards.

## 4. Later releases (do not create yet unless needed)
- V1.2 Launch-Ready Review: slug `review-intro`, 30 minutes, free scoping call. Questions: Your name · Email · App link (optional) · What did you build it with? (Lovable · Bolt · v0 · Cursor or another AI coding tool · A freelancer or agency · My own team · Other) · What's blocking launch? (Security and data · Payments · Speed or scaling · Code quality · Not sure) · How did you hear about us?
- Partner call: slug `partner-call`, 30 minutes. Questions: Your name · Email · Company website · Which model are you looking at? (White-label delivery · Staff augmentation · Not sure yet) · How did you hear about us?

## 5. Connect it to the site
1. In Cloudflare: Workers & Pages > `dd` > Settings > Variables and secrets (build variables) > add `PUBLIC_CAL_USERNAME` = your Cal username. It is public, not a secret.
2. Retry the build so the value is baked into the pages. (Locally: put it in `.env`, which is not committed.)
3. Open `/book`: the calendar should appear. If it does not load within 10 seconds the page shows the email fallback.
4. Dry run (`07` §10.4): book the `qa-test` event, check the PostHog events and `/book/confirmed`, then cancel.

## 6. Checklist
- [ ] Account, 2FA, username, brand colour
- [ ] Event `clarity-call` with the description and 5 questions above
- [ ] Availability and buffers
- [ ] Confirmation email and the two reminders
- [ ] Event `qa-test` (hidden)
- [ ] `PUBLIC_CAL_USERNAME` set in Cloudflare and the site rebuilt
- [ ] Dry-run booking, then cancelled
