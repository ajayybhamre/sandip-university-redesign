import { motion } from "framer-motion";
import { CheckCircle2, Award, Globe2, BookOpen, Compass, Users } from "lucide-react";
import "./InternationalIntro.css";

const features = [
  {
    icon: Award,
    title: "Quality Higher Education",
    desc: "Rigorous academic standards aligned with international accreditation and industry expectations.",
  },
  {
    icon: BookOpen,
    title: "Modern Learning Environment",
    desc: "State-of-the-art laboratories, digital classrooms, and extensive research infrastructure.",
  },
  {
    icon: Globe2,
    title: "Rich Cultural Exposure",
    desc: "A vibrant multi-cultural campus encouraging global perspectives and cross-cultural friendships.",
  },
  {
    icon: Compass,
    title: "Student-Centric Pedagogy",
    desc: "Choice-based credit systems and outcome-based education tailored to personal career goals.",
  },
  {
    icon: Users,
    title: "Career-Focused Learning",
    desc: "Hands-on internships, soft skills workshops, and 100% placement guidance.",
  },
];

export default function InternationalIntro() {
  return (
    <section id="intro-section" className="py-20 lg:py-28 bg-white text-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs uppercase tracking-wider">
              <span>Why Sandip International</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              More Than a Degree. <br />
              <span className="text-orange-600">A Global Experience.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              At Sandip University, international education transcends standard classroom teaching. We foster an ecosystem where global scholars gain academic excellence, practical leadership skills, and lifelong international networks.
            </p>

            {/* Visual Stat Accent Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />
              <div className="text-4xl font-extrabold text-orange-400 mb-1">100%</div>
              <div className="text-sm font-bold text-white mb-2">Dedicated Student-Centric Focus</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Empowering scholars with outcome-based learning, individual mentorship, and holistic career preparation.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Broken-down Feature Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange-500/40 hover:bg-orange-50/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1 group-hover:text-orange-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
