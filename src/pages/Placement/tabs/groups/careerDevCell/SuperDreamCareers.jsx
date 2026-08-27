import { motion } from "framer-motion";
import { HiOutlineTrophy } from "react-icons/hi2";

import careerTiers from "./data/careerTiers";

const tierStyles = {
  gold: "bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/20 border-amber-300 dark:border-amber-700",
  silver: "bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/40 dark:to-slate-800/20 border-slate-300 dark:border-slate-600",
  bronze: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/30 dark:to-orange-900/20 border-orange-300 dark:border-orange-700",
};

const tierIconStyles = {
  gold: "bg-amber-400 text-white",
  silver: "bg-slate-400 text-white",
  bronze: "bg-orange-400 text-white",
};

const SuperDreamCareers = () => {
  return (
    <div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="mb-10"
      >

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          Aim Higher
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Preparing Students for "Super Dream" Careers
        </h3>

        <p className="
          mt-5
          text-gray-600
          dark:text-gray-300
          leading-8
          max-w-4xl
        ">
          Students at Sandip University are offered unique opportunities
          to train above the rest and aim for a "Super Dream" career.
        </p>

      </motion.div>

      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
      ">

        {
          careerTiers.map((tier, index) => (

            <motion.div

              key={tier.name}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.5, delay: index * 0.1 }}

              viewport={{ once: true }}

              whileHover={{ y: -6 }}

              className={`
                rounded-2xl
                p-6
                border
                shadow-md
                ${tierStyles[tier.tier]}
              `}
            >

              <div className={`
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                mb-5
                ${tierIconStyles[tier.tier]}
              `}>
                <HiOutlineTrophy className="w-6 h-6" />
              </div>

              <h4 className="
                font-bold
                text-lg
                text-gray-900
                dark:text-white
                mb-2
              ">
                {tier.name}
              </h4>

              <p className="
                text-sm
                font-semibold
                text-gray-700
                dark:text-gray-300
              ">
                {tier.package}
              </p>

            </motion.div>

          ))
        }

      </div>

    </div>
  );
};

export default SuperDreamCareers;
