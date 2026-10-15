import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronDown } from "react-icons/hi2";

const AccordionSection = ({ title, defaultOpen = false, children }) => {

  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="
          w-full flex items-center justify-between gap-4
          px-6 py-5 text-left
          bg-gray-50 dark:bg-slate-900
          hover:bg-gray-100 dark:hover:bg-slate-800
          transition-colors
        "
      >
        <span className="font-bold text-gray-900 dark:text-white">{title}</span>
        <HiOutlineChevronDown
          className={`w-5 h-5 text-red-600 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {
          open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 py-6 bg-white dark:bg-[#111111]">
                {children}
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  );
};

export default AccordionSection;
