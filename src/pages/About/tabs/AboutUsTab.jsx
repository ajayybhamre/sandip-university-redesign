import { motion } from "framer-motion";

import TileGrid from "./aboutUs/TileGrid";
import aboutHeroImg from "../../../assets/images/about-hero/about-hero.jpg";
import TopRecruitersSlider from "./aboutUs/TopRecruitersSlider";

import futuristicCurriculum from "./aboutUs/data/futuristicCurriculum";
import globalExposure from "./aboutUs/data/globalExposure";
import beyondClassroom from "./aboutUs/data/beyondClassroom";

const AboutUsTab = () => {
  return (
    <div className="space-y-16">

      {/* Overview */}

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
              Welcome to Sandip University
            </span>

            <h3 className="
              mt-4
              text-2xl
              md:text-4xl
              font-bold
              text-gray-900
              dark:text-white
            ">
              About Us
            </h3>

            <p className="
              mt-5
              text-gray-600
              dark:text-gray-300
              leading-8
              text-justify
            ">
              Study at a state of the art campus located in the lap of
              nature. Sandip University's 250+ acre campus is a global
              hub of cutting-edge education and dynamic student
              development. Since its inception in 2017, Sandip University
              has created a positive and futuristic hub of education.
              Our values are steeped in providing various industries
              with top-notch talent in terms of academic knowledge and
              hands-on skills.
            </p>

            <p className="
              mt-4
              text-gray-600
              dark:text-gray-300
              leading-8
              text-justify
            ">
              Our students are trained to become global leaders rather
              than followers. Sandip University's educational programmes
              are designed to be in sync with Education 4.0 and Industry
              4.0, while paving the way for Education 5.0 and Industry
              5.0.
            </p>

            <p className="
              mt-4
              text-gray-600
              dark:text-gray-300
              leading-8
              text-justify
            ">
              Sandip University's faculty members are pioneers and
              groundbreaking seekers of innovative ideas — well-read and
              well-qualified professors holding qualifications from IITs,
              NITs and IIMs across India.
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
              src={aboutHeroImg}
              alt="Sandip University Campus"
              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>

        </motion.div>

      </div>

      {/* Futuristic Curriculum */}

      <div>

        <h4 className="
          font-bold
          text-lg
          text-gray-900
          dark:text-white
          mb-6
        ">
          Futuristic Curriculum
        </h4>

        <TileGrid items={futuristicCurriculum} />

      </div>

      {/* Global Exposure */}

      <div>

        <h4 className="
          font-bold
          text-lg
          text-gray-900
          dark:text-white
          mb-6
        ">
          Global Exposure
        </h4>

        <TileGrid items={globalExposure} />

      </div>

      {/* Beyond the Classroom */}

      <div>

        <h4 className="
          font-bold
          text-lg
          text-gray-900
          dark:text-white
          mb-6
        ">
          Beyond the Classroom
        </h4>

        <TileGrid items={beyondClassroom} />

      </div>

      {/* Top Recruiters slider */}

      <TopRecruitersSlider />

    </div>
  );
};

export default AboutUsTab;
