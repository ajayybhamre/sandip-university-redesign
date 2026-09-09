import { motion } from "framer-motion";
import { HiOutlineUserCircle, HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";

const OfficerCards = ({ officers }) => (
  <div className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-6
    items-start
  ">

    {
      officers.map((officer, index) => (

        <motion.div

          key={officer.name}

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.5, delay: index * 0.1 }}

          viewport={{ once: true }}

          whileHover={{ y: -4 }}

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
            w-12
            h-12
            rounded-full
            bg-red-100
            dark:bg-red-900/30
            flex
            items-center
            justify-center
            mb-4
          ">
            <HiOutlineUserCircle className="text-red-600 w-6 h-6" />
          </div>

          <h5 className="
            font-bold
            text-gray-900
            dark:text-white
            mb-1
          ">
            {officer.name}
          </h5>

          <p className="
            text-sm
            text-red-600
            font-semibold
            mb-4
          ">
            {officer.designation}
          </p>

          <div className="space-y-2">

            <a
              href={`tel:${officer.contact.replace(/\s/g, "")}`}
              className="
                flex
                items-center
                gap-2.5
                text-sm
                text-gray-600
                dark:text-gray-300
                hover:text-red-600
                transition-colors
              "
            >
              <HiOutlinePhone className="w-4 h-4 shrink-0 text-gray-400" />
              {officer.contact}
            </a>

            {
              officer.email && (

                <a
                  href={`mailto:${officer.email}`}
                  className="
                    flex
                    items-center
                    gap-2.5
                    text-sm
                    text-gray-600
                    dark:text-gray-300
                    hover:text-red-600
                    transition-colors
                    break-all
                  "
                >
                  <HiOutlineEnvelope className="w-4 h-4 shrink-0 text-gray-400" />
                  {officer.email}
                </a>

              )
            }

          </div>

        </motion.div>

      ))
    }

  </div>
);

export default OfficerCards;
