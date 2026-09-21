import { motion } from "framer-motion";
import { HiOutlineEye, HiOutlineFlag } from "react-icons/hi2";

import missions from "./visionMission/data/missions";

const VisionMissionTab = () => {
  return (
    <div className="space-y-16">

      {/* Vision */}

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
          px-6
          py-10
          md:px-12
          md:py-14
          text-center
          shadow-md
        "
      >

        <div className="
          w-14
          h-14
          rounded-full
          bg-red-100
          dark:bg-red-900/30
          flex
          items-center
          justify-center
          mx-auto
          mb-6
        ">
          <HiOutlineEye className="text-red-600 w-6 h-6" />
        </div>

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          Our Vision
        </span>

        <p className="
          mt-5
          text-gray-900
          dark:text-white
          text-xl
          md:text-3xl
          font-semibold
          leading-snug
          max-w-3xl
          mx-auto
        ">
          "To be one of the most preferred learning place to nurture
          future global leaders congenial to society."
        </p>

      </motion.div>

      {/* Mission */}

      <div>

        <motion.div

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6 }}

          viewport={{ once: true }}

          className="mb-10 text-center"
        >

          <div className="
            w-14
            h-14
            rounded-full
            bg-red-100
            dark:bg-red-900/30
            flex
            items-center
            justify-center
            mx-auto
            mb-5
          ">
            <HiOutlineFlag className="text-red-600 w-6 h-6" />
          </div>

          <span className="
            text-red-600
            font-semibold
            uppercase
            tracking-[3px]
            text-sm
          ">
            Our Mission
          </span>

          <h3 className="
            mt-4
            text-2xl
            md:text-4xl
            font-bold
            text-gray-900
            dark:text-white
          ">
            Guiding Every Decision We Make
          </h3>

        </motion.div>

        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          items-start
        ">

          {
            missions.map((mission, index) => (

              <motion.div

                key={mission.code}

                initial={{ opacity: 0, y: 30 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.5, delay: index * 0.08 }}

                viewport={{ once: true }}

                whileHover={{ y: -4 }}

                className="
                  bg-gray-50
                  dark:bg-slate-900
                  border
                  border-gray-200
                  dark:border-slate-700
                  rounded-2xl
                  p-6
                  shadow-md
                  flex
                  gap-4
                "
              >

                <div className="
                  w-11
                  h-11
                  rounded-full
                  bg-red-600
                  text-white
                  font-bold
                  text-xs
                  flex
                  items-center
                  justify-center
                  shrink-0
                ">
                  {mission.code}
                </div>

                <p className="
                  text-sm
                  text-gray-600
                  dark:text-gray-300
                  leading-6
                  pt-1.5
                  text-justify
                ">
                  {mission.text}
                </p>

              </motion.div>

            ))
          }

        </div>

      </div>

    </div>
  );
};

export default VisionMissionTab;
