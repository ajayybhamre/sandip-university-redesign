import AboutUsTab from "./tabs/AboutUsTab";
import VisionMissionTab from "./tabs/VisionMissionTab";
import LeadershipGroup from "./tabs/LeadershipGroup";
import GroupInstituteTab from "./tabs/GroupInstituteTab";
import GovernanceGroup from "./tabs/GovernanceGroup";
import ApprovalsGroup from "./tabs/ApprovalsGroup";

export default function AboutContentArea({ activeTab }) {
  return (
    <div
      className="
        bg-white
        dark:bg-[#111111]
        border
        border-red-100
        dark:border-red-900
        rounded-3xl
        shadow-lg
        p-8
        lg:p-10
        min-h-[500px]
        transition-colors
        duration-300
      "
    >

      {activeTab === "about-us" && <AboutUsTab />}

      {activeTab === "vision-mission" && <VisionMissionTab />}

      {activeTab === "leadership" && <LeadershipGroup />}

      {activeTab === "group-institute" && <GroupInstituteTab />}

      {activeTab === "governance" && <GovernanceGroup />}

      {activeTab === "approvals" && <ApprovalsGroup />}

    </div>
  );
}
