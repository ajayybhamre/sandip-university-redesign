import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi2";

import recruiterNames from "../data/recruiterNames";

const FAQItem = ({ question, answer, showRecruiters, index }) => {

  const [open, setOpen] = useState(false);

  return (

    <motion.div

      initial={{ opacity: 0, y: 15 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.35, delay: (index % 6) * 0.04 }}

      viewport={{ once: true }}

      className="
        bg-gray-50
        dark:bg-slate-900
        border
        border-gray-200
        dark:border-slate-700
        rounded-2xl
        overflow-hidden
      "
    >

      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          items-center
          justify-between
          gap-3
          p-4
          text-left
        "
      >

        <h5 className="
          font-bold
          text-gray-900
          dark:text-white
          text-xs
          md:text-sm
        ">
          {question}
        </h5>

        <motion.div

          animate={{ rotate: open ? 180 : 0 }}

          transition={{ duration: 0.25 }}

          className="
            w-6
            h-6
            rounded-full
            bg-white
            dark:bg-slate-800
            border
            border-gray-200
            dark:border-slate-700
            flex
            items-center
            justify-center
            shrink-0
          "
        >
          <HiOutlineChevronDown className="w-3.5 h-3.5 text-red-600" />
        </motion.div>

      </button>

      <AnimatePresence initial={false}>

        {
          open && (

            <motion.div

              initial={{ height: 0, opacity: 0 }}

              animate={{ height: "auto", opacity: 1 }}

              exit={{ height: 0, opacity: 0 }}

              transition={{ duration: 0.3, ease: "easeInOut" }}

              className="overflow-hidden"
            >

              <div className="
                px-4
                pb-4
              ">

                <p className="
                  text-xs
                  text-gray-600
                  dark:text-gray-300
                  leading-5
                  text-justify
                ">
                  {answer}
                </p>

                {
                  showRecruiters && (

                    <div className="
                      mt-4
                      flex
                      flex-wrap
                      gap-1.5
                    ">

                      {
                        recruiterNames.map((name) => (

                          <span
                            key={name}
                            className="
                              text-[10px]
                              font-medium
                              bg-white
                              dark:bg-slate-800
                              border
                              border-gray-200
                              dark:border-slate-700
                              text-gray-700
                              dark:text-gray-300
                              px-2.5
                              py-1
                              rounded-full
                            "
                          >
                            {name}
                          </span>

                        ))
                      }

                    </div>

                  )
                }

              </div>

            </motion.div>

          )
        }

      </AnimatePresence>

    </motion.div>

  );
};

export default FAQItem;
