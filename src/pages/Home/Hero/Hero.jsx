import { useRef, useState, useEffect } from "react";
import heroSlide1 from "../../../assets/images/hero-slide-1.jpg";
import heroSlide2 from "../../../assets/images/hero-slide-2.jpg";
import heroSlide3 from "../../../assets/images/hero-slide-3.jpg";
import heroBuilding from "../../../assets/images/hero-building.jpg";

const heroSlides = [
  {
    image: heroSlide1,
    alt: "Sandip University Grand Entrance Gate",
  },
  {
    image: heroSlide2,
    alt: "Sandip University Aerial Amphitheatre & Campus Layout",
  },
  {
    image: heroSlide3,
    alt: "Sandip University Academic Building Facade",
  },
  {
    image: heroBuilding,
    alt: "Sandip University Campus Building",
  },
];

const sandipLetters = ["S", "A", "N", "D", "I", "P"];
const universityLetters = ["U", "N", "I", "V", "E", "R", "S", "I", "T", "Y"];

function Hero() {
  const containerRef = useRef(null);
  const letterRefs = useRef([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto slide timer - 7.5 seconds for a slower, smoother pace
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const handleMouseMove = (e) => {
    if (!isDesktop || !containerRef.current) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const radius = 170; // Influence radius

    letterRefs.current.forEach((el) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dist = Math.hypot(mouseX - centerX, mouseY - centerY);

      if (dist < radius) {
        const factor = Math.pow(1 - dist / radius, 1.8);
        const scale = 1 + 0.22 * factor;
        const translateY = -8 * factor;
        const brightness = 1 + 0.3 * factor;
        const spacing = 1.5 * factor;
        const weight = Math.round(600 + 200 * factor);

        el.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        el.style.filter = `brightness(${brightness})`;
        el.style.paddingLeft = `${spacing}px`;
        el.style.paddingRight = `${spacing}px`;
        el.style.fontWeight = weight.toString();
      } else {
        el.style.transform = "scale(1) translateY(0px)";
        el.style.filter = "brightness(1)";
        el.style.paddingLeft = "0px";
        el.style.paddingRight = "0px";
        el.style.fontWeight = "600";
      }
    });
  };

  const handleMouseLeave = () => {
    letterRefs.current.forEach((el) => {
      if (!el) return;
      el.style.transform = "scale(1) translateY(0px)";
      el.style.filter = "brightness(1)";
      el.style.paddingLeft = "0px";
      el.style.paddingRight = "0px";
      el.style.fontWeight = "600";
    });
  };

  return (
    <section className="relative overflow-hidden rounded-b-[36px] lg:rounded-b-[56px] shadow-2xl">
      <div className="relative w-full h-[60vh] sm:h-[75vh] lg:h-[88vh] flex items-center justify-center">
        
        {/* Background Hero Images Carousel */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1500 ease-in-out ${
              activeSlide === index ? "opacity-100 z-0" : "opacity-0 -z-10"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className={`w-full h-full object-cover object-center transition-transform duration-12000 ease-linear ${
                activeSlide === index ? "scale-105" : "scale-100"
              }`}
            />
            {/* Enhanced Contrast Dark Overlay for Maximum Visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/50"></div>
          </div>
        ))}

        {/* Centered Premium Text Overlay with Maximum Legibility */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto translate-y-12 sm:translate-y-20 lg:translate-y-24 select-none cursor-default py-6"
        >
          {/* Title: SANDIP UNIVERSITY with Enhanced Drop-Shadow Contrast */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-semibold uppercase tracking-tight leading-none mb-4 flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5">
            {/* SANDIP (Red with High-Contrast Drop Shadow) */}
            <span className="inline-flex">
              {sandipLetters.map((char, idx) => (
                <span
                  key={`sandip-${idx}`}
                  ref={(el) => (letterRefs.current[idx] = el)}
                  className="text-[#C8102E] inline-block transition-all duration-300 ease-out will-change-transform drop-shadow-[0_4px_14px_rgba(0,0,0,0.95)]"
                >
                  {char}
                </span>
              ))}
            </span>

            {/* UNIVERSITY (White with High-Contrast Drop Shadow) */}
            <span className="inline-flex">
              {universityLetters.map((char, idx) => {
                const globalIdx = sandipLetters.length + idx;
                return (
                  <span
                    key={`univ-${idx}`}
                    ref={(el) => (letterRefs.current[globalIdx] = el)}
                    className="text-white inline-block transition-all duration-300 ease-out will-change-transform drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          </h1>

          {/* Location: NASHIK */}
          <p className="font-montserrat font-bold text-white text-base sm:text-xl md:text-2xl uppercase tracking-[10px] sm:tracking-[14px] mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            NASHIK
          </p>

          {/* Tagline: SIMPLY WORLD CLASS... */}
          <p className="font-montserrat font-semibold text-rose-100 text-xs sm:text-sm md:text-base uppercase tracking-[4px] sm:tracking-[6px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            SIMPLY WORLD CLASS...
          </p>
        </div>

        {/* Carousel Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 cursor-pointer ${
                activeSlide === idx
                  ? "w-8 bg-[#C8102E] shadow-md shadow-red-600/50"
                  : "w-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;