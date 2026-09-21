import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cardSpotlightHover } from "../../utils/animationVariants";

export default function SpotlightCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -200, y: -200 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial="rest"
      whileHover="hover"
      variants={cardSpotlightHover}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Interactive Radial Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(200, 16, 46, 0.12), transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
