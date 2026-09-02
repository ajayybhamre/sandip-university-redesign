import { motion } from "framer-motion";
import {
  HiOutlinePuzzlePiece,
  HiOutlineBuildingOffice2,
  HiOutlineAcademicCap,
  HiOutlineRocketLaunch,
  HiOutlineCpuChip,
  HiOutlineUserGroup,
} from "react-icons/hi2";

import partnerships from "./data/partnerships";

const iconMap = {
  peep: HiOutlinePuzzlePiece,
  building: HiOutlineBuildingOffice2,
  academic: HiOutlineAcademicCap,
  rocket: HiOutlineRocketLaunch,
  cpu: HiOutlineCpuChip,
  users: HiOutlineUserGroup,
};

const EmployabilityEnhancement = () => {
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
          Industry-Ready Skills
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Employability Enhancement Program
        </h3>

      </motion.div>

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
      ">

        {
          partnerships.map((partner, index) => {

            const Icon = iconMap[partner.icon];

            return (

              <motion.div

                key={partner.name}

                initial={{ opacity: 0, y: 30 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.5, delay: index * 0.08 }}

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
                  w-11
                  h-11
                  rounded-full
                  bg-red-100
                  dark:bg-red-900/30
                  flex
                  items-center
                  justify-center
                  mb-5
                  shrink-0
                ">
                  <Icon className="text-red-600 w-5 h-5" />
                </div>

                <h4 className="
                  font-bold
                  text-gray-900
                  dark:text-white
                  leading-snug
                  mb-3
                ">
                  {partner.name}
                </h4>

                <p className="
                  text-sm
                  text-gray-600
                  dark:text-gray-400
                  leading-6
                  text-justify
                ">
                  {partner.description}
                </p>

              </motion.div>

            );

          })
        }

      </div>

    </div>
  );
};

export default EmployabilityEnhancement;
