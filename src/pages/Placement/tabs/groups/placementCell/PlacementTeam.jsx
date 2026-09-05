import { motion } from "framer-motion";
import { HiOutlineUserCircle, HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";

import teamMembers from "./data/teamMembers";

const PlacementTeam = () => {
  return (
    <div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="mb-10"
      >

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          Get In Touch
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Placement Team
        </h3>

      </motion.div>

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-6
      ">

        {
          teamMembers.map((member, index) => (

            <motion.div

              key={member.name}

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
                md:p-7
                shadow-md
              "
            >

              <div className="
                w-14
                h-14
                rounded-full
                bg-red-100
                dark:bg-red-900/30
                flex
                items-center
                justify-center
                mb-5
              ">
                <HiOutlineUserCircle className="text-red-600 w-7 h-7" />
              </div>

              <h4 className="
                font-bold
                text-lg
                text-gray-900
                dark:text-white
                mb-1
              ">
                {member.name}
              </h4>

              <p className="
                text-sm
                text-red-600
                font-semibold
                mb-5
              ">
                {member.title}
              </p>

              <div className="space-y-3">

                <div className="
                  flex
                  items-start
                  gap-3
                ">

                  <HiOutlinePhone className="
                    text-gray-400
                    w-4 h-4
                    shrink-0
                    mt-1
                  " />

                  <div className="flex flex-col">

                    {
                      member.phones.map((phone) => (

                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="
                            text-sm
                            text-gray-600
                            dark:text-gray-300
                            hover:text-red-600
                            transition-colors
                          "
                        >
                          {phone}
                        </a>

                      ))
                    }

                  </div>

                </div>

                <div className="
                  flex
                  items-center
                  gap-3
                ">

                  <HiOutlineEnvelope className="
                    text-gray-400
                    w-4 h-4
                    shrink-0
                  " />

                  <a
                    href={`mailto:${member.email}`}
                    className="
                      text-sm
                      text-gray-600
                      dark:text-gray-300
                      hover:text-red-600
                      transition-colors
                      break-all
                    "
                  >
                    {member.email}
                  </a>

                </div>

              </div>

            </motion.div>

          ))
        }

      </div>

    </div>
  );
};

export default PlacementTeam;
