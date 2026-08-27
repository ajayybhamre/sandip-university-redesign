import { motion } from "framer-motion";
import { HiOutlineBuildingLibrary, HiOutlineCheckCircle } from "react-icons/hi2";

import RoadmapTimeline from "./components/RoadmapTimeline";
import ExamPostsGrid from "./components/ExamPostsGrid";

import examObjectives from "./data/examObjectives";
import roadmapSteps from "./data/roadmapSteps";
import examPosts from "./data/examPosts";

const CompetitiveExams = () => {
  return (
    <div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="mb-10"
      >

        <div className="
          flex
          items-center
          gap-3
          mb-4
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

          <span className="
            text-red-600
            font-semibold
            uppercase
            tracking-[3px]
            text-sm
          ">
            CCE&HS
          </span>

        </div>

        <h3 className="
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Competitive Exam & Higher Study
        </h3>

        <ul className="
          mt-6
          space-y-3
          max-w-4xl
        ">

          {
            examObjectives.map((obj) => (

              <li
                key={obj}
                className="
                  flex
                  items-start
                  gap-3
                  text-gray-600
                  dark:text-gray-300
                  leading-7
                "
              >

                <HiOutlineCheckCircle className="
                  text-red-600
                  w-5 h-5
                  shrink-0
                  mt-0.5
                " />

                <span>{obj}</span>

              </li>

            ))
          }

        </ul>

      </motion.div>

      {/* Roadmap Timeline */}

      <div className="mb-14">

        <h4 className="
          font-bold
          text-lg
          text-gray-900
          dark:text-white
          mb-8
        ">
          Center for Competitive Exam's & Higher Studies (CCE&HS) Roadmap
        </h4>

        <RoadmapTimeline steps={roadmapSteps} />

      </div>

      {/* Merged UPSC & MPSC Posts */}

      <div>

        <h4 className="
          font-bold
          text-lg
          text-gray-900
          dark:text-white
          mb-6
        ">
          UPSC & MPSC — Competitive Exam Posts
        </h4>

        <ExamPostsGrid groups={examPosts} />

      </div>

    </div>
  );
};

export default CompetitiveExams;
