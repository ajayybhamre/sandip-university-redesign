import { motion, useReducedMotion } from "framer-motion";
import campusHeroImg from "../../../assets/images/about-hero-campus.webp";

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  // Staggered reveal sequence completing under ~0.8s total
  const eyebrowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.3,
        ease: "easeOut",
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.35,
        delay: shouldReduceMotion ? 0 : 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const supportingVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.35,
        delay: shouldReduceMotion ? 0 : 0.25,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.3,
        delay: shouldReduceMotion ? 0 : 0.38,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 1.03 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.45,
        delay: shouldReduceMotion ? 0 : 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative bg-[#F7F3EB] dark:bg-[#1C1A16] text-[#2B231D] dark:text-[#F3EFE9] py-12 md:py-16 lg:py-20 border-b border-[#EAE3D7] dark:border-[#2C2720] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Content (~58% width) */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* 1. Eyebrow with touch of charcoal */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={eyebrowVariants}
              className="flex items-center gap-2"
            >
              <span className="text-xs font-mono font-bold text-[#E86B7B] dark:text-[#E86B7B] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#24201C] text-[#FAF7F2] border border-[#3D342B] shadow-sm">
                ABOUT
              </span>
            </motion.div>

            {/* 2. Main Heading */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={headingVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2B231D] dark:text-[#F3EFE9] leading-[1.12] font-sans"
            >
              A Private University in <span className="text-[#C8102E]">Maharashtra</span>
            </motion.h1>

            {/* 3. Supporting Line */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={supportingVariants}
              className="text-base sm:text-lg md:text-xl text-[#564B42] dark:text-[#C5BBB0] font-normal leading-relaxed max-w-xl"
            >
              Established under the Sandip University Act, 2015.
            </motion.p>

            {/* 4. Short CTA */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={ctaVariants}
              className="pt-2"
            >
              <a
                href="#who-we-are"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8102E] dark:text-[#E86B7B] hover:text-[#9B1D2C] dark:hover:text-[#F58F9C] transition-colors duration-200 group"
              >
                <span>Explore Our Journey</span>
                <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Campus Image Frame (~42% width) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="md:col-span-5 relative"
          >
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-[#E5DDD0] dark:border-[#332C24] shadow-xl shadow-[#2B231D]/5 dark:shadow-black/60 bg-[#EFE8DD] dark:bg-[#24201A]">
              <img
                src={campusHeroImg}
                alt="Sandip University Campus"
                className="w-full h-[340px] sm:h-[400px] md:h-[440px] lg:h-[480px] object-cover object-[center_35%]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
