import { motion } from "framer-motion";
import topAchievers from "./data/topAchievers";

const TopAchievers = () => {
  return (
    <div>

      <div className="mb-10 text-center">

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          Great Placements, Greater Tomorrow
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Our Top Achievers
        </h3>

      </div>


      <div className="
        grid
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-6
        gap-6
      ">

        {
          topAchievers.map((student, index) => (

            <motion.div

              key={student.name}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.5, delay: index * 0.06 }}

              viewport={{ once: true }}

              whileHover={{ y: -6 }}

              className="
                flex
                flex-col
                items-center
                text-center
              "
            >

              <div className="relative">

                <img
                  src={student.image}
                  alt={student.name}
                  className="
                    w-24
                    h-24
                    sm:w-28
                    sm:h-28
                    aspect-square
                    rounded-full
                    object-cover
                    object-center
                    border-4
                    border-red-100
                    dark:border-red-900
                    shadow-lg
                  "
                />

                <span className="
                  absolute
                  -bottom-2
                  left-1/2
                  -translate-x-1/2
                  bg-red-600
                  text-white
                  text-xs
                  font-bold
                  px-3
                  py-1
                  rounded-full
                  shadow-md
                  whitespace-nowrap
                ">
                  {student.package} LPA
                </span>

              </div>

              <h4 className="
                mt-4
                font-bold
                text-gray-900
                dark:text-white
                text-sm
              ">
                {student.name}
              </h4>

              <p className="
                mt-1
                text-xs
                text-gray-500
                dark:text-gray-400
                leading-5
                text-justify
              ">
                {student.company}
              </p>

            </motion.div>

          ))
        }

      </div>

      <p className="
        mt-8
        text-center
        text-sm
        font-semibold
        text-red-600
      ">
        And Many More...!
      </p>

    </div>
  );
};

export default TopAchievers;
