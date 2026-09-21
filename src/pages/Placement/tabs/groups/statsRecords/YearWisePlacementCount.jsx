import { motion } from "framer-motion";
import { HiOutlineTrophy } from "react-icons/hi2";

import yearWisePlacements from "./data/yearWisePlacements";

const maxTotal = Math.max(...yearWisePlacements.map((y) => y.total));

const YearWisePlacementCount = () => {
  return (
    <div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="mb-10 text-center"
      >

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          Track Record
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Year-wise Placement Count
        </h3>

      </motion.div>

      <div className="
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-6
      ">

        {
          yearWisePlacements.map((item, index) => (

            <motion.div

              key={item.year}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.5, delay: index * 0.08 }}

              viewport={{ once: true }}

              whileHover={{ y: -6 }}

              className="
                bg-gray-50
                dark:bg-slate-900
                border
                border-gray-200
                dark:border-slate-700
                rounded-2xl
                p-6
                shadow-md
              "
            >

              <div className="
                w-11
                h-11
                rounded-full
                bg-red-100
                dark:bg-red-900/30
                flex
                items-center
                justify-center
                mb-5
              ">
                <HiOutlineTrophy className="text-red-600 w-5 h-5" />
              </div>

              <span className="
                block
                text-3xl
                md:text-4xl
                font-bold
                text-gray-900
                dark:text-white
              ">
                {item.total}
              </span>

              <span className="
                block
                mt-1
                text-xs
                font-semibold
                uppercase
                tracking-wide
                text-gray-500
                dark:text-gray-400
              ">
                Total Placements
              </span>

              <span className="
                block
                mt-3
                text-sm
                font-bold
                text-red-600
              ">
                A.Y. {item.year}
              </span>

              <div className="
                mt-4
                w-full
                h-1.5
                rounded-full
                bg-gray-200
                dark:bg-slate-700
                overflow-hidden
              ">

                <motion.div

                  initial={{ width: 0 }}

                  whileInView={{
                    width: `${(item.total / maxTotal) * 100}%`,
                  }}

                  transition={{
                    duration: 0.9,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}

                  viewport={{ once: true }}

                  className="h-full rounded-full bg-red-600"
                />

              </div>

            </motion.div>

          ))
        }

      </div>

    </div>
  );
};

export default YearWisePlacementCount;
