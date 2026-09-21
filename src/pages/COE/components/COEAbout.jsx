// src/pages/COE/components/COEAbout.jsx

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { coeAbout, coeResponsibilities } from "../data/coeData";

const COEAbout = () => {
  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              About the Office
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Controller of Examinations
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {coeAbout.intro}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {coeAbout.verification}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2 rounded-2xl border border-gray-200 dark:border-gray-800 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#081b3a]/10 text-[#081b3a] dark:bg-[#081b3a]/30 dark:text-white">
                <ShieldCheck size={18} />
              </span>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                What the office handles
              </h3>
            </div>

            <ul className="space-y-2.5">
              {coeResponsibilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400 dark:bg-gray-600" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default COEAbout;
