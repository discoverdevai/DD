// Locale-aware page copy (07 §8, docs/plan/arabic-version.md §3). Components call copy() inside their frontmatter and get
// the modules for the page being rendered. Arabic modules are checked against the English shape (types.ts) and returned
// with the English types, so enum-like fields (keys, marks, icons) keep their literal types for the components.
import { getLocale } from '../../i18n/t';
import { home as enHome } from './en/home';
import { delivery as enDelivery } from './en/delivery';
import * as enProjects from './en/projects';
import { home as arHome } from './ar/home';
import { delivery as arDelivery } from './ar/delivery';
import * as arProjects from './ar/projects';

const en = { home: enHome, delivery: enDelivery, projects: enProjects, reviewsNote: undefined as string | undefined };
type Copy = typeof en;
const ar: Copy = {
  home: arHome as unknown as typeof enHome,
  delivery: arDelivery as unknown as typeof enDelivery,
  projects: arProjects as unknown as typeof enProjects,
  reviewsNote: arHome.reviewsNote,
};

export const copy = (): Copy => (getLocale() === 'ar' ? ar : en);
