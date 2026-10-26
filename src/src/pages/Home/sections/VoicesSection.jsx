import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus, Quote, Star } from "lucide-react";
import SectionBg from "../../../components/Animated/SectionBg";
import SplitHeading from "../../../components/Animated/SplitHeading";
import reviews from "../TestimonialsFAQ/reviewData";
import faqs from "../TestimonialsFAQ/faqData";
import { news } from "../homeData";

const DATE_TONES = ["bg-[#C8102E]", "bg-[#0B192C]", "bg-emerald-600"];

export default function VoicesSection() {
  const reduce = useReducedMotion();
  const [rev, setRev] = useState(0);
  const [open, setOpen] = useState(0);
  const [hold, setHold] = useState(false);

  useEffect(() => {
    if (hold || reduce) return undefined;
    const t = setTimeout(() => setRev((i) => (i + 1) % reviews.length), 6000);
    return () => clearTimeout(t);
  }, [rev, hold, reduce]);

  const r = reviews[rev];

  return (
    <section
      id="voices"
      className="relative overflow-hidden bg-white py-24 dark:bg-[#0F0F13] lg:py-32"
    >
      <SectionBg variants={["dots", "noise"]} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span
            data-aos="fade-down"
            className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#C8102E] dark:border-[#C8102E]/30 dark:bg-[#C8102E]/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E]" />
            Testimonials &amp; insights
          </span>
          <SplitHeading
            variant="blur"
            className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl"
            parts={[{ t: "What our " }, { t: "students say", className: "text-[#C8102E]" }]}
          />
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* ---------- left: testimonial + news ---------- */}
          <div className="space-y-8">
            <div
              data-aos="fade-right"
              onMouseEnter={() => setHold(true)}
              onMouseLeave={() => setHold(false)}
              className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0B192C] to-[#123B61] p-8 text-white shadow-2xl shadow-[#0B192C]/30 bg-white-keep sm:p-10"
            >
              <Quote className="absolute right-6 top-6 h-16 w-16 text-white/10" />
              <div className="flex gap-1" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="min-h-[190px]" aria-live="polite">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={rev}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="mt-5 text-xl leading-relaxed sm:text-2xl">&ldquo;{r.review}&rdquo;</p>
                    <div className="mt-7 flex items-center gap-4">
                      <img
                        src={r.image}
                        alt={r.name}
                        loading="lazy"
                        className="h-14 w-14 rounded-full object-cover object-top ring-2 ring-[#FF5A70]"
                      />
                      <div>
                        <div className="font-bold">{r.name}</div>
                        <div className="text-sm text-white/70">{r.designation}</div>
                        <div className="text-sm font-semibold text-[#FF5A70]">{r.company}</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-4 flex gap-2">
                {reviews.map((x, i) => (
                  <button
                    key={x.id}
                    type="button"
                    aria-label={`Show review ${i + 1}`}
                    aria-current={i === rev}
                    onClick={() => setRev(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === rev ? "w-8 bg-[#FF5A70]" : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-[#15151A] sm:p-8"
            >
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                Latest news
              </div>
              <h3 className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white">
                Campus highlights
              </h3>
              <ul className="mt-5 divide-y divide-slate-100 dark:divide-white/10">
                {news.map((n, i) => (
                  <li
                    key={n.title}
                    data-aos="fade-up"
                    data-aos-delay={150 + i * 100}
                    className="flex gap-4 py-4"
                  >
                    <div
                      className={`grid h-16 w-16 shrink-0 place-items-center rounded-xl text-center text-white ${
                        DATE_TONES[i % DATE_TONES.length]
                      }`}
                    >
                      <div>
                        <div className="text-xl font-extrabold leading-none">{n.day}</div>
                        <div className="mt-0.5 text-[10px] font-bold tracking-widest">{n.month}</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{n.title}</div>
                      <div className="text-[15px] text-slate-600 dark:text-slate-300">{n.text}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ---------- right: FAQ ---------- */}
          <div data-aos="fade-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#C8102E] dark:border-[#C8102E]/30 dark:bg-[#C8102E]/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E]" />
              FAQ
            </span>
            <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Frequently asked questions
            </h3>
            <div className="mt-2 text-[16px] text-slate-600 dark:text-slate-300">
              Everything you need to know before taking admission.
            </div>

            <div className="mt-7 space-y-3">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={f.id}
                    data-aos="fade-up"
                    data-aos-delay={i * 80}
                    className={`overflow-hidden rounded-2xl border bg-white transition-colors dark:bg-[#15151A] ${
                      isOpen
                        ? "border-[#C8102E]/40 shadow-lg shadow-[#C8102E]/5"
                        : "border-slate-200 dark:border-white/10"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${f.id}`}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]/50"
                    >
                      <span className="text-[17px] font-bold text-slate-900 dark:text-white">
                        {f.question}
                      </span>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-rose-50 text-[#C8102E] dark:bg-[#C8102E]/15">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-${f.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 text-[16px] leading-relaxed text-slate-600 dark:text-slate-300">
                            {f.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
