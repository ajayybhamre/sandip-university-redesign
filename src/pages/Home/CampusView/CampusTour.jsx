import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, ArrowRight, Sparkles, Building2, Trees, GraduationCap } from "lucide-react";

export default function CampusTour() {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeVideoId = "-aFFAe45Y5Q";

  const floatingChips = [
    { icon: Trees, text: "250+ Acre Campus" },
    { icon: Building2, text: "Modern Infrastructure" },
    { icon: GraduationCap, text: "Vibrant Student Life" },
  ];

  return (
    <section id="campus-tour" className="relative py-20 lg:py-28 bg-[#FAF6EE] dark:bg-zinc-950 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300 border-t border-slate-200/60 dark:border-zinc-800">
      
      {/* 1. SOFT BLURRED CRIMSON AMBIENT GLOW BEHIND VIDEO */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#C8102E]/12 blur-[140px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-rose-200/30 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* 2. DECORATIVE LIGHT CONTOUR LINES */}
      <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none opacity-40 overflow-hidden z-10">
        <svg className="w-full h-full text-[#C8102E]" viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path d="M-100,20 Q350,5 720,30 T1540,15" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 3" fill="none" className="animate-[tourContour_16s_ease-in-out_infinite]" />
        </svg>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Section Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200/80 text-xs font-bold text-[#C8102E] tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C8102E]" />
            <span>CAMPUS WALKTHROUGH</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Step Inside <span className="text-[#C8102E]">Sandip University.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            Take a closer look at our campus, infrastructure, learning spaces and vibrant student life.
          </p>
        </div>

        {/* PROMINENT CENTERED 16:9 YOUTUBE VIDEO CONTAINER */}
        <div className="max-w-5xl mx-auto relative mb-10">
          
          <div className="relative w-full aspect-video rounded-[28px] overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 group">
            {isPlaying ? (
              /* Active Embedded YouTube Player */
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                title="Sandip University Official Campus Tour"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              /* Genuine YouTube Video Thumbnail & Centered Play Button */
              <div 
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full flex items-center justify-center cursor-pointer group/thumb"
              >
                {/* Guaranteed Crisp Official YouTube Video Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`}
                  alt="Sandip University Official Campus Tour Video"
                  className="w-full h-full object-cover group-hover/thumb:scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Subtle Edge Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none"></div>

                {/* Sandip Red Centered YouTube Play Button */}
                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#C8102E] hover:bg-red-700 text-white shadow-2xl flex items-center justify-center transition-all duration-300 group-hover/thumb:scale-110 border-2 border-white">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
                  <span className="absolute -inset-2 rounded-full border-2 border-[#C8102E]/60 animate-ping opacity-40 pointer-events-none"></span>
                </div>

                {/* Bottom Video Badge Overlay */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white z-10 pointer-events-none">
                  <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-xs sm:text-sm font-bold tracking-wide">
                      Sandip University Nashik — Campus Tour
                    </span>
                  </div>

                  <span className="text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#C8102E] text-white shadow-md">
                    PLAY VIDEO ▶
                  </span>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* 3 FLOATING INFORMATIONAL CHIPS BELOW THE VIDEO */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 max-w-4xl mx-auto mb-10">
          {floatingChips.map((chip, idx) => {
            const IconComp = chip.icon;
            return (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-full bg-white border border-slate-200/90 text-xs font-bold text-slate-800 flex items-center gap-2.5 shadow-sm"
              >
                <IconComp className="w-4 h-4 text-[#C8102E]" />
                <span>{chip.text}</span>
              </div>
            );
          })}
        </div>

        {/* BOTTOM SUBTLE CTA */}
        <div className="text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C8102E] hover:bg-red-700 text-white font-extrabold text-xs tracking-wide transition-all duration-300 shadow-xl shadow-red-950/20 hover:scale-[1.03] cursor-pointer"
          >
            <span>Explore Campus</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Embedded CSS keyframe */}
      <style>{`
        @keyframes tourContour {
          0%, 100% { transform: translateX(0px); opacity: 0.3; }
          50% { transform: translateX(40px); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}