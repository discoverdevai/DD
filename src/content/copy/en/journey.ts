// 03 §6.12: journey stepper shared by /validate, /build and /scale. Stage names, "who" lines and durations reuse §2A.6.
import { home } from './home';

export const journey = {
  label: 'Validate, Build, Scale',
  srLabel: 'Where this service fits',
  current: 'You are here',
  stages: home.engagements.cards.map((c) => ({ key: c.key, title: c.title, who: c.who, duration: c.meta[0] })),
} as const;
