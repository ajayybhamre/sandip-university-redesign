import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Text3D.css";

export default function Text3D({ text, className = "", tag = "h2", accentColor = "#C8102E" }) {
  const containerRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({
      x: (y / rect.height) * -12,
      y: (x / rect.width) * 12,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const Tag = tag;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block perspective-1000 cursor-default"
    >
      <motion.div
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: "spring", stiffness: 250, damping: 15 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Tag
          className={`text-3d-title ${className}`}
          style={{
            textShadow: `1px 1px 0 ${accentColor}, 2px 2px 0 #0F172A, 3px 3px 0 #0F172A, 4px 4px 0 #0F172A, 6px 6px 12px rgba(0,0,0,0.25)`,
          }}
        >
          {text}
        </Tag>
      </motion.div>
    </div>
  );
}
