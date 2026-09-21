import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PhoneCall, ChevronRight, MapPin, Sparkles, Send, ArrowRight } from "lucide-react";
import CharacterReveal from "../Animated/CharacterReveal";
import SpotlightCard from "../Animated/SpotlightCard";
import "./ContactSupportHero.css";

export default function ContactSupportHero() {
  return (
    <section className="contact-hero pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#FAF8F5] via-white to-slate-50 text-slate-900 overflow-hidden relative border-b border-slate-200/60">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[350px] h-[350px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link to="/international-admission/overview" className="hover:text-orange-600 transition-colors">International</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-orange-600">Contact & Support</span>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-600 font-semibold text-xs tracking-wider uppercase mb-5 shadow-2xs">
              <PhoneCall className="w-3.5 h-3.5 text-orange-500" />
              <span>INTERNATIONAL STUDENT SUPPORT</span>
              <Sparkles className="w-3 h-3 text-orange-400" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6">
              We're Here to Help You <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500">Get Started</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-2xl text-balance">
              Have a question about admissions, programs, travel or life at Sandip University? Connect with our team or find your way to campus.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#enquiry-form"
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Contact Admissions</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#campus-location"
                className="px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 shadow-sm hover:border-slate-300 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-orange-600" />
                <span>Get Directions</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <SpotlightCard className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[340px]">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-sans text-xs font-bold uppercase">
                  <span>CAMPUS LOCATION</span>
                </div>

                <h3 className="text-2xl font-extrabold text-white">Nashik Campus, India</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Trimbak Road, Mahiravani, Nashik, Maharashtra 422213. Conveniently connected via Mumbai Highway & Railway.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-orange-400">
                <span>Toll-Free Helpline: 1800-212-2714</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </SpotlightCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
