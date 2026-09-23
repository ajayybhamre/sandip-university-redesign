import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Info,
  Target,
  Users,
  Leaf,
  Compass,
  Landmark,
  FileText,
  ShieldCheck,
  FileSpreadsheet,
  BookOpen,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Shield,
  Layers,
  ChevronDown,
  Award,
} from "lucide-react";
import aboutImg from "../../../assets/images/about-entrance.jpg";

export const iqac12NavLinks = [
  { path: "/iqac/about", label: "About IQAC", icon: Info },
  { path: "/iqac/aims-objectives", label: "Aims & Objectives", icon: Target },
  { path: "/iqac/members", label: "Members & Composition", icon: Users },
  { path: "/iqac/sustainability", label: "Sustainability", icon: Leaf },
  { path: "/iqac/strategic-plan", label: "Strategic Plan", icon: Compass },
  { path: "/iqac/committees", label: "Committees", icon: Landmark },
  { path: "/iqac/minutes", label: "Minutes of the Meeting", icon: FileText },
  { path: "/iqac/self-disclosure", label: "IIQA Self Disclosure", icon: ShieldCheck },
  { path: "/iqac/public-disclosure", label: "Public Disclosure", icon: FileSpreadsheet },
  { path: "/iqac/academic-policy", label: "Academic Policy", icon: BookOpen },
  { path: "/iqac/feedback-system", label: "Feedback System", icon: MessageSquare },
  { path: "/iqac/institutional-distinctiveness", label: "Institutional Distinctiveness", icon: Sparkles },
];

export default function IQACCreativeCardNav() {
  const location = useLocation();
  const [mobileExpanded, setMobileExpanded] = useState(false);

  return (
    <div className="space-y-4 sticky top-[96px]">
      {/* Option 5: Premium Ivory & Gold Header Card */}
      <div className="bg-[#FFFCF5] dark:bg-[#1C1A17] rounded-2xl border border-[#EFE5D2] dark:border-amber-900/40 shadow-md p-4 relative overflow-hidden border-t-4 border-t-[#C9A227]">
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-0 right-0 w-28 h-28 bg-amber-400/10 rounded-full blur-xl pointer-events-none" />
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C8102E] text-white flex items-center justify-center font-black text-sm shadow-md flex-shrink-0 border border-red-700/50">
              IQAC
            </div>
            <div>
              <h3 className="text-base font-extrabold text-[#1F1F1F] dark:text-[#F8F3E8] leading-tight font-serif">
                IQAC Portal
              </h3>
              <p className="text-[11px] text-[#6B665E] dark:text-amber-200/70 font-medium">
                Internal Quality Assurance Cell
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold text-[#C9A227] bg-amber-50 dark:bg-amber-950/60 border border-[#C9A227]/40 px-2 py-0.5 rounded-md uppercase tracking-wider">
            NAV
          </span>
        </div>

        {/* Subtle Campus Thumbnail Visual */}
        <div className="relative rounded-xl overflow-hidden border border-[#EFE5D2] dark:border-amber-900/40 h-24 mt-2 group">
          <img
            src={aboutImg}
            alt="IQAC Quality Governance"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent flex items-end p-2.5">
            <div className="flex items-center justify-between w-full">
              <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
                <Award size={13} className="text-[#C9A227]" />
                <span>Quality Assurance Navigation</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Accordion Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setMobileExpanded(!mobileExpanded)}
          className="w-full bg-[#FFFCF5] dark:bg-[#1C1A17] rounded-xl border border-[#EFE5D2] dark:border-amber-900/40 p-3.5 flex items-center justify-between text-xs font-bold text-[#1F1F1F] dark:text-[#F8F3E8] shadow-sm border-t-2 border-t-[#C8102E]"
        >
          <span className="flex items-center gap-2">
            <Layers size={16} className="text-[#C8102E]" />
            <span>Explore IQAC Navigation ({iqac12NavLinks.length + 1} Pages)</span>
          </span>
          <ChevronDown
            size={16}
            className={`text-[#C9A227] transition-transform duration-200 ${mobileExpanded ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Navigation Card List (Always visible on Desktop, collapsible on Mobile) */}
      <div
        className={`
          bg-[#FFFCF5] dark:bg-[#1C1A17] rounded-2xl border border-[#EFE5D2] dark:border-amber-900/40 shadow-md p-3 space-y-1.5
          ${mobileExpanded ? "block" : "hidden lg:block"}
        `}
      >
        {/* Main IQAC Landing Link (Active state when on /iqac) */}
        <Link
          to="/iqac"
          className={`
            group relative flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 overflow-hidden
            ${
              location.pathname === "/iqac"
                ? "bg-[#C8102E] text-white shadow-md border-l-4 border-l-[#C9A227]"
                : "text-[#1F1F1F] dark:text-[#F8F3E8] hover:bg-[#F8F3E8] dark:hover:bg-amber-950/30 hover:text-[#C8102E] dark:hover:text-amber-400"
            }
          `}
        >
          <div className="flex items-center gap-2.5 truncate">
            <Shield
              size={16}
              className={
                location.pathname === "/iqac"
                  ? "text-[#C9A227] flex-shrink-0"
                  : "text-[#C8102E] dark:text-amber-500 flex-shrink-0"
              }
            />
            <span className="truncate">Internal Quality Assurance Cell (IQAC)</span>
          </div>
          <ChevronRight
            size={14}
            className={`
              flex-shrink-0 transition-transform duration-200
              ${
                location.pathname === "/iqac"
                  ? "text-white translate-x-0.5"
                  : "text-[#6B665E] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-[#C8102E]"
              }
            `}
          />
        </Link>

        {/* Thin Gold Separator */}
        <div className="my-1.5 border-t border-[#EFE5D2] dark:border-amber-900/30" />

        {/* 12 Sub-page Links */}
        {iqac12NavLinks.map((item) => {
          const isActive = location.pathname === item.path;
          const IconComponent = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                group relative flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 overflow-hidden
                ${
                  isActive
                    ? "bg-[#C8102E] text-white shadow-md border-l-4 border-l-[#C9A227]"
                    : "text-[#1F1F1F] dark:text-[#F8F3E8] hover:bg-[#F8F3E8] dark:hover:bg-amber-950/30 hover:text-[#C8102E] dark:hover:text-amber-400"
                }
              `}
            >
              <div className="flex items-center gap-2.5 truncate">
                <IconComponent
                  size={16}
                  className={
                    isActive
                      ? "text-[#C9A227] flex-shrink-0"
                      : "text-[#C8102E] dark:text-amber-500 flex-shrink-0"
                  }
                />
                <span className="truncate">{item.label}</span>
              </div>

              <ChevronRight
                size={14}
                className={`
                  flex-shrink-0 transition-transform duration-200
                  ${
                    isActive
                      ? "text-white translate-x-0.5"
                      : "text-[#6B665E] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-[#C8102E]"
                  }
                `}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
