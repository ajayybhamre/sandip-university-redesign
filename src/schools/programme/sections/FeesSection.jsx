import { Body, BulletList, CtaButton, DataTable, GroupList, SectionShell } from "../ui/blocks";

export default function FeesSection({ data, title, programme }) {
  return (
    <SectionShell eyebrow={programme.title} heading={data.heading || title}>
      <Body>{data.body}</Body>
      <DataTable table={data.table} />
      <GroupList groups={data.groups} />
      <BulletList items={data.items} />
      <CtaButton cta={data.cta} />
    </SectionShell>
  );
}
