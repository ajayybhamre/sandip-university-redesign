import { BulletList, CardGrid, Callout, SectionShell } from "../ui/blocks";

export default function OverviewSection({ data, programme }) {
  return (
    <SectionShell eyebrow="Overview" heading={data.heading || programme.title}>
      <Callout>{data.body}</Callout>
      <BulletList items={data.items} />
      <CardGrid cards={data.cards} />
    </SectionShell>
  );
}
