import { motion } from "framer-motion";
import { HiOutlineCheckCircle, HiOutlineAcademicCap } from "react-icons/hi2";

import valueAdditionPrograms from "./data/valueAdditionPrograms";

const [firstYear, secondYear, thirdYear] = valueAdditionPrograms;

const CompactYearCard = ({ yearData, delay }) => (

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
      p-5
      shadow-sm
    "
  >

    <div className="
      flex
      items-center
      gap-2.5
      mb-1
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
        <HiOutlineAcademicCap className="text-red-600 w-4 h-4" />
      </div>

      <h4 className="
        font-bold
        text-sm
        text-gray-900
        dark:text-white
      ">
        {yearData.year}
      </h4>

    </div>

    <p className="
      text-xs
      text-gray-500
      dark:text-gray-400
      mb-4
      ml-[42px]
    ">
      {yearData.subtitle}
    </p>

    <ul className="space-y-2">

      {
        yearData.tracks[0].items.map((item) => (

          <li
            key={item}
            className="
              flex
              items-start
              gap-2
              text-xs
              text-gray-600
              dark:text-gray-300
              leading-5
            "
          >

            <HiOutlineCheckCircle className="
              text-red-600
              w-3.5 h-3.5
              shrink-0
              mt-0.5
            " />

            <span>{item}</span>

          </li>

        ))
      }

    </ul>

  </motion.div>

);


const ValueAdditionPrograms = () => {
  return (
    <div>

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.6 }}

        viewport={{ once: true }}

        className="mb-8"
      >

        <span className="
          text-red-600
          font-semibold
          uppercase
          tracking-[3px]
          text-sm
        ">
          Free of Cost, No Additional Charges
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Value-Addition & Global Certification Programs
        </h3>

        <p className="
          mt-5
          text-gray-600
          dark:text-gray-300
          leading-8
          max-w-4xl
          text-justify
        ">
          Sandip University offers globally recognised certification
          programs to add value to each student's resume at no
          additional cost. We have forged partnerships with industry
          leaders and knowledge partners to help students receive
          additional skills and industry-relevant training.
        </p>

      </motion.div>

      {/* First Year + Second Year side by side */}

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-5
        mb-6
      ">

        <CompactYearCard yearData={firstYear} delay={0} />

        <CompactYearCard yearData={secondYear} delay={0.1} />

      </div>

      {/* Third Year below, full width */}

      <motion.div

        initial={{ opacity: 0, y: 30 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.5, delay: 0.15 }}

        viewport={{ once: true }}

        className="
          bg-gray-50
          dark:bg-slate-900
          border
          border-gray-200
          dark:border-slate-700
          rounded-2xl
          p-6
          md:p-8
          shadow-md
        "
      >

        <div className="
          flex
          items-center
          gap-3
          mb-1
        ">

          <div className="
            w-10
            h-10
            rounded-full
            bg-red-100
            dark:bg-red-900/30
            flex
            items-center
            justify-center
            shrink-0
          ">
            <HiOutlineAcademicCap className="text-red-600 w-5 h-5" />
          </div>

          <h4 className="
            font-bold
            text-lg
            text-gray-900
            dark:text-white
          ">
            {thirdYear.year}
          </h4>

        </div>

        <p className="
          text-xs
          text-gray-500
          dark:text-gray-400
          mb-6
          ml-[52px]
        ">
          {thirdYear.subtitle}
        </p>

        <div className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">

          {
            thirdYear.tracks.map((track) => (

              <div key={track.label}>

                <h5 className="
                  text-sm
                  font-bold
                  text-red-600
                  mb-3
                ">
                  {track.label}
                </h5>

                <ul className="space-y-2.5">

                  {
                    track.items.map((item) => (

                      <li
                        key={item}
                        className="
                          flex
                          items-start
                          gap-2.5
                          text-sm
                          text-gray-600
                          dark:text-gray-300
                          leading-6
                        "
                      >

                        <HiOutlineCheckCircle className="
                          text-red-600
                          w-4 h-4
                          shrink-0
                          mt-0.5
                        " />

                        <span>{item}</span>

                      </li>

                    ))
                  }

                </ul>

              </div>

            ))
          }

        </div>

      </motion.div>

    </div>
  );
};

export default ValueAdditionPrograms;
