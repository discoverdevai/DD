// Share-image registry (05 §6: og:image 1200×630, build-time generated). One card per indexable page, built from the
// page's own eyebrow and H1, so the image never says anything the page does not. Articles are added from the insights
// collection in src/pages/og/[...slug].png.ts. Used by that endpoint and by BaseLayout to pick each page's og:image.
import { home } from '../content/copy/en/home';
import { validate } from '../content/copy/en/validate';
import { build } from '../content/copy/en/build';
import { scale } from '../content/copy/en/scale';
import { launchReady } from '../content/copy/en/launch-ready';
import { partners } from '../content/copy/en/partners';
import { about } from '../content/copy/en/about';
import { howWeWork } from '../content/copy/en/how-we-work';
import { work, caseStudy } from '../content/copy/en/work';
import { insights } from '../content/copy/en/insights';
import { quizCopy } from '../content/copy/en/quiz';
import { book } from '../content/copy/en/book';
import { t } from '../i18n/t';

export type OgCard = { eyebrow: string; title: string }; // type alias (not interface) so it satisfies GetStaticPaths props

export const OG_PAGES: Record<string, OgCard> = {
  '/': { eyebrow: home.hero.pill, title: home.hero.h1 },
  '/validate': { eyebrow: validate.hero.eyebrow, title: validate.hero.h1 },
  '/build': { eyebrow: build.hero.eyebrow, title: build.hero.h1 },
  '/scale': { eyebrow: scale.hero.eyebrow, title: scale.hero.h1 },
  '/launch-ready': { eyebrow: launchReady.hero.eyebrow, title: launchReady.hero.h1 },
  '/partners': { eyebrow: partners.hero.eyebrow, title: partners.hero.h1 },
  '/about': { eyebrow: t('nav.about'), title: about.hero.h1 },
  '/how-we-work': { eyebrow: howWeWork.hero.eyebrow, title: howWeWork.hero.h1 },
  '/work': { eyebrow: t('nav.work'), title: work.h1 },
  '/work/edtech-ai-agents': { eyebrow: t('nav.work'), title: caseStudy.h1 },
  '/insights': { eyebrow: t('nav.insights'), title: insights.h1 },
  '/launch-check': { eyebrow: t('cta.launchCheck'), title: quizCopy.h1 },
  '/book': { eyebrow: t('footer.book'), title: book.h1 },
};

/** Published path of a route's share image: / → /og/home.png, /work/x → /og/work/x.png. */
export const ogPath = (route: string) => `/og/${route === '/' ? 'home' : route.replace(/^\//, '')}.png`;
