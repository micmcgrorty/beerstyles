# BJCP 2021 style data

Source: the [BJCP 2021 Beer Style Guidelines](https://www.bjcp.org/beer-styles/), text © Beer Judge Certification Program. Transcribed as JSON in [ascholer/bjcp-styleview](https://github.com/ascholer/bjcp-styleview) (`styles.json`), which covers every beer style in categories 1–34. That repository doesn't publish a licence; the guideline text itself is BJCP's, as it was for the 2015 data.

- `catalogue.json` holds every category and each style's summary: code, slug, name, overall impression, vital statistics, commercial examples and tags. It's bundled with the app, because the list, search and charts need all of it up front.
- `guidelines/<slug>.json` holds one style's long-form text (aroma, appearance, flavour and so on, plus Specialty IPA's currently defined types and strength classifications). Each file is loaded on demand when its style page opens.

`edition.ts` turns this data into an `Edition`: it adds the 2021 group rules and guideline sections, and loads guideline files. Every style must have a guideline file; `edition.test.ts` checks this, along with category coverage, ordering, statistics for categories 1–26, and the group rules.

## Changes made when converting

- Styles are in BJCP order (the source lists them alphabetically).
- Slugs are made from style names, the same way as for the 2015 data, so styles that kept their name kept their URL.
- Vital statistics are written as ranges ("4.4 - 5.2%"). Styles with no statistics of their own (Kellerbier and most specialty-type styles in 28–34, which vary with their base beer) read "Varies with the base style".
- Category names are re-cased ("Ipa" → "IPA", "Amber And Brown American Beer" → "Amber and Brown American Beer").
- Two misspelled tags are fixed: `bockfamily` → `bock-family`, `dark-lagerfamily` → `dark-lager-family`.
- Runs of whitespace in the text are collapsed.
- Saison's colour is the single range 5–22 SRM given in the source, rather than separate pale and dark ranges.

The five local styles (X1–X5) in some other 2021 transcriptions are not included.
