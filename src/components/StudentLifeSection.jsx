import { motion } from "framer-motion";
import { Users, Award, Trophy, Rocket, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import campusMainImg from "../assets/images/campus-3.png";
import galleryImg from "../assets/images/gallery1.jpg";
import handsOnImg from "../assets/images/hands-on-training.jpg";

const studentLifeHighlights = [
  {
    icon: Users,
    title: "SUN Clubs & Societies",
    desc: "20+ student-led clubs in robotics, coding, drama, photography, and cultural arts.",
  },
  {
    icon: Rocket,
    title: "Workshops & Hackathons",
    desc: "Hands-on tech bootcamps, industry guest lectures, and live hackathons.",
  },
  {
    icon: Trophy,
    title: "Sports Competitions",
    desc: "Olympic-grade sports complexes, annual inter-collegiate tournaments, and athletics.",
  },
  {
    icon: Award,
    title: "Student Development",
    desc: "Leadership summits, soft skills training, and community welfare programs.",
  },
];

export default function StudentLifeSection() {
  return (
    <section 
      id="student-life"
      aria-label="Student Life - More Than a University"
      className="relative py-20 lg:py-32 bg-[#FAF8F5] dark:bg-zinc-950 transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#C8102E]/5 dark:bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/5 dark:bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* =========================================================================
              LEFT COLUMN — CONTENT & HIGHLIGHTS
             ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Small Red Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-[10px] sm:text-[11px] font-bold text-[#C8102E] dark:text-red-400 uppercase tracking-widest mb-3 w-fit shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse"></span>
              <span>STUDENT LIFE</span>
            </div>

            {/* Large Bold Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-black text-slate-900 dark:text-white tracking-tight leading-[1.12] mb-4">
              More Than a <br className="hidden sm:block" />
              <span className="text-[#C8102E] font-serif italic font-normal">University.</span>
            </h2>

            {/* Subtitle / Description */}
            <p className="text-xs sm:text-sm lg:text-[15px] max-w-[560px] text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-6">
              At Sandip University, education extends far beyond traditional classrooms. We nurture holistic growth through vibrant campus experiences, active student clubs, national hackathons, state-of-the-art sports facilities, and empowering leadership initiatives.
            </p>

            {/* Four Benefit Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {studentLifeHighlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-[#C8102E]/30 dark:hover:border-red-900/50 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-8 h-8 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-100 dark:border-red-900/40 flex items-center justify-center text-[#C8102E] dark:text-red-400 group-hover:bg-[#C8102E] group-hover:text-white transition-colors duration-300 shrink-0">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="font-bold text-[14px] lg:text-[15px] text-slate-900 dark:text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-normal leading-relaxed pl-1">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="/campus-life"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#C8102E] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:bg-[#A00C24] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group cursor-pointer"
              >
                <span>Explore Student Life</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* =========================================================================
              RIGHT COLUMN — ASYMMETRIC RESPONSIVE IMAGE GRID
             ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Background Decorative Frame Line */}
            <div className="absolute -inset-4 rounded-[40px] border-2 border-dashed border-[#C8102E]/20 dark:border-red-900/30 -z-0 pointer-events-none" />

            <div className="grid grid-cols-12 gap-4 relative z-10">

              {/* Main Large Rounded Campus Card */}
              <div className="col-span-12 sm:col-span-8 rounded-[32px] overflow-hidden shadow-2xl border border-slate-200/80 dark:border-zinc-800 h-[320px] sm:h-[400px] group relative">
                <img
                  src={campusMainImg}
                  alt="Sandip University Vibrant Campus Life"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-white/20 text-xs font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#C8102E]" />
                    <span>250+ Acre Eco-Campus</span>
                  </span>
                  <span className="text-[#C8102E] font-black">SUN Life</span>
                </div>
              </div>

              {/* Right Side Stacked 2 Image Cards */}
              <div className="col-span-12 sm:col-span-4 flex sm:flex-col gap-4">
                {/* Supporting Card 1 */}
                <div className="flex-1 rounded-[24px] overflow-hidden shadow-lg border border-slate-200/80 dark:border-zinc-800 h-[150px] sm:h-[190px] group relative">
                  <img
                    src={galleryImg}
                    alt="Cultural Events and SUN Fest"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-xs text-[10px] font-bold text-white">
                    Cultural Fests
                  </span>
                </div>

                {/* Supporting Card 2 */}
                <div className="flex-1 rounded-[24px] overflow-hidden shadow-lg border border-slate-200/80 dark:border-zinc-800 h-[150px] sm:h-[195px] group relative">
                  <img
                    src={handsOnImg}
                    alt="Hands-on Practical Training & Workshops"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-xs text-[10px] font-bold text-white">
                    Tech Labs
                  </span>
                </div>
              </div>

            </div>

            {/* Subtle Floating Stat Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -left-4 sm:left-4 z-20 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-slate-900 dark:text-white leading-tight">
                  50+ Active SUN Clubs
                </p>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  100% Student Participation
                </p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
