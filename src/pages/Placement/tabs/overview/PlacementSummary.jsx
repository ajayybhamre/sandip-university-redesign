import { motion } from "framer-motion";
import {
  HiOutlineBanknotes,
  HiOutlineBuildingOffice2,
  HiOutlineAcademicCap,
} from "react-icons/hi2";

import {
  salaryGrowth,
  companiesVisitedGrowth,
  higherStudiesGrowth,
} from "./data/summaryStats";


const SummaryPanel = ({ title, Icon, data, suffix = "%" }) => {

  const maxValue = Math.max(...data.map((d) => d.value));

  return (

    <motion.div

      initial={{ opacity: 0, y: 40 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.6 }}

      viewport={{ once: true }}

      whileHover={{ y: -6 }}

      className="
        bg-gray-50
        dark:bg-slate-900
        rounded-2xl
        p-6
        border
        border-gray-200
        dark:border-slate-700
        shadow-lg
      "
    >

      <div className="
        flex
        items-center
        gap-3
        mb-6
      ">

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
          <Icon className="text-red-600 w-5 h-5" />
        </div>

        <h4 className="
          font-bold
          text-gray-900
          dark:text-white
          leading-tight
        ">
          {title}
        </h4>

      </div>

      <div className="space-y-4">

        {
          data.map((item, index) => (

            <div key={item.year}>

              <div className="
                flex
                justify-between
                items-baseline
                mb-1.5
                text-sm
              ">

                <span className="
                  text-gray-600
                  dark:text-gray-400
                  font-medium
                ">
                  {item.year}
                </span>

                <span className="
                  font-bold
                  text-gray-900
                  dark:text-white
                ">
                  {item.value}{suffix}
                </span>

              </div>

              <div className="
                w-full
                h-2.5
                rounded-full
                bg-gray-200
                dark:bg-slate-700
                overflow-hidden
              ">

                <motion.div

                  initial={{ width: 0 }}

                  whileInView={{
                    width: `${(item.value / maxValue) * 100}%`,
                  }}

                  transition={{
                    duration: 0.9,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}

                  viewport={{ once: true }}

                  className="
                    h-full
                    rounded-full
                    bg-red-600
                  "
                />

              </div>

            </div>

          ))
        }

      </div>

    </motion.div>

  );

};


const PlacementSummary = () => {
  return (
    <div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="mb-10 text-center"
      >

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          Year On Year Growth
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Placement Summary
        </h3>

      </motion.div>

      <div className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
      ">

        <SummaryPanel
          title="Increase in Average Salary"
          Icon={HiOutlineBanknotes}
          data={salaryGrowth}
        />

        <SummaryPanel
          title="Increase in Companies Visited"
          Icon={HiOutlineBuildingOffice2}
          data={companiesVisitedGrowth}
        />

        <SummaryPanel
          title="Students Selected for Higher Studies"
          Icon={HiOutlineAcademicCap}
          data={higherStudiesGrowth}
        />

      </div>

    </div>
  );
};

export default PlacementSummary;
