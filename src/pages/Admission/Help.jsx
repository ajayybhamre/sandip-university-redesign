import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import SpotlightCard from "../../components/Animated/SpotlightCard";
import TiltCard from "../../components/Animated/TiltCard";
import MagneticButton from "../../components/Animated/MagneticButton";
import CharacterReveal from "../../components/Animated/CharacterReveal";
import { HELP_CATEGORIES } from "./helpData";
import {
  Search,
  ChevronDown,
  Mail,
  Phone,
  Clock,
  MessageSquare,
  Sparkles,
  HelpCircle,
  FileEdit,
  BookOpen,
  FileText,
  Medal,
  CheckCircle2,
  Send
} from "lucide-react";

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedFaqId, setExpandedFaqId] = useState(null);

  // Form state for inquiry
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Filtered FAQs based on search and selected category
  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return HELP_CATEGORIES.map((cat) => {
      if (activeCategory !== "all" && cat.id !== activeCategory) {
        return { ...cat, faqs: [] };
      }

      const matchingFaqs = cat.faqs.filter((faq) => {
        return !q || faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q);
      });

      return {
        ...cat,
        faqs: matchingFaqs
      };
    }).filter((cat) => cat.faqs.length > 0);
  }, [searchQuery, activeCategory]);

  const totalResultsCount = filteredCategories.reduce((acc, cat) => acc + cat.faqs.length, 0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setFormSubmitted(false);
      }, 4000);
    }
  };

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "FileEdit":
        return <FileEdit size={20} className="text-[#C8102E]" />;
      case "BookOpen":
        return <BookOpen size={20} className="text-[#C8102E]" />;
      case "FileText":
        return <FileText size={20} className="text-[#C8102E]" />;
      case "Medal":
        return <Medal size={20} className="text-[#C8102E]" />;
      default:
        return <HelpCircle size={20} className="text-[#C8102E]" />;
    }
  };

  return (
    <>
      <SEO
        title="Admissions Help & Support Center | Sandip University"
        description="Comprehensive admissions helpdesk for Sandip University. Search answers on applications, eligibility, required documents, scholarships, and portal queries."
      />

      <Header />

      <main className="bg-[#FAF8F5] dark:bg-[#0c0c0d] text-slate-900 dark:text-white min-h-screen font-sans selection:bg-[#C8102E] selection:text-white pt-20">

        {/* ==========================================
            1. HERO SECTION WITH LIVE SEARCH BAR
        ========================================== */}
        <section className="relative w-full bg-gradient-to-b from-[#FAF8F5] via-white to-slate-100 dark:from-[#0c0c0d] dark:via-[#121215] dark:to-[#0c0c0d] py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-zinc-800 overflow-hidden text-center">
          
          {/* Ambient Crimson Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/40 text-xs font-bold text-[#C8102E] dark:text-red-400 uppercase tracking-wider shadow-2xs">
              <Sparkles size={14} className="text-[#C8102E] dark:text-red-400" />
              <span>ADMISSIONS HELPDESK 2026–27</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Help & <span className="text-[#C8102E]">Support Center</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
              Find quick answers to common questions about admissions, eligibility, documents, scholarships, and campus life.
            </p>

            {/* Interactive Live Search Box */}
            <div className="relative max-w-2xl mx-auto pt-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type your question (e.g., eligibility, documents, fee payment)..."
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-slate-200/90 dark:border-zinc-800 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 focus:outline-none focus:border-[#C8102E] shadow-xl transition-all"
              />
              <Search
                size={20}
                className="absolute left-4 top-[58%] -translate-y-1/2 text-slate-400 dark:text-gray-400 pointer-events-none"
              />
            </div>
          </div>
        </section>

        {/* ==========================================
            2. CATEGORY TILES (Spotlight & Tilt Cards)
        ========================================== */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-zinc-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            <TiltCard>
              <SpotlightCard
                onClick={() => setActiveCategory("all")}
                className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${
                  activeCategory === "all"
                    ? "bg-slate-900 dark:bg-zinc-800 text-white border-slate-900 dark:border-zinc-700 shadow-xl"
                    : "bg-white dark:bg-zinc-900 text-slate-900 dark:text-white border-slate-200 dark:border-zinc-800 hover:border-[#C8102E]"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] dark:text-red-400 flex items-center justify-center mb-3">
                  <HelpCircle size={20} />
                </div>
                <h3 className="font-extrabold text-sm sm:text-base">All Topics</h3>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 font-medium">Complete Knowledgebase</p>
              </SpotlightCard>
            </TiltCard>

            {HELP_CATEGORIES.map((cat) => (
              <TiltCard key={cat.id}>
                <SpotlightCard
                  onClick={() => setActiveCategory(cat.id)}
                  className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-[#C8102E] text-white border-[#C8102E] shadow-xl"
                      : "bg-white dark:bg-zinc-900 text-slate-900 dark:text-white border-slate-200 dark:border-zinc-800 hover:border-[#C8102E]"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] dark:text-red-400 flex items-center justify-center mb-3">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base">{cat.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 font-medium">{cat.faqs.length} Questions</p>
                </SpotlightCard>
              </TiltCard>
            ))}

          </div>
        </section>

        {/* ==========================================
            3. FAQ KNOWLEDGEBASE RESULTS
        ========================================== */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-zinc-800 pb-4">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Knowledgebase Articles
            </h2>
            <span className="text-xs font-bold text-[#C8102E] dark:text-red-400 bg-red-50 dark:bg-red-950/50 px-3 py-1 rounded-full border border-red-100 dark:border-red-900/40">
              Found {totalResultsCount} Articles
            </span>
          </div>

          <div className="space-y-8">
            {filteredCategories.map((cat) => (
              <div key={cat.id} className="space-y-4">
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white flex items-center gap-2 border-l-4 border-[#C8102E] pl-3">
                  <span>{cat.title}</span>
                </h3>

                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/90 dark:border-zinc-800 divide-y divide-slate-100 dark:divide-zinc-800 overflow-hidden shadow-md">
                  {cat.faqs.map((faq) => {
                    const isOpen = expandedFaqId === faq.id;
                    return (
                      <div key={faq.id} className="p-5">
                        <button
                          onClick={() => setExpandedFaqId(isOpen ? null : faq.id)}
                          className="w-full text-left flex items-center justify-between gap-4 text-sm font-bold text-slate-900 dark:text-white hover:text-[#C8102E] dark:hover:text-red-400 transition-colors cursor-pointer"
                        >
                          <span className="flex items-center gap-2.5">
                            <HelpCircle size={16} className="text-[#C8102E] dark:text-red-400 flex-shrink-0" />
                            <span>{faq.q}</span>
                          </span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180 text-[#C8102E] dark:text-red-400" : ""}`}
                          />
                        </button>

                        {isOpen && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed pl-7 font-medium"
                          >
                            {faq.a}
                          </motion.p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ==========================================
            4. DIRECT SUPPORT CONTACT FORM
        ========================================== */}
        <section className="py-20 bg-white dark:bg-zinc-900 border-t border-slate-200 dark:border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E] dark:text-red-400">
                STILL HAVE QUESTIONS?
              </span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                Contact Admissions Support
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 font-medium">
                Our support team will get back to you within 24 business hours.
              </p>
            </div>

            <SpotlightCard className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/80 border border-slate-200/90 dark:border-zinc-700 shadow-xl">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">Query Submitted</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 max-w-md mx-auto font-medium">
                    Thank you! An admissions counselor will reach out to your registered email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 dark:text-gray-300 mb-2">
                        Full Name <span className="text-[#C8102E] dark:text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 dark:text-gray-300 mb-2">
                        Email Address <span className="text-[#C8102E] dark:text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-[#C8102E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 dark:text-gray-300 mb-2">
                      Your Query <span className="text-[#C8102E] dark:text-red-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please enter your detailed question..."
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-slate-900 dark:text-white text-xs sm:text-sm font-medium focus:outline-none focus:border-[#C8102E]"
                    />
                  </div>

                  <MagneticButton className="w-full">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#C8102E] hover:bg-red-700 text-white font-bold text-sm shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Query</span>
                      <Send size={16} />
                    </button>
                  </MagneticButton>
                </form>
              )}
            </SpotlightCard>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
