// Locale-aware page copy (07 §8, docs/plan/arabic-version.md §3). Components call copy() inside their frontmatter and get
// the modules for the page being rendered. Arabic modules are checked against the English shape (types.ts) and returned
// with the English types, so enum-like fields (keys, marks, icons) keep their literal types for the components.
import { getLocale } from '../../i18n/t';
import { home as enHome } from './en/home';
import { delivery as enDelivery } from './en/delivery';
import * as enProjects from './en/projects';
import { book as enBook } from './en/book';
import { notFound as enNotFound } from './en/not-found';
import * as enLegal from './en/legal';
import { build as enBuild } from './en/build';
import { scale as enScale } from './en/scale';
import { howWeWork as enHowWeWork } from './en/how-we-work';
import { home as arHome } from './ar/home';
import { delivery as arDelivery } from './ar/delivery';
import * as arProjects from './ar/projects';
import { book as arBook } from './ar/book';
import { notFound as arNotFound } from './ar/not-found';
import * as arLegal from './ar/legal';
import { build as arBuild } from './ar/build';
import { scale as arScale } from './ar/scale';
import { howWeWork as arHowWeWork } from './ar/how-we-work';

const en = { home: enHome, delivery: enDelivery, projects: enProjects, book: enBook, notFound: enNotFound, legal: enLegal, build: enBuild, scale: enScale, howWeWork: enHowWeWork };
type Copy = typeof en;
const ar: Copy = {
  home: arHome as unknown as typeof enHome,
  delivery: arDelivery as unknown as typeof enDelivery,
  projects: arProjects as unknown as typeof enProjects,
  book: arBook as unknown as typeof enBook,
  notFound: arNotFound as unknown as typeof enNotFound,
  legal: arLegal as unknown as typeof enLegal,
  build: arBuild as unknown as typeof enBuild,
  scale: arScale as unknown as typeof enScale,
  howWeWork: arHowWeWork as unknown as typeof enHowWeWork,
};

export const copy = (): Copy => (getLocale() === 'ar' ? ar : en);
