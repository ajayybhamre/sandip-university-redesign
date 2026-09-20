import { motion } from "framer-motion";
import { Compass, CheckCircle2, ShieldCheck, Target, Award } from "lucide-react";
import aboutImg from "../../../assets/images/about-entrance.jpg";

export default function IQACAbout() {
  return (
    <section className="py-20 bg-white dark:bg-[#161411] transition-colors duration-300">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual & Image Stack */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl bg-gray-50 dark:bg-[#1E1B17] p-2">
              <img 
                src={aboutImg} 
                alt="Sandip University Quality Assurance Infrastructure" 
                className="w-full h-[420px] sm:h-[480px] object-cover rounded-2xl"
              />
              
              {/* Gold & Red Decorative Tag */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-white/95 dark:bg-[#181512]/95 backdrop-blur-md border border-amber-300/70 dark:border-amber-700/50 shadow-lg flex items-center gap-2">
                <Compass className="text-[#C8102E]" size={18} />
                <span className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                  Quality Management Framework
                </span>
              </div>
            </div>

            {/* Accent Card Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-gradient-to-br from-[#FAF7F2] to-white dark:from-[#201C18] dark:to-[#181512] border border-amber-300/80 dark:border-amber-700/50 p-5 rounded-2xl shadow-xl max-w-xs items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#C8102E] text-white flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-gray-900 dark:text-white">NAAC & UGC Aligned</h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-snug">Systematic post-accreditation quality sustenance framework.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-[#C8102E] uppercase tracking-widest px-3 py-1 rounded-md bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900">
                01 — ABOUT IQAC
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1917] dark:text-[#F5F2EB] tracking-tight leading-tight mb-6">
              Institutionalizing Quality Culture & <span className="text-[#C8102E]">Academic Excellence</span>
            </h2>

            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              In accordance with National Assessment and Accreditation Council (NAAC) guidelines, the <strong>Internal Quality Assurance Cell (IQAC)</strong> at Sandip University was established to ensure continuous operational excellence, academic vigor, administrative clarity, and post-accreditation quality sustenance.
            </p>

            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              IQAC functions as an active advisory and administrative node, facilitating curriculum benchmarks, faculty skill upgrades, outcome-based education (OBE), stakeholder feedback analysis, and institutional research ecosystem development.
            </p>

            {/* Core Pillars List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#1E1B18] border border-amber-200/50 dark:border-amber-900/30">
                <CheckCircle2 size={20} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Continuous Quality Assurance</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Regular academic and administrative audits across all university schools and research centers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#1E1B18] border border-amber-200/50 dark:border-amber-900/30">
                <Target size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Outcome-Based Education (OBE)</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Designing learner-centric curricula with mapped Program Outcomes (POs) and Course Outcomes (COs).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7F2] dark:bg-[#1E1B18] border border-amber-200/50 dark:border-amber-900/30">
                <ShieldCheck size={20} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">Statutory Reporting & Compliance</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Timely preparation of AQAR, SSR, NIRF submissions, and statutory documentation.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
