import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, ShieldCheck } from "lucide-react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer";
import SEO from "../../../components/SEO/SEO";

export const iqacNavLinks = [
  { path: "/iqac", label: "IQAC Home", short: "Overview" },
  { path: "/iqac", label: "About IQAC", short: "About" },
  { path: "/iqac/aims-objectives", label: "Aims & Objectives", short: "Objectives" },
  { path: "/iqac/members", label: "Members & Composition", short: "Members" },
  { path: "/iqac/sustainability", label: "Sustainability", short: "Green Campus" },
  { path: "/iqac/strategic-plan", label: "Strategic Plan", short: "Plan 2025-30" },
  { path: "/iqac/committees", label: "Committees", short: "Committees" },
  { path: "/iqac/minutes", label: "Minutes of Meeting", short: "Minutes" },
  { path: "/iqac/self-disclosure", label: "IIQA Self Disclosure", short: "IIQA Disclosure" },
  { path: "/iqac/public-disclosure", label: "Public Disclosure", short: "Disclosures" },
  { path: "/iqac/naac", label: "NAAC Accreditation", short: "NAAC" },
  { path: "/iqac/academic-policy", label: "Academic Policy", short: "Policy" },
  { path: "/iqac/feedback-system", label: "Feedback System", short: "Feedback" },
  { path: "/iqac/institutional-distinctiveness", label: "Distinctiveness", short: "Distinctiveness" },
  { path: "/central-library", label: "Central Library", short: "Library" },
];

export default function IQACSubPageLayout({
  seo,
  badge = "INTERNAL QUALITY ASSURANCE CELL",
  title,
  subtitle,
  hideSubNav = false,
  children,
}) {
  const location = useLocation();

  return (
    <>
      {seo && <SEO {...seo} />}
      <Header />

      <main className="min-h-screen bg-[#FFFDF9] dark:bg-[#141210] font-sans antialiased selection:bg-[#C8102E] selection:text-white">
        
        {/* Banner Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F5F0E6] dark:from-[#141210] dark:via-[#1A1815] dark:to-[#161412] pt-8 pb-12 border-b border-[#EAE3D7] dark:border-[#2C2720]">
          {/* Background Lighting Accents */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 rounded-full bg-red-600/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

          <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
            {/* Breadcrumb */}
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-6 flex-wrap"
            >
              <Link to="/" className="hover:text-[#C8102E] dark:hover:text-red-400 transition-colors">
                Home
              </Link>
              <ChevronRight size={14} className="text-gray-400" />
              <Link to="/iqac" className="hover:text-[#C8102E] dark:hover:text-red-400 transition-colors">
                IQAC
              </Link>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-[#C8102E] dark:text-red-400 font-semibold">{title}</span>
            </motion.nav>

            {/* Banner Content */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#201C18] border border-amber-300/60 dark:border-amber-700/40 text-xs font-bold uppercase tracking-wider text-[#92400E] dark:text-amber-400 shadow-sm mb-4">
                <Sparkles size={14} className="text-amber-500" />
                <span>{badge}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1917] dark:text-[#F5F2EB] tracking-tight leading-tight mb-3">
                {title}
              </h1>

              {/* Short Red Underline / Accent */}
              <div className="w-16 h-1 bg-[#C8102E] rounded-full mb-4" />

              {subtitle && (
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                  {subtitle}
                </p>
              )}
            </motion.div>
          </div>
        </section>

        {/* Sticky Sub-Navigation Switcher Bar */}
        {!hideSubNav && (
          <div className="sticky top-[80px] z-30 bg-white/95 dark:bg-[#161411]/95 backdrop-blur-md border-b border-[#EAE3D7] dark:border-[#2C2720] shadow-xs">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
              <div className="flex items-center gap-1.5 overflow-x-auto py-3 no-scrollbar">
                <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest px-2 hidden lg:inline flex-shrink-0 font-mono">
                  NAVIGATE IQAC:
                </span>
                {iqacNavLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                        isActive
                          ? "bg-[#C8102E] text-white shadow-sm scale-105"
                          : "bg-gray-100 dark:bg-[#201C18] text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-[#C8102E]"
                      }`}
                    >
                      {link.short}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Main Body Content */}
        <div className="py-12 lg:py-16">
          <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
            {children}
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
