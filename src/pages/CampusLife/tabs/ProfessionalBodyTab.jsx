import { motion } from "framer-motion";
import { HiOutlineUserCircle } from "react-icons/hi2";

import professionalBodies from "./professionalBody/data/professionalBodyData";

const ProfessionalBodyTab = () => {
  return (
    <div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="mb-8"
      >

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          Global Standards, Local Roots
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Professional Body Memberships
        </h3>

      </motion.div>

      {/* Logo / acronym strip */}

      <div className="
        flex
        flex-wrap
        gap-3
        mb-10
      ">

        {
          professionalBodies.map((body) => (

            <span
              key={body.id}
              className="
                px-4
                py-2
                rounded-full
                bg-gray-100
                dark:bg-slate-800
                text-sm
                font-bold
                text-gray-700
                dark:text-gray-200
                tracking-wide
              "
            >
              {body.acronym}
            </span>

          ))
        }

      </div>

      {/* Body cards */}

      <div className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-6
      ">

        {
          professionalBodies.map((body, index) => (

            <motion.div

              key={body.id}

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}

              viewport={{ once: true }}

              className="
                bg-gray-50
                dark:bg-slate-900
                border
                border-gray-200
                dark:border-slate-700
                rounded-2xl
                p-6
                md:p-7
              "
            >

              <div className="
                flex
                items-center
                gap-3
                mb-4
              ">

                <span className="
                  px-3
                  py-1
                  rounded-full
                  bg-red-100
                  dark:bg-red-900/30
                  text-red-600
                  text-xs
                  font-bold
                  tracking-wide
                ">
                  {body.acronym}
                </span>

                <h4 className="
                  font-bold
                  text-gray-900
                  dark:text-white
                  leading-5
                ">
                  {body.name}
                </h4>

              </div>

              <p className="
                text-sm
                text-gray-600
                dark:text-gray-300
                leading-7
                text-justify
                mb-4
              ">
                {body.description}
              </p>

              {
                body.coordinator && (

                  <div className="
                    flex
                    items-start
                    gap-2
                    pt-4
                    border-t
                    border-gray-200
                    dark:border-slate-700
                  ">

                    <HiOutlineUserCircle className="
                      text-red-600
                      w-4 h-4
                      shrink-0
                      mt-0.5
                    " />

                    <p className="
                      text-xs
                      text-gray-500
                      dark:text-gray-400
                      leading-5
                    ">
                      Coordinator: {body.coordinator}
                    </p>

                  </div>

                )
              }

            </motion.div>

          ))
        }

      </div>

    </div>
  );
};

export default ProfessionalBodyTab;
