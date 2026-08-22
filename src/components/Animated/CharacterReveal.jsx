import { motion } from "framer-motion";
import { characterBlurStagger } from "../../utils/animationVariants";

export default function CharacterReveal({ text, className = "", tag = "h2", delay = 0 }) {
  const letters = Array.from(text);
  const Tag = tag;

  return (
    <Tag className={`inline-block ${className}`}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="inline-block"
      >
        {letters.map((char, idx) => (
          <motion.span
            key={idx}
            custom={idx}
            variants={characterBlurStagger(delay)}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
