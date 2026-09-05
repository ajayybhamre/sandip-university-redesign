import { motion } from "framer-motion";

import memberships from "./data/memberships";

const MembershipGrid = () => (
  <div className="
    grid
    grid-cols-2
    sm:grid-cols-3
    lg:grid-cols-4
    gap-4
  ">

    {
      memberships.map((item, index) => (

        <motion.div

          key={item.name}

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.4, delay: index * 0.05 }}

          viewport={{ once: true }}

          whileHover={{ y: -4 }}

          className="
            bg-white
            dark:bg-slate-900
            border
            border-gray-200
            dark:border-slate-700
            rounded-xl
            overflow-hidden
            flex
            flex-col
            text-center
          "
        >

          <div className="
            w-full
            aspect-[3/2]
            bg-white
            flex
            items-center
            justify-center
            p-4
          ">

            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="
                max-w-full
                max-h-full
                object-contain
              "
            />

          </div>

          <span className="
            text-xs
            font-semibold
            text-gray-700
            dark:text-gray-200
            leading-5
            p-3
          ">
            {item.name}
          </span>

        </motion.div>

      ))
    }

  </div>
);

export default MembershipGrid;
