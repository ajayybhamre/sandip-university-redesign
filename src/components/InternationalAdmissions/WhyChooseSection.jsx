import { motion } from "framer-motion";
import { GraduationCap, Building2, Users2, Briefcase, HeartHandshake, Sparkles } from "lucide-react";
import SpotlightCard from "../Animated/SpotlightCard";
import TiltCard from "../Animated/TiltCard";
import "./WhyChooseSection.css";

const whyChooseCards = [
  {
    icon: GraduationCap,
    title: "World-Class Education",
    desc: "Globally recognized curricula with choice-based credits and outcome-driven learning standards.",
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
    desc: "250+ acres ultra-modern campus featuring advanced research centers, tech labs, & digital libraries.",
  },
  {
    icon: Users2,
    title: "Diverse Student Community",
    desc: "A warm, inclusive international family bringing together scholars from over 15 countries worldwide.",
  },
  {
    icon: Briefcase,
    title: "Industry-Focused Learning",
    desc: "Collaborations with global corporations offering internships, workshops, and placement pipelines.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Student Support",
    desc: "Full assistance with student visas, FRRO registration, airport reception, and campus assimilation.",
  },
  {
    icon: Sparkles,
    title: "Vibrant Campus Life",
    desc: "Cultural festivals, international food stalls, sports leagues, and active student clubs.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E] bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
            Key Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-4">
            Why International Students Choose <span className="text-[#C8102E]">Sandip</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            A transformational educational ecosystem crafted to empower global achievers.
          </p>
        </div>

        {/* 6 Premium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <TiltCard key={idx} className="h-full">
                <SpotlightCard className="h-full p-8 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-2xl hover:border-[#C8102E] transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 text-[#C8102E] flex items-center justify-center mb-6 group-hover:bg-[#C8102E] group-hover:text-white transition-colors shadow-sm">
                      <IconComp className="w-7 h-7" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-[#C8102E] transition-colors mb-3">
                      {card.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
