import { motion } from "framer-motion";
import {
  HiOutlineLanguage,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

import skillAreas from "./data/skillAreas";

const iconMap = {
  language: HiOutlineLanguage,
  heart: HiOutlineHeart,
  sparkles: HiOutlineSparkles,
};

const CombinedSkills = () => {
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
          Beyond The Curriculum
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Language, Life & Soft Skills
        </h3>

        <p className="
          mt-5
          text-gray-600
          dark:text-gray-300
          leading-8
          max-w-4xl
        ">
          A well-rounded professional needs more than academic
          expertise — Sandip University builds communication ability,
          personal wellbeing, and workplace-ready soft skills side by
          side with technical training.
        </p>

      </motion.div>

      <div className="space-y-6">

        {
          skillAreas.map((area, index) => {

            const Icon = iconMap[area.icon];

            return (

              <motion.div

                key={area.title}

                initial={{ opacity: 0, y: 30 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.5, delay: index * 0.1 }}

                viewport={{ once: true }}

                className="
                  bg-gray-50
                  dark:bg-slate-900
                  border
                  border-gray-200
                  dark:border-slate-700
                  rounded-2xl
                  p-6
                  md:p-8
                  shadow-md
                "
              >

                <div className="
                  flex
                  items-center
                  gap-3
                  mb-4
                ">

                  <div className="
                    w-11
                    h-11
                    rounded-full
                    bg-red-100
                    dark:bg-red-900/30
                    flex
                    items-center
                    justify-center
                    shrink-0
                  ">
                    <Icon className="text-red-600 w-5 h-5" />
                  </div>

                  <h4 className="
                    font-bold
                    text-lg
                    text-gray-900
                    dark:text-white
                  ">
                    {area.title}
                  </h4>

                </div>

                <p className="
                  text-sm
                  text-gray-600
                  dark:text-gray-300
                  leading-7
                  mb-5
                ">
                  {area.description}
                </p>

                <div className="
                  grid
                  sm:grid-cols-2
                  gap-x-6
                  gap-y-2.5
                ">

                  {
                    area.points.map((point) => (

                      <div
                        key={point}
                        className="
                          flex
                          items-start
                          gap-2.5
                          text-sm
                          text-gray-600
                          dark:text-gray-300
                          leading-6
                        "
                      >

                        <HiOutlineCheckCircle className="
                          text-red-600
                          w-4 h-4
                          shrink-0
                          mt-0.5
                        " />

                        <span>{point}</span>

                      </div>

                    ))
                  }

                </div>

              </motion.div>

            );

          })
        }

      </div>

    </div>
  );
};

export default CombinedSkills;
