import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import schoolsBanner from "../../assets/images/IMG_0862.webp";

export default function SchoolsHero() {
  const scrollToGrid = () => {
    document.getElementById("schools-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative bg-cover bg-center py-24 transition-colors duration-300 md:py-32"
      style={{ backgroundImage: `url(${schoolsBanner})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3"
        >
         

          <h1 className="mt-5 text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Learning designed for the future.
          </h1>

        

          <button
            type="button"
            onClick={scrollToGrid}
            className="group mt-16 inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-red-700"
          >
            Explore Schools
            <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}