import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  UserCheck,
  FileText,
  UploadCloud,
  CreditCard,
  GraduationCap,
  Sparkles,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";
import TiltCard from "./TiltCard";
import SpotlightCard from "./SpotlightCard";

const stepsData = [
  {
    step: "01",
    title: "Online Register",
    desc: "Create your student portal profile by providing basic details & choice of school.",
    icon: UserCheck,
    badge: "STEP 1",
  },
  {
    step: "02",
    title: "Fill Application Form",
    desc: "Enter your academic qualifications, 10+2 / UG scores, and course specialization.",
    icon: FileText,
    badge: "STEP 2",
  },
  {
    step: "03",
    title: "Upload Documents",
    desc: "Upload clear scanned copies of marksheets, entrance test scorecards & ID proof.",
    icon: UploadCloud,
    badge: "STEP 3",
  },
  {
    step: "04",
    title: "Pay Application Fee",
    desc: "Complete secure application processing fee payment online via UPI/Card/NetBanking.",
    icon: CreditCard,
    badge: "STEP 4",
  },
  {
    step: "05",
    title: "Receive Offer Letter",
    desc: "Receive official provisional allotment letter & complete enrollment reporting.",
    icon: GraduationCap,
    badge: "STEP 5",
  },
];

export default function ScrollTimelineRoadmap() {
  const containerRef = useRef(null);

  // Scroll Progress animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 40%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-[#FAF8F5] via-white to-slate-50 dark:from-[#0b0b0c] dark:via-zinc-900 dark:to-[#0c0c0d] relative overflow-hidden border-b border-slate-200/80 dark:border-zinc-800"
    >
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8102E_1px,transparent_1px)] [background-size:28px_28px] opacity-5 pointer-events-none" />

      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-red-500/10 via-[#C8102E]/15 to-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950/50 text-[#C8102E] text-xs font-extrabold uppercase tracking-wider mb-3 border border-red-100 dark:border-red-900/30 shadow-2xs">
            <ClipboardList className="w-3.5 h-3.5" />
            <span>SCROLL-DRIVEN ADMISSION ROADMAP</span>
            <Sparkles className="w-3 h-3 text-amber-500" />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            5-Step Application Journey
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-3 font-medium">
            Watch the timeline progress as you scroll down to explore your admission steps.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Progress Line (Desktop & Mobile) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden pointer-events-none">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#C8102E] via-amber-500 to-[#C8102E] shadow-[0_0_12px_#C8102E]"
            />
          </div>

          {/* Steps Loop */}
          <div className="space-y-12 md:space-y-16 relative z-10">
            {stepsData.map((item, index) => {
              const isEven = index % 2 === 0;
              const IconComp = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Step Card Content */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <TiltCard>
                      <SpotlightCard className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200/90 dark:border-zinc-800 shadow-xl hover:shadow-2xl hover:border-[#C8102E]/60 transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-sans text-xs font-black text-[#C8102E] bg-red-50 dark:bg-red-950/40 px-3 py-1 rounded-full border border-red-100 dark:border-red-900/30">
                            {item.badge}
                          </span>
                          <span className="text-2xl font-black text-slate-300 dark:text-zinc-700">
                            #{item.step}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#C8102E] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
                            {item.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </SpotlightCard>
                    </TiltCard>
                  </div>

                  {/* Center Node Activation Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border-4 border-[#C8102E] text-[#C8102E] font-black text-xs flex items-center justify-center shadow-lg animate-pulse">
                      {item.step}
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop Alternate Layout */}
                  <div className="hidden md:block w-1/2" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
