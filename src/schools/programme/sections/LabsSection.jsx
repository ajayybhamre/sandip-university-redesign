import { Body, CardGrid, GroupList, LinkGrid, SectionShell } from "../ui/blocks";

// Labs are shown as a grid of cards. `items` (plain strings) and `cards` both work.
export default function LabsSection({ data, title, programme }) {
  return (
    <SectionShell eyebrow={programme.title} heading={data.heading || title}>
      <Body>{data.body}</Body>
      <CardGrid cards={data.cards || data.items} />
      <GroupList groups={data.groups} />
      <LinkGrid links={data.links} />
    </SectionShell>
  );
}
