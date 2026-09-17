import { motion } from "framer-motion";
import { HiOutlineCheckCircle, HiOutlineEnvelope, HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

import sunClubsHero from "../../../assets/images/campus-life/campus/structure1.png";
import PhotoGrid from "./galleryMedia/shared/PhotoGrid";

import { objectives, clubCategories, clubGalleryImages } from "./sunClubs/data/sunClubsData";

const SunClubsTab = () => {
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
              Empowering Every Student
            </span>

            <h3 className="
              mt-4
              text-2xl
              md:text-4xl
              font-bold
              text-gray-900
              dark:text-white
            ">
              SUN Clubs
            </h3>

            <p className="
              mt-5
              text-gray-600
              dark:text-gray-300
              leading-8
              text-justify
            ">
              We, at Sandip University Nashik strive to empower our students
              to converge into capable leaders & responsible citizens
              bearing high ethical values. With a view to fulfill this
              mission, Sandip University Nashik (SUN) has introduced various
              CLUBS for the overall development of the students.
            </p>

            <p className="
              mt-4
              text-gray-600
              dark:text-gray-300
              leading-8
              text-justify
            ">
              Students at Sandip University gain a massive boost from
              participating in SUNCLUBS which are designed keeping in mind
              the varied interests of students. The club members come
              together to identify & develop skills through practical based
              learning, activity based learning, communication skills,
              competency & confidence building, team work, social awareness
              camps etc.
            </p>

            <p className="
              mt-6
              text-sm
              font-semibold
              text-gray-800
              dark:text-gray-200
            ">
              — Mr. Darshan Ahire, Director, Student Welfare, Sandip University, Nashik
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
              src={sunClubsHero}
              alt="SUN Clubs at Sandip University"
              className="
                w-full
                h-full
                object-cover
              "
            />

          </div>

        </motion.div>

      </div>

      {/* Objectives */}

      <div>

        <h4 className="
          font-bold
          text-lg
          text-gray-900
          dark:text-white
          mb-6
        ">
          Objectives
        </h4>

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-5
        ">

          {
            objectives.map((objective, index) => (

              <motion.div

                key={objective}

                initial={{ opacity: 0, y: 20 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.4, delay: index * 0.08 }}

                viewport={{ once: true }}

                className="
                  flex
                  items-start
                  gap-3
                  bg-gray-50
                  dark:bg-slate-900
                  border
                  border-gray-200
                  dark:border-slate-700
                  rounded-2xl
                  p-5
                "
              >

                <HiOutlineCheckCircle className="
                  text-red-600
                  w-6 h-6
                  shrink-0
                  mt-0.5
                " />

                <p className="
                  text-sm
                  text-gray-700
                  dark:text-gray-300
                  leading-6
                ">
                  {objective}
                </p>

              </motion.div>

            ))
          }

        </div>

      </div>

      {/* Club categories */}

      <div>

        <h4 className="
          font-bold
          text-lg
          text-gray-900
          dark:text-white
          mb-2
        ">
          30+ Student-Run Clubs
        </h4>

        <p className="
          text-sm
          text-gray-500
          dark:text-gray-400
          mb-6
        ">
          Organised into 5 categories, each with its own set of clubs.
        </p>

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
        ">

          {
            clubCategories.map((category, index) => (

              <motion.div

                key={category.id}

                initial={{ opacity: 0, y: 20 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: 0.4, delay: index * 0.08 }}

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
                  cursor-pointer
                "
              >

                <div className="
                  flex
                  items-start
                  justify-between
                  mb-3
                ">

                  <h5 className="
                    font-bold
                    text-gray-900
                    dark:text-white
                  ">
                    {category.title}
                  </h5>

                  <HiOutlineArrowTopRightOnSquare className="
                    text-red-600
                    w-4 h-4
                    shrink-0
                    mt-1
                  " />

                </div>

                <p className="
                  text-sm
                  text-gray-600
                  dark:text-gray-300
                  leading-6
                ">
                  {category.description}
                </p>

              </motion.div>

            ))
          }

        </div>

      </div>

      {/* Photo gallery */}

      <div>

        <h4 className="
          font-bold
          text-lg
          text-gray-900
          dark:text-white
          mb-6
        ">
          Photo Gallery
        </h4>

        <PhotoGrid images={clubGalleryImages} />

      </div>

      {/* Club Governing Body */}

      <div>

        <h4 className="
          font-bold
          text-lg
          text-gray-900
          dark:text-white
          mb-4
        ">
          Club Governing Body
        </h4>

        <div className="
          bg-gray-50
          dark:bg-slate-900
          border
          border-dashed
          border-gray-300
          dark:border-slate-700
          rounded-2xl
          p-8
          text-center
        ">

          <p className="
            text-sm
            text-gray-500
            dark:text-gray-400
          ">
            Governing body details will be published here soon.
          </p>

        </div>

      </div>

      {/* Contact */}

      <div className="
        flex
        items-center
        gap-3
        bg-red-50
        dark:bg-red-900/20
        border
        border-red-100
        dark:border-red-900
        rounded-2xl
        p-6
      ">

        <HiOutlineEnvelope className="
          text-red-600
          w-6 h-6
          shrink-0
        " />

        <a
          href="mailto:sun.clubs@sandipuniversity.edu.in"
          className="
            text-sm
            font-semibold
            text-gray-800
            dark:text-gray-100
            hover:text-red-600
            transition-colors
          "
        >
          sun.clubs@sandipuniversity.edu.in
        </a>

      </div>

    </div>
  );
};

export default SunClubsTab;
