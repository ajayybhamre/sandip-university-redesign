import { Leaf, Sun, Droplets, Recycle, ShieldCheck, TreePine, Award, Zap } from "lucide-react";
import IQACSubPageLayout from "../components/IQACSubPageLayout";
import seoData from "../../../components/SEO/seoData";
import campusImg from "../../../assets/images/campus-1.jpg";

const sustainabilityInitiatives = [
  {
    icon: Sun,
    title: "Solar Energy Grid & Clean Power",
    description: "Multi-megawatt rooftop solar photovoltaic installations powering over 60% of campus electricity consumption.",
    stat: "60%+ Clean Energy",
  },
  {
    icon: Droplets,
    title: "Rainwater Harvesting & Water Recycling",
    description: "Zero-liquid discharge (ZLD) sewage treatment plants (STP) and rainwater catchment ponds for campus landscaping.",
    stat: "100% Water Recycled",
  },
  {
    icon: Recycle,
    title: "Zero-Waste & E-Waste Management",
    description: "Strict segregation of solid waste, organic composting, and certified e-waste recycling partnerships.",
    stat: "Zero Waste Goal",
  },
  {
    icon: TreePine,
    title: "Green Campus & Biodiversity Zone",
    description: "Extensive tree plantation drives across 250+ acres of lush green Nashik foothills campus.",
    stat: "250+ Acres Greenery",
  },
];

export default function IQACSustainabilityPage() {
  return (
    <IQACSubPageLayout
      seo={seoData.iqacSustainability}
      badge="ENVIRONMENTAL GOVERNANCE & GREEN CAMPUS"
      title="Sustainability & Environmental Quality"
      subtitle="Promoting eco-friendly campus policies, renewable energy adoption, water conservation, and annual green audits at Sandip University."
    >
      <div className="space-y-16">
        {/* Banner Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] dark:text-[#F5F2EB] mb-4">
              Green Campus Policy & Commitment
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Sandip University's IQAC actively integrates environmental stewardship into institutional governance. Through periodic green audits, energy audits, and environmental quality checks, the university maintains a sustainable, eco-friendly environment for research and learning.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
                <ShieldCheck size={20} className="text-emerald-600 mb-2" />
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">Annual Green Audit</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Certified environmental audit verifying carbon footprint reduction.</p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
                <Zap size={20} className="text-amber-600 mb-2" />
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">Energy Conservation</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">100% LED lighting adoption across all academic blocks & hostels.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl bg-white dark:bg-[#201C18] p-2">
              <img src={campusImg} alt="Sandip University Green Campus" className="w-full h-80 object-cover rounded-xl" />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1C1917] dark:text-[#F5F2EB]">Nashik Eco-Campus</h4>
                  <p className="text-xs text-gray-500">250+ Acres Green Landscape</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">Clean & Green</span>
              </div>
            </div>
          </div>
        </div>

        {/* Initiatives Grid */}
        <div>
          <h2 className="text-2xl font-extrabold text-[#1C1917] dark:text-[#F5F2EB] mb-8 text-center">
            Key Environmental Initiatives
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityInitiatives.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-white dark:bg-[#201C18] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900/40 flex items-center justify-center text-emerald-600">
                        <IconComp size={22} />
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full uppercase font-mono">
                        {item.stat}
                      </span>
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
