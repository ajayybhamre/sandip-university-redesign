import { motion } from "framer-motion";

const LeaderMessageCard = ({ leader, reverse, delay }) => (

  <motion.div

    initial={{ opacity: 0, y: 30 }}

    whileInView={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.6, delay }}

    viewport={{ once: true }}

    className="
      grid
      grid-cols-1
      lg:grid-cols-[340px_1fr]
      gap-8
      items-start
    "
  >

    <div className={`flex justify-center lg:justify-start ${reverse ? "lg:order-2" : "lg:order-1"}`}>

      <div className="
        w-72
        sm:w-80
        aspect-[3/4]
        rounded-2xl
        overflow-hidden
        shadow-lg
        border
        border-gray-100
        dark:border-slate-700
      ">

        <img
          src={leader.image}
          alt={leader.name}
          className="
            w-full
            h-full
            object-cover
          "
        />

      </div>

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
