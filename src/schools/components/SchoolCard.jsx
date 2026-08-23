import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SchoolCard({ school, index }) {
  const Icon = school.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
    >
      <Link
        to={`/schools/${school.slug}`}
        className="group block h-full overflow-hidden rounded-xl border border-red-100 bg-white shadow-sm transition-all duration-300 hover:border-red-600 hover:shadow-xl dark:border-red-900 dark:bg-[#111111]"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
          <img
            src={school.image}
            alt={school.name}
            loading="lazy"
            decoding="async"
            width={640}
            height={400}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10 transition-opacity duration-300 group-hover:from-black/80" />

          <span className="absolute right-4 top-4 text-sm font-semibold tracking-widest text-white">
            {school.code}
          </span>

          <div className="absolute bottom-4 left-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white shadow-md">
            <Icon size={27} />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-7">
          <h3 className="text-2xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-red-600 dark:text-white">
            {school.name}
          </h3>
          <p className="mt-4 min-h-14 leading-7 text-gray-600 dark:text-gray-300">{school.tagline}</p>
          <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5 text-sm dark:border-gray-800">
            <span className="text-gray-600 dark:text-gray-300">{school.programsCount} programs</span>
            <span className="flex items-center gap-2 font-semibold text-red-600">
              View school <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}