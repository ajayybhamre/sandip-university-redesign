import { motion } from "framer-motion";

const stats = [
  { value: "28 Lac", label: "Highest Package in India" },
  { value: "1.12 Cr", label: "Highest Package for Foreign Employee" },
  { value: "250+", label: "Companies Visiting" },
  { value: "12 Lacs", label: "Average Package" },
  { value: "100%", label: "Placement Assistance" },
];

const StatsStrip = () => {
  return (

    <motion.div

      initial={{ opacity: 0, y: 30 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.6 }}

      viewport={{ once: true }}

      className="
        bg-gray-50
        dark:bg-slate-900
        border
        border-gray-200
        dark:border-slate-700
        rounded-2xl
        shadow-md
        grid
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-5
        divide-x
        divide-y
        sm:divide-y-0
        divide-gray-200
        dark:divide-slate-700
      "
    >

      {
        stats.map((stat) => (

          <div
            key={stat.label}
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
              px-4
              py-8
            "
          >

            <span className="
              text-2xl
              md:text-3xl
              font-bold
              text-gray-900
              dark:text-white
            ">
              {stat.value}
            </span>

            <span className="
              mt-2
              text-[11px]
              md:text-xs
              font-bold
              uppercase
              tracking-wide
              text-gray-500
              dark:text-gray-400
            ">
              {stat.label}
            </span>

          </div>

        ))
      }

    </motion.div>

  );
};

export default StatsStrip;
