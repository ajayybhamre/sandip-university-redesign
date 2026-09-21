import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi2";

const AccordionItem = ({ title, subtitle, defaultOpen = false, children }) => {

  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="
      bg-gray-50
      dark:bg-slate-900
      border
      border-gray-200
      dark:border-slate-700
      rounded-2xl
      overflow-hidden
      shadow-sm
    ">

      <button
        onClick={() => setOpen(!open)}
        className="
          w-full
          flex
          items-center
          justify-between
          gap-4
          p-5
          md:p-6
          text-left
        "
      >

        <div>

          <h4 className="
            font-bold
            text-gray-900
            dark:text-white
          ">
            {title}
          </h4>

          {
            subtitle && (
              <p className="
                text-xs
                text-gray-500
                dark:text-gray-400
                mt-1
              ">
                {subtitle}
              </p>
            )
          }

        </div>

        <motion.div

          animate={{ rotate: open ? 180 : 0 }}

          transition={{ duration: 0.25 }}

          className="
            w-8
            h-8
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
          <HiOutlineChevronDown className="w-4 h-4 text-red-600" />
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
                px-5
                md:px-6
                pb-6
              ">
                {children}
              </div>

            </motion.div>

          )
        }

      </AnimatePresence>

    </div>
  );
};

export default AccordionItem;
