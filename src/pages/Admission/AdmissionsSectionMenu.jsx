import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe,
  Sparkles,
  ArrowRight,
  FileEdit,
  BookOpen,
  FileText,
  IndianRupee,
  HelpCircle,
  Users,
  Phone,
} from "lucide-react";
import MagneticButton from "../../components/Animated/MagneticButton";
import SpotlightCard from "../../components/Animated/SpotlightCard";

const nationalLinks = [
  { title: "Apply Now", path: "/apply", icon: FileEdit, badge: "NEW ✦" },
  { title: "Programs", path: "/programs", icon: BookOpen },
  { title: "Document List", path: "/documents", icon: FileText },
  { title: "Scholarships", path: "/scholarships", icon: IndianRupee },
  { title: "Help Centre", path: "/help", icon: HelpCircle },
];

const intlLinks = [
  { title: "Overview", path: "/international-admission/overview", icon: Globe },
  { title: "How to Apply", path: "/international-admission/how-to-apply", icon: FileEdit, badge: "NEW ✦" },
  { title: "Programs", path: "/international-admission/programs", icon: BookOpen },
  { title: "International Partnerships", path: "/international-admission/partnerships", icon: Users },
  { title: "FAQs", path: "/international-admission/faqs", icon: HelpCircle },
  { title: "Contact Us", path: "/international-admission/contact", icon: Phone },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const columnVariantsLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const columnVariantsRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function AdmissionsSectionMenu({ className = "" }) {
  const location = useLocation();

  const getIconAnimation = (iconTitle) => {
    switch (iconTitle) {
      case "Apply Now":
        return "group-hover:-translate-y-1";
      case "Programs":
        return "group-hover:rotate-12";
      case "Scholarships":
        return "group-hover:scale-125";
      case "Help Centre":
      case "FAQs":
        return "group-hover:rotate-45";
      case "Overview":
        return "group-hover:rotate-180";
      case "International Partnerships":
        return "group-hover:scale-115";
      case "Contact Us":
        return "group-hover:translate-x-1";
      default:
        return "group-hover:scale-110";
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`w-full bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E7E7E9] shadow-xl overflow-hidden relative ${className}`}
    >
      {/* Ambient Red Sweep Background */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#C8102E]/5 rounded-full blur-3xl pointer-events-none" />

      {/* 1. Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-[#E7E7E9] gap-4 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C8102E] animate-ping" />
            <span className="text-[11px] font-black text-[#C8102E] tracking-[0.2em] uppercase">
              ADMISSIONS 2026–27
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B0B0D] tracking-tight font-serif">
            Admissions
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6B73] font-medium">
            Explore National & International admission pathways for 2026–27
          </p>
        </div>

        {/* Admissions Open Pill Button with Magnetic Hover & Shine */}
        <MagneticButton className="self-start sm:self-auto">
          <Link
            to="/apply"
            className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border-2 border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white font-extrabold text-xs tracking-wide shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Animated Shine Effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
            <Sparkles size={14} className="text-[#C8102E] group-hover:text-white transition-colors animate-pulse" />
            <span>Admissions Open 2026–27</span>
          </Link>
        </MagneticButton>
      </div>

      {/* 2. Main 2-Column Menu Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
        
        {/* LEFT COLUMN: NATIONAL ADMISSION */}
        <motion.div variants={columnVariantsLeft} className="space-y-4">
          
          {/* Column Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#C8102E]/20">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E] animate-pulse" />
              <GraduationCap size={18} className="text-[#C8102E]" />
              <h3 className="font-black text-[#0B0B0D] uppercase text-xs tracking-widest">
                NATIONAL ADMISSION MENU
              </h3>
            </div>
            <span className="text-[10px] font-black text-[#C8102E] bg-[#FFF1F3] px-2.5 py-0.5 rounded-full border border-red-200 uppercase tracking-wider">
              INDIAN CAMPUSES
            </span>
          </div>

          {/* National Links List */}
          <div className="space-y-2.5">
            {nationalLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              const IconComp = link.icon;
              const iconAnim = getIconAnimation(link.title);

              return (
                <Link
                  key={idx}
                  to={link.path}
                  className="block group"
                >
                  <SpotlightCard
                    className={`relative flex items-center justify-between py-3 px-4 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                      isActive
                        ? "bg-[#FFF1F3] border-l-4 border-l-[#C8102E] border-[#E7E7E9] shadow-md"
                        : "bg-[#FFFFFF] border-[#E7E7E9] hover:bg-[#FFF1F3] hover:border-l-4 hover:border-l-[#C8102E] hover:translate-x-1.5 hover:shadow-lg"
                    }`}
                  >
                    {/* Left Icon + Text */}
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 shadow-2xs ${
                          isActive
                            ? "bg-[#C8102E] text-white"
                            : "bg-[#F8F8F6] text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white"
                        }`}
                      >
                        <IconComp size={18} className={`transition-transform duration-300 ${iconAnim}`} />
                      </div>

                      <span
                        className={`font-bold text-sm transition-colors ${
                          isActive ? "text-[#C8102E]" : "text-[#15151A] group-hover:text-[#C8102E]"
                        }`}
                      >
                        {link.title}
                      </span>
                    </div>

                    {/* Right side: Badge + Arrow */}
                    <div className="flex items-center gap-2.5">
                      {link.badge && (
                        <span className="bg-[#C8102E] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs animate-pulse">
                          {link.badge}
                        </span>
                      )}

                      <ArrowRight
                        size={16}
                        className={`text-[#C8102E] transition-all duration-300 ${
                          isActive ? "translate-x-1 opacity-100" : "opacity-60 group-hover:opacity-100 group-hover:translate-x-2"
                        }`}
                      />
                    </div>
                  </SpotlightCard>
                </Link>
              );
            })}
          </div>

        </motion.div>

        {/* RIGHT COLUMN: INTERNATIONAL ADMISSION */}
        <motion.div variants={columnVariantsRight} className="space-y-4">
          
          {/* Column Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#C8102E]/20">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E] animate-pulse" />
              <Globe size={18} className="text-[#C8102E]" />
              <h3 className="font-black text-[#0B0B0D] uppercase text-xs tracking-widest">
                INTERNATIONAL ADMISSION MENU
              </h3>
            </div>
            <span className="text-[10px] font-black text-[#C8102E] bg-[#FFF1F3] px-2.5 py-0.5 rounded-full border border-red-200 uppercase tracking-wider">
              GLOBAL CAMPUSES
            </span>
          </div>

          {/* International Links List */}
          <div className="space-y-2.5">
            {intlLinks.map((link, idx) => {
              const isActive = location.pathname === link.path;
              const IconComp = link.icon;
              const iconAnim = getIconAnimation(link.title);

              return (
                <Link
                  key={idx}
                  to={link.path}
                  className="block group"
                >
                  <SpotlightCard
                    className={`relative flex items-center justify-between py-3 px-4 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                      isActive
                        ? "bg-[#FFF1F3] border-l-4 border-l-[#C8102E] border-[#E7E7E9] shadow-md"
                        : "bg-[#FFFFFF] border-[#E7E7E9] hover:bg-[#FFF1F3] hover:border-l-4 hover:border-l-[#C8102E] hover:translate-x-1.5 hover:shadow-lg"
                    }`}
                  >
                    {/* Left Icon + Text */}
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 flex-shrink-0 shadow-2xs ${
                          isActive
                            ? "bg-[#C8102E] text-white"
                            : "bg-[#F8F8F6] text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white"
                        }`}
                      >
                        <IconComp size={18} className={`transition-transform duration-300 ${iconAnim}`} />
                      </div>

                      <span
                        className={`font-bold text-sm transition-colors ${
                          isActive ? "text-[#C8102E]" : "text-[#15151A] group-hover:text-[#C8102E]"
                        }`}
                      >
                        {link.title}
                      </span>
                    </div>

                    {/* Right side: Badge + Arrow */}
                    <div className="flex items-center gap-2.5">
                      {link.badge && (
                        <span className="bg-[#C8102E] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs animate-pulse">
                          {link.badge}
                        </span>
                      )}

                      <ArrowRight
                        size={16}
                        className={`text-[#C8102E] transition-all duration-300 ${
                          isActive ? "translate-x-1 opacity-100" : "opacity-60 group-hover:opacity-100 group-hover:translate-x-2"
                        }`}
                      />
                    </div>
                  </SpotlightCard>
                </Link>
              );
            })}
          </div>

        </motion.div>

      </div>
    </motion.div>
  );
}
