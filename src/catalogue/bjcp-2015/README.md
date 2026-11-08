# BJCP 2015 style data

Source: the [BJCP 2015 Beer Style Guidelines](https://www.bjcp.org), text © Beer Judge Certification Program.

- `catalogue.json` holds every category and each style's summary: code, slug, name, overall impression, vital statistics, commercial examples and tags. It's bundled with the app, because the list, search and charts need all of it up front.
- `guidelines/<slug>.json` holds one style's long-form text (aroma, appearance, flavour and so on). Each file is loaded on demand when its style page opens.

`edition.ts` turns this data into an `Edition`: it adds the 2015 group rules and guideline sections, and loads guideline files. Every style in the catalogue must have a guideline file; `edition.test.ts` checks this, along with the ABV corrections below and the group rules.

## Corrections to the original dataset

- ABV for International Pale Lager (4.6 - 6.0%), British Golden Ale (3.8 - 5.0%) and Australian Sparkling Ale (4.5 - 6.0%) corrected to the published 2015 figures.
- Lost hyphens/spaces and dropped letters restored in the guideline text.
- Tags normalised (typos fixed, comma-joined tags split, duplicates removed).
