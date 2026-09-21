import { Sparkles, Cpu, Award, HeartHandshake, CheckCircle2, Rocket } from "lucide-react";
import IQACSubPageLayout from "../components/IQACSubPageLayout";
import seoData from "../../../components/SEO/seoData";
import innovationImg from "../../../assets/images/innovation-cell.jpg";

const distinctPillars = [
  {
    icon: Cpu,
    title: "Industry 4.0 Co-Designed Curriculum",
    description: "Curriculum co-created with top global tech giants (IBM, Sapience, Electric Vehicle Labs) ensuring 100% real-world skill alignment.",
  },
  {
    icon: Rocket,
    title: "Sandip Innovation & Incubation Center",
    description: "In-house startup incubator providing seed funding, patent mentoring, and prototype labs for student entrepreneurs.",
  },
  {
    icon: Award,
    title: "Global Certification Integration",
    description: "Mandatory global industry certifications embedded directly into semester degree credits.",
  },
  {
    icon: HeartHandshake,
    title: "Community Outreach & Social Responsibility",
    description: "Active rural development programs, free medical camps, and village adoption projects under Sandip Social Foundation.",
  },
];

export default function IQACInstitutionalDistinctivenessPage() {
  return (
    <IQACSubPageLayout
      seo={seoData.iqacInstitutionalDistinctiveness}
      badge="CORE INSTITUTIONAL STRENGTHS"
      title="Institutional Distinctiveness"
      subtitle="Showcasing Sandip University's unique educational philosophy: Industry-led curriculum, research innovation incubators, and community outreach."
    >
      <div className="space-y-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] dark:text-[#F5F2EB] mb-4">
              Pioneering Industry-Academia Synergy
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The priority and thrust area of Sandip University lies in bridging the gap between higher education and cutting-edge industry demands. Through specialized Centers of Excellence, hands-on drone labs, electric vehicle testing, and AI research hubs, Sandip University nurtures job-ready global professionals.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#C8102E] flex-shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Hands-on exposure in high-tech laboratories with industry-certified trainers.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#C8102E] flex-shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Patents and research papers published jointly by students and faculty mentors.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#C8102E] flex-shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Holistic personality development blended with social responsibility outreach.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl bg-white dark:bg-[#201C18] p-2">
              <img src={innovationImg} alt="Sandip Innovation Cell" className="w-full h-80 object-cover rounded-xl" />
              <div className="p-4">
                <h4 className="text-sm font-bold text-[#1C1917] dark:text-[#F5F2EB]">Sandip Innovation & Incubation Center</h4>
                <p className="text-xs text-gray-500">Startup & Patent Support Hub</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-[#1C1917] dark:text-[#F5F2EB] mb-8 text-center">
            Pillars of Distinctiveness
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {distinctPillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-white dark:bg-[#201C18] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-[#C8102E] mb-4">
                      <IconComp size={22} />
                    </div>
                    <h3 className="text-base font-bold text-[#1C1917] dark:text-[#F5F2EB] mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </IQACSubPageLayout>
  );
}
