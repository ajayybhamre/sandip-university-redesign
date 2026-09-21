import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function SectionLoader({ text = "Loading content..." }) {
  return (
    <div className="py-16 text-center space-y-4">
      <div className="relative w-12 h-12 mx-auto">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-full h-full border-4 border-slate-200 border-t-[#C8102E] rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center text-[#C8102E]">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
      </div>
      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest animate-pulse">
        {text}
      </p>
    </div>
  );
}
