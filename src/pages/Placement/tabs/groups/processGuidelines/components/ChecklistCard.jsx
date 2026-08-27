import { motion } from "framer-motion";
import { HiOutlineCheckCircle } from "react-icons/hi2";

const ChecklistCard = ({ title, Icon, items, columns = 2, delay = 0 }) => (

  <motion.div

    initial={{ opacity: 0, y: 30 }}

    whileInView={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.5, delay }}

    viewport={{ once: true }}

    className="
      bg-gray-50
      dark:bg-slate-900
      border
      border-gray-200
      dark:border-slate-700
      rounded-2xl
      p-6
      md:p-8
      shadow-md
    "
  >

    <div className="
      flex
      items-center
      gap-3
      mb-6
    ">

      {
        Icon && (
          <div className="
            w-10
            h-10
            rounded-full
            bg-red-100
            dark:bg-red-900/30
            flex
            items-center
            justify-center
            shrink-0
          ">
            <Icon className="text-red-600 w-5 h-5" />
          </div>
        )
      }

      <h4 className="
        font-bold
        text-lg
        text-gray-900
        dark:text-white
      ">
        {title}
      </h4>

    </div>

    <ul className={`
      grid
      ${columns === 2 ? "sm:grid-cols-2" : ""}
      gap-x-6
      gap-y-3
    `}>

      {
        items.map((item) => (

          <li
            key={item}
            className="
              flex
              items-start
              gap-2.5
              text-sm
              text-gray-600
              dark:text-gray-300
              leading-6
            "
          >

            <HiOutlineCheckCircle className="
              text-red-600
              w-4 h-4
              shrink-0
              mt-0.5
            " />

            <span>{item}</span>

          </li>

        ))
      }

    </ul>

  </motion.div>

);

export default ChecklistCard;
