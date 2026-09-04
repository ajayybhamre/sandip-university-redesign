import { motion } from "framer-motion";

const TileGrid = ({ items }) => (
  <div className="
    grid
    grid-cols-2
    sm:grid-cols-3
    lg:grid-cols-5
    gap-4
  ">

    {
      items.map((item, index) => (

        <motion.div

          key={item.title}

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.4, delay: index * 0.06 }}

          viewport={{ once: true }}

          whileHover={{ y: -4 }}

          className="
            bg-gray-50
            dark:bg-slate-900
            border
            border-gray-200
            dark:border-slate-700
            rounded-xl
            p-4
            flex
            flex-col
            items-center
            text-center
            gap-3
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
            shrink-0
          ">
            <item.Icon className="text-red-600 w-5 h-5" />
          </div>

          <span className="
            text-xs
            font-semibold
            text-gray-700
            dark:text-gray-200
            leading-5
          ">
            {item.title}
          </span>

        </motion.div>

      ))
    }

  </div>
);

export default TileGrid;
