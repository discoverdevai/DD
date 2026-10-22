// Sets the locale of the page being rendered (07 §8), so t() and copy() answer in that language without the locale being
// passed through every component. Runs at build time for every static page (Astro middleware docs). Safe because the
// build renders one page at a time (build.concurrency 1, no experimental parallelPrerender): do not turn either on.
import { defineMiddleware } from 'astro:middleware';
import { localeOf } from './i18n/locales';
import { setLocale } from './i18n/t';

export const onRequest = defineMiddleware((context, next) => {
  setLocale(localeOf(context.currentLocale));
  return next();
});
