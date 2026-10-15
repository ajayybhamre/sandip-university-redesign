import AcademicsOverview from "./tabs/AcademicsOverview";
import AcademicCalendar from "./tabs/AcademicCalendar";
import ICTTools from "./tabs/ICTTools";
import CIKS from "./tabs/CIKS";
import SystemEvaluation from "./tabs/SystemEvaluation";
import AcademicRegulations from "./tabs/AcademicRegulations";

export default function ContentArea({ activeTab }) {
  return (
    <div className="lg:col-span-3">

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
          min-h-[650px]
          transition-colors
          duration-300
        "
      >

        {activeTab === "overview" && <AcademicsOverview />}

        {activeTab === "calendar" && <AcademicCalendar />}

        {activeTab === "ict" && <ICTTools />}

        {activeTab === "ciks" && <CIKS />}

        {activeTab === "evaluation" && <SystemEvaluation />}

        {activeTab === "regulations" && <AcademicRegulations />}

      </div>

    </div>
  );
}