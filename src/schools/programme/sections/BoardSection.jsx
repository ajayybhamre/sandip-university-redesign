import { Body, BulletList, DataTable, GroupList, SectionShell } from "../ui/blocks";

export default function BoardSection({ data, title, programme }) {
  return (
    <SectionShell eyebrow={programme.title} heading={data.heading || title}>
      <Body>{data.body}</Body>
      <DataTable table={data.table} />
      <GroupList groups={data.groups} />
      <BulletList items={data.items} />
    </SectionShell>
  );
}
