import { Body, BulletList, CardGrid, CtaButton, GroupList, LinkGrid, SectionShell } from "../ui/blocks";

// PEO / PO / PSO groups first, then any cards, then the CO download.
export default function OutcomesSection({ data, title, programme }) {
  return (
    <SectionShell eyebrow={programme.title} heading={data.heading || title}>
      <Body>{data.body}</Body>
      <GroupList groups={data.groups} />
      <BulletList items={data.items} />
      <CardGrid cards={data.cards} />
      <LinkGrid links={data.links} />
      <CtaButton cta={data.cta} />
    </SectionShell>
  );
}
