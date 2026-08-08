import React, { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { Clock, ArrowRight } from "lucide-react";

export default function ProgramCard({
  program,
  getBadgeStyle,
  onViewDetails
}) {
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // GSAP Smooth Slow Image Zoom (scale 1 -> 1.08) on Hover
  useEffect(() => {
    if (shouldReduceMotion || !imageRef.current || !cardRef.current) return;

    const el = cardRef.current;
    const img = imageRef.current;

    const handleMouseEnter = () => {
      gsap.to(img, {
        scale: 1.08,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(img, {
        scale: 1,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [shouldReduceMotion]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative rounded-[12px] bg-white border border-[#0F1B2B]/20 overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
      style={{ willChange: "box-shadow, transform" }}
    >
      {/* Top Red Gradient Accent Bar (4px) */}
      <div className="h-1 w-full bg-gradient-to-r from-[#C8102E] via-[#0F1B2B] to-[#D4AF37]" />

      {/* Card Header & Content Container */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        
        <div className="space-y-3">
          
          {/* Level Badge & Duration Row */}
          <div className="flex items-center justify-between gap-2">
            <span
              className={`px-2.5 py-0.5 rounded-[6px] text-[11px] font-bold border ${getBadgeStyle(
                program.level
              )}`}
            >
              {program.level}
            </span>

            <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-medium">
              <Clock size={13} className="text-[#C8102E]" />
              <span>• {program.duration}</span>
            </div>
          </div>

          {/* Program Title with Animated Crimson Underline */}
          <div className="relative pt-1">
            <motion.h3
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl font-bold font-serif text-[#0C0C0D] leading-tight group-hover:text-[#C8102E] transition-colors"
            >
              {program.title}
            </motion.h3>

            {/* Crimson Underline Sweep (scaleX 0 -> 1) */}
            <motion.div
              className="h-[2px] bg-[#C8102E] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out mt-1"
              style={{ willChange: "transform" }}
            />
          </div>

          {/* School Subtitle */}
          <p className="text-xs font-semibold text-[#64748B]">
            {program.school}
          </p>

          {/* 2-line Truncated Description */}
          {program.overview && (
            <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
              {program.overview}
            </p>
          )}

          {/* Quick Eligibility Preview Light Box */}
          {program.compactEligibility && (
            <div className="p-2.5 rounded-[6px] bg-slate-50 border border-slate-200/80 text-[11px] text-[#0C0C0D] font-medium leading-snug">
              <span className="text-[#C8102E] font-bold block mb-0.5">Eligibility Preview:</span>
              <span>{program.compactEligibility}</span>
            </div>
          )}

          {/* Specializations Badges (max 2) */}
          {program.specializations && program.specializations.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {program.specializations.slice(0, 2).map((spec, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2 py-0.5 rounded-[4px] bg-slate-100 text-[#0C0C0D] text-[10px] font-semibold border border-slate-200"
                >
                  {spec}
                </span>
              ))}
            </div>
          )}

        </div>

        {/* View Details Primary Action Button */}
        <div className="pt-4 border-t border-slate-100">
          <button
            onClick={() => onViewDetails(program)}
            className="w-full py-2.5 px-4 rounded-[8px] bg-[#0C0C0D] group-hover:bg-[#C8102E] text-white text-xs font-semibold transition-all duration-300 flex items-center justify-between cursor-pointer active:scale-97 shadow-2xs"
          >
            <span>View Details</span>

            {/* Arrow Slide & Fade In (x: 8 -> 0, opacity: 0 -> 1) */}
            <motion.div
              className="inline-flex items-center justify-center opacity-80 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200"
              style={{ willChange: "transform, opacity" }}
            >
              <ArrowRight size={15} className="text-[#2DD4BF] group-hover:text-white" />
            </motion.div>
          </button>
        </div>

      </div>
    </motion.div>
  );
}
