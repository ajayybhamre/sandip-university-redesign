import { motion } from "framer-motion";
import { Compass, CheckCircle2, Send, FileCheck, Plane, GraduationCap } from "lucide-react";
import TiltCard from "../Animated/TiltCard";
import SpotlightCard from "../Animated/SpotlightCard";
import "./StudentJourney.css";

const steps = [
  {
    num: "01",
    icon: Compass,
    title: "Discover Your Program",
    desc: "Explore our range of undergraduate, postgraduate, and foundation courses.",
  },
  {
    num: "02",
    icon: CheckCircle2,
    title: "Check Eligibility",
    desc: "Verify academic transcripts, language proficiency, and equivalence guidelines.",
  },
  {
    num: "03",
    icon: Send,
    title: "Submit Your Application",
    desc: "Fill out the online international application portal with academic credentials.",
  },
  {
    num: "04",
    icon: FileCheck,
    title: "Complete Formalities",
    desc: "Receive your Provisional Offer Letter and remit processing fee via wire transfer.",
  },
  {
    num: "05",
    icon: Plane,
    title: "Prepare for Your Journey",
    desc: "Obtain your Student Visa, AIU certificate, and coordinate arrival with our team.",
  },
  {
    num: "06",
    icon: GraduationCap,
    title: "Begin Your Experience",
    desc: "Arrive on campus, report to the international desk, and begin orientation week.",
  },
];

export default function StudentJourney() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E] bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
            Simple & Transparent Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-4">
            Your Journey to <span className="text-[#C8102E]">Sandip University</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            A 6-step roadmap designed to make your international application seamless and transparent.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <TiltCard key={idx} className="h-full">
                <SpotlightCard className="h-full p-7 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-2xl hover:border-[#C8102E] transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    {/* Step Number Badge + Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-2xl font-black text-[#C8102E] bg-red-50 px-3 py-1 rounded-xl border border-red-100">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-900 text-white group-hover:bg-[#C8102E] flex items-center justify-center transition-colors shadow-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#C8102E] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                      {step.desc}
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
