import { motion } from "framer-motion";

const LeaderMessageCard = ({ leader, reverse, delay }) => (

  <motion.div

    initial={{ opacity: 0, y: 30 }}

    whileInView={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.6, delay }}

    viewport={{ once: true }}

    className={`
      flex
      flex-col
      ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
      gap-8
      items-start
    `}
  >

    <div className="
      w-full
      sm:w-80
      lg:w-72
      xl:w-80
      shrink-0
      mx-auto
      lg:mx-0
    ">

      <div className="
        rounded-2xl
        overflow-hidden
        shadow-lg
        border
        border-gray-100
        dark:border-slate-700
        bg-gray-50
        dark:bg-slate-900
      ">

        <img
          src={leader.image}
          alt={leader.name}
          className="
            w-full
            h-auto
            object-contain
          "
        />

      </div>

    </div>

    <div className="flex-1 w-full">

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
