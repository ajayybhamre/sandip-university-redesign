import { motion } from "framer-motion";
import { curtainRevealLeft, curtainRevealUp } from "../../utils/animationVariants";

export default function CurtainReveal({ children, className = "", direction = "left", delay = 0 }) {
  const variant = direction === "up" ? curtainRevealUp : curtainRevealLeft;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        ...variant,
        visible: {
          ...variant.visible,
          transition: { ...variant.visible.transition, delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
