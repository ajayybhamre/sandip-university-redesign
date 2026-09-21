import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineGlobeAlt, HiOutlineChevronDown, HiOutlineCheckCircle } from "react-icons/hi2";

import { nationalMOUs, internationalMOUs } from "./data/mous";

const INITIAL_COUNT = 9;

const MOUList = ({ title, items }) => {

  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? items : items.slice(0, INITIAL_COUNT);

  return (
    <div>

      <h5 className="
        font-bold
        text-gray-900
        dark:text-white
        mb-5
      ">
        {title}
      </h5>

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-x-6
        gap-y-2.5
      ">

        {
          visible.map((name) => (

            <div
              key={name}
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

              <span>{name}</span>

            </div>

          ))
        }

      </div>

      {
        items.length > INITIAL_COUNT && (

          <button
            onClick={() => setShowAll(!showAll)}
            className="
              mt-5
              flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-full
              bg-red-50
              dark:bg-red-900/20
              text-red-600
              font-semibold
              text-sm
              hover:bg-red-100
              dark:hover:bg-red-900/30
              transition-colors
            "
          >

            {
              showAll
              ? "Show Less"
              : `Show ${items.length - INITIAL_COUNT} More`
            }

            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <HiOutlineChevronDown className="w-4 h-4" />
            </motion.span>

          </button>

        )
      }

    </div>
  );

};


const MOUsSection = () => {

  const total = nationalMOUs.length + internationalMOUs.length;

  return (
    <div>

      <motion.div

        initial={{ opacity: 0, y: 20 }}

        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.5 }}

        viewport={{ once: true }}

        className="
          flex
          items-center
          gap-4
          bg-gradient-to-br
          from-[#0b1220]
          to-red-950
          rounded-2xl
          px-6
          py-6
          mb-10
        "
      >

        <div className="
          w-12
          h-12
          rounded-full
          bg-red-600/20
          flex
          items-center
          justify-center
          shrink-0
        ">
          <HiOutlineGlobeAlt className="text-red-400 w-6 h-6" />
        </div>

        <div>

          <span className="
            block
            text-2xl
            md:text-3xl
            font-bold
            text-white
          ">
            {total}+ Partner Institutions
          </span>

          <span className="
            text-sm
            text-gray-300
          ">
            National and international MOUs across academia, industry, and skill development
          </span>

        </div>

      </motion.div>

      <div className="
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-10
      ">

        <MOUList title={`National MOUs (${nationalMOUs.length})`} items={nationalMOUs} />

        <MOUList title={`International MOUs (${internationalMOUs.length})`} items={internationalMOUs} />

      </div>

    </div>
  );
};

export default MOUsSection;
