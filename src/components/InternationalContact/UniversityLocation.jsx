import { useState } from "react";
import { OFFICIAL_CONTACT_INFO } from "../../pages/InternationalAdmission/contactTravelData";
import { MapPin, ExternalLink, Globe, Sparkles, Layers } from "lucide-react";
import TiltCard from "../Animated/TiltCard";
import SpotlightCard from "../Animated/SpotlightCard";
import MagneticButton from "../Animated/MagneticButton";
import "./UniversityLocation.css";

export default function UniversityLocation() {
  // State to toggle map view: 'satellite' vs 'roadmap'
  const [mapType, setMapType] = useState("satellite");

  // Google Maps Embed URLs: Satellite vs Roadmap
  const satelliteEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.626248987178!2d73.66632487588267!3d19.98220028141443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeaa8944510cd%3A0xe54ef93cf0e6db63!2sSandip%20University!5e1!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin&maptype=satellite";

  const roadmapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.626248987178!2d73.66632487588267!3d19.98220028141443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeaa8944510cd%3A0xe54ef93cf0e6db63!2sSandip%20University!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section id="campus-location" className="py-20 bg-[#FAF8F5] text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Ambient Crimson Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E] bg-red-50 px-4 py-1.5 rounded-full border border-red-200">
            CAMPUS COORDINATES & SATELLITE MAP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-3">
            Find Us in <span className="text-[#C8102E]">3D Satellite View</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Sandip University 250+ acre main campus is situated on Trimbak Road in Nashik, Maharashtra, India.
          </p>
        </div>

        {/* Two Column Layout: Left Details, Right Satellite Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Details Box with 3D Tilt & Spotlight */}
          <TiltCard className="lg:col-span-5 h-full">
            <SpotlightCard className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-xl space-y-6 h-full flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#C8102E] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-600/25">
                    <MapPin className="w-7 h-7 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Sandip University Campus</h3>
                    <p className="text-xs font-bold text-[#C8102E] uppercase tracking-wider">Nashik, Maharashtra, India</p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  <p><strong className="text-slate-900">Address:</strong> {OFFICIAL_CONTACT_INFO.address}</p>
                  <p><strong className="text-slate-900">Toll-Free Helpline:</strong> {OFFICIAL_CONTACT_INFO.tollFree}</p>
                  <p><strong className="text-slate-900">Email:</strong> {OFFICIAL_CONTACT_INFO.internationalEmail}</p>
                  <p><strong className="text-slate-900">Office Hours:</strong> {OFFICIAL_CONTACT_INFO.officeHours}</p>
                </div>
              </div>

              <MagneticButton className="w-full pt-4">
                <a
                  href={OFFICIAL_CONTACT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow-xl w-full justify-center cursor-pointer"
                >
                  <span>Open 3D Satellite Map in Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-[#C8102E]" />
                </a>
              </MagneticButton>

            </SpotlightCard>
          </TiltCard>

          {/* Right Interactive Satellite Map */}
          <div className="lg:col-span-7 h-[440px] sm:h-[480px] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl bg-slate-900 relative group">
            
            {/* View Switcher Overlay Badge */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-xl">
              <button
                onClick={() => setMapType("satellite")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                  mapType === "satellite"
                    ? "bg-[#C8102E] text-white shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Globe size={14} />
                <span>🛰️ 3D Satellite Look</span>
              </button>
              <button
                onClick={() => setMapType("roadmap")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                  mapType === "roadmap"
                    ? "bg-[#C8102E] text-white shadow-md"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Layers size={14} />
                <span>Roadmap View</span>
              </button>
            </div>

            {/* Live Indicator Pill */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-white text-[11px] font-bold shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8102E] animate-ping" />
              <Sparkles size={13} className="text-[#C8102E]" />
              <span>LIVE CAMPUS SATELLITE VIEW</span>
            </div>

            {/* IFrame Google Maps Embed */}
            <iframe
              title="Sandip University 3D Satellite Map"
              src={mapType === "satellite" ? satelliteEmbedUrl : roadmapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "contrast(1.05) brightness(1.02)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
