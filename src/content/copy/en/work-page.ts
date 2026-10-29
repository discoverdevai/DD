// The lean /work page (Oct 29, plan step 7): only the lines the page shows, so /ar/work can mirror it. The sections
// (case, chapters, project rows, reviews) read their own copy. Case-study and share-image text stays in ./work.
import { work } from './work';
export const workPage = {
  seo: work.seo,
  h1: work.h1,
  intro: work.intro,
  moreTitle: work.more.title,
  band: work.band,
};
