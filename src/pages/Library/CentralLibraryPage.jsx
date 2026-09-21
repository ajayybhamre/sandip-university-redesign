import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Library,
  BookOpen,
  Search,
  Download,
  ExternalLink,
  Clock,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Globe,
  Award,
  FileText,
  Users,
  Quote,
  Layers,
  Bookmark,
  Laptop,
  Compass,
  ChevronDown,
  Target,
} from "lucide-react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO/SEO";
import seoData from "../../components/SEO/seoData";
import libraryImg from "../../assets/images/certification-graduation.jpg";

// Navigation links for Central Library
const libraryNavItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "message", label: "Librarian Message" },
  { id: "statistics", label: "Statistics" },
  { id: "vision-mission", label: "Vision & Mission" },
  { id: "objectives", label: "Objectives" },
  { id: "services", label: "Library Services" },
  { id: "collection", label: "Library Collection" },
  { id: "resources", label: "E-Resources" },
];

// Exact Official Statistics Data
const libraryStats = [
  { count: "35,055", label: "Books", sub: "Volumes & Titles", icon: BookOpen },
  { count: "40,000", label: "E-books", sub: "Digital Titles", icon: Laptop },
  { count: "230+", label: "Print Periodicals", sub: "National & Int'l", icon: FileText },
  { count: "12,000+", label: "E-journals", sub: "Indexed Journals", icon: Globe },
];

// Exact Official Library Services Data
const libraryServices = [
  { title: "Open Access", desc: "Open access stack entry for all students, faculty members, and research scholars.", icon: Library },
  { title: "Automation with KOHA Software", desc: "Fully automated library management system with barcode scanner integration.", icon: Laptop },
  { title: "OPAC (Online Public Access Catalogue)", desc: "Search library catalog remotely or via dedicated terminals on campus.", icon: Search },
  { title: "Digital & Remote Access to E-Resources", desc: "Off-campus 24/7 access to subscribed databases and e-journals.", icon: Globe },
  { title: "Digital Repository with DSpace", desc: "Open-source institutional archive for theses, dissertations, and research papers.", icon: Layers },
  { title: "Library Collaboration & MoUs", desc: "Inter-library loan facilities with national library network partners.", icon: Users },
  { title: "Book Club (Granpethri - Kusumagraj)", desc: "Promoting literature reading, book reviews, and cultural engagement.", icon: Bookmark },
  { title: "Drillbit Plagiarism Software", desc: "Advanced plagiarism detection tools for research papers and dissertations.", icon: ShieldCheck },
  { title: "Earn and Learn System", desc: "Student empowerment scheme enabling campus library work opportunities.", icon: Award },
  { title: "BookBank Facility", desc: "Textbooks issued for the entire academic semester to eligible students.", icon: BookOpen },
  { title: "Research Support", desc: "Citation indexing, h-index tracking, and journal analytics guidance.", icon: Sparkles },
  { title: "Library Web Portal", desc: "24/7 online information hub for announcements, guides, and e-catalogs.", icon: ExternalLink },
];

// Exact Official Library Collection Data Table
const collectionData = [
  { category: "Print Books / Volumes", count: "35,055", format: "Print / Physical", access: "Open Access Stack" },
  { category: "E-Books", count: "40,000+", format: "Digital / PDF / EPUB", access: "Campus & Remote Access" },
  { category: "Print Periodicals & Journals", count: "230+", format: "Print Subscription", access: "Reading Room Display" },
  { category: "E-Journals & Databases", count: "12,000+", format: "Online / Full-text", access: "IP Authenticated" },
  { category: "Institutional Theses & Dissertations", count: "1,500+", format: "DSpace Digital Archive", access: "Reprographic & OPAC" },
  { category: "Value Addition Audio-Visual Media", count: "1,200+", format: "CDs / DVDs / Digital", access: "Media Section" },
  { category: "Daily Newspapers", count: "25+", format: "Print (Regional & Nat'l)", access: "Newspaper Lounge" },
];

export default function CentralLibraryPage() {
  const [activeTab, setActiveTab] = useState("home");
  const [navOpen, setNavOpen] = useState(false);

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SEO {...seoData.centralLibrary} />
      <Header />

      <main className="min-h-screen bg-[#FFFCF5] dark:bg-[#141210] font-sans antialiased selection:bg-[#C8102E] selection:text-white">
        
        {/* 1. Hero Section */}
        <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#F8F3E8] to-[#FFFCF5] dark:from-[#141210] dark:via-[#191714] dark:to-[#161412] pt-8 pb-12 lg:pt-10 lg:pb-16 border-b border-[#EFE5D2] dark:border-amber-900/30 border-t-4 border-t-[#C9A227]">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 rounded-full bg-red-600/5 blur-3xl pointer-events-none" />

          <div className="max-w-[1500px] mx-auto px-6 sm:px-8 relative z-10">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#6B665E] dark:text-amber-200/70 mb-5 flex-wrap"
            >
              <Link to="/" className="hover:text-[#C8102E] dark:hover:text-amber-400 transition-colors">
                Home
              </Link>
              <ChevronRight size={14} className="text-[#C9A227]" />
              <Link to="/academic" className="hover:text-[#C8102E] dark:hover:text-amber-400 transition-colors">
                Academics
              </Link>
              <ChevronRight size={14} className="text-[#C9A227]" />
              <span className="text-[#C8102E] dark:text-amber-400 font-semibold">
                Central Library
              </span>
            </motion.nav>

            {/* Hero Content Grid */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-7"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-50 to-amber-50 dark:from-red-950/40 dark:to-amber-950/40 border border-amber-300/80 dark:border-amber-700/60 text-xs font-bold uppercase tracking-wider text-[#C8102E] dark:text-amber-400 shadow-2xs mb-4">
                  <Sparkles size={14} className="text-[#C9A227]" />
                  <span>KNOWLEDGE & E-RESOURCES CENTER</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1F1F1F] dark:text-[#F8F3E8] tracking-tight leading-tight mb-3 font-serif">
                  Sandip University <br />
                  <span className="text-[#C8102E]">Central Library</span>
                </h1>

                {/* Thin Gold Decorative Accent */}
                <div className="w-24 h-1 bg-gradient-to-r from-[#C8102E] via-[#C9A227] to-[#EFE5D2] rounded-full mb-4" />

                <p className="text-base sm:text-lg text-[#6B665E] dark:text-amber-100/80 font-medium leading-relaxed max-w-2xl mb-6">
                  A state-of-the-art knowledge repository equipped with over 35,055+ print volumes, 40,000+ e-books, 12,000+ e-journals, automated OPAC search, digital learning labs, and 24/7 quiet study zones.
                </p>

                <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-[#1F1F1F] dark:text-[#F8F3E8]">
                  <div className="flex items-center gap-2 bg-white dark:bg-[#1E1B18] px-3.5 py-2 rounded-xl border border-[#EFE5D2] dark:border-amber-900/40 shadow-2xs">
                    <Clock size={16} className="text-[#C8102E]" />
                    <span>Hours: 8:00 AM – 10:00 PM (Mon–Sat)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white dark:bg-[#1E1B18] px-3.5 py-2 rounded-xl border border-[#EFE5D2] dark:border-amber-900/40 shadow-2xs">
                    <Library size={16} className="text-[#C9A227]" />
                    <span>35,055+ Physical Books</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-5"
              >
                <div className="relative rounded-2xl overflow-hidden border border-[#EFE5D2] dark:border-amber-900/40 shadow-md bg-white dark:bg-[#1C1A17] p-2 border-t-4 border-t-[#C9A227]">
                  <img
                    src={libraryImg}
                    alt="Central Library Infrastructure"
                    className="w-full h-64 sm:h-72 object-cover rounded-xl"
                  />
                  <div className="p-3 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-[#1F1F1F] dark:text-[#F8F3E8]">
                        Digital Knowledge Hub
                      </h4>
                      <p className="text-[11px] text-[#6B665E] dark:text-amber-200/70">
                        Automated OPAC & E-Resources Repository
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-[#C9A227]/40 flex items-center justify-center text-[#C8102E] flex-shrink-0">
                      <Award size={18} className="text-[#C9A227]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Modern Library Navigation Component */}
        <section className="sticky top-[80px] z-30 bg-[#FFFCF5]/95 dark:bg-[#161412]/95 backdrop-blur-md border-b border-[#EFE5D2] dark:border-amber-900/30 shadow-xs">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
            
            {/* Desktop Navigation Row */}
            <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto py-3 no-scrollbar">
              <span className="text-xs font-mono font-bold text-[#C8102E] dark:text-amber-400 uppercase tracking-widest px-2 flex-shrink-0">
                LIBRARY MENU:
              </span>
              {libraryNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    activeTab === item.id
                      ? "bg-[#C8102E] text-white shadow-sm border-b-2 border-b-[#C9A227]"
                      : "bg-white dark:bg-[#201C18] text-[#1F1F1F] dark:text-[#F8F3E8] border border-[#EFE5D2] dark:border-amber-900/30 hover:bg-red-50 hover:text-[#C8102E]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Dropdown */}
            <div className="lg:hidden py-2.5">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white dark:bg-[#201C18] border border-[#EFE5D2] dark:border-amber-900/40 text-xs font-bold text-[#1F1F1F] dark:text-[#F8F3E8]"
              >
                <span className="flex items-center gap-2">
                  <Library size={16} className="text-[#C8102E]" />
                  <span>Library Section Menu</span>
                </span>
                <ChevronDown size={16} className={`text-[#C9A227] transition-transform ${navOpen ? "rotate-180" : ""}`} />
              </button>

              {navOpen && (
                <div className="grid grid-cols-2 gap-2 pt-2.5 pb-1">
                  {libraryNavItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        setNavOpen(false);
                      }}
                      className="px-3 py-2 rounded-lg text-xs font-semibold text-left bg-white dark:bg-[#201C18] border border-[#EFE5D2] dark:border-amber-900/30 text-[#1F1F1F] dark:text-[#F8F3E8] hover:text-[#C8102E]"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </section>

        {/* 3. Statistics Section (Preserving Exact Values) */}
        <section id="statistics" className="py-12 sm:py-16">
          <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold text-[#C8102E] dark:text-amber-400 uppercase tracking-widest block mb-1">
                KEY RESOURCE METRICS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1F1F] dark:text-[#F8F3E8] font-serif">
                Central Library Statistics
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {libraryStats.map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="bg-white dark:bg-[#1C1A17] rounded-2xl p-6 border border-[#EFE5D2] dark:border-amber-900/40 shadow-sm border-t-4 border-t-[#C9A227] text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] dark:text-amber-400 flex items-center justify-center mx-auto mb-4 border border-red-100">
                      <IconComp size={24} />
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-[#1F1F1F] dark:text-[#F8F3E8] font-serif tracking-tight mb-1">
                      {stat.count}
                    </div>
                    <h4 className="text-sm font-bold text-[#C8102E] dark:text-amber-400 mb-0.5">
                      {stat.label}
                    </h4>
                    <p className="text-xs text-[#6B665E] dark:text-amber-200/70 font-medium">
                      {stat.sub}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Welcome Section */}
        <section id="about" className="py-12 sm:py-16 bg-[#F8F3E8] dark:bg-[#181614] border-y border-[#EFE5D2] dark:border-amber-900/30">
          <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E]" />
                  <span className="text-xs font-mono font-bold text-[#C8102E] dark:text-amber-400 uppercase tracking-widest">
                    OVERVIEW & WELCOME
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1F1F] dark:text-[#F8F3E8] font-serif leading-tight">
                  Welcome to Sandip University's Central Library
                </h2>

                <div className="prose prose-stone dark:prose-invert max-w-none text-[#1F1F1F] dark:text-amber-100/90 text-base leading-relaxed space-y-4">
                  <p>
                    The Central Library at Sandip University serves as the academic nerve center of the institution, fostering research, self-learning, and intellectual growth across all disciplines. Designed with modern digital infrastructure and spacious reading halls, the library provides students, faculty, and scholars with seamless access to physical volumes, international e-journals, digital repositories, and collaborative study spaces.
                  </p>
                  <p>
                    Fully automated using the state-of-the-art KOHA integrated library management system, our library ensures effortless search, borrowing, and catalog access through Online Public Access Catalogue (OPAC).
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-white dark:bg-[#1C1A17] p-6 rounded-3xl border border-[#EFE5D2] dark:border-amber-900/40 shadow-sm relative overflow-hidden border-t-4 border-t-[#C9A227]">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#C9A227] flex items-center justify-center flex-shrink-0">
                      <Quote size={22} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#92400E] dark:text-amber-400 uppercase tracking-wider mb-2">
                        Librarian's Message
                      </h4>
                      <p className="text-xs sm:text-sm text-[#1F1F1F] dark:text-amber-100 italic leading-relaxed font-medium">
                        "Knowledge is the supreme empowerment. Our mission is to connect every learner with high-quality academic resources and digital learning tools, empowering research excellence and lifelong learning."
                      </p>
                      <p className="text-[11px] font-bold text-[#C8102E] dark:text-amber-400 mt-3 uppercase tracking-wider">
                        — Central Library Committee
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. Vision & Mission Section */}
        <section id="vision-mission" className="py-12 sm:py-16">
          <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold text-[#C8102E] dark:text-amber-400 uppercase tracking-widest block mb-1">
                INSTITUTIONAL DIRECTIVE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1F1F] dark:text-[#F8F3E8] font-serif">
                Vision & Mission
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="bg-white dark:bg-[#1C1A17] rounded-3xl p-6 sm:p-8 border border-[#EFE5D2] dark:border-amber-900/40 shadow-sm border-t-4 border-t-[#C8102E] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] dark:text-red-400 flex items-center justify-center">
                  <Compass size={24} />
                </div>
                <h3 className="text-xl font-extrabold text-[#1F1F1F] dark:text-[#F8F3E8] font-serif">
                  Our Vision
                </h3>
                <p className="text-xs sm:text-sm text-[#6B665E] dark:text-amber-100/80 leading-relaxed font-medium">
                  To evolve as a world-class center of knowledge and information resources, empowering academic excellence, innovative research, and lifelong learning through state-of-the-art library services and digital repositories.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white dark:bg-[#1C1A17] rounded-3xl p-6 sm:p-8 border border-[#EFE5D2] dark:border-amber-900/40 shadow-sm border-t-4 border-t-[#C9A227] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-[#C9A227] flex items-center justify-center">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-extrabold text-[#1F1F1F] dark:text-[#F8F3E8] font-serif">
                  Our Mission
                </h3>
                <p className="text-xs sm:text-sm text-[#6B665E] dark:text-amber-100/80 leading-relaxed font-medium">
                  To collect, organize, and disseminate high-quality print and electronic learning resources; to provide seamless access to global information networks; and to deliver innovative, user-centric library services that support the academic and research aspirations of the university community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Objectives Section */}
        <section id="objectives" className="py-12 sm:py-16 bg-[#F8F3E8] dark:bg-[#181614] border-y border-[#EFE5D2] dark:border-amber-900/30">
          <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold text-[#C8102E] dark:text-amber-400 uppercase tracking-widest block mb-1">
                STRATEGIC GOALS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1F1F] dark:text-[#F8F3E8] font-serif">
                Library Objectives
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Procure and update comprehensive print and digital knowledge resources across all academic domains.",
                "Facilitate automated, user-friendly search and retrieval through KOHA OPAC and DSpace repositories.",
                "Promote inter-library collaboration, resource sharing, and research indexing support.",
                "Maintain a quiet, conducive environment equipped with high-speed internet and quiet study zones.",
                "Empower students and faculty with workshops on digital literacy, anti-plagiarism tools, and e-resource navigation.",
                "Deliver 24/7 off-campus electronic resource access for continuous academic research.",
              ].map((obj, i) => (
                <div key={i} className="bg-white dark:bg-[#1C1A17] p-5 rounded-2xl border border-[#EFE5D2] dark:border-amber-900/30 shadow-2xs flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] dark:text-amber-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                    0{i + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-[#1F1F1F] dark:text-amber-100 leading-relaxed font-medium">
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Library Services Section */}
        <section id="services" className="py-12 sm:py-16">
          <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold text-[#C8102E] dark:text-amber-400 uppercase tracking-widest block mb-1">
                ACADEMIC SUPPORT & FACILITIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1F1F] dark:text-[#F8F3E8] font-serif">
                Official Library Services
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {libraryServices.map((service, i) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={i}
                    className="bg-white dark:bg-[#1C1A17] rounded-2xl p-6 border border-[#EFE5D2] dark:border-amber-900/30 shadow-2xs hover:border-[#C9A227] transition-all duration-200 border-t-2 border-t-[#C8102E]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-red-950/50 text-[#C8102E] dark:text-amber-400 flex items-center justify-center mb-4">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="text-base font-bold text-[#1F1F1F] dark:text-[#F8F3E8] mb-2 font-serif">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B665E] dark:text-amber-200/70 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. Library Collection Section Table */}
        <section id="collection" className="py-12 sm:py-16 bg-[#F8F3E8] dark:bg-[#181614] border-t border-[#EFE5D2] dark:border-amber-900/30">
          <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold text-[#C8102E] dark:text-amber-400 uppercase tracking-widest block mb-1">
                RESOURCE REPOSITORY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1F1F1F] dark:text-[#F8F3E8] font-serif">
                Library Collection Directory
              </h2>
            </div>

            {/* Responsive Table Container */}
            <div className="bg-white dark:bg-[#1C1A17] rounded-3xl border border-[#EFE5D2] dark:border-amber-900/40 shadow-sm overflow-hidden border-t-4 border-t-[#C9A227]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#C8102E] text-white uppercase text-[11px] tracking-wider font-mono">
                      <th className="py-4 px-6 font-bold">Category / Resource Type</th>
                      <th className="py-4 px-6 font-bold">Collection Count</th>
                      <th className="py-4 px-6 font-bold">Format</th>
                      <th className="py-4 px-6 font-bold">Access Mode</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EFE5D2] dark:divide-amber-900/30 text-[#1F1F1F] dark:text-amber-100">
                    {collectionData.map((row, i) => (
                      <tr key={i} className="hover:bg-[#FFFCF5] dark:hover:bg-amber-950/20 transition-colors">
                        <td className="py-4 px-6 font-bold text-[#1F1F1F] dark:text-[#F8F3E8]">
                          {row.category}
                        </td>
                        <td className="py-4 px-6 font-bold text-[#C8102E] dark:text-amber-400 font-mono">
                          {row.count}
                        </td>
                        <td className="py-4 px-6 text-[#6B665E] dark:text-amber-200/70">
                          {row.format}
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-[#92400E] dark:text-amber-300 border border-amber-200 dark:border-amber-900/60 text-[11px] font-semibold">
                            <CheckCircle2 size={12} className="text-[#C9A227]" />
                            {row.access}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
