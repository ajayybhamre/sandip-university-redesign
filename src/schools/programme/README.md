# Programme pages

`/schools/:school/:programme` is built from three parts, chosen in `ProgrammePage.jsx`:

| Part | File | Job |
|---|---|---|
| 1. Hero | `ProgrammeHero.jsx` | Banner (title + description) and the quick-facts strip |
| 2. Layout | `ProgrammeLayout.jsx` + `ProgrammeSidebar.jsx` | Sidebar on the left, active section on the right. Active section is kept in the URL hash (`#fees`) |
| 3. Sections | `sections/*.jsx` | One component per section: Overview, Syllabus, Outcomes, Fees, Labs, Achievement, Career, Board |

Shared pieces (lists, cards, tables, buttons) are in `ui/blocks.jsx`.

## Where the content comes from

Only from the programme's own file, e.g. `SOET/data/programmeContent/aerospace-engineering.js`.
Nothing is filled in for you: a section that is not in the file is not shown, and sections
appear in the order they are written in the file. A programme with no file shows a short
"details are being added" message.

```js
export default {
  hero: { tagline: "...", image: bannerImg, facts: [{ label: "Duration", value: "4 Years" }] }, // optional
  overview: { body: "...", items: ["..."] },
  syllabus: { body: "...", links: [{ label: "Semester III", url: "https://..." }] },
  outcomes: { body: "...", groups: [{ heading: "PEOs", items: ["..."] }], cta: { label: "Download COs", url: "https://..." } },
  fees:     { body: "...", table: { columns: ["Year", "Fee"], rows: [["1", "..."]] }, cta: "Contact Admissions" },
  labs:     { body: "...", items: ["Lab one", "Lab two"] },
  achievement: { groups: [...] },
  career:   { body: "...", cards: [{ title: "Role", description: "..." }], items: ["Sector"] },
  board:    { body: "...", table: { columns: [...], rows: [[...]] } },
};
```

Fields a section understands: `heading`, `body`, `items`, `groups`, `cards`, `links`, `table`, `cta`.
`cta` as a string opens `/contact`; as `{ label, url }` it opens that link. A `url` of `"#"`
is shown as "Coming soon" instead of a dead link.

## Adding a section only one school needs (no code)

```js
clinicalTraining: { title: "Clinical Training", body: "...", items: ["..."] },
```

Any key that is not one of the eight standard ones uses `GenericSection`. Add `type: "fees"`
(or any standard key) to reuse that layout under a different name, and `title` / `icon` to
change the sidebar label and icon for that programme.

## Using a different component for one school

Edit `schoolProfiles.js`. Example: give pharmacy its own labs layout and sidebar heading:

```js
import PharmacyLabsSection from "./sections/PharmacyLabsSection";

const schoolProfiles = {
  pharma: {
    sidebarTitle: "Pharmacy",
    sections: { labs: { Component: PharmacyLabsSection, title: "Practical Facilities" } },
    // Hero: PharmacyHero,   // replace the whole hero if needed
  },
};
```

## Adding a new standard section type

1. Create `sections/<Name>Section.jsx` (copy `GenericSection.jsx` and reorder the blocks).
2. Register it in `sections/index.js`.
