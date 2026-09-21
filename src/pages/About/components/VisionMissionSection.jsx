import { Compass, Target } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#F5F0E6] dark:bg-[#191714] text-[#2B231D] dark:text-[#F3EFE9] transition-colors duration-300 border-y border-[#EAE3D7] dark:border-[#2C2720]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs font-mono font-bold text-[#E86B7B] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#24201C] text-[#FAF7F2] border border-[#3D342B] shadow-sm">
            02 — VISION & MISSION
          </span>
          <div className="flex-1 h-[1px] bg-[#332C24]/30 dark:bg-[#332C24]"></div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          
          {/* VISION */}
          <div className="flex flex-col p-8 sm:p-10 rounded-2xl bg-[#FAF7F2] dark:bg-[#201C17] border border-[#E5DDD0] dark:border-[#332C24] shadow-xs relative hover:border-[#C8102E]/40 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#24201C] border border-[#3D342B] flex items-center justify-center text-red-400 flex-shrink-0 shadow-sm">
                <Compass size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#1C1714] dark:text-[#F3EFE9] font-sans">
                OUR VISION
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#564B42] dark:text-[#C5BBB0] font-medium leading-relaxed">
              To be a premier global university committed to academic excellence, transformative research, innovation, and holistic student development, preparing ethical leaders and innovators for a dynamic world.
            </p>

            <div className="mt-8 pt-6 border-t border-[#EAE3D7] dark:border-[#2C2720] flex items-center justify-between text-xs font-bold text-[#C8102E] dark:text-[#E86B7B] uppercase tracking-wider">
              <span>Academic Leadership</span>
              <span>Global Excellence</span>
            </div>
          </div>

          {/* MISSION */}
          <div className="flex flex-col p-8 sm:p-10 rounded-2xl bg-[#FAF7F2] dark:bg-[#201C17] border border-[#E5DDD0] dark:border-[#332C24] shadow-xs relative hover:border-[#C8102E]/40 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#24201C] border border-[#3D342B] flex items-center justify-center text-red-400 flex-shrink-0 shadow-sm">
                <Target size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#1C1714] dark:text-[#F3EFE9] font-sans">
                OUR MISSION
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#564B42] dark:text-[#C5BBB0] font-medium leading-relaxed">
              To impart outcome-based, industry-aligned education through state-of-the-art infrastructure; to foster a culture of research, incubation, and entrepreneurship; and to instill human values, environmental stewardship, and social responsibility in our graduates.
            </p>

            <div className="mt-8 pt-6 border-t border-[#EAE3D7] dark:border-[#2C2720] flex items-center justify-between text-xs font-bold text-[#C8102E] dark:text-[#E86B7B] uppercase tracking-wider">
              <span>Outcome-Based Learning</span>
              <span>Social Responsibility</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
