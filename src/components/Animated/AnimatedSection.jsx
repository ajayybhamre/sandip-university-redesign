import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../utils/animationVariants";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  stagger = 0.12,
  id,
}) {
  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={staggerContainer(stagger, delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({ children, className = "", variant = fadeUp }) {
  return (
    <motion.div variants={variant} className={className}>
      {children}
    </motion.div>
  );
}
