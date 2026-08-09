import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, ChevronRight, HelpCircle, Sparkles, X } from "lucide-react";
import "./FAQHero.css";

export default function FAQHero({ searchQuery, setSearchQuery }) {
  return (
    <section className="faq-hero pt-28 pb-16 lg:pt-36 lg:pb-20 bg-gradient-to-b from-[#FAF8F5] via-white to-slate-50 text-slate-900 overflow-hidden relative border-b border-slate-200/60">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center relative z-10">
        
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 mb-6"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/international-admission/overview" className="hover:text-orange-600 transition-colors">International</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-orange-600">FAQs</span>
        </motion.nav>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 font-semibold text-xs tracking-wider uppercase mb-5 shadow-2xs mx-auto"
        >
          <HelpCircle className="w-3.5 h-3.5 text-orange-500" />
          <span>INTERNATIONAL STUDENT SUPPORT</span>
          <Sparkles className="w-3 h-3 text-orange-400" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6"
        >
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500">Questions</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl mx-auto text-balance"
        >
          Everything you need to know about studying, applying and living at Sandip University as an international student.
        </motion.p>

        {/* Compact Live Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative max-w-xl mx-auto"
        >
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search admission, visa, hostel, fees..."
            className="w-full pl-12 pr-12 py-4 rounded-2xl bg-white border border-slate-200 text-base font-medium text-slate-900 placeholder:text-slate-400 shadow-lg shadow-slate-200/50 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </motion.div>

      </div>
    </section>
  );
}
