import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, ArrowRight, X } from "lucide-react";

import campus1Img from "../../../assets/images/campus-1.jpg";
import gallery1Img from "../../../assets/images/gallery1.jpg";
import logoDark from "../../../assets/images/logo-dark.png";

const minimalHighlights = [
  {
    title: "250+ Acres Campus",
    sub: "Lush green eco-friendly campus",
  },
  {
    title: "Modern Infrastructure",
    sub: "Advanced tech labs & spaces",
  },
  {
    title: "Vibrant Student Life",
    sub: "Clubs, sports & cultural fests",
  },
];

export default function CampusTour() {
  const [showModal, setShowModal] = useState(false);
  const youtubeVideoId = "-aFFAe45Y5Q";

  return (
    <section
      id="campus-tour"
      aria-label="Campus Experience - Step Inside Sandip University"
      className="relative py-24 lg:py-36 bg-[#FAF8F5] dark:bg-zinc-950 text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* EDITORIAL TWO-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* =========================================================================
              LEFT COLUMN — MINIMAL EDITORIAL CONTENT
             ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              {/* Minimal Eyebrow */}
              <span className="inline-block text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#C8102E] mb-3">
                CAMPUS EXPERIENCE
              </span>

              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-slate-900 dark:text-white tracking-tight leading-[1.08] mb-4">
                Step Inside <br />
                <span className="text-[#C8102E]">Sandip University.</span>
              </h2>

              {/* Concise Supporting Description */}
              <p className="text-xs sm:text-sm lg:text-[15px] max-w-[520px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-6">
                Take a closer look at our campus, infrastructure, learning spaces, and vibrant student life in Nashik.
              </p>

              {/* Two Clean CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 mb-10">
                {/* Primary CTA */}
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C8102E] text-white font-bold text-xs sm:text-sm hover:bg-[#A00C24] shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <span>Explore Campus</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Secondary CTA */}
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm hover:border-[#C8102E] hover:text-[#C8102E] dark:hover:text-red-400 shadow-xs transition-all duration-300 group cursor-pointer"
                >
                  <span className="w-5 h-5 rounded-full bg-red-50 dark:bg-red-950/40 text-[#C8102E] dark:text-red-400 flex items-center justify-center group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                    <Play className="w-2 h-2 fill-current translate-x-0.5" />
                  </span>
                  <span>Watch Campus Tour</span>
                </button>
              </div>

              {/* Simplified 3 Highlights Row */}
              <div className="pt-8 border-t border-slate-200/80 dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {minimalHighlights.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <h3 className="text-sm font-extrabold text-slate-900 dark:text-white tracking-tight mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-normal leading-snug">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

          {/* =========================================================================
              RIGHT COLUMN — EDITORIAL IMAGE COLLAGE
             ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              
              {/* SUPPORTING IMAGE 1 (Top Left Offset) */}
              <div className="absolute -top-6 -left-4 sm:-left-6 z-10 w-44 sm:w-56 rounded-2xl overflow-hidden border-4 border-white dark:border-zinc-900 shadow-lg transform -rotate-3 transition-transform hover:rotate-0 duration-500 hidden sm:block">
                <img
                  src={campus1Img}
                  alt="Sandip University Architecture"
                  className="w-full h-32 sm:h-36 object-cover"
                />
              </div>

              {/* SUPPORTING IMAGE 2 (Bottom Right Offset) */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 z-10 w-48 sm:w-60 rounded-2xl overflow-hidden border-4 border-white dark:border-zinc-900 shadow-lg transform rotate-3 transition-transform hover:rotate-0 duration-500 hidden sm:block">
                <img
                  src={gallery1Img}
                  alt="Sandip Student Life"
                  className="w-full h-32 sm:h-36 object-cover"
                />
              </div>

              {/* MAIN VIDEO CARD */}
              <div className="relative z-20 rounded-[32px] overflow-hidden border-4 border-white dark:border-zinc-900 shadow-2xl bg-slate-950 group">
                <div
                  onClick={() => setShowModal(true)}
                  className="relative w-full aspect-video cursor-pointer overflow-hidden"
                >
                  <img
                    src={`https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`}
                    alt="Sandip University Campus Tour Video"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Left Logo Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
                    <img src={logoDark} alt="Sandip Logo" className="h-4 w-auto object-contain" />
                    <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-wider">
                      SANDIP UNIV
                    </span>
                  </div>

                  {/* Central Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C8102E] text-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom Video Label */}
                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 text-white pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold tracking-wide">
                      Campus Tour Video
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>

      {/* LIGHTBOX VIDEO MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-[#C8102E] transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                  title="Sandip University Official Campus Tour"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}