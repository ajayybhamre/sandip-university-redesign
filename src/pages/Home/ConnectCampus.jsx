import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Sparkles, Users, Heart, Globe, Compass, X, Maximize2, Layers, MapPin, BookOpen } from "lucide-react";
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
    label: "Campus Stories & Reels",
    icon: FaInstagram,
    url: "https://www.instagram.com/sandip.university/",
    iconBg: "bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white shadow-md shadow-pink-500/25 border border-white/20",
    color: "hover:text-pink-600 dark:hover:text-pink-400",
  },
  {
    name: "YouTube",
    handle: "Sandip University",
    label: "Tours & Campus Life",
    icon: FaYoutube,
    url: "https://www.youtube.com/channel/UCDAaVM3kH_Jk7jgSaQj5xFw",
    iconBg: "bg-gradient-to-br from-red-500 to-[#C8102E] text-white shadow-md shadow-red-500/25 border border-white/20",
    color: "hover:text-red-600 dark:hover:text-red-400",
  },
  {
    name: "Facebook",
    handle: "Sandip University",
    label: "Events & Announcements",
    icon: FaFacebookF,
    url: "https://www.facebook.com/SandipUniversity/",
    iconBg: "bg-gradient-to-br from-blue-600 to-[#1877F2] text-white shadow-md shadow-blue-600/25 border border-white/20",
    color: "hover:text-blue-700 dark:hover:text-blue-400",
  },
  {
    name: "Twitter / X",
    handle: "@sandipuniv",
    label: "Updates & News",
    icon: FaTwitter,
    url: "https://twitter.com/sandipuniv",
    iconBg: "bg-gradient-to-br from-slate-800 to-black text-white shadow-md shadow-slate-900/25 border border-white/20",
    color: "hover:text-slate-900 dark:hover:text-slate-200",
  },
  {
    name: "Website",
    handle: "sandipuniversity.edu.in",
    label: "Official University Portal",
    icon: Globe,
    url: "https://www.sandipuniversity.edu.in/",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-md shadow-teal-500/25 border border-white/20",
    color: "hover:text-teal-600 dark:hover:text-teal-400",
  },
  {
    name: "Informative Blogs",
    handle: "sandipuniversity.edu.in/blog",
    label: "Articles, Guides & Insights",
    icon: BookOpen,
    url: "https://www.sandipuniversity.edu.in/blog/",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/25 border border-white/20",
    color: "hover:text-amber-600 dark:hover:text-amber-400",
  },
];

const socialStats = [
  { value: "48K", label: "Followers" },
  { value: "250K", label: "Likes" },
  { value: "120+", label: "Clubs & Events" },
  { value: "2.8M", label: "Reach" },
];

const mapHotspots = [
  { 
    id: 1, 
    title: "School of Engineering & Technology", 
    category: "Academic", 
    position: "top-[25%] left-[20%]", 
    image: handsOnImage, 
    desc: "State-of-the-art technical laboratories, robotics centers, and mechanical workshops." 
  },
  { 
    id: 2, 
    title: "Central Library & Resource Hub", 
    category: "Facilities", 
    position: "top-[38%] left-[55%]", 
    image: campusHeroImage, 
    desc: "Multi-storey digital library housing 100,000+ volumes, e-journals, and quiet study zones." 
  },
  { 
    id: 3, 
    title: "Sandip Incubation & Startup Cell", 
    category: "Research", 
    position: "top-[65%] left-[30%]", 
    image: researchImage, 
    desc: "Recognized incubation hub offering prototyping labs, seed funding, and patent support." 
  },
  { 
    id: 4, 
    title: "Sports Complex & Stadium", 
    category: "Facilities", 
    position: "top-[75%] left-[70%]", 
    image: campus1Image, 
    desc: "Olympic-standard sports facilities, cricket ground, football stadium, and indoor badminton arenas." 
  },
];

export default function ConnectCampus() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState(mapHotspots[0]);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredHotspots = mapHotspots.filter((spot) => 
    activeCategory === "All" || spot.category === activeCategory
  );

  return (
    <section id="connect-campus" className="py-16 lg:py-24 bg-[#FAF8F5] dark:bg-zinc-950 transition-colors duration-300 overflow-hidden border-t border-slate-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE: Heading & 3D Styled Social Links */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200/80 dark:border-red-900/40 text-[10px] sm:text-[11px] font-bold text-[#C8102E] uppercase tracking-wider mb-3 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#C8102E]" />
              <span>CAMPUS & COMMUNITY</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-3">
              Connect With <span className="text-[#C8102E]">Our Campus</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-xs sm:text-sm lg:text-[15px] max-w-[540px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-5">
              Explore campus life, stay connected and discover what makes the Sandip community special.
            </p>

            {/* Vibrant 3D Social Platform Links List */}
            <div className="divide-y divide-slate-200/80 dark:divide-zinc-800 border-t border-b border-slate-200/80 dark:border-zinc-800 mb-8">
              {socialLinks.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`py-3.5 flex items-center justify-between group transition-colors ${item.color}`}
                  >
                    <div className="flex items-center gap-3.5">
                      {/* 3D Styled Gradient Icon Badge */}
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${item.iconBg}`}>
                        <IconComp className="w-4 h-4 drop-shadow-sm" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight group-hover:text-[#C8102E] transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                          {item.label}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-[#C8102E] transition-colors">
                      <span className="text-xs font-bold hidden sm:inline">{item.handle}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Bottom Metrics Bar */}
            <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-200/60 dark:border-zinc-800">
              {socialStats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <span className="text-xl sm:text-2xl font-black text-[#C8102E] tracking-tight block">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE: FEATURED CAMPUS LIFE VISUAL SHOWCASE — CONNECTED TO 3D CAMPUS MAP */}
          <div className="lg:col-span-6 relative pt-6">
            <div 
              onClick={() => setIsModalOpen(true)}
              className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-200/90 dark:border-zinc-800 bg-slate-950 group h-[380px] sm:h-[420px] cursor-pointer"
            >
              {/* Aerial Panoramic Campus Background Image */}
              <img
                src={campusAerial}
                alt="Sandip University Campus Life Aerial View"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.95]"
              />

              {/* Lush Dark Gradient Overlays for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none"></div>

              {/* 1. TOP-LEFT FLOATING GLASS CARD: 120K+ Followers */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-xl flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-[#C8102E] flex items-center justify-center text-white shadow-md">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-black text-slate-900 dark:text-white leading-none block">
                    120K+
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 block">
                    Followers
                  </span>
                </div>
              </div>

              {/* 2. TOP-RIGHT FLOATING GLASS CARD: 250K+ Likes */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-xl flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-[#C8102E] flex items-center justify-center text-white shadow-md">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-sm font-black text-slate-900 dark:text-white leading-none block">
                    250K+
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 block">
                    Likes
                  </span>
                </div>
              </div>

              {/* 3. CENTER FLOATING GLASS CARD: 35+ Countries */}
              <div className="absolute top-[36%] left-[18%] sm:left-[24%] z-20 px-5 py-3 rounded-2xl bg-white/85 dark:bg-zinc-900/85 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl flex items-center gap-3.5 transition-transform duration-300 hover:scale-105">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-[#C8102E] flex items-center justify-center text-white shadow-md">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-base font-black text-slate-900 dark:text-white leading-none block">
                    35+ Countries
                  </span>
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 block">
                    International Students
                  </span>
                </div>
              </div>

              {/* 4. BOTTOM OVERLAY CONTENT & INTERACTIVE 3D CAMPUS MAP TRIGGER */}
              <div className="absolute bottom-6 left-6 right-6 z-20 text-white flex items-end justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C8102E] text-white text-xs font-bold tracking-wide uppercase mb-2 shadow-md">
                    <Compass className="w-3.5 h-3.5" />
                    <span>3D CAMPUS MAP</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-1 drop-shadow-md">
                    Campus Life
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed max-w-md drop-shadow-sm">
                    Explore student experiences, cultural events, campus festivals & interactive 3D map.
                  </p>
                </div>

                <div className="shrink-0 px-4 py-2 rounded-full bg-white/90 dark:bg-zinc-900/90 text-slate-900 dark:text-white text-xs font-extrabold shadow-xl flex items-center gap-1.5 group-hover:bg-[#C8102E] group-hover:text-white transition-all">
                  <span>Open 3D Map</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* FULL 3D INTERACTIVE CAMPUS TOUR MAP OVERLAY MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-300">
          
          <div className="relative w-full max-w-6xl h-[85vh] bg-white dark:bg-zinc-900 rounded-[32px] overflow-hidden shadow-2xl border border-slate-200 dark:border-zinc-800 flex flex-col">
            
            {/* Modal Top Header Bar */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#C8102E] flex items-center justify-center text-white">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white leading-none">
                    Sandip University Nashik — 250+ Acre Aerial Campus Tour Map
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">
                    Explore all academic blocks, labs, libraries, hostels & sports complexes
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-[#C8102E] text-slate-200 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Categories Bar */}
            <div className="px-6 py-3 bg-slate-100 dark:bg-zinc-800/80 border-b border-slate-200 dark:border-zinc-700 flex items-center gap-2 overflow-x-auto shrink-0">
              <span className="text-xs font-extrabold uppercase text-slate-500 mr-2 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" /> Filter:
              </span>
              {["All", "Academic", "Facilities", "Research"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#C8102E] text-white shadow-sm"
                      : "bg-white dark:bg-zinc-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-zinc-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Modal Body: Left Map Canvas + Right Location Inspector */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
              
              {/* Map Canvas */}
              <div className="lg:col-span-8 relative bg-slate-950 h-full">
                <img
                  src={campusAerial}
                  alt="Full Aerial Campus Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>

                {/* Hotspots */}
                {filteredHotspots.map((spot) => (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(spot)}
                    className={`absolute ${spot.position} z-20 transition-transform duration-300 hover:scale-125 cursor-pointer`}
                  >
                    <span className="relative flex h-8 w-8 items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${activeHotspot.id === spot.id ? "bg-[#C8102E]" : "bg-amber-400"}`}></span>
                      <span className={`relative inline-flex rounded-full h-6 w-6 items-center justify-center text-white text-xs font-bold shadow-md ${activeHotspot.id === spot.id ? "bg-[#C8102E]" : "bg-slate-900"}`}>
                        <MapPin className="w-3.5 h-3.5" />
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              {/* Inspector Panel */}
              <div className="lg:col-span-4 p-6 bg-white dark:bg-zinc-900 flex flex-col justify-between overflow-y-auto border-l border-slate-200 dark:border-zinc-800">
                <div>
                  <div className="relative h-[200px] rounded-2xl overflow-hidden mb-4 border border-slate-200 dark:border-zinc-700 shadow-md">
                    <img
                      src={activeHotspot.image}
                      alt={activeHotspot.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 text-[10px] font-black uppercase text-[#C8102E]">
                      {activeHotspot.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 leading-snug">
                    {activeHotspot.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6">
                    {activeHotspot.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-zinc-800">
                  <Link
                    to="/about"
                    onClick={() => setIsModalOpen(false)}
                    className="w-full py-3 px-4 rounded-xl bg-[#C8102E] hover:bg-red-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <span>View Academic Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}
