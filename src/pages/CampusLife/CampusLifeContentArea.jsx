import GalleryMediaTab from "./tabs/GalleryMediaTab";
import SunClubsTab from "./tabs/SunClubsTab";
import StudentWelfareTab from "./tabs/StudentWelfareTab";
import AchievementTab from "./tabs/AchievementTab";
import SportsTab from "./tabs/SportsTab";

export default function CampusLifeContentArea({ activeTab }) {
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

      {activeTab === "gallery-media" && <GalleryMediaTab />}

      {activeTab === "sun-clubs" && <SunClubsTab />}

      {activeTab === "student-welfare" && <StudentWelfareTab />}

      {activeTab === "achievement" && <AchievementTab />}

      {activeTab === "sports" && <SportsTab />}

    </div>
  );
}
