import { motion } from "framer-motion";
import {
  FaClock,
  FaGraduationCap,
  FaBookOpen,
  FaLaptopCode,
  FaBriefcase,
  FaUsers,
  FaGlobe,
  FaFlask,
} from "react-icons/fa";

const highlights = [
  { icon: <FaClock />, title: "Duration", value: "4 Years", color: "from-red-500 to-red-600" },
  { icon: <FaGraduationCap />, title: "Degree", value: "B.Tech", color: "from-blue-500 to-blue-600" },
  { icon: <FaBookOpen />, title: "Semesters", value: "8 Semesters", color: "from-green-500 to-green-600" },
  { icon: <FaLaptopCode />, title: "Curriculum", value: "Industry Aligned", color: "from-violet-500 to-violet-600" },
  { icon: <FaFlask />, title: "Laboratories", value: "15+ Modern Labs", color: "from-orange-500 to-orange-600" },
  { icon: <FaBriefcase />, title: "Internships", value: "Industry Training", color: "from-cyan-500 to-cyan-600" },
  { icon: <FaUsers />, title: "Placement Support", value: "100% Assistance", color: "from-pink-500 to-pink-600" },
  { icon: <FaGlobe />, title: "Global Exposure", value: "International Opportunities", color: "from-emerald-500 to-emerald-600" },
];

const CourseHighlights = () => {
  return (
    <section className="relative py-20 bg-gray-50 dark:bg-slate-950 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-semibold uppercase tracking-widest">Program Overview</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900 dark:text-white">Course Highlights</h2>
          <p className="mt-5 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-8">
            Explore the key features of our program designed to provide academic excellence, practical exposure, research opportunities, and outstanding career prospects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-gray-200 dark:border-slate-800 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center text-3xl shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="mt-8 text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-7">{item.value}</p>
                <div className="mt-8 h-1 w-12 bg-red-600 rounded-full transition-all duration-300 group-hover:w-24"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;