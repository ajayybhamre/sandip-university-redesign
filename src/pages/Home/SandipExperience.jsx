import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  ArrowRight, 
  Compass, 
  Lightbulb, 
  Users, 
  TrendingUp, 
  Check, 
  Sparkles,
  GraduationCap
} from "lucide-react";

import campus1Image from "../../assets/images/campus-1.jpg";
import researchImage from "../../assets/images/research-grants.jpg";
import gallery1Image from "../../assets/images/gallery1.jpg";
import whySandipGraduation from "../../assets/images/why-sandip-graduation.jpg";

// Data for the interactive tab switcher
const experienceTabs = [
  {
    id: "discover",
    num: "01",
    tabLabel: "Discover",
    tabSub: "Your Potential",
    icon: Compass,
    title: "Discover Your Potential",
    description: "An immersive learning experience with world-class faculty, modern infrastructure and opportunities to grow.",
    badge: "LEARNING & EXCELLENCE",
    image: campus1Image,
    alt: "Sandip University modern campus infrastructure and vibrant learning environment",
    ctaText: "Know More",
    ctaLink: "/about-us",
    videoText: "Watch Sandip Channel",
    features: [
      "250+ Acre Eco-Friendly Smart Campus",
      "Outcome-Based Academic Frameworks",
      "World-Class Academic Infrastructure"
    ]
  },
  {
    id: "create",
    num: "02",
    tabLabel: "Create",
    tabSub: "Ideas to Impact",
    icon: Lightbulb,
    title: "Ideas to Impact",
    description: "Showcase innovation, research and student projects through state-of-the-art incubation hubs, government grants, and hands-on laboratories.",
    badge: "RESEARCH & INCUBATION",
    image: researchImage,
    alt: "Sandip University state-of-the-art innovation and research laboratory",
    ctaText: "Explore Research Hub",
    ctaLink: "/academics",
    videoText: "Watch Innovation Story",
    features: [
      "₹5 Crore+ Active Research Grants",
      "30+ Student Startups Incubated",
      "120+ Patents & IPR Filings"
    ]
  },
  {
    id: "connect",
    num: "03",
    tabLabel: "Connect",
    tabSub: "Find Your Community",
    icon: Users,
    title: "Find Your Community",
    description: "Highlight student clubs, campus events and vibrant community experiences that foster lifelong friendships, leadership and global collaboration.",
    badge: "CAMPUS LIFE & CLUBS",
    image: gallery1Image,
    alt: "Vibrant student community and cultural festival at Sandip University",
    ctaText: "Discover Campus Life",
    ctaLink: "/campus-life",
    videoText: "View Campus Culture",
    features: [
      "20+ Student Cultural & Tech Clubs",
      "Annual National Fest 'SandipOTSAV'",
      "Global Peer & Alumni Network"
    ]
  },
  {
    id: "grow",
    num: "04",
    tabLabel: "Grow",
    tabSub: "Your Future",
    icon: TrendingUp,
    title: "Your Future",
    description: "Present career development, mentoring and student growth opportunities connecting you with over 250+ leading multinational recruiters.",
    badge: "CAREER & PLACEMENTS",
    image: whySandipGraduation,
    alt: "Sandip University graduating class celebrating career success",
    ctaText: "Explore Placements",
    ctaLink: "/placements",
    videoText: "Student Success Stories",
    features: [
      "250+ Top Corporate Recruiters",
      "₹1.12 CPA Highest Package Offered",
      "100% Placement Guidance & Mentorship"
    ]
  }
];

// Left Brand Story Highlights
const storyHighlights = [
  { num: "01", text: "Learn Beyond Classrooms" },
  { num: "02", text: "Innovate With Opportunities" },
  { num: "03", text: "Connect With Communities" },
  { num: "04", text: "Grow For a Brighter Tomorrow" }
];

export default function SandipExperience() {
  const [activeTabId, setActiveTabId] = useState("discover");

  const activeTabData = experienceTabs.find((tab) => tab.id === activeTabId) || experienceTabs[0];

  return (
    <section 
      id="legacy-of-success" 
      aria-label="The Sandip Experience"
      className="relative py-24 lg:py-36 bg-[#FAF6EE] dark:bg-[#0B0B0D] text-[#0B192C] dark:text-[#F8FAFC] transition-colors duration-300 overflow-hidden"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8102E]/5 dark:bg-[#C8102E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37]/5 dark:bg-[#D4AF37]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Architectural Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#0B192C_1px,transparent_1px)] dark:bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" 
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* =========================================================================
              LEFT SIDE — BRAND STORY
             ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between h-full"
          >
            <div>
              {/* Category Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8102E]/10 border border-[#C8102E]/20 text-[#C8102E] dark:text-red-400 font-extrabold text-[11px] tracking-[0.2em] uppercase mb-6 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C8102E] dark:text-red-400" />
                <span>THE SANDIP EXPERIENCE</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B192C] dark:text-white tracking-tight leading-[1.08] mb-6">
                More Than a <br />
                <span className="text-[#C8102E] font-serif italic font-normal">University.</span>
              </h2>

              {/* Supporting Text */}
              <p className="text-lg sm:text-xl font-medium text-[#0B192C]/80 dark:text-slate-300 leading-relaxed italic border-l-2 border-[#D4AF37] pl-4 mb-10">
                &ldquo;A place to discover. A space to create. A journey to become.&rdquo;
              </p>

              {/* Minimal 4 Feature Highlights */}
              <div className="space-y-4 mb-10">
                {storyHighlights.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#0B192C]/5 dark:bg-white/10 border border-[#0B192C]/10 dark:border-white/15 flex items-center justify-center text-xs font-black text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white transition-colors duration-300 shrink-0">
                      {item.num}
                    </span>
                    <span className="text-base font-semibold text-[#0B192C]/90 dark:text-slate-200 tracking-tight group-hover:text-[#C8102E] dark:group-hover:text-red-400 transition-colors">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* Red CTA Button */}
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-[#C8102E] text-white font-bold text-sm tracking-wide shadow-xl shadow-[#C8102E]/25 hover:bg-[#A00C24] hover:shadow-2xl hover:shadow-[#C8102E]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group cursor-pointer"
                >
                  <span>Explore Our Campuses</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Circular Play Button — Links to Sandip University YouTube Channel */}
                <a
                  href="https://www.youtube.com/channel/UCDAaVM3kH_Jk7jgSaQj5xFw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white dark:bg-zinc-900 border border-[#0B192C]/10 dark:border-zinc-800 text-[#0B192C] dark:text-slate-200 font-bold text-sm hover:border-[#C8102E] dark:hover:border-red-500 hover:text-[#C8102E] dark:hover:text-red-400 transition-all duration-300 shadow-md group cursor-pointer"
                  aria-label="Watch Our Story on Sandip University YouTube Channel"
                >
                  <span className="w-8 h-8 rounded-full bg-[#C8102E]/10 dark:bg-red-950/40 text-[#C8102E] dark:text-red-400 flex items-center justify-center group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                    <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
                  </span>
                  <span>Watch Our Story</span>
                </a>
              </div>
            </div>

            {/* Subtle Architectural Line Illustration (SVG) */}
            <div className="mt-12 pt-8 border-t border-[#0B192C]/10 dark:border-zinc-800 relative overflow-hidden">
              <svg 
                className="w-full h-16 text-[#0B192C]/15 dark:text-white/10" 
                viewBox="0 0 400 80" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Architectural Columns & Pillar Line Drawing */}
                <path d="M10 70H390" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M20 70V30L50 15L80 30V70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeJoin="round" />
                <path d="M100 70V20L150 10L200 20V70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeJoin="round" />
                <path d="M220 70V35H260V70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeJoin="round" />
                <path d="M280 70V25L330 12L380 25V70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeJoin="round" />
                <circle cx="150" cy="35" r="8" stroke="currentColor" strokeWidth="1.5" />
                <line x1="35" y1="40" x2="35" y2="70" stroke="currentColor" strokeWidth="1" />
                <line x1="65" y1="40" x2="65" y2="70" stroke="currentColor" strokeWidth="1" />
                <line x1="125" y1="35" x2="125" y2="70" stroke="currentColor" strokeWidth="1" />
                <line x1="175" y1="35" x2="175" y2="70" stroke="currentColor" strokeWidth="1" />
              </svg>
              <div className="flex items-center gap-2 mt-2">
                <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-[11px] font-bold text-[#0B192C]/50 dark:text-slate-400 uppercase tracking-widest">
                  SANDIP UNIVERSITY • NASHIK CAMPUS
                </span>
              </div>
            </div>
          </motion.div>

          {/* =========================================================================
              RIGHT SIDE — INTERACTIVE EXPERIENCE SWITCHER
             ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* Header & Interactive Tabs Container */}
            <div className="bg-white dark:bg-zinc-900 rounded-[32px] p-6 sm:p-8 border border-[#0B192C]/10 dark:border-zinc-800 shadow-2xl">
              
              {/* Heading & Counter Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-zinc-800">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#C8102E] dark:text-red-400 block mb-1">
                    INTERACTIVE EXPLORER
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0B192C] dark:text-white tracking-tight">
                    Explore an experience
                  </h3>
                </div>

                {/* Counter Indicator 01 / 04 */}
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF6EE] dark:bg-zinc-800 border border-[#0B192C]/10 dark:border-zinc-700 font-mono text-xs font-bold text-[#0B192C] dark:text-slate-200">
                  <span className="text-[#C8102E] font-black text-sm">{activeTabData.num}</span>
                  <span className="text-slate-400 dark:text-slate-500">/</span>
                  <span>0{experienceTabs.length}</span>
                </div>
              </div>

              {/* 4 Interactive Pill Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
                {experienceTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTabId === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`relative flex flex-col items-start p-3.5 rounded-2xl text-left transition-all duration-300 cursor-pointer overflow-hidden ${
                        isActive
                          ? "bg-[#0B192C] dark:bg-white text-white dark:text-[#0B192C] shadow-lg scale-[1.02]"
                          : "bg-[#FAF6EE] dark:bg-zinc-800/80 text-[#0B192C]/80 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-zinc-700/80"
                      }`}
                      aria-selected={isActive}
                      role="tab"
                    >
                      {/* Active Pill Glow Indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeTabPill"
                          className="absolute inset-0 bg-[#0B192C] dark:bg-white rounded-2xl -z-0"
                          transition={{ type: "spring", stiffness: 400, damping: 35 }}
                        />
                      )}

                      <div className="relative z-10 flex items-center justify-between w-full mb-1">
                        <Icon className={`w-4 h-4 ${isActive ? "text-[#D4AF37] dark:text-[#C8102E]" : "text-[#C8102E] dark:text-red-400"}`} />
                        <span className={`text-[10px] font-black ${isActive ? "text-white/60 dark:text-[#0B192C]/60" : "text-slate-400"}`}>
                          {tab.num}
                        </span>
                      </div>

                      <span className="relative z-10 font-black text-sm tracking-tight leading-none block mb-0.5">
                        {tab.tabLabel}
                      </span>
                      <span className={`relative z-10 text-[10px] font-medium tracking-tight truncate w-full ${isActive ? "text-slate-300 dark:text-slate-600" : "text-slate-500 dark:text-slate-400"}`}>
                        {tab.tabSub}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* ACTIVE TAB CONTENT CARD WITH ANIMATE PRESENCE */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTabData.id}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  {/* Large Rounded Image Container with Dark Overlay */}
                  <div className="relative rounded-[24px] overflow-hidden shadow-xl border border-slate-200 dark:border-zinc-800 h-[260px] sm:h-[320px] group">
                    <img
                      src={activeTabData.image}
                      alt={activeTabData.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/40 to-transparent" />

                    {/* Top Badge Overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-[10px] font-black text-[#C8102E] dark:text-red-400 uppercase tracking-wider shadow-md">
                        {activeTabData.badge}
                      </span>
                    </div>

                    {/* Overlay Buttons & Quick Details on Image Bottom */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 z-10">
                      {/* White "Know More" Button */}
                      <a
                        href={activeTabData.ctaLink}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-[#0B192C] font-bold text-xs hover:bg-[#C8102E] hover:text-white transition-colors duration-300 shadow-lg group/btn"
                      >
                        <span>{activeTabData.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </a>

                      {/* Video Button — Links to Sandip University YouTube Channel */}
                      <a
                        href="https://www.youtube.com/channel/UCDAaVM3kH_Jk7jgSaQj5xFw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/50 hover:bg-[#C8102E] backdrop-blur-md border border-white/20 text-white font-semibold text-xs transition-colors duration-300 shadow-md cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-current text-[#D4AF37]" />
                        <span>{activeTabData.videoText}</span>
                      </a>
                    </div>
                  </div>

                  {/* Title & Supporting Description */}
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-black text-[#0B192C] dark:text-white tracking-tight mb-2">
                      {activeTabData.title}
                    </h4>
                    <p className="text-sm sm:text-base text-[#0B192C]/80 dark:text-slate-300 leading-relaxed font-normal">
                      {activeTabData.description}
                    </p>
                  </div>

                  {/* Key Feature Bullets */}
                  <div className="pt-2 border-t border-slate-100 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeTabData.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 bg-[#FAF6EE] dark:bg-zinc-800/60 px-3 py-2 rounded-xl text-xs font-bold text-[#0B192C]/90 dark:text-slate-200">
                        <Check className="w-3.5 h-3.5 text-[#C8102E] dark:text-red-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
