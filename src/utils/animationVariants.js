// Sandip University Master Animation Tokens & Rare Animation Library

export const EASE_EMPHASIZED = [0.2, 0.0, 0.0, 1.0];
export const EASE_SMOOTH = [0.25, 0.4, 0.25, 1.0];
export const EASE_BOUNCE = [0.34, 1.56, 0.64, 1.0];

// Brand Colors (Sandip University Palette)
export const BRAND_NAVY = "#0F172A";
export const BRAND_CRIMSON = "#C8102E";
export const BRAND_ORANGE = "#F97316";
export const BRAND_GOLD = "#D4AF37";
export const BRAND_BG_LIGHT = "#FAF8F5";

// Stagger Container
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
      ease: EASE_SMOOTH,
    },
  },
});

// Fade Directional Variants
export const fadeUp = {
  hidden: { opacity: 0, y: 35, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE_SMOOTH },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -35, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE_SMOOTH },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -45, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE_SMOOTH },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 45, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE_SMOOTH },
  },
};

// Rare Mask / Curtain Clip Reveals
export const curtainRevealLeft = {
  hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0 },
  visible: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    opacity: 1,
    transition: { duration: 0.9, ease: EASE_EMPHASIZED },
  },
};

export const curtainRevealUp = {
  hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", opacity: 0 },
  visible: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    opacity: 1,
    transition: { duration: 0.9, ease: EASE_EMPHASIZED },
  },
};

export const circleMaskExpand = {
  hidden: { clipPath: "circle(0% at 50% 50%)", opacity: 0 },
  visible: {
    clipPath: "circle(150% at 50% 50%)",
    opacity: 1,
    transition: { duration: 1.1, ease: EASE_EMPHASIZED },
  },
};

// Rare Character Blur-to-Sharp Text Reveal
export const characterBlurStagger = (delay = 0) => ({
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: delay + i * 0.03,
      duration: 0.5,
      ease: EASE_EMPHASIZED,
    },
  }),
});

// Interactive Card Hover Variations
export const cardHover3D = {
  rest: { y: 0, scale: 1, rotateX: 0, rotateY: 0, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" },
  hover: {
    y: -10,
    scale: 1.025,
    boxShadow: "0 25px 35px -12px rgba(200, 16, 46, 0.18)",
    transition: { duration: 0.35, ease: EASE_SMOOTH },
  },
};

export const cardSpotlightHover = {
  rest: { borderColor: "rgba(226, 232, 240, 0.8)", scale: 1 },
  hover: {
    borderColor: "rgba(200, 16, 46, 0.6)",
    scale: 1.02,
    boxShadow: "0 0 25px rgba(200, 16, 46, 0.12)",
    transition: { duration: 0.3, ease: EASE_SMOOTH },
  },
};

// SVG Path Drawing Animation
export const svgPathDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.8, ease: EASE_EMPHASIZED },
  },
};

// Orbit Node Pulse
export const orbitNodePulse = {
  animate: {
    scale: [1, 1.25, 1],
    opacity: [0.4, 0.9, 0.4],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Continuous Shimmer Sweep
export const shimmerSweep = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Infinite Marquee
export const marqueeLoop = (duration = 30) => ({
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration,
        ease: "linear",
      },
    },
  },
});
