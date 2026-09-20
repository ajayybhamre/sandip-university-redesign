import { Body, BulletList, CtaButton, DataTable, LinkGrid, SectionShell } from "../ui/blocks";

export default function SyllabusSection({ data, title, programme }) {
  return (
    <SectionShell eyebrow={programme.title} heading={data.heading || title}>
      <Body>{data.body}</Body>
      <LinkGrid links={data.links} />
      <DataTable table={data.table} />
      <BulletList items={data.items} />
      <CtaButton cta={data.cta} />
    </SectionShell>
  );
}
