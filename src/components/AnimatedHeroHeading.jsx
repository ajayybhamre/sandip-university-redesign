import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable AnimatedHeroHeading component for all Admission hero sections.
 * 
 * Features:
 * - Word-by-word staggered reveal
 * - Opacity 0 -> 1, Y 30px -> 0, Blur 8px -> 0px
 * - Subtle gradient highlight sweep after reveal
 * - Accessible (SR-friendly with sr-only full text fallback)
 * - Runs once per page load (viewport={{ once: true }})
 */
export default function AnimatedHeroHeading({
  headingText = "",
  className = "text-4xl sm:text-6xl font-black text-gray-900 dark:text-white tracking-tight",
  highlightWords = [], // Array of word strings or indices to highlight in brand red
  highlightColorClass = "text-[#C8102E]",
  delay = 0.2,
  as: Component = "h1"
}) {
  if (!headingText) return null;

  // Split string into words while preserving spaces
  const words = headingText.split(" ");

  // Container motion variants with stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.08,
      },
    },
  };

  // Individual word motion variants
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Calculate total duration before sheen sweep runs
  const totalStaggerDuration = delay + words.length * 0.08 + 0.2;

  return (
    <Component className={`relative group ${className}`}>
      {/* Accessible Screen Reader Text */}
      <span className="sr-only">{headingText}</span>

      {/* Animated Word-by-Word Container */}
      <motion.span
        aria-hidden="true"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="inline-flex flex-wrap items-center gap-x-[0.25em] gap-y-[0.1em]"
      >
        {words.map((word, index) => {
          // Check if word should be highlighted
          const isHighlighted =
            highlightWords.includes(word) ||
            highlightWords.includes(index) ||
            highlightWords.some(
              (hw) => typeof hw === "string" && word.toLowerCase().includes(hw.toLowerCase())
            );

          return (
            <motion.span
              key={`${word}-${index}`}
              variants={wordVariants}
              className={`inline-block whitespace-nowrap ${
                isHighlighted ? highlightColorClass : ""
              }`}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.span>

      {/* Subtle Gradient Highlight Sweep Effect (runs once after reveal) */}
      <motion.span
        aria-hidden="true"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "200%", opacity: [0, 0.4, 0] }}
        transition={{
          delay: totalStaggerDuration,
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-red-400/30 to-transparent pointer-events-none mix-blend-overlay"
      />
    </Component>
  );
}
