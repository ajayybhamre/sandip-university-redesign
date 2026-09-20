import { Compass, Target, Rocket, Award, GraduationCap, Building2, CheckCircle2 } from "lucide-react";
import IQACSubPageLayout from "../components/IQACSubPageLayout";
import seoData from "../../../components/SEO/seoData";

const strategicPillars = [
  {
    phase: "Pillar 01",
    title: "Academic Excellence & OBE Mastery",
    icon: GraduationCap,
    goals: [
      "100% adoption of Outcome-Based Education (OBE) mapping across all programs",
      "Regular Board of Studies (BoS) syllabus updates incorporating AI & Industry 4.0",
      "Choice Based Credit System (CBCS) flexibility with global credit transfer",
    ],
  },
  {
    phase: "Pillar 02",
    title: "Research Acceleration & Patent Generation",
    icon: Rocket,
    goals: [
      "Targeting 500+ Scopus & Web of Science publications annually",
      "Establishing specialized research centers of excellence with industry partners",
      "Seed money support for innovative young faculty and doctoral scholars",
    ],
  },
  {
    phase: "Pillar 03",
    title: "Global Linkages & Internationalization",
    icon: Compass,
    goals: [
      "Expanding MoUs with top international universities for student/faculty exchange",
      "Offering dual-degree pathways and joint research symposiums",
      "Attracting diverse international students across 25+ countries",
    ],
  },
  {
    phase: "Pillar 04",
    title: "Smart Infrastructure & Digital Governance",
    icon: Building2,
    goals: [
      "Fully digitized e-governance administrative workflow and student portal",
      "High-speed campus-wide Wi-Fi 6 network and AI-powered smart classrooms",
      "Zero-carbon green campus infrastructure expansion",
    ],
  },
];

export default function IQACStrategicPlanPage() {
  return (
    <IQACSubPageLayout
      seo={seoData.iqacStrategicPlan}
      badge="INSTITUTIONAL ROADMAP 2025–2030"
      title="Strategic Plan & Vision 2030"
      subtitle="The 5-Year Institutional Growth Roadmap designed by Sandip University IQAC to achieve top global academic rankings and holistic excellence."
    >
      <div className="space-y-12">
        <div className="grid md:grid-cols-2 gap-6">
          {strategicPillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div key={idx} className="bg-white dark:bg-[#201C18] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-[#C8102E]">
                    <IconComp size={24} />
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full uppercase">
                    {pillar.phase}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1C1917] dark:text-[#F5F2EB] mb-4">{pillar.title}</h3>
                <div className="space-y-2.5">
                  {pillar.goals.map((goal, gIdx) => (
                    <div key={gIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 size={16} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                      <span>{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </IQACSubPageLayout>
  );
}
