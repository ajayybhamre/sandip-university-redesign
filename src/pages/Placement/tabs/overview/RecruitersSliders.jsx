import { motion } from "framer-motion";
import { HiOutlineCpuChip, HiOutlineBuildingOffice } from "react-icons/hi2";

import "./recruiters.css";

import { techRecruiters, nonTechRecruiters } from "./data/recruitersData";


const LogoLane = ({ label, Icon, items, reverse }) => (

  <div className="mb-12">

    <div className="
      flex
      items-center
      gap-3
      mb-6
    ">

      <div className="
        w-10
        h-10
        rounded-full
        bg-red-50
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
        text-lg
        text-gray-900
        dark:text-white
      ">
        {label}
      </h4>

    </div>

    <div className="relative placement-recruiter-slider">

      {/* Left Fade */}
      <div className="
        absolute
        left-0
        top-0
        w-16
        md:w-28
        h-full
        bg-gradient-to-r
        from-white
        dark:from-black
        to-transparent
        z-10
      " />

      {/* Right Fade */}
      <div className="
        absolute
        right-0
        top-0
        w-16
        md:w-28
        h-full
        bg-gradient-to-l
        from-white
        dark:from-black
        to-transparent
        z-10
      " />

      <div className={`placement-recruiter-track ${reverse ? "reverse" : ""}`}>

        {
          [...items, ...items].map((company, index) => (

            <div
              key={`${company.name}-${index}`}
              className="
                w-36
                h-24
                md:w-40
                md:h-28
                mx-3
                shrink-0
                bg-white
                border
                border-gray-100
                dark:border-slate-700
                rounded-2xl
                shadow-md
                flex
                items-center
                justify-center
                p-4
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:shadow-xl
                hover:border-red-200
              "
            >

              <img
                src={company.logo}
                alt={company.name}
                title={company.name}
                loading="lazy"
                className="
                  max-h-10
                  md:max-h-12
                  max-w-full
                  object-contain
                "
              />

            </div>

          ))
        }

      </div>

    </div>

  </div>

);


const RecruitersSliders = () => {
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
          Institutional Alliances
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Our Leading Recruiters
        </h3>

        <p className="
          mt-4
          text-gray-600
          dark:text-gray-300
          max-w-2xl
          mx-auto
        ">
          Strong bonding with the industry across technology and
          core / non-tech sectors, and many more.
        </p>

      </motion.div>

      <LogoLane
        label="Technology Recruiters"
        Icon={HiOutlineCpuChip}
        items={techRecruiters}
        reverse={false}
      />

      <LogoLane
        label="Non-Tech & Core Sector Recruiters"
        Icon={HiOutlineBuildingOffice}
        items={nonTechRecruiters}
        reverse={true}
      />

    </div>
  );
};

export default RecruitersSliders;
