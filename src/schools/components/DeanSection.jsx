import { useState } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaArrowRight } from "react-icons/fa";
import { X } from "lucide-react";

const DeanSection = ({ deanData = {}, deanImage, schoolName = "School" }) => {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[var(--surface-muted)] py-24 transition-colors duration-300">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-14 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-600)]">Leadership</span>

          <h2 className="mt-4 font-[var(--font-display)] text-4xl font-bold leading-tight text-[var(--ink)] md:text-6xl">Message from the Dean</h2>

          <p className="mt-5 leading-7 text-[var(--ink-muted)]">Leading with excellence, innovation, and commitment to creating the next generation of leaders.</p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }} className="relative lg:col-span-5">
            {deanImage && (
              <img src={deanImage} alt="Dean" className="aspect-[4/5] w-full rounded-2xl object-cover object-top" />
            )}
            <div className="absolute -bottom-5 -right-4 rounded-2xl bg-[var(--brand-red-600)] px-5 py-4 text-white"><p className="font-[var(--font-display)] text-3xl font-bold">{deanData.experience || "--"}</p><p className="text-xs uppercase tracking-[0.12em] text-white/75">Years of experience</p></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }} className="lg:col-span-7">
            <div className="border-t-2 border-[var(--brand-red-600)] pt-8">
              <FaQuoteLeft className="mb-7 text-3xl text-[var(--brand-red-600)]" />

              <h3 className="font-[var(--font-display)] text-3xl font-bold text-[var(--ink)]">{deanData.name || schoolName}</h3>

              <p className="mt-2 font-semibold text-[var(--brand-red-600)]">{deanData.designation || "Dean"}</p>

              <div className="my-7 h-px w-20 bg-[var(--line)]"></div>

              <p className="text-lg leading-8 text-[var(--ink-muted)]">{deanData.message || "Message not available."}</p>

              <button type="button" onClick={() => setIsMessageOpen(true)} className="group mt-9 inline-flex items-center gap-3 rounded-2xl bg-[var(--brand-navy)] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[var(--brand-red-600)]">
                {deanData.buttonText || "Read Full Message"}
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {isMessageOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[var(--brand-navy)]/75 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dean-message-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-[var(--surface-raised)] p-7 text-[var(--ink)] md:p-10"
          >
            <button type="button" onClick={() => setIsMessageOpen(false)} aria-label="Close dean message" className="absolute right-5 top-5 rounded-full p-2 text-[var(--ink-muted)] transition-colors hover:bg-[var(--surface-muted)] hover:text-[var(--brand-red-600)]">
              <X size={20} />
            </button>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-600)]">Leadership</p>
            <h2 id="dean-message-title" className="mt-3 pr-10 font-[var(--font-display)] text-3xl font-bold md:text-4xl">Message from the Dean</h2>
            <p className="mt-2 font-semibold text-[var(--brand-red-600)]">{deanData.name || schoolName}</p>
            <p className="mt-7 whitespace-pre-line text-base leading-8 text-[var(--ink-muted)]">{deanData.message || "Message not available."}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default DeanSection;
