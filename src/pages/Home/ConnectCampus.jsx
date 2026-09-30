import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  Heart,
  Globe,
  Compass,
  X,
  Maximize2,
  Layers,
  MapPin,
  BookOpen,
} from "lucide-react";
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";

import campusAerial from "../../assets/images/campus.png";
import campusHeroImage from "../../assets/images/about-entrance.jpg";
import handsOnImage from "../../assets/images/hands-on-training.jpg";
import researchImage from "../../assets/images/research-grants.jpg";
import campus1Image from "../../assets/images/campus-1.jpg";

const socialLinks = [
  {
    name: "Instagram",
    handle: "@sandip.university",
    label: "Campus stories & reels",
    icon: FaInstagram,
    url: "https://www.instagram.com/sandip.university/",
    iconBg: "bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]",
  },
  {
    name: "YouTube",
    handle: "Sandip University",
    label: "Tours & campus life",
    icon: FaYoutube,
    url: "https://www.youtube.com/channel/UCDAaVM3kH_Jk7jgSaQj5xFw",
    iconBg: "bg-gradient-to-br from-red-500 to-[#C8102E]",
  },
  {
    name: "Facebook",
    handle: "Sandip University",
    label: "Events & announcements",
    icon: FaFacebookF,
    url: "https://www.facebook.com/SandipUniversity/",
    iconBg: "bg-gradient-to-br from-blue-600 to-[#1877F2]",
  },
  {
    name: "Twitter / X",
    handle: "@sandipuniv",
    label: "Updates & news",
    icon: FaTwitter,
    url: "https://twitter.com/sandipuniv",
    iconBg: "bg-gradient-to-br from-slate-800 to-black",
  },
  {
    name: "Website",
    handle: "sandipuniversity.edu.in",
    label: "Official university portal",
    icon: Globe,
    url: "https://www.sandipuniversity.edu.in/",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-700",
  },
  {
    name: "Blogs",
    handle: "sandipuniversity.edu.in/blog",
    label: "Articles, guides & insights",
    icon: BookOpen,
    url: "https://www.sandipuniversity.edu.in/blog/",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
  },
];

const stats = [
  { icon: Users, value: "120K+", label: "Followers" },
  { icon: Heart, value: "250K+", label: "Likes" },
  { icon: Globe, value: "35+", label: "Countries" },
];

const mapHotspots = [
  {
    id: 1,
    title: "School of Engineering & Technology",
    short: "Engineering",
    category: "Academic",
    position: "top-[25%] left-[20%]",
    image: handsOnImage,
    desc: "State-of-the-art technical laboratories, robotics centers, and mechanical workshops.",
  },
  {
    id: 2,
    title: "Central Library & Resource Hub",
    short: "Library",
    category: "Facilities",
    position: "top-[38%] left-[55%]",
    image: campusHeroImage,
    desc: "Multi-storey digital library housing 100,000+ volumes, e-journals, and quiet study zones.",
  },
  {
    id: 3,
    title: "Sandip Incubation & Startup Cell",
    short: "Incubation",
    category: "Research",
    position: "top-[65%] left-[30%]",
    image: researchImage,
    desc: "Recognized incubation hub offering prototyping labs, seed funding, and patent support.",
  },
  {
    id: 4,
    title: "Sports Complex & Stadium",
    short: "Sports",
    category: "Facilities",
    position: "top-[75%] left-[70%]",
    image: campus1Image,
    desc: "Olympic-standard sports facilities, cricket ground, football stadium, and indoor badminton arenas.",
  },
];

/* Pin marker shared by the preview and the modal map */
function Pin({ spot, isActive, onClick, size = "md" }) {
  const dim = size === "sm" ? "h-7 w-7" : "h-9 w-9";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Show ${spot.title}`}
      aria-pressed={isActive}
      className={`absolute ${spot.position} z-20 -translate-x-1/2 -translate-y-1/2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full`}
    >
      <span className={`relative flex ${dim} items-center justify-center`}>
        {isActive && (
          <span className="absolute inset-0 rounded-full bg-[#C8102E] opacity-60 animate-ping" />
        )}
        <span
          className={`relative flex ${dim} items-center justify-center rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
            isActive ? "bg-[#C8102E] scale-110" : "bg-slate-900/90 hover:bg-[#C8102E]"
          }`}
        >
          <MapPin className="w-3.5 h-3.5 text-white" />
        </span>
      </span>
    </button>
  );
}

export default function ConnectCampus() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(mapHotspots[0]);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredHotspots = mapHotspots.filter(
    (spot) => activeCategory === "All" || spot.category === activeCategory
  );

  // Close on Escape + lock page scroll while the modal is open
  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsModalOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isModalOpen]);

  return (
    <section
      id="connect-campus"
      className="relative overflow-hidden py-20 lg:py-28 bg-[#E9EEF2] dark:bg-zinc-950 border-t border-slate-200/70 dark:border-zinc-800 transition-colors duration-300"
    >
      {/* ---------- BACKGROUND: topographic contour lines + faint aerial ---------- */}
      <img
        src={campusAerial}
        alt=""
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-2/3 h-full object-cover opacity-[0.07] dark:opacity-[0.1] grayscale pointer-events-none"
        style={{
          maskImage: "linear-gradient(to left, black, transparent)",
          WebkitMaskImage: "linear-gradient(to left, black, transparent)",
        }}
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full text-slate-400/30 dark:text-white/10 pointer-events-none"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        {[60, 110, 165, 225, 290, 360, 435, 515].map((r, i) => (
          <ellipse
            key={r}
            cx="980"
            cy="260"
            rx={r * 1.5}
            ry={r}
            transform={`rotate(${-14 + i * 3} 980 260)`}
          />
        ))}
        {[70, 130, 200, 280].map((r, i) => (
          <ellipse
            key={r}
            cx="120"
            cy="720"
            rx={r * 1.4}
            ry={r * 0.8}
            transform={`rotate(${18 - i * 4} 120 720)`}
          />
        ))}
      </svg>
      <div className="absolute -left-24 top-10 w-[420px] h-[420px] rounded-full bg-[#C8102E]/10 blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* ---------- HEADER ---------- */}
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-12 lg:mb-14">
          <h2 className="lg:col-span-7 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08] text-slate-900 dark:text-white">
            Find us online.
            <span className="block font-semibold text-slate-500 dark:text-slate-400">
              Find your way around campus.
            </span>
          </h2>
          <p className="lg:col-span-5 lg:ml-auto max-w-md text-sm sm:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
            Follow Sandip University on your favourite platform, then tap the
            pins on the map to see the labs, library, incubation cell, and
            sports complex before you visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ---------- LEFT: SOCIAL TILES ---------- */}
          <div className="lg:col-span-5">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full items-start gap-3 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur border border-slate-200 dark:border-zinc-800 p-4 hover:-translate-y-0.5 hover:border-[#C8102E]/50 hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
                    >
                      <span
                        className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-white shadow-md ${item.iconBg}`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-2">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">
                            {item.name}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#C8102E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </span>
                        <span className="block text-xs text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                          {item.label}
                        </span>
                        <span className="block text-[11px] font-medium text-slate-400 dark:text-slate-500 truncate mt-1.5">
                          {item.handle}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Community numbers */}
            <dl className="mt-6 grid grid-cols-3 rounded-2xl bg-slate-900 dark:bg-zinc-900 text-white divide-x divide-white/10 overflow-hidden">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="px-4 py-4">
                    <Icon className="w-4 h-4 text-[#FF5A70] mb-2" />
                    <dd className="text-xl font-black leading-none">{s.value}</dd>
                    <dt className="text-[11px] text-white/60 mt-1">{s.label}</dt>
                  </div>
                );
              })}
            </dl>
          </div>

          {/* ---------- RIGHT: LIVE MAP PREVIEW ---------- */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] overflow-hidden bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-2xl shadow-slate-900/10">
              {/* Map canvas with pins */}
              <div className="relative h-[300px] sm:h-[380px] bg-slate-950">
                <img
                  src={campusAerial}
                  alt="Aerial view of the Sandip University campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />

                {mapHotspots.map((spot) => (
                  <Pin
                    key={spot.id}
                    spot={spot}
                    size="sm"
                    isActive={activeHotspot.id === spot.id}
                    onClick={() => setActiveHotspot(spot)}
                  />
                ))}

                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/15 text-xs font-semibold text-white">
                  <Compass className="w-3.5 h-3.5 text-[#FF5A70]" />
                  250+ acre campus map
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-slate-900 text-xs font-bold shadow-lg hover:bg-[#C8102E] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Open full map
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Selected place detail */}
              <div className="p-4 sm:p-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeHotspot.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex gap-4 items-center"
                  >
                    <img
                      src={activeHotspot.image}
                      alt={activeHotspot.title}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-[#C8102E]">
                        {activeHotspot.category}
                      </p>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-snug">
                        {activeHotspot.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed mt-1 line-clamp-2">
                        {activeHotspot.desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Quick place switcher */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-zinc-800">
                  {mapHotspots.map((spot) => (
                    <button
                      key={spot.id}
                      type="button"
                      onClick={() => setActiveHotspot(spot)}
                      aria-pressed={activeHotspot.id === spot.id}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] ${
                        activeHotspot.id === spot.id
                          ? "bg-[#C8102E] text-white"
                          : "bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-zinc-700"
                      }`}
                    >
                      {spot.short}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- FULL MAP MODAL ---------- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Sandip University campus map"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl h-[85vh] bg-white dark:bg-zinc-900 rounded-[28px] overflow-hidden shadow-2xl border border-slate-200 dark:border-zinc-800 flex flex-col"
            >
              {/* Header */}
              <div className="px-5 sm:px-6 py-4 bg-slate-900 text-white flex items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 shrink-0 rounded-full bg-[#C8102E] flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-lg font-black leading-tight truncate">
                      Sandip University Nashik: campus map
                    </h3>
                    <span className="text-xs text-slate-400 hidden sm:block">
                      Academic blocks, labs, libraries, and sports complexes
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close map"
                  className="w-10 h-10 shrink-0 rounded-full bg-zinc-800 hover:bg-[#C8102E] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Filters */}
              <div className="px-5 sm:px-6 py-3 bg-slate-100 dark:bg-zinc-800/80 border-b border-slate-200 dark:border-zinc-700 flex items-center gap-2 overflow-x-auto shrink-0">
                <span className="text-xs font-bold text-slate-500 mr-1 flex items-center gap-1 shrink-0">
                  <Layers className="w-3.5 h-3.5" /> Show
                </span>
                {["All", "Academic", "Facilities", "Research"].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={activeCategory === cat}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold shrink-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] ${
                      activeCategory === cat
                        ? "bg-[#C8102E] text-white shadow-sm"
                        : "bg-white dark:bg-zinc-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Body */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
                <div className="lg:col-span-8 relative bg-slate-950 min-h-[220px]">
                  <img
                    src={campusAerial}
                    alt="Full aerial campus map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  {filteredHotspots.map((spot) => (
                    <Pin
                      key={spot.id}
                      spot={spot}
                      isActive={activeHotspot.id === spot.id}
                      onClick={() => setActiveHotspot(spot)}
                    />
                  ))}
                </div>

                <div className="lg:col-span-4 p-5 sm:p-6 bg-white dark:bg-zinc-900 flex flex-col justify-between overflow-y-auto border-l border-slate-200 dark:border-zinc-800">
                  <div>
                    <div className="relative h-[190px] rounded-2xl overflow-hidden mb-4 border border-slate-200 dark:border-zinc-700 shadow-md">
                      <img
                        src={activeHotspot.image}
                        alt={activeHotspot.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 text-[11px] font-bold text-[#C8102E]">
                        {activeHotspot.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 leading-snug">
                      {activeHotspot.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {activeHotspot.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-zinc-800">
                    <Link
                      to="/about"
                      onClick={() => setIsModalOpen(false)}
                      className="w-full py-3 px-4 rounded-xl bg-[#C8102E] hover:bg-red-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2"
                    >
                      View academic details
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}