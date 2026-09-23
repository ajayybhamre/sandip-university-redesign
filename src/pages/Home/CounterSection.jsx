import { useEffect, useRef, useState } from "react";

const stats = [
  {
    targetNum: 250,
    suffix: "+",
    title: "Acres Campus",
    rawText: null,
  },
  {
    targetNum: 10000,
    suffix: "+",
    formatComma: true,
    title: "Alumni Students",
    rawText: null,
  },
  {
    targetNum: 4,
    suffix: "th",
    title: "Top Ranking University",
    rawText: null,
  },
  {
    targetNum: null,
    suffix: "",
    title: "Experienced Faculties",
    rawText: "IIT/NITs",
  },
  {
    targetNum: 100,
    suffix: "%",
    title: "Placement Assistance",
    rawText: null,
  },
  {
    targetNum: 120,
    suffix: "+",
    title: "Patents Filed",
    rawText: null,
  },
];

function CountUpNumber({ targetNum, suffix, formatComma, rawText, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible || targetNum === null) return;

    let startTime = null;
    const duration = 1600; // ms

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Smooth cubic ease-out curve
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOutProgress * targetNum);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetNum);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetNum]);

  if (rawText) {
    return <span>{rawText}</span>;
  }

  const formattedCount = formatComma
    ? count.toLocaleString()
    : count.toString();

  return (
    <span>
      {formattedCount}
      {suffix}
    </span>
  );
}

export default function CounterSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 lg:py-20 bg-slate-50/60 dark:bg-zinc-950/60 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
              }}
              className="group relative bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800/80 rounded-2xl p-5 sm:p-6 text-center shadow-sm hover:shadow-xl hover:border-[#C8102E]/40 hover:shadow-[#C8102E]/10 transition-all duration-300 ease-out hover:-translate-y-2 flex flex-col justify-center items-center h-full overflow-hidden"
            >
              {/* Subtle Red Top Accent Glow Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8102E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Number */}
              <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black text-[#C8102E] tracking-tight group-hover:scale-105 transition-transform duration-300 leading-none">
                <CountUpNumber
                  targetNum={item.targetNum}
                  suffix={item.suffix}
                  formatComma={item.formatComma}
                  rawText={item.rawText}
                  isVisible={isVisible}
                />
              </h2>

              {/* Title Label */}
              <p className="mt-3 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}