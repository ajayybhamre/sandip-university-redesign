import { Body, BulletList, CardGrid, GroupList, SectionShell } from "../ui/blocks";

export default function AchievementSection({ data, title, programme }) {
  return (
    <SectionShell eyebrow={programme.title} heading={data.heading || title}>
      <Body>{data.body}</Body>
      <GroupList groups={data.groups} />
      <BulletList items={data.items} heading={data.itemsHeading} />
      <CardGrid cards={data.cards} heading={data.cardsHeading} />
    </SectionShell>
  );
}
