import {
  GraduationCap,
  HeartHandshake,
  Briefcase,
  Users,
  Building2,
  Sparkles,
} from "lucide-react";
import IQACSubPageLayout from "../components/IQACSubPageLayout";
import IQACSidebarNav from "../components/IQACSidebarNav";
import seoData from "../../../components/SEO/seoData";
import FeedbackCard from "../components/FeedbackCard";
import AcademicYearPill from "../components/AcademicYearPill";

// Official Feedback Forms Data
const feedbackForms = [
  {
    id: "student",
    title: "Student Feedback Form",
    icon: GraduationCap,
    href: "https://www.sandipuniversity.edu.in/iqac/search_by_prn.php?type=1",
  },
  {
    id: "alumni",
    title: "Alumni Feedback Form",
    icon: HeartHandshake,
    href: "https://www.sandipuniversity.edu.in/iqac/search_by_prn.php?type=2",
  },
  {
    id: "employer",
    title: "Employer Feedback Form",
    icon: Briefcase,
    href: "https://www.sandipuniversity.edu.in/iqac/feedback-system/employee-feedback-form.php",
  },
  {
    id: "teacher",
    title: "Teacher Feedback Form",
    icon: Users,
    href: "https://www.sandipuniversity.edu.in/iqac/search_by_prn.php?type=3",
  },
  {
    id: "facilities",
    title: "Institutional Facilities Form",
    icon: Building2,
    href: "https://www.sandipuniversity.edu.in/iqac/feedback-system/Institutional-Facilities-form.php?form_no=INST_FAC_2025",
  },
];

// Official Academic Year Action Taken Reports Data (Active Published Reports)
const academicYears = [
  { year: "2023 - 2024", href: "https://www.sandipuniversity.edu.in/iqac/feedback-system-23-24.php" },
  { year: "2022 - 2023", href: "https://www.sandipuniversity.edu.in/iqac/feedback-system-22-23.php" },
  { year: "2021 - 2022", href: "https://www.sandipuniversity.edu.in/iqac/feedback-system-21-22.php" },
  { year: "2020 - 2021", href: "https://www.sandipuniversity.edu.in/iqac/feedback-system-20-21.php" },
  { year: "2019 - 2020", href: "https://www.sandipuniversity.edu.in/iqac/feedback-system-19-20.php" },
];

export default function IQACFeedbackSystemPage() {
  return (
    <IQACSubPageLayout
      seo={seoData.iqacFeedback}
      badge="STAKEHOLDER EVALUATION PORTAL"
      title="Feedback System"
      subtitle="Collecting, analyzing, and taking action on feedback from students, alumni, employers, teachers, and facilities."
      hideSubNav={true}
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Sidebar Column */}
        <div className="lg:col-span-4 w-full order-2 lg:order-1">
          <IQACSidebarNav />
        </div>

        {/* Right Main Content Column */}
        <div className="lg:col-span-8 space-y-6 order-1 lg:order-2">
          {/* Compact Main White/Ivory Container Panel */}
          <div className="bg-[#FFFDFC] dark:bg-[#1E1B18] rounded-2xl border border-[#EBD8C7] dark:border-stone-800 shadow-2xs p-5 sm:p-7 space-y-6">
            
            {/* 1. Compact Page Title Badge */}
            <div className="text-center pt-1 pb-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBE8E7] dark:bg-red-950/40 border border-[#E8CFA3]/70 text-[11px] font-bold text-[#B32035] dark:text-red-300 uppercase tracking-wider mb-2">
                <Sparkles size={12} className="text-[#C99A52]" />
                <span>IQAC Feedback Portal</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292321] dark:text-[#F5F2EB] tracking-tight">
                Official Feedback Forms
              </h2>
            </div>

            {/* 2. Five Feedback Form Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3.5 items-stretch">
              {feedbackForms.map((form) => (
                <FeedbackCard
                  key={form.id}
                  title={form.title}
                  icon={form.icon}
                  href={form.href}
                />
              ))}
            </div>

            {/* 3. Feedback Action Taken Heading */}
            <div className="pt-6 border-t border-[#EBD8C7]/80 dark:border-stone-800/80 text-center space-y-2">
              <h3 className="text-sm sm:text-base font-extrabold text-[#292321] dark:text-[#F5F2EB] tracking-tight max-w-3xl mx-auto leading-snug">
                Feedback collected, analysed, action taken & communicated to relevant body
              </h3>
              <div className="flex items-center justify-center gap-1.5 pt-1">
                <div className="w-6 h-0.5 bg-[#E8CFA3]" />
                <div className="w-10 h-0.5 bg-[#B32035] rounded-full" />
                <div className="w-6 h-0.5 bg-[#E8CFA3]" />
              </div>
            </div>

            {/* 4. Academic Year Action Report Pill Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 pb-2">
              {academicYears.map((ay) => (
                <AcademicYearPill
                  key={ay.year}
                  yearLabel={ay.year}
                  href={ay.href}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </IQACSubPageLayout>
  );
}
