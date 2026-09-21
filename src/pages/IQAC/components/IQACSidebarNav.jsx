import { Link, useLocation } from "react-router-dom";
import {
  Info,
  ShieldCheck,
  BookOpen,
  MessageSquare,
  Landmark,
  Leaf,
  FileText,
  Award,
  ChevronRight,
  Compass,
} from "lucide-react";

export const iqacPrimaryNavLinks = [
  { path: "/iqac/about", label: "About IQAC", icon: Info },
  { path: "/iqac/self-disclosure", label: "IIQA Self Disclosure", icon: ShieldCheck },
  { path: "/central-library", label: "Central Library", icon: BookOpen },
  { path: "/iqac/feedback-system", label: "Feedback System", icon: MessageSquare },
  { path: "/iqac/committees", label: "Committees", icon: Landmark },
  { path: "/iqac/sustainability", label: "Sustainability", icon: Leaf },
  { path: "/iqac/academic-policy", label: "Academic Policy", icon: FileText },
  { path: "/iqac/naac", label: "NAAC Accreditation", icon: Award },
];

export default function IQACSidebarNav() {
  const location = useLocation();

  return (
    <div className="bg-white dark:bg-[#1E1B18] rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm p-5 space-y-5 sticky top-[96px]">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-950/50 flex items-center justify-center text-[#C8102E] dark:text-red-400">
            <Compass size={18} />
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-[#1C1917] dark:text-[#F5F2EB]">
              IQAC Navigation
            </h3>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
              Quick Portal Sections
            </p>
          </div>
        </div>
        <span className="text-[10px] font-mono font-bold text-[#C8102E] dark:text-red-400 bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded-md uppercase">
          NAV
        </span>
      </div>

      {/* Navigation Links List */}
      <nav className="space-y-1">
        {iqacPrimaryNavLinks.map((item) => {
          const isActive = location.pathname === item.path;
          const IconComponent = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                group flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200
                ${
                  isActive
                    ? "bg-[#C8102E] text-white shadow-sm"
                    : "text-gray-700 dark:text-gray-300 hover:bg-red-50/70 dark:hover:bg-red-950/30 hover:text-[#C8102E] dark:hover:text-red-400"
                }
              `}
            >
              <div className="flex items-center gap-2.5 truncate">
                <IconComponent
                  size={16}
                  className={isActive ? "text-white flex-shrink-0" : "text-[#C8102E] dark:text-red-400 flex-shrink-0"}
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
                      : "text-gray-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:text-[#C8102E]"
                  }
                `}
              />
            </Link>
          );
        })}
      </nav>

      {/* Footer Callout */}
      <div className="pt-3 border-t border-gray-100 dark:border-gray-800 text-center">
        <Link
          to="/iqac"
          className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#C8102E] dark:text-red-400 hover:underline"
        >
          <span>View IQAC Main Landing</span>
          <ChevronRight size={13} />
        </Link>
      </div>
    </div>
  );
}
