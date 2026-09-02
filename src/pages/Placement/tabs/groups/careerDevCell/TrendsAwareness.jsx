import { motion } from "framer-motion";
import { HiOutlineLightBulb } from "react-icons/hi2";

import trendsAwareness from "./data/trendsAwareness";

const TrendsAwareness = () => {
  return (
    <div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="mb-10"
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
            <HiOutlineLightBulb className="text-red-600 w-5 h-5" />
          </div>

          <span className="
            text-red-600
            font-semibold
            uppercase
            tracking-[3px]
            text-sm
          ">
            Stay Ahead
          </span>

        </div>

        <h3 className="
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Awareness of Trends in Technology
        </h3>

        <p className="
          mt-5
          text-gray-600
          dark:text-gray-300
          leading-8
          max-w-4xl
          text-justify
        ">
          Awareness of recently developing technology in one's
          specialisation and allied fields is essential, even beyond
          the curriculum. Every student should be curious about present
          trends in design and manufacturing across industries —
          including medicine and agriculture — to explore ways of
          enhancing processes with their own innovative engineering
          concepts. This awareness also opens opportunities for
          launching start-ups in emerging fields after graduation.
        </p>

      </motion.div>

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-4
      ">

        {
          trendsAwareness.map((item, index) => (

            <motion.div

              key={item.text}

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.4, delay: index * 0.06 }}

              viewport={{ once: true }}

              whileHover={{ y: -3 }}

              className="
                bg-gray-50
                dark:bg-slate-900
                border
                border-gray-200
                dark:border-slate-700
                rounded-xl
                p-5
                flex
                items-start
                gap-4
              "
            >

              <div className="
                w-9
                h-9
                rounded-full
                bg-red-100
                dark:bg-red-900/30
                flex
                items-center
                justify-center
                shrink-0
              ">
                <item.Icon className="text-red-600 w-4 h-4" />
              </div>

              <p className="
                text-sm
                text-gray-700
                dark:text-gray-300
                leading-6
                pt-1.5
                text-justify
              ">
                {item.text}
              </p>

            </motion.div>

          ))
        }

      </div>

    </div>
  );
};

export default TrendsAwareness;
