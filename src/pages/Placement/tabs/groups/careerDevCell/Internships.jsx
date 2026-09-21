import { motion } from "framer-motion";
import { HiOutlineBriefcase, HiOutlineGlobeAlt } from "react-icons/hi2";

const Internships = () => {
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
          Hands-On Experience
        </span>

        <h3 className="
          mt-4
          text-2xl
          md:text-4xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Internships
        </h3>

      </motion.div>

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
      ">

        <motion.div

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.5 }}

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
            w-11
            h-11
            rounded-full
            bg-red-100
            dark:bg-red-900/30
            flex
            items-center
            justify-center
            mb-5
          ">
            <HiOutlineBriefcase className="text-red-600 w-5 h-5" />
          </div>

          <h4 className="
            font-bold
            text-lg
            text-gray-900
            dark:text-white
            mb-3
          ">
            Compulsory Internships
          </h4>

          <p className="
            text-sm
            text-gray-600
            dark:text-gray-300
            leading-6
            text-justify
          ">
            Sandip University's unique industry-synced curriculum
            inculcates compulsory internships as part of the course
            structure. Students gain industry-relevant knowledge and
            skills through a semester dedicated to a compulsory
            internship — first-hand experience required to make a mark
            in the industry.
          </p>

        </motion.div>

        <motion.div

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.5, delay: 0.1 }}

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
            w-11
            h-11
            rounded-full
            bg-red-100
            dark:bg-red-900/30
            flex
            items-center
            justify-center
            mb-5
          ">
            <HiOutlineGlobeAlt className="text-red-600 w-5 h-5" />
          </div>

          <h4 className="
            font-bold
            text-lg
            text-gray-900
            dark:text-white
            mb-3
          ">
            International & Summer Internships
          </h4>

          <p className="
            text-sm
            text-gray-600
            dark:text-gray-300
            leading-6
            text-justify
          ">
            Students can also apply for international internships, which
            have the potential to transform into lucrative job offers
            depending on performance. Summer internship programs help
            students gain additional skills and experience before
            seeking a full-time role in the industry.
          </p>

        </motion.div>

      </div>

    </div>
  );
};

export default Internships;
