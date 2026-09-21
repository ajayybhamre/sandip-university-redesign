import { motion } from "framer-motion";

import TagGrid from "./components/TagGrid";
import studentDevelopment from "./data/studentDevelopment";
import careerOverviewImg from "../../../../../assets/images/campus-pride/cpp5.jpg";

const CareerOverview = () => {
  return (
    <div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          items-center
          mb-14
        "
      >

        <div>

          <span className="
            text-red-600
            font-semibold
            uppercase
            tracking-[3px]
            text-sm
          ">
            Overview
          </span>

          <h3 className="
            mt-4
            text-2xl
            md:text-4xl
            font-bold
            text-gray-900
            dark:text-white
          ">
            Career Development Cell
          </h3>

          <p className="
            mt-5
            text-gray-600
            dark:text-gray-300
            leading-8
            text-justify
          ">
            The Career Development Cell at Sandip University aims to train
            students with essential skills such as soft skills, language
            proficiency, communication abilities, life skills, and
            awareness of technological advancements — ensuring students
            are well-prepared for placements in reputed organizations.
          </p>

          <p className="
            mt-4
            text-gray-600
            dark:text-gray-300
            leading-8
            text-justify
          ">
            The CDC also strives to inspire students for various
            competitive exams, nurturing their aptitude and analytical
            skills, and supports students throughout their journey from
            campus placements to industrial training. Starting from their
            first year, students receive training in communication,
            interpersonal skills, leadership, group discussions, and
            interview techniques, backed by dedicated infrastructure for
            conducting group discussions, tests, and interviews.
          </p>

        </div>

        <div className="
          rounded-2xl
          overflow-hidden
          shadow-lg
          border
          border-gray-100
          dark:border-slate-700
        ">

          <img
            src={careerOverviewImg}
            alt="Career Development Cell"
            className="
              w-full
              h-full
              object-cover
            "
          />

        </div>

      </motion.div>

      <motion.div

        initial={{ opacity: 0, y: 20 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.5 }}

        viewport={{ once: true }}

        className="mb-5"
      >

        <h4 className="
          font-bold
          text-lg
          text-gray-900
          dark:text-white
        ">
          Student Development
        </h4>

      </motion.div>

      <TagGrid items={studentDevelopment} />

    </div>
  );
};

export default CareerOverview;
