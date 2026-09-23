import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import campusImage from "../../assets/images/about-entrance.jpg";

export default function AboutSandipUniversity() {
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
      className="relative py-24 lg:py-32 bg-[#FAF8F5] dark:bg-zinc-950 transition-colors duration-300 overflow-hidden"
    >
      {/* KNOWLEDGE FLOW LIGHT TRAILS — ANIMATED TRANSITION AT TOP OF ABOUT SECTION */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 pointer-events-none overflow-hidden z-10 opacity-90 dark:opacity-75">
        <svg
          className="w-full h-full text-[#C8102E] filter drop-shadow-[0_0_6px_rgba(200,16,46,0.3)]"
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="aboutLightTrail1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C8102E" stopOpacity="0" />
              <stop offset="30%" stopColor="#C8102E" stopOpacity="0.75" />
              <stop offset="70%" stopColor="#99001C" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="aboutLightTrail2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#880E4F" stopOpacity="0" />
              <stop offset="40%" stopColor="#E11D48" stopOpacity="0.6" />
              <stop offset="80%" stopColor="#C8102E" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#C8102E" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="aboutLightTrail3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C8102E" stopOpacity="0" />
              <stop offset="50%" stopColor="#FECDD3" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#99001C" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Light Trail 1 */}
          <path
            d="M-150,25 Q300,5 750,35 T1600,20"
            stroke="url(#aboutLightTrail1)"
            strokeWidth="2.2"
            fill="none"
            className="animate-[aboutTrailFlow_14s_ease-in-out_infinite]"
          />

          {/* Light Trail 2 */}
          <path
            d="M-50,45 Q400,60 850,20 T1750,40"
            stroke="url(#aboutLightTrail2)"
            strokeWidth="1.6"
            strokeDasharray="8 4"
            fill="none"
            className="animate-[aboutTrailFlow_18s_ease-in-out_infinite_reverse]"
          />

          {/* Light Trail 3 */}
          <path
            d="M-200,10 Q250,35 680,15 T1550,30"
            stroke="url(#aboutLightTrail3)"
            strokeWidth="1.4"
            fill="none"
            className="animate-[aboutTrailFlow_22s_ease-in-out_infinite]"
          />

          {/* Glowing Progress Dots moving along the trails */}
          <circle cx="320" cy="22" r="2.5" fill="#E11D48" className="animate-[aboutDotPulse_5s_ease-in-out_infinite] opacity-90 shadow-md" />
          <circle cx="810" cy="28" r="2.8" fill="#F43F5E" className="animate-[aboutDotPulse_7s_ease-in-out_infinite_1.5s] opacity-95 shadow-md" />
          <circle cx="1180" cy="24" r="2.2" fill="#C8102E" className="animate-[aboutDotPulse_6s_ease-in-out_infinite_3s] opacity-85 shadow-md" />
        </svg>
      </div>

      {/* Embedded CSS keyframes for light trail animation */}
      <style>{`
        @keyframes aboutTrailFlow {
          0% {
            transform: translateX(0px) translateY(0px);
            opacity: 0.6;
          }
          50% {
            transform: translateX(50px) translateY(-4px);
            opacity: 0.95;
          }
          100% {
            transform: translateX(0px) translateY(0px);
            opacity: 0.6;
          }
        }
        @keyframes aboutDotPulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.4);
          }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE CONTENT */}
          <div>
            {/* Eyebrow Badge */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-30px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/40 text-[10px] sm:text-[11px] font-bold text-[#C8102E] uppercase tracking-[2px] mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></span>
              <span>ABOUT SANDIP UNIVERSITY</span>
            </div>

            {/* Main Heading */}
            <h2
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-30px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 100ms",
              }}
              className="text-2xl sm:text-3xl lg:text-[36px] font-black tracking-tight leading-tight mb-5"
            >
              <span className="text-[#C8102E]">SANDIP </span>
              <span className="text-slate-900 dark:text-white">UNIVERSITY</span>
            </h2>

            {/* Paragraph 1 */}
            <p
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 220ms",
              }}
              className="text-xs sm:text-sm lg:text-[15px] max-w-[560px] text-justify text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-4"
            >
              Study at a state of the art campus located in the lap of nature. Sandip University’s 250+ acre campus is a global hub of cutting-edge education and dynamic student development. Since its inception in 2017, Sandip University has created a positive and futuristic hub of education. Our values are steeped in providing various industries with top-notch talent in terms of academic knowledge and hands-on skills.
            </p>

            {/* Paragraph 2 */}
            <p
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 340ms",
              }}
              className="text-xs sm:text-sm lg:text-[15px] max-w-[560px] text-justify text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-4"
            >
              Our students are trained to become global leaders rather than followers. Sandip University’s educational programmes are designed to be in sync with Education 4.0 and Industry 4.0, while paving the way for Education 5.0 and Industry 5.0.
            </p>

            {/* Paragraph 3 */}
            <p
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 460ms",
              }}
              className="text-xs sm:text-sm lg:text-[15px] max-w-[560px] text-justify text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-6"
            >
              Sandip University’s faculty members are pioneers and groundbreaking seekers of innovative ideas, constantly pushing for invigorating excellence from our students. They are well-read and well-qualified professors holding qualifications from IITs, NITs and IIMs across India. Their extensive experience in the teaching industry has honed their skills to the hilt, making them talented academic researchers in their respective industries.
            </p>

            {/* Minimal CTA Button */}
            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D71936] text-white font-bold text-xs sm:text-sm hover:bg-red-700 shadow-md transition-all duration-300 group cursor-pointer"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE CAMPUS IMAGE */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(35px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 150ms",
            }}
            className="relative"
          >
            <div className="relative rounded-[36px] overflow-hidden shadow-2xl border border-slate-200 dark:border-zinc-800 group">
              <img
                src={campusImage}
                alt="Sandip University Campus"
                className="w-full h-[520px] sm:h-[600px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle Red Frame Accent Line */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C8102E]/30 rounded-[36px] transition-colors duration-500 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
