import { Body, BulletList, CardGrid, GroupList, SectionShell } from "../ui/blocks";

// Job roles (cards) first, then the industries / sectors (items).
// Add `cardsHeading` / `itemsHeading` in the programme file to label them.
export default function CareerSection({ data, title, programme }) {
  return (
    <SectionShell eyebrow={programme.title} heading={data.heading || title}>
      <Body>{data.body}</Body>
      <CardGrid cards={data.cards} heading={data.cardsHeading} />
      <GroupList groups={data.groups} />
      <BulletList items={data.items} heading={data.itemsHeading} />
    </SectionShell>
  );
}
