import { motion } from "framer-motion";
import { HiOutlineEnvelope, HiOutlineScale, HiOutlineCheckBadge, HiOutlineBriefcase, HiOutlineUserGroup } from "react-icons/hi2";

import ChecklistCard from "./components/ChecklistCard";

import guidelinesGlance from "./data/guidelinesGlance";
import trainingPlacementRules from "./data/trainingPlacementRules";
import {
  eligibilitySection,
  jobOffersSection,
  studentResponsibilitySection,
} from "./data/structuredGuidelines";

const PlacementPolicy = () => {
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
          Important Placement Guidelines & Policy
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Placement Policy
        </h3>

      </motion.div>

      {/* Intro letter */}

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="
          bg-gradient-to-br
          from-[#0b1220]
          to-red-950
          rounded-2xl
          p-6
          md:p-8
          mb-12
        "
      >

        <div className="
          flex
          items-center
          gap-3
          mb-4
        ">

          <div className="
            w-10
            h-10
            rounded-full
            bg-red-600/20
            flex
            items-center
            justify-center
            shrink-0
          ">
            <HiOutlineEnvelope className="text-red-400 w-5 h-5" />
          </div>

          <span className="
            text-red-400
            font-semibold
            uppercase
            tracking-[2px]
            text-xs
          ">
            From the Central T&P Department
          </span>

        </div>

        <p className="
          text-gray-200
          leading-7
          text-sm
          md:text-base
        ">
          Dear Students, greetings from Central T&P Department, Sandip
          Group of Institutes! This is the most significant phase of
          your academic journey — the time to showcase the skills and
          competencies you've gained, and to prepare for what you'll
          keep acquiring in the future. Please go through the
          guidelines below carefully and follow them step by step.
          Placement is a privilege to students, not a right — these
          guidelines exist to ensure equality and fairness of
          opportunity to all, and to help the maximum number of
          students secure on and off campus placement.
        </p>

        <p className="
          mt-4
          text-gray-400
          text-xs
          italic
        ">
          — Regards, Central T&P Department
        </p>

      </motion.div>

      {/* Guidelines at a Glance */}

      <div className="mb-14">

        <h4 className="
          font-bold
          text-lg
          text-gray-900
          dark:text-white
          mb-6
        ">
          Guidelines at a Glance
        </h4>

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
        ">

          {
            guidelinesGlance.map((item, index) => (

              <motion.div

                key={item.title}

                initial={{ opacity: 0, y: 20 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}

                viewport={{ once: true }}

                className="
                  bg-gray-50
                  dark:bg-slate-900
                  border
                  border-gray-200
                  dark:border-slate-700
                  rounded-xl
                  p-5
                "
              >

                <div className="
                  flex
                  items-center
                  gap-2.5
                  mb-3
                ">

                  <div className="
                    w-8
                    h-8
                    rounded-full
                    bg-red-100
                    dark:bg-red-900/30
                    flex
                    items-center
                    justify-center
                    shrink-0
                  ">
                    <item.Icon className="text-red-600 w-4 h-4" />
                  </div>

                  <h5 className="
                    font-bold
                    text-sm
                    text-gray-900
                    dark:text-white
                  ">
                    {item.title}
                  </h5>

                </div>

                <p className="
                  text-xs
                  text-gray-600
                  dark:text-gray-400
                  leading-5
                ">
                  {item.text}
                </p>

              </motion.div>

            ))
          }

        </div>

      </div>

      {/* Training & Placement general rules */}

      <div className="mb-8">

        <ChecklistCard
          title="Training & Placement — General Guidelines"
          Icon={HiOutlineScale}
          items={trainingPlacementRules}
          columns={2}
        />

      </div>

      {/* A / B / C structured guidelines */}

      <div className="space-y-6">

        <ChecklistCard
          title="A. Eligibility"
          Icon={HiOutlineCheckBadge}
          items={eligibilitySection}
          columns={1}
        />

        <ChecklistCard
          title="B. Job Offers"
          Icon={HiOutlineBriefcase}
          items={jobOffersSection}
          columns={1}
          delay={0.05}
        />

        <ChecklistCard
          title="C. Student Responsibility"
          Icon={HiOutlineUserGroup}
          items={studentResponsibilitySection}
          columns={2}
          delay={0.1}
        />

      </div>

    </div>
  );
};

export default PlacementPolicy;
