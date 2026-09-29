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
} from "lucide-react";

export const iqacPrimaryNavLinks = [
  { path: "/iqac", label: "About IQAC", icon: Info },
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

export default function IQACSidebarNav() {
  const location = useLocation();

  return (
    <div className="bg-[#FFFDFC] dark:bg-[#1E1B18] rounded-2xl border border-[#EBD8C7] dark:border-stone-800 shadow-2xs p-5 space-y-4 sticky top-[96px]">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#EBD8C7]/70 dark:border-stone-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#FBE8E7] dark:bg-red-950/50 border border-[#E8CFA3]/60 flex items-center justify-center text-[#C8102E] dark:text-red-400 font-bold">
            <Compass size={18} />
          </div>
          <div>
            <h3 className="text-base font-extrabold text-[#1C1917] dark:text-[#F5F2EB] tracking-tight">
              IQAC
            </h3>
            <p className="text-[11px] text-[#6D625F] dark:text-stone-400 font-medium">
              Navigation Menu
            </p>
          </div>
        </div>
        <span className="text-[10px] font-mono font-bold text-[#C8102E] dark:text-red-400 bg-[#FBE8E7] dark:bg-red-950/40 border border-[#E8CFA3]/60 px-2 py-0.5 rounded-md uppercase">
          MENU
        </span>
      </div>

      {/* Navigation Links List */}
      <nav className="space-y-1">
        {iqacPrimaryNavLinks.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.path === "/iqac" && location.pathname === "/iqac/about");
          const IconComponent = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200
                ${
                  isActive
                    ? "bg-[#FBE8E7] dark:bg-red-950/70 text-[#C8102E] dark:text-red-200 shadow-2xs border-l-4 border-[#C8102E] font-bold"
                    : "text-[#6D625F] dark:text-stone-300 hover:bg-[#FBE8E7]/60 dark:hover:bg-red-950/30 hover:text-[#C8102E] dark:hover:text-red-300"
                }
              `}
            >
              <div className="flex items-center gap-2.5 truncate">
                <IconComponent
                  size={16}
                  className={
                    isActive
                      ? "text-[#C8102E] dark:text-red-300 flex-shrink-0"
                      : "text-[#C8102E] dark:text-red-400 flex-shrink-0"
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
                      ? "text-[#C8102E] dark:text-red-300 translate-x-0.5"
                      : "text-stone-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-[#C8102E]"
                  }
                `}
              />
            </Link>
          );
        })}
      </nav>

      {/* Footer Callout */}
      <div className="pt-3 border-t border-[#EBD8C7]/70 dark:border-stone-800 text-center">
        <Link
          to="/iqac"
          className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#C8102E] dark:text-red-400 hover:underline"
        >
          <span>View IQAC Portal Main</span>
          <ChevronRight size={13} />
        </Link>
      </div>
    </div>
  );
}
