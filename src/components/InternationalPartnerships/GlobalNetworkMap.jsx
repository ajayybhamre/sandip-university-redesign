import { useState } from "react";
import { PARTNERS_DATA } from "../../pages/InternationalAdmission/partnersData";
import { Globe, Sparkles } from "lucide-react";
import SpotlightCard from "../Animated/SpotlightCard";
import TiltCard from "../Animated/TiltCard";
import "./GlobalNetworkMap.css";

const mapNodes = [
  { id: "BY", country: "Belarus", flag: "🇧🇾", region: "Europe", top: "32%", left: "55%", x: 55, y: 32 },
  { id: "RU", country: "Russia", flag: "🇷🇺", region: "Europe", top: "28%", left: "68%", x: 68, y: 28 },
  { id: "DE", country: "Germany", flag: "🇩🇪", region: "Europe", top: "34%", left: "48%", x: 48, y: 34 },
  { id: "LK", country: "Sri Lanka", flag: "🇱🇰", region: "Asia", top: "62%", left: "70%", x: 70, y: 62 },
  { id: "SG", country: "Singapore", flag: "🇸🇬", region: "Asia", top: "64%", left: "78%", x: 78, y: 64 },
  { id: "AU", country: "Australia", flag: "🇦🇺", region: "Australia & Oceania", top: "78%", left: "86%", x: 86, y: 78 },
  { id: "PL", country: "Poland", flag: "🇵🇱", region: "Europe", top: "33%", left: "51%", x: 51, y: 33 },
  { id: "BD", country: "Bangladesh", flag: "🇧🇩", region: "Asia", top: "54%", left: "73%", x: 73, y: 54 },
  { id: "KR", country: "South Korea", flag: "🇰🇷", region: "Asia", top: "42%", left: "84%", x: 84, y: 42 },
  { id: "BW", country: "Botswana", flag: "🇧🇼", region: "Africa", top: "72%", left: "52%", x: 52, y: 72 },
  { id: "MY", country: "Malaysia", flag: "🇲🇾", region: "Asia", top: "61%", left: "76%", x: 76, y: 61 },
  { id: "US", country: "USA", flag: "🇺🇸", region: "North America", top: "38%", left: "22%", x: 22, y: 38 },
];

export default function GlobalNetworkMap({ onSelectCountry }) {
  const [hoveredNode, setHoveredNode] = useState(null);

  const getPartnerCount = (country) => {
    return PARTNERS_DATA.filter((p) => p.country === country).length;
  };

  // Center node: India Sandip University coordinates (67%, 52%)
  const originX = 67;
  const originY = 52;

  return (
    <section className="py-20 lg:py-28 bg-[#0B0B0D] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E] bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full">
            3D INTERACTIVE GLOBAL NETWORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-3 mb-4">
            Our Global <span className="text-[#C8102E]">3D Network Map</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-medium">
            Explore 3D connections radiating from Sandip University Nashik campus to partner institutions worldwide.
          </p>
        </div>

        {/* 3D Map Container with TiltCard & SpotlightCard */}
        <TiltCard className="w-full">
          <SpotlightCard className="relative w-full h-[460px] sm:h-[540px] rounded-3xl bg-slate-950 border border-slate-800 p-6 overflow-hidden shadow-2xl flex items-center justify-center">
            
            {/* Subtle Grid Lines Background */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C8102E_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

            {/* SVG Arc Connection Lines from Sandip India to Nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              <defs>
                <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C8102E" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {mapNodes.map((node) => {
                const isHovered = hoveredNode === node.id;
                // Compute bezier curve path from (67%, 52%) to (node.x%, node.y%)
                const startX = originX * 10;
                const startY = originY * 5.4;
                const endX = node.x * 10;
                const endY = node.y * 5.4;
                const controlX = (startX + endX) / 2;
                const controlY = Math.min(startY, endY) - 50;

                return (
                  <g key={node.id}>
                    <path
                      d={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
                      fill="none"
                      stroke={isHovered ? "#C8102E" : "url(#arcGrad)"}
                      strokeWidth={isHovered ? "2.5" : "1.5"}
                      strokeDasharray="6 4"
                      className="animate-pulse"
                      style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Central India Node (Sandip University) - 3D Elevated Layer */}
            <div
              style={{ transform: "translateZ(50px)" }}
              className="absolute top-[52%] left-[67%] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center"
            >
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-[#C8102E]/40 animate-ping" />
                <div className="w-12 h-12 rounded-full bg-[#C8102E] text-white flex items-center justify-center shadow-2xl shadow-red-600/60 border-2 border-white relative z-10">
                  <Globe className="w-6 h-6 animate-spin-slow" />
                </div>
              </div>
              <div className="mt-2 px-3 py-1 rounded-xl bg-[#C8102E] text-white text-[11px] font-black tracking-wider uppercase shadow-xl border border-white/20 flex items-center gap-1.5">
                <Sparkles size={12} />
                <span>SANDIP UNIVERSITY (INDIA)</span>
              </div>
            </div>

            {/* Partner Country 3D Floating Nodes */}
            {mapNodes.map((node) => {
              const pCount = getPartnerCount(node.country);
              const isHovered = hoveredNode === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => onSelectCountry(node.country)}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{
                    top: node.top,
                    left: node.left,
                    transform: isHovered ? "translateZ(40px) scale(1.2)" : "translateZ(20px)",
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer group z-20"
                >
                  <div className="relative flex items-center justify-center">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-all shadow-md ${
                        isHovered
                          ? "bg-[#C8102E] text-white border-2 border-white shadow-xl shadow-red-600/50"
                          : "bg-slate-900 border border-slate-700 hover:border-[#C8102E]"
                      }`}
                    >
                      <span className="text-xs">{node.flag}</span>
                    </div>

                    {/* Tooltip */}
                    <div
                      className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3.5 py-2 rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-200 text-xs font-extrabold whitespace-nowrap transition-all pointer-events-none ${
                        isHovered ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-1"
                      }`}
                    >
                      <div>
                        {node.flag} {node.country}
                      </div>
                      <div className="text-[10px] text-[#C8102E] font-black uppercase">
                        {pCount} Partner{pCount > 1 ? "s" : ""}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}

          </SpotlightCard>
        </TiltCard>

      </div>
    </section>
  );
}
