// Preview switches (build-time only). Everything held back for consent (D-05, D-07) appears ONLY in a local preview build
// (`SHOWCASE_MOCK=1` / `LOGO_MOCK=1 npx astro build --outDir dist-mock`), never in the live build. One place, so pages
// and components do not read `process.env` themselves.
const env = typeof process !== 'undefined' ? process.env : ({} as Record<string, string | undefined>);
export const SHOWCASE_PREVIEW = env.SHOWCASE_MOCK === '1';
export const LOGO_PREVIEW = env.LOGO_MOCK === '1';
/** Chapters on the home page: the live set, plus the held Upscend chapter in a preview build. */
export const HOME_CHAPTERS: readonly string[] = SHOWCASE_PREVIEW ? ['njwar', 'yawmy', 'rushr', 'upscend'] : ['njwar', 'yawmy', 'rushr'];
