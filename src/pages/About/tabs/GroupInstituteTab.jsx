import { motion } from "framer-motion";
import { HiOutlineBuildingLibrary, HiOutlineAcademicCap } from "react-icons/hi2";

import { nashikInstitutes, sijoulInstitutes } from "./groupInstitute/data/institutes";

import nashikCampusImg from "../../../assets/images/group-institute/Nashik_Campus.jpg";
import sijoulCampusImg from "../../../assets/images/group-institute/Sijoul_Campus.jpg";

const InstituteList = ({ title, campus, image, institutes, delay }) => (

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
      overflow-hidden
      shadow-md
    "
  >

    <div className="w-full aspect-[16/10]">

      <img
        src={image}
        alt={campus}
        className="
          w-full
          h-full
          object-cover
        "
      />

    </div>

    <div className="p-6 md:p-8">

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
          <HiOutlineBuildingLibrary className="text-red-600 w-5 h-5" />
        </div>

        <div>

          <h4 className="
            font-bold
            text-lg
            text-gray-900
            dark:text-white
          ">
            {title}
          </h4>

          <p className="
            text-xs
            text-gray-500
            dark:text-gray-400
          ">
            {campus}
          </p>

        </div>

      </div>

      <ul className="space-y-3">

        {
          institutes.map((name) => (

            <li
              key={name}
              className="
                flex
                items-start
                gap-3
                text-sm
                text-gray-700
                dark:text-gray-300
                leading-6
                pb-3
                border-b
                border-gray-200
                dark:border-slate-700
                last:border-0
                last:pb-0
              "
            >

              <HiOutlineAcademicCap className="
                text-red-600
                w-4 h-4
                shrink-0
                mt-0.5
              " />

              <span>{name}</span>

            </li>

          ))
        }

      </ul>

    </div>

  </motion.div>

);


const GroupInstituteTab = () => {
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
          One Foundation, Many Institutions
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Our Group Institute
        </h3>

      </motion.div>

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
      ">

        <InstituteList
          title="Nashik Institutes"
          campus="Nashik Campus"
          image={nashikCampusImg}
          institutes={nashikInstitutes}
          delay={0}
        />

        <InstituteList
          title="Sijoul Institutes"
          campus="Sijoul Campus"
          image={sijoulCampusImg}
          institutes={sijoulInstitutes}
          delay={0.1}
        />

      </div>

    </div>
  );
};

export default GroupInstituteTab;
