import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
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
        title="Help & Support Center | Sandip University"
        description="Comprehensive admissions helpdesk for Sandip University. Search questions on applications, eligibility, documents, scholarships, and portal support."
      />

      <Header />

      <main className="bg-[#FFFFFF] text-[#0C0C0D] min-h-screen font-sans selection:bg-[#C8102E] selection:text-white pt-20">

        {/* ==========================================
            1. HERO SECTION WITH SEARCH BAR
        ========================================== */}
        <section className="relative w-full bg-gradient-to-b from-[#FFFFFF] via-[#FFF5F5] to-[#FFFFFF] py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 overflow-hidden text-center">
          {/* Subtle Ambient Red Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-[#C8102E]/10 via-[#0C0C0D]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-4xl mx-auto relative z-10 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[8px] bg-white border border-slate-200 text-xs font-semibold text-[#0C0C0D] shadow-2xs"
            >
              <Sparkles size={14} className="text-[#C8102E]" />
              <span>Admissions Help Desk 2026–27</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-bold font-serif text-[#0C0C0D] tracking-tight leading-tight"
            >
              Help & Support Center
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto font-normal leading-relaxed"
            >
              Find instant answers to common questions about admissions, academic programs, document checklists, and scholarship schemes.
            </motion.p>

            {/* Instant Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="max-w-2xl mx-auto pt-2"
            >
              <div className="relative flex items-center">
                <Search className="absolute left-4 text-[#64748B]" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search help topics by keyword (e.g. eligibility, hostel, fees, certificate)..."
                  className="w-full pl-12 pr-4 py-4 rounded-[12px] bg-white border-2 border-slate-200 text-sm text-[#0C0C0D] placeholder-[#64748B] focus:border-[#C8102E] focus:outline-none focus:ring-4 focus:ring-[#C8102E]/10 transition-all shadow-md"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 text-xs font-bold text-[#64748B] hover:text-[#C8102E]"
                  >
                    CLEAR
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="text-xs text-[#64748B] text-left mt-2 pl-2">
                  Showing {totalResultsCount} matching questions for "{searchQuery}"
                </p>
              )}
            </motion.div>

          </div>
        </section>

        {/* ==========================================
            2. CATEGORY SELECTOR CHIPS
        ========================================== */}
        <section className="py-6 border-b border-slate-200 bg-white sticky top-20 z-20 shadow-2xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-[8px] text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#C8102E] text-white shadow-2xs"
                  : "bg-slate-100 text-[#0C0C0D] hover:bg-slate-200"
              }`}
            >
              All Topics ({HELP_CATEGORIES.reduce((acc, cat) => acc + cat.faqs.length, 0)})
            </button>
            {HELP_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-[8px] text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#C8102E] text-white shadow-2xs"
                    : "bg-slate-100 text-[#0C0C0D] hover:bg-slate-200"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </section>

        {/* ==========================================
            3. HELP CATEGORIES & FAQS (MAIN CONTENT)
        ========================================== */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {filteredCategories.length === 0 ? (
            <div className="p-12 text-center bg-slate-50 rounded-[12px] border border-slate-200 space-y-3">
              <HelpCircle size={40} className="mx-auto text-[#64748B]" />
              <h3 className="text-xl font-bold font-serif text-[#0C0C0D]">No Help Topics Found</h3>
              <p className="text-sm text-[#64748B] max-w-md mx-auto">
                No questions matched your search term "{searchQuery}". Try searching for another keyword or reach out directly to our admissions team.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-5 py-2.5 rounded-[8px] bg-[#C8102E] text-white text-xs font-semibold shadow-2xs cursor-pointer"
              >
                Reset Search Filter
              </button>
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-[12px] border border-slate-200 shadow-2xs overflow-hidden"
              >
                {/* Category Header */}
                <div className="p-6 sm:p-8 bg-slate-50/80 border-b border-slate-200 flex items-center gap-4">
                  <div className="p-3 rounded-[10px] bg-white border border-slate-200 flex-shrink-0 shadow-2xs">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold font-serif text-[#0C0C0D]">
                      {cat.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* FAQ List Accordions */}
                <div className="divide-y divide-slate-200">
                  {cat.faqs.map((faq, idx) => {
                    const uniqueFaqKey = `${cat.id}-${idx}`;
                    const isOpen = expandedFaqId === uniqueFaqKey;

                    return (
                      <div key={idx} className="p-5 sm:p-6 transition-colors hover:bg-slate-50/50">
                        <button
                          onClick={() => setExpandedFaqId(isOpen ? null : uniqueFaqKey)}
                          className="w-full text-left flex items-start justify-between gap-4 text-xs sm:text-sm font-semibold text-[#0C0C0D] hover:text-[#C8102E] transition-colors cursor-pointer"
                        >
                          <span className="leading-snug">{faq.q}</span>
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-200 flex-shrink-0 mt-0.5 ${
                              isOpen ? "rotate-180 text-[#C8102E]" : "text-[#64748B]"
                            }`}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <p className="mt-3 text-xs sm:text-sm text-[#64748B] leading-relaxed pt-2 border-t border-slate-100">
                                {faq.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

              </div>
            ))
          )}

        </section>

        {/* ==========================================
            4. CONTACT & LIVE INQUIRY SECTION
        ========================================== */}
        <section className="py-16 bg-slate-100/70 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C8102E]">
                Direct Contact
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif text-[#0C0C0D]">
                Still Have Questions?
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Our admissions counselors are available Monday through Saturday to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Contact Info Cards (5 Cols) */}
              <div className="lg:col-span-5 space-y-4">
                
                <div className="p-5 bg-white rounded-[12px] border border-slate-200 shadow-2xs flex items-start gap-4">
                  <div className="p-3 rounded-[8px] bg-red-50 text-[#C8102E] border border-red-200 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0C0C0D]">Toll-Free Admissions Desk</h3>
                    <p className="text-xs text-[#64748B] mt-0.5">1800-212-2714 / +91-9168644463</p>
                    <span className="text-[11px] text-[#C8102E] font-medium block mt-1">Available 9:00 AM – 6:00 PM</span>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-[12px] border border-slate-200 shadow-2xs flex items-start gap-4">
                  <div className="p-3 rounded-[8px] bg-red-50 text-[#C8102E] border border-red-200 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0C0C0D]">Email Support</h3>
                    <p className="text-xs text-[#64748B] mt-0.5">admissions@sandipuniversity.edu.in</p>
                    <span className="text-[11px] text-[#64748B] block mt-1">Typical response within 24 hours</span>
                  </div>
                </div>

                <div className="p-5 bg-white rounded-[12px] border border-slate-200 shadow-2xs flex items-start gap-4">
                  <div className="p-3 rounded-[8px] bg-red-50 text-[#C8102E] border border-red-200 flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0C0C0D]">Counseling Office Hours</h3>
                    <p className="text-xs text-[#64748B] mt-0.5">Monday to Saturday: 9:00 AM to 6:00 PM</p>
                    <span className="text-[11px] text-[#64748B] block mt-1">Campus Counseling Center, Trimbak Road, Nashik</span>
                  </div>
                </div>

              </div>

              {/* Inquiry Form Card (7 Cols) */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[12px] border border-slate-200 shadow-md space-y-5">
                <div className="space-y-1 border-b border-slate-100 pb-4">
                  <h3 className="text-xl font-bold font-serif text-[#0C0C0D] flex items-center gap-2">
                    <MessageSquare size={20} className="text-[#C8102E]" />
                    <span>Send an Admissions Inquiry</span>
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    Fill in your details and our admission counselor will call you back.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-[8px] text-center space-y-2">
                    <CheckCircle2 size={32} className="mx-auto text-emerald-600" />
                    <h4 className="font-bold text-sm text-emerald-900">Inquiry Sent Successfully!</h4>
                    <p className="text-xs text-emerald-700">
                      Thank you for contacting Sandip University. Our admission officer will reach out to your registered phone number shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-[#0C0C0D] block mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Utkarsh Sharma"
                          className="w-full px-3.5 py-2.5 rounded-[8px] bg-slate-50 border border-slate-200 text-xs text-[#0C0C0D] focus:border-[#C8102E] focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#0C0C0D] block mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. name@example.com"
                          className="w-full px-3.5 py-2.5 rounded-[8px] bg-slate-50 border border-slate-200 text-xs text-[#0C0C0D] focus:border-[#C8102E] focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#0C0C0D] block mb-1">Phone Number (10 digits) *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-[8px] bg-slate-50 border border-slate-200 text-xs text-[#0C0C0D] focus:border-[#C8102E] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#0C0C0D] block mb-1">How can we help you? *</label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Ask about programs, eligibility, fees, scholarships, or hostels..."
                        className="w-full px-3.5 py-2.5 rounded-[8px] bg-slate-50 border border-slate-200 text-xs text-[#0C0C0D] focus:border-[#C8102E] focus:bg-white focus:outline-none transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-[8px] bg-[#C8102E] hover:bg-[#a00d24] text-white font-bold text-xs transition-colors shadow-2xs flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <Send size={14} />
                      <span>Submit Inquiry</span>
                    </button>
                  </form>
                )}

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
