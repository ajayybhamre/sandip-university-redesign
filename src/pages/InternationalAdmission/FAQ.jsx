import { useState, useMemo } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import FloatingAction from "../../components/FloatingAction";

import FAQHero from "../../components/InternationalFAQ/FAQHero";
import FAQCategories from "../../components/InternationalFAQ/FAQCategories";
import FeaturedQuestions from "../../components/InternationalFAQ/FeaturedQuestions";
import InternationalSupportCards from "../../components/InternationalFAQ/InternationalSupportCards";
import FAQAccordion from "../../components/InternationalFAQ/FAQAccordion";
import FinalCTA from "../../components/InternationalFAQ/FinalCTA";

import { INTL_FAQS_DATA } from "./intlFaqData";
import "./FAQ.css";

export default function InternationalFAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeOpenId, setActiveOpenId] = useState("adm-1");

  // Clear Filters
  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  // Featured Question Click Handler
  const handleSelectFeaturedQuestion = (id) => {
    setActiveOpenId(id);
    const el = document.getElementById("faq-accordion-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Filter FAQs
  const filteredFaqs = useMemo(() => {
    return INTL_FAQS_DATA.filter((item) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesQ = item.question.toLowerCase().includes(q);
        const matchesA = item.answer.toLowerCase().includes(q);
        const matchesCat = item.categoryLabel.toLowerCase().includes(q);
        const matchesKw = item.keywords && item.keywords.some((k) => k.toLowerCase().includes(q));
        if (!matchesQ && !matchesA && !matchesCat && !matchesKw) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== "all") {
        if (item.category !== selectedCategory) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="intl-faq-page min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      <SEO
        title="International Student FAQs | Sandip University"
        description="Find answers to common questions about international applications, visa processing, fees, wire transfers, hostels, and student support at Sandip University."
        keywords="Sandip University international FAQs, foreign student visa assistance, international student hostel, wire transfer fee FAQ"
        url="https://yourdomain.com/international-admission/faqs"
      />
      <Header />

      {/* 1. Hero Section with Live Search */}
      <FAQHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* 2. Category Navigation Bar */}
      <FAQCategories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* 3. Popular / Most Asked Questions */}
      <FeaturedQuestions onSelectQuestion={handleSelectFeaturedQuestion} />

      {/* 4. Support Pillars for Foreign Applicants */}
      <InternationalSupportCards />

      {/* 5. Main FAQ Accordion with Sticky Category Sidebar */}
      <FAQAccordion
        faqs={filteredFaqs}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        activeOpenId={activeOpenId}
        setActiveOpenId={setActiveOpenId}
        onClearFilters={handleClearFilters}
      />

      {/* 6. Final CTA */}
      <FinalCTA />

      <Footer />
      <FloatingAction />
    </div>
  );
}
