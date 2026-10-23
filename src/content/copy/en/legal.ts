// Legal pages: /privacy and /terms (04 §4.13, 05 §1.1). Draft per D-25 from 07 §9.6, §10, §11; Mohamed reads before go/no-go.
// D-08: no legal entity name, no street address, no governing law or jurisdiction. Not legal advice.

/** Inline run: plain text, a link, or a code-formatted name (e.g. a sessionStorage key). Strings carry their own spacing. */
export type Inline = string | { text: string; href: string } | { code: string };
type Rich = readonly Inline[];
type LegalBlock = { p: Rich } | { h3: string } | { ul: readonly Rich[] };
interface LegalSection { id: string; heading: string; blocks: readonly LegalBlock[] }
export interface LegalDoc {
  seo: { title: string; description: string };
  h1: string;
  intro: Rich;
  sections: readonly LegalSection[];
}

const EMAIL = 'hello@discoverdev.ai';
const mail = { text: EMAIL, href: `mailto:${EMAIL}` };

const PRIVACY_LINKS = {
  cloudflare: 'https://www.cloudflare.com/privacypolicy/',
  posthog: 'https://posthog.com/privacy',
  cal: 'https://cal.com/privacy',
  web3forms: 'https://web3forms.com/privacy',
} as const;

export const legalUi = {
  updatedLabel: 'Last updated',
  updated: { text: 'October 21, 2026', iso: '2026-10-21' },
  contents: 'Contents',
} as const;

export const privacy: LegalDoc = {
  seo: {
    title: 'Privacy | DiscoverDev',
    description: 'How DiscoverDev collects, uses and protects personal data from this website, our booking calendar and analytics, plus your rights and how to reach us.',
  },
  h1: 'Privacy notice',
  intro: [
    'This notice explains what personal data DiscoverDev collects through discoverdev.ai, why we collect it, who helps us process it, and the choices you have. If anything here is unclear, email us at ',
    mail,
    '.',
  ],
  sections: [
    {
      id: 'who-we-are',
      heading: 'Who we are',
      blocks: [
        { p: ['DiscoverDev is a product and engineering company with a presence in Texas, USA, and an engineering hub in Alexandria, Egypt. For this website, DiscoverDev decides how and why personal data is used.'] },
        { p: ['You can reach us about anything in this notice at ', mail, '.'] },
      ],
    },
    {
      id: 'short-version',
      heading: 'The short version',
      blocks: [
        {
          ul: [
            ["We use cookieless analytics. We don’t use tracking cookies, and we don’t build profiles of individual visitors."],
            ['We collect personal data only when you give it to us: when you book a call or email us.'],
            ["We don’t sell personal data, and we don’t use it for advertising."],
            ['Cal.com, which runs our booking calendar, may set its own cookies when you book.'],
          ],
        },
      ],
    },
    {
      id: 'what-we-collect',
      heading: 'What we collect and why',
      blocks: [
        { h3: 'When you visit this website' },
        { p: ['We measure how the site is used: which pages are viewed, which buttons are clicked, how people move through booking, and where visits come from, such as the referring website or the campaign tags in a link. We use this to improve the site and to learn which pages help people.'] },
        { p: ["Our analytics are cookieless. They don’t store tracking identifiers on your device, and we have set them up not to create profiles of individual people. We never send names, email addresses or anything you type into our analytics. We look at the results in aggregate, such as page views per day."] },
        { p: ['Like any website, our hosting provider processes your IP address and basic browser details to deliver pages and to protect the site from abuse.'] },
        { h3: 'When you book a call' },
        { p: ['Bookings run on Cal.com. When you book, you give us your name, your email address and your answers to the booking questions, such as what you are building and how you heard about us. The booking also records a few details about how you reached it: the campaign tags in your link (for example utm_source), the button you clicked, and the page you booked from.'] },
        { p: ['We use this to schedule and prepare for the call, to stay in touch about it, and to understand which pages lead to bookings.'] },
        { h3: 'When you email us' },
        { p: ['If you email us, we receive your email address, your name if you include it, and whatever you write. We use it to reply and to keep a record of the conversation.'] },
      ],
    },
    {
      id: 'legal-basis',
      heading: 'Why we are allowed to use it',
      blocks: [
        {
          ul: [
            ['Analytics and site security: our legitimate interest in running, protecting and improving this website. You can object at any time.'],
            ['Bookings and emails: to respond to your request and to take steps you ask for before any agreement with us.'],
          ],
        },
        { p: ['Where a law that applies to you requires your consent for something, we ask for it first.'] },
      ],
    },
    {
      id: 'processors',
      heading: 'Who processes your data for us',
      blocks: [
        { p: ['We use a small number of service providers. They process personal data on our behalf, only to provide their service to us.'] },
        {
          ul: [
            ['Cloudflare hosts this website, protects it from attacks, and provides Cloudflare Web Analytics, which counts visits without cookies. Read the ', { text: 'Cloudflare privacy policy', href: PRIVACY_LINKS.cloudflare }, '.'],
            ['PostHog provides our cookieless product analytics, such as which buttons are clicked and where people leave the booking flow. We use PostHog Cloud EU, so this data is hosted in the European Union. Read the ', { text: 'PostHog privacy policy', href: PRIVACY_LINKS.posthog }, '.'],
            ['Cal.com runs our booking calendar. It stores your booking details and sends confirmations and reminders. Cal.com may set its own cookies inside the booking calendar when you book. Read the ', { text: 'Cal.com privacy policy', href: PRIVACY_LINKS.cal }, '.'],
          ],
        },
        { p: ['Emails you send us are stored with the provider that hosts our email inbox.'] },
      ],
    },
    {
      id: 'transfers',
      heading: 'Where your data is processed',
      blocks: [
        { p: ['Our providers are based in, or process data in, the United States and the European Union, and Cloudflare serves pages from data centers around the world. Our team works from Egypt, and we have a presence in Texas, USA. This means your data may be processed outside the country where you live, including in countries whose data protection laws differ from yours.'] },
        { p: ['Where the law requires it, we rely on the transfer safeguards our providers offer, such as standard contractual clauses. We share only what each provider needs to do its job.'] },
      ],
    },
    {
      id: 'cookies-storage',
      heading: 'Cookies and session storage',
      blocks: [
        { p: ["We don’t use tracking cookies or advertising cookies, and our analytics don’t store identifiers on your device."] },
        { p: ["The site uses your browser’s session storage for a few functional items. Session storage stays on your device, other websites can’t read it, and it is cleared when you close the tab."] },
        {
          ul: [
            [{ code: 'dd_utm' }, ': the campaign tags and referring site from your first page view, so a booking can be credited to the right source.'],
            [{ code: 'entry_cta' }, ': the button you clicked on your way to booking, so we know which pages lead to calls.'],
            [{ code: 'dd_booking' }, ': the type and time of the call you just booked, so the confirmation page can show it and the booking is counted once.'],
          ],
        },
        { p: ["Cal.com may set its own cookies inside the booking calendar when you book. Those cookies are covered by ", { text: "Cal.com’s privacy policy", href: PRIVACY_LINKS.cal }, '.'] },
      ],
    },
    {
      id: 'retention',
      heading: 'How long we keep it',
      blocks: [
        {
          ul: [
            ["Analytics: kept only as long as it helps us understand how the site is used, within our analytics providers' retention limits. It isn’t linked to your name or email address."],
            ['Bookings and emails: kept as long as we need them for the reason you gave them to us, such as preparing for a call or continuing a conversation, then deleted. If you become a client, we keep what our agreement and our legal obligations require.'],
            ['Session storage: cleared when you close the tab.'],
          ],
        },
        { p: ['You can ask us to delete your data sooner.'] },
      ],
    },
    {
      id: 'your-rights',
      heading: 'Your rights',
      blocks: [
        { p: ["Depending on where you live, data protection laws give you rights over your personal data. These laws include the EU and UK General Data Protection Regulation (GDPR), Saudi Arabia’s Personal Data Protection Law (PDPL) and the UAE’s Personal Data Protection Law. In general, you can ask us to:"] },
        {
          ul: [
            ['Tell you what personal data we hold about you and give you a copy'],
            ['Correct data that is wrong or incomplete'],
            ['Delete your data'],
            ['Stop using your data, or limit how we use it, including for analytics'],
            ['Give you your data in a portable format, where the law provides for this'],
            ["Stop relying on your consent, where we asked for it. This doesn’t affect anything we did before you withdrew it."],
          ],
        },
        { p: ['To use any of these rights, email ', mail, " and tell us what you would like. We may ask you to confirm your identity first. We reply within the time the law sets, and we don’t charge for reasonable requests."] },
        { p: ["If you are not happy with how we handled your data, please tell us first so we can put it right. You also have the right to complain to a data protection regulator, such as the authority in your EU country, the Information Commissioner’s Office (ICO) in the UK, the Saudi Data and AI Authority (SDAIA) in Saudi Arabia, or the UAE Data Office in the UAE."] },
      ],
    },
    {
      id: 'security',
      heading: 'How we protect it',
      blocks: [
        { p: ['The site is served over HTTPS. We limit access to personal data to the people who need it for their work, and we use providers with established security practices. No system is perfectly secure, so if you think something is wrong, email us.'] },
      ],
    },
    {
      id: 'children',
      heading: 'Children',
      blocks: [
        { p: ["This website is for founders and businesses. It is not directed at children, and we don’t knowingly collect personal data from anyone under 18. If you think a child has given us personal data, email us and we will delete it."] },
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to this notice',
      blocks: [
        { p: ['We update this notice when our website, our providers or the law change. The date at the top shows when it last changed. When we make a significant change, we will say so on this page.'] },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact',
      blocks: [
        { p: ['Questions or requests about your personal data: ', mail, '.'] },
        { p: ['The rules for using this site are in our ', { text: 'Website terms of use', href: '/terms' }, '.'] },
      ],
    },
  ],
};

export const terms: LegalDoc = {
  seo: {
    title: 'Terms | DiscoverDev',
    description: 'The terms that apply when you use discoverdev.ai: content ownership, acceptable use, third-party links and limits of liability, in plain language.',
  },
  h1: 'Website terms of use',
  intro: ["These terms apply when you use discoverdev.ai, the website of DiscoverDev. By using the site, you agree to them. If you don’t agree, please don’t use the site."],
  sections: [
    {
      id: 'using-the-site',
      heading: 'Using this website',
      blocks: [
        { p: ["You can browse the site and book a call for free. You don’t need an account."] },
        { p: ["We may change, pause or remove any part of the site at any time. We work to keep it available, but we can’t promise it will always be online or free of errors."] },
      ],
    },
    {
      id: 'our-services',
      heading: 'Our services have their own agreement',
      blocks: [
        { p: ['These terms cover the website only. When you hire DiscoverDev, for a review, a build, a dedicated team or any other engagement, that work is governed by its own written agreement. If that agreement and these terms disagree, the agreement wins.'] },
        { p: ['Descriptions, timelines and prices of services on this site are a general guide. What applies to your project is what we agree in writing.'] },
      ],
    },
    {
      id: 'content',
      heading: 'Who owns the content',
      blocks: [
        { p: ['The text, design, graphics, code and logos on this site belong to DiscoverDev or to those who licensed them to us. You may read and share pages for your own use, link to any page, and quote short passages with a credit and a link back.'] },
        { p: ["Please don’t copy large parts of the site, republish it as your own, or use our name or logo in a way that suggests we endorse you or your product."] },
        { p: ['Client names, product names and trademarks mentioned on the site belong to their owners. Reviews published on Clutch belong to Clutch and the reviewers.'] },
      ],
    },
    {
      id: 'acceptable-use',
      heading: 'Acceptable use',
      blocks: [
        { p: ["When you use the site, please don’t:"] },
        {
          ul: [
            ['Break the law, or help anyone else break it'],
            ['Try to get unauthorized access to the site, its hosting or the services behind it, or interfere with how they work'],
            ['Overload the site, for example with automated requests at a rate that slows it down for others'],
            ['Send spam, malicious code or false information through our booking calendar or email'],
            ["Book calls you don’t intend to attend, or pretend to be someone else"],
          ],
        },
        { p: ['If you find a security problem on this site, please email ', mail, ' instead of testing it further. We appreciate reports made in good faith.'] },
        { p: ['We may block access for anyone who breaks these rules.'] },
      ],
    },
    {
      id: 'third-parties',
      heading: 'Third-party links and services',
      blocks: [
        { p: ["The site links to and uses services run by others. Booking runs on Cal.com, and our client reviews are published on Clutch. When you use those services, their own terms and privacy policies apply. We don’t control them and aren’t responsible for their content, availability or how they handle your data."] },
        { p: ["Links to other websites are there for your convenience. A link doesn’t mean we endorse that website."] },
      ],
    },
    {
      id: 'no-advice',
      heading: 'No professional advice',
      blocks: [
        { p: ['The information on this site, including our examples, is general information based on our experience. It is not a review of your specific product, and they are not legal, security, financial or other professional advice. Before you make decisions about your product, get advice that fits your situation.'] },
      ],
    },
    {
      id: 'liability',
      heading: 'Disclaimers and limits of liability',
      blocks: [
        { p: ["We work to keep the site accurate and up to date, but we provide it as it is and as available. We don’t promise that its content is complete, current or suitable for your purpose, or that the site will be free of errors or harmful code."] },
        { p: ['As far as the law allows, DiscoverDev is not liable for any loss or damage that comes from using this website, from not being able to use it, or from relying on its content. This includes indirect losses such as lost profit, revenue, data or opportunity.'] },
        { p: ["Nothing in these terms limits any liability that can’t be limited by law, or takes away rights you have that can’t be waived."] },
        { p: ['These limits apply to the website only. For our services, liability is set out in the written agreement for that work.'] },
      ],
    },
    {
      id: 'privacy',
      heading: 'Your personal data',
      blocks: [
        { p: ['How we collect and use personal data is explained in our ', { text: 'Privacy notice', href: '/privacy' }, '.'] },
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to these terms',
      blocks: [
        { p: ['We may update these terms from time to time. The date at the top shows when they last changed. If you keep using the site after a change, the updated terms apply.'] },
      ],
    },
    {
      id: 'contact',
      heading: 'Contact',
      blocks: [
        { p: ['Questions about these terms: ', mail, '.'] },
      ],
    },
  ],
};
