// Client logos for the home "Who we've built for" strip (03 §2A.3). Files live in /assets/clients (outside
// public/, so nothing ships unless the strip imports it). D-05: a logo renders only when `consent` records the client's
// written OK (and, for CTC, the clinician's). `replaces` = the anonymized line dropped once the logo shows.
// LOGO_MOCK=1 renders every candidate for a local preview build only; never deploy a mock build.
export interface ClientLogo {
  id: string;
  name: string;
  file: string;
  consent: string | null; // e.g. 'D-05 · email 2026-10-20'
  replaces?: string;
  fit?: 'cover' | 'contain';
}

export const clientLogos: readonly ClientLogo[] = [
  { id: 'edulens', name: 'EduLens', file: 'edulens.png', consent: 'D-05 · logo approved by Mohamed in chat, 2026-10-16', replaces: 'EdTech AI platform · Egypt' },
  { id: 'upscend', name: 'Upscend', file: 'upscend.png', consent: 'D-05 · logo approved by Mohamed in chat, 2026-10-16', replaces: 'B2B learning platform · UK' },
  { id: 'arheb', name: 'Arheb', file: 'arheb.png', consent: 'D-05 · logo approved by Mohamed in chat, 2026-10-16', replaces: 'Smart ride-sharing data and ML · Saudi Arabia' },
  { id: 'nile-support', name: 'Nile Support', file: 'nile-support.png', consent: 'D-05 · logo approved by Mohamed in chat, 2026-10-16', replaces: 'AI call operations · USA' },
  { id: 'biobank', name: 'BioBank', file: 'biobank.png', consent: 'D-05 · logo approved by Mohamed in chat, 2026-10-16', replaces: 'Health app for lab reports' },
  { id: 'jumlaty', name: 'Jumlaty', file: 'jumlaty.png', consent: 'D-05 · logo approved by Mohamed in chat, 2026-10-16', replaces: 'Restaurant procurement ML · Saudi Arabia' },
  { id: 'rushr', name: 'Rushr', file: 'rushr.png', consent: 'D-05 · logo approved by Mohamed in chat, 2026-10-16' }, // D-07 lifted Oct 21 (Mohamed): the case is shown too
  { id: 'zest', name: 'Zest', file: 'zest.png', consent: 'D-05 · logo approved by Mohamed in chat, 2026-10-16' },
  { id: 'ctc', name: 'Continuum Therapy Collective', file: 'ctc.webp', consent: null /* hidden until the therapist consents (decision A2, Oct 18) */, fit: 'contain' }, // + clinician consent
  { id: 'yawmy-care', name: 'Yawmy Care', file: 'yawmy-care.png', consent: 'D-05 · logo approved by Mohamed in chat, 2026-10-16' }, // own product; name to confirm
];
