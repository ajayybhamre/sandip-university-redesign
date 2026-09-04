import { motion } from "framer-motion";

import ImagePlaceholder from "../../shared/ImagePlaceholder";

const LeaderMessageCard = ({ leader, reverse, delay }) => (

  <motion.div

    initial={{ opacity: 0, y: 30 }}

    whileInView={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.6, delay }}

    viewport={{ once: true }}

    className="
      grid
      grid-cols-1
      lg:grid-cols-[320px_1fr]
      gap-8
      items-start
    "
  >

    <div className={`flex justify-center lg:justify-start ${reverse ? "lg:order-2" : "lg:order-1"}`}>

      <ImagePlaceholder
        label={`${leader.name} — photo`}
        className="w-64 h-64 sm:w-72 sm:h-72"
      />

    </div>

    <div className={reverse ? "lg:order-1" : "lg:order-2"}>

      <h4 className="
        text-xl
        md:text-2xl
        font-bold
        text-gray-900
        dark:text-white
      ">
        {leader.name}
      </h4>

      <p className="
        text-red-600
        font-semibold
        text-sm
        mt-1
        mb-4
      ">
        {leader.title}
      </p>

      {
        leader.tagline && (

          <p className="
            italic
            text-gray-500
            dark:text-gray-400
            text-sm
            mb-4
          ">
            "{leader.tagline}"
          </p>

        )
      }

      <div className="space-y-3">

        {
          leader.paragraphs.map((para, i) => (

            <p
              key={i}
              className="
                text-gray-600
                dark:text-gray-300
                leading-7
                text-sm
                text-justify
              "
            >
              {para}
            </p>

          ))
        }

      </div>

    </div>

  </motion.div>

);

export default LeaderMessageCard;
