import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import campus1 from "../../assets/images/campus-1.jpg";
import campus2 from "../../assets/images/campus-2.webp";
import campus3 from "../../assets/images/campus-3.png";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import SpotlightCard from "../Animated/SpotlightCard";
import TiltCard from "../Animated/TiltCard";
import "./CampusLife.css";

const galleryImages = [
  {
    id: 1,
    title: "Ultra-Modern Campus",
    category: "Infrastructure",
    img: campus1,
    size: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "State-of-the-Art Labs",
    category: "Academics",
    img: campus2,
    size: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "Vibrant Student Life",
    category: "Campus Events",
    img: campus3,
    size: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "International Cultural Fest",
    category: "Cultural Exchange",
    img: gallery1,
    size: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 5,
    title: "Global Student Lounge",
    category: "Community",
    img: gallery2,
    size: "col-span-1 md:col-span-1 row-span-1",
  },
];

export default function CampusLife() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E] bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
            Life at Sandip
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mt-3 mb-4">
            Experience <span className="text-[#C8102E]">Campus Life</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            A 250+ acre vibrant ecosystem designed for learning, sports, culture, and lifelong memories.
          </p>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {galleryImages.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImg(item)}
              className={`relative rounded-3xl overflow-hidden shadow-md cursor-pointer group bg-slate-900 border border-slate-200 ${item.size}`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-white bg-[#C8102E] px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 group-hover:text-[#C8102E] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            >
              <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                <button
                  onClick={() => setSelectedImg(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-[#C8102E] transition-colors"
                >
                  <X size={20} />
                </button>
                <img
                  src={selectedImg.img}
                  alt={selectedImg.title}
                  className="w-full max-h-[70vh] object-cover"
                />
                <div className="p-6 bg-slate-900 text-white space-y-1">
                  <span className="text-xs font-extrabold text-[#C8102E] uppercase tracking-wider">
                    {selectedImg.category}
                  </span>
                  <h4 className="text-xl font-bold">{selectedImg.title}</h4>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
