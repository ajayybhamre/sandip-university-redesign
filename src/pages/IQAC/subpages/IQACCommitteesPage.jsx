import { useState } from "react";
import IQACSubPageLayout from "../components/IQACSubPageLayout";
import IQACSidebarNav from "../components/IQACSidebarNav";
import seoData from "../../../components/SEO/seoData";
import CommitteeSlider from "../components/CommitteeSlider";
import CommitteeMemberTable from "../components/CommitteeMemberTable";
import { committeesData } from "../data/committeesData";

export default function IQACCommitteesPage() {
  const [selectedCommitteeId, setSelectedCommitteeId] = useState(committeesData[0].id);

  const currentCommittee =
    committeesData.find((c) => c.id === selectedCommitteeId) || committeesData[0];

  return (
    <IQACSubPageLayout
      seo={seoData.iqacCommittees}
      badge="GOVERNANCE & STATUTORY BODIES"
      title="Committees"
      subtitle="Overview of various committees constituted under IQAC for quality assurance, governance, and student support."
      hideSubNav={true}
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Sidebar Column */}
        <div className="lg:col-span-4 w-full order-2 lg:order-1">
          <IQACSidebarNav />
        </div>

        {/* Right Main Content Column */}
        <div className="lg:col-span-8 space-y-8 order-1 lg:order-2">
          {/* Committee Slider Navigation */}
          <section className="border-b border-gray-100 dark:border-stone-800/80 pb-6">
            <CommitteeSlider
              committees={committeesData}
              selectedId={selectedCommitteeId}
              onSelect={setSelectedCommitteeId}
            />
          </section>

          {/* Selected Committee Content Table */}
          <section className="min-h-[420px]">
            <CommitteeMemberTable committee={currentCommittee} />
          </section>
        </div>
      </div>
    </IQACSubPageLayout>
  );
}
