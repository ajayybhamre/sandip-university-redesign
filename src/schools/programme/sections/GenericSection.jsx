import { Body, BulletList, CardGrid, CtaButton, DataTable, GroupList, LinkGrid, SectionShell } from "../ui/blocks";

// Fallback for any section key that has no dedicated component.
// Renders whichever fields exist: body, items, groups, cards, links, table, cta.
// Use it for school-specific sections, e.g. in a programme file:
//   clinicalTraining: { type: "generic", title: "Clinical Training", body: "...", items: [...] }
export default function GenericSection({ data, title, programme }) {
  return (
    <SectionShell eyebrow={programme.title} heading={data.heading || title}>
      <Body>{data.body}</Body>
      <BulletList items={data.items} />
      <GroupList groups={data.groups} />
      <CardGrid cards={data.cards} />
      <LinkGrid links={data.links} />
      <DataTable table={data.table} />
      <CtaButton cta={data.cta} />
    </SectionShell>
  );
}
