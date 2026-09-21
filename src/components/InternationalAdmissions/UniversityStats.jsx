import { useState, useEffect, useRef } from "react";
import { MapPin, Users, Award, Briefcase, Globe } from "lucide-react";
import TiltCard from "../Animated/TiltCard";
import SpotlightCard from "../Animated/SpotlightCard";
import "./UniversityStats.css";

const stats = [
  {
    icon: MapPin,
    value: 250,
    suffix: "+",
    label: "Acres Campus",
    subText: "State-of-the-art infrastructure in Nashik",
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Alumni Network",
    subText: "Global professionals across 30+ nations",
  },
  {
    icon: Award,
    value: 120,
    suffix: "+",
    label: "Patents Filed",
    subText: "Cutting-edge innovation & research focus",
  },
  {
    icon: Briefcase,
    value: 100,
    suffix: "%",
    label: "Placement Assistance",
    subText: "Active career counseling & campus drives",
  },
  {
    icon: Globe,
    value: 16,
    suffix: "+",
    label: "Global Collaborations",
    subText: "International university partnerships & MOUs",
  },
];

function SafeCounter({ targetValue, suffix }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setCount(targetValue);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0] && entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = targetValue;
          const duration = 1800;
          const stepTime = 30;
          const totalSteps = Math.ceil(duration / stepTime);
          const stepVal = end / totalSteps;

          const timer = setInterval(() => {
            start += stepVal;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString()}
      <span className="text-[#C8102E]">{suffix}</span>
    </span>
  );
}

export default function UniversityStats() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Red Glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E] bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/30">
            University At A Glance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-3 mb-4">
            Excellence by the <span className="text-[#C8102E]">Numbers</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-medium">
            Discover the scale, impact, and global footprint of Sandip University.
          </p>
        </div>

        {/* 5 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <TiltCard key={idx} className="h-full">
                <SpotlightCard className="h-full p-6 rounded-3xl bg-slate-800/80 border border-slate-700/80 text-center hover:border-[#C8102E] transition-all duration-300 flex flex-col items-center justify-between group">
                  <div className="w-12 h-12 rounded-2xl bg-[#C8102E]/20 text-[#C8102E] border border-red-500/30 flex items-center justify-center mb-4 group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-white font-sans mb-1 tracking-tight">
                      <SafeCounter targetValue={stat.value} suffix={stat.suffix} />
                    </div>

                    <div className="text-sm font-bold text-slate-200 mb-2">
                      {stat.label}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed font-medium">
                      {stat.subText}
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
