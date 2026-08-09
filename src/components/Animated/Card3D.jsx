import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import "./Card3D.css";

export default function Card3D({
  title,
  subtitle,
  badgeText,
  children,
  defaultExpanded = true,
  className = "",
}) {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div className="card-3d-perspective w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
        className={`card-3d-wrapper relative rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${className}`}
      >
        {/* Specular Highlight Glare */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.8), transparent 60%)`,
            opacity: glare.opacity,
          }}
        />

        {/* Top Crimson Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#C8102E] via-slate-900 to-[#C8102E]" />

        {/* 3D Header - Floating Layer (translateZ 30px) */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ transform: "translateZ(30px)" }}
          className="p-6 cursor-pointer flex items-center justify-between gap-4 select-none bg-slate-50/80 dark:bg-zinc-800/50 border-b border-slate-200/80 dark:border-zinc-800 transition-colors hover:bg-red-50/40"
        >
          <div className="space-y-1">
            {badgeText && (
              <span
                style={{ transform: "translateZ(50px)" }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C8102E] text-white text-[10px] font-black uppercase tracking-wider shadow-sm mb-1"
              >
                <Sparkles size={12} />
                <span>{badgeText}</span>
              </span>
            )}
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {subtitle}
              </p>
            )}
          </div>

          <div
            className={`p-2 rounded-full bg-white dark:bg-zinc-900 text-slate-900 dark:text-white border border-slate-200 dark:border-zinc-800 transition-transform duration-300 shadow-sm ${
              isExpanded ? "rotate-180 text-[#C8102E]" : ""
            }`}
          >
            <ChevronDown size={18} />
          </div>
        </div>

        {/* Card Collapse Body - Animated Height Expansion */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ transform: "translateZ(20px)" }}
              className="overflow-hidden"
            >
              <div className="p-6 bg-white dark:bg-zinc-900 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
