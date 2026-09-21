import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Horizontal image that auto-rotates through up to 3 images, with a
// floating stat badge in the same visual language as the Dean section.
// TODO: replace the 3 imported images below with real photos for School of Pharmacy & Paramedical Sciences.
function RotatingShowcase({ images = [], badgeLabel = "" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative">
      <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-[var(--surface-muted)]">
        {images.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt="School of Pharmacy & Paramedical Sciences"
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ))}
      </div>

      {/* Floating badge — same treatment as the Dean section's experience badge */}
      <div className="absolute -bottom-5 -left-4 rounded-2xl bg-[var(--brand-red-600)] px-5 py-4 text-white shadow-lg">
        <p className="font-[var(--font-display)] text-lg font-bold">{badgeLabel}</p>
      </div>

      {/* Progress dots for the rotating images */}
      {images.length > 1 && (
        <div className="absolute right-4 top-4 flex gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function About({ images = [], badgeLabel }) {
  return (
    <section className="bg-[var(--surface)] py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Intro + floating rotating image */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red-600)]">
              About the School
            </span>
            <h2 className="mt-4 font-[var(--font-display)] text-4xl font-bold leading-[1.05] text-[var(--ink)] md:text-6xl">
              Healthcare education built for real patients.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--ink-muted)]">
              The School of Pharmacy & Paramedical Sciences pairs scientific rigor with clinical and lab exposure, so students graduate ready for pharmacy, healthcare and allied science careers.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative lg:col-span-6"
          >
            <RotatingShowcase
              images={images}
              badgeLabel={badgeLabel}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
