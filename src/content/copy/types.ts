// A copy module in another locale has the same shape as the English one, with any text (07 §8): `Widen` turns the
// English string literals into `string`, so an Arabic module type-checks against the English shape and a missing key
// fails the build. Lists become plain lists of the same item shapes, so a locale may order items differently (the Arabic FAQ
// leads with the Gulf question).
export type Widen<T> = T extends string
  ? string
  : T extends number | boolean
    ? T
    : T extends readonly unknown[]
      ? readonly Widen<T[number]>[]
      : T extends object
        ? { readonly [K in keyof T]: Widen<T[K]> }
        : T;
