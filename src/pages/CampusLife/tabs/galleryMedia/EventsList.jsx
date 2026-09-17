import { motion } from "framer-motion";
import { HiOutlineClock, HiOutlineMapPin, HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

import eventsList from "./data/eventsListData";

const EventsList = () => (
  <div>

    <div className="
      flex
      flex-col
      sm:flex-row
      sm:items-center
      sm:justify-between
      gap-3
      mb-8
    ">

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Live calendar of upcoming happenings on campus.
      </p>

      <a
        href="https://www.sandipuniversity.edu.in/blog/events/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          gap-1.5
          text-sm
          font-semibold
          text-red-600
          hover:text-red-700
          transition-colors
          w-fit
        "
      >
        View full events calendar
        <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
      </a>

    </div>

    <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-5
    ">

      {
        eventsList.map((event, index) => (

          <motion.a

            key={event.id}

            href={event.url}

            target="_blank"

            rel="noopener noreferrer"

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}

            viewport={{ once: true }}

            whileHover={{ y: -4 }}

            className="
              flex
              gap-4
              bg-gray-50
              dark:bg-slate-900
              border
              border-gray-200
              dark:border-slate-700
              rounded-2xl
              p-5
              hover:border-red-300
              dark:hover:border-red-800
              transition-colors
            "
          >

            <div className="
              flex
              flex-col
              items-center
              justify-center
              shrink-0
              w-16
              h-16
              rounded-xl
              bg-red-600
              text-white
            ">
              <span className="text-xl font-bold leading-none">
                {event.day}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wide mt-1">
                {event.month}
              </span>
            </div>

            <div className="min-w-0">

              <h5 className="
                font-bold
                text-gray-900
                dark:text-white
                leading-6
                mb-2
              ">
                {event.title}
              </h5>

              <div className="
                flex
                flex-wrap
                items-center
                gap-x-4
                gap-y-1
                text-xs
                text-gray-500
                dark:text-gray-400
              ">

                <span className="flex items-center gap-1.5">
                  <HiOutlineClock className="w-4 h-4 shrink-0" />
                  {event.time}
                </span>

                <span className="flex items-center gap-1.5">
                  <HiOutlineMapPin className="w-4 h-4 shrink-0" />
                  {event.location}
                </span>

              </div>

            </div>

          </motion.a>

        ))
      }

    </div>

  </div>
);

export default EventsList;
