import { motion } from "framer-motion";
import { HiOutlineArrowPath, HiOutlineCheckCircle } from "react-icons/hi2";

import { lifeDifference, placementCellBenefits } from "./data/campusToCorporateData";
import campusToCorporateImg from "../../../../../assets/images/campus-pride/cpp2.jpg";

const BulletPanel = ({ title, items, delay }) => (

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
      p-6
      md:p-8
      shadow-md
    "
  >

    <h4 className="
      font-bold
      text-lg
      text-gray-900
      dark:text-white
      mb-5
    ">
      {title}
    </h4>

    <ul className="space-y-3">

      {
        items.map((item) => (

          <li
            key={item}
            className="
              flex
              items-start
              gap-3
              text-sm
              text-gray-600
              dark:text-gray-300
              leading-6
            "
          >

            <HiOutlineCheckCircle className="
              text-red-600
              w-5 h-5
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


const CampusToCorporate = () => {
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
          mb-10
        "
      >

        <div>

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
              <HiOutlineArrowPath className="text-red-600 w-5 h-5" />
            </div>

            <span className="
              text-red-600
              font-semibold
              uppercase
              tracking-[3px]
              text-sm
            ">
              Campus Placements
            </span>

          </div>

          <h3 className="
            text-2xl
            md:text-4xl
            font-bold
            text-gray-900
            dark:text-white
          ">
            Campus to Corporate
          </h3>

          <p className="
            mt-5
            text-gray-600
            dark:text-gray-300
            leading-8
            text-justify
          ">
            Students are assisted through each and every round of the
            actual campus placements. Over 150 empanelled recruitment
            partners participate in Sandip University's annual placement
            drive to recruit skilled and well-trained young professionals.
            Sandip University's unique Campus to Corporate program is
            designed to help students make a seamless shift from college
            campus to a corporate environment — preparing them to switch
            from being students to dynamic professionals and assets to
            the industry. Additional efforts are made to ensure students
            are able to emulate behaviours and develop their personality
            in a manner that befits their role in the industry, with tips
            and tricks for group discussions and multiple mock interviews
            to build confidence answering complex questions with ease.
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
            src={campusToCorporateImg}
            alt="Campus to Corporate"
            className="
              w-full
              h-full
              object-cover
            "
          />

        </div>

      </motion.div>

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-6
      ">

        <BulletPanel
          title="Campus and Corporate Life Difference"
          items={lifeDifference}
          delay={0}
        />

        <BulletPanel
          title="Benefits of Sandip University's Placement Cell"
          items={placementCellBenefits}
          delay={0.1}
        />

      </div>

    </div>
  );
};

export default CampusToCorporate;
