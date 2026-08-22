import { motion } from "framer-motion";
import { EASE_EMPHASIZED } from "../../utils/animationVariants";

export default function TextReveal({
  text,
  className = "",
  tag = "h2",
  delay = 0,
}) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        ease: EASE_EMPHASIZED,
      },
    },
    hidden: {
      opacity: 0,
      y: 25,
      filter: "blur(4px)",
    },
  };

  const Tag = tag;

  return (
    <Tag className={`inline-flex flex-wrap gap-[0.25em] ${className}`}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="inline-flex flex-wrap gap-[0.25em]"
      >
        {words.map((word, idx) => (
          <motion.span variants={child} key={idx} className="inline-block">
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
