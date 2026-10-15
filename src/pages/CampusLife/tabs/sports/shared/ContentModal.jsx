import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineXMark } from "react-icons/hi2";

const ContentModal = ({ open, title, onClose, children }) => {

  if (!open) return null;

  return (

    <AnimatePresence>

      <motion.div

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        exit={{ opacity: 0 }}

        onClick={onClose}

        className="
          fixed
          inset-0
          z-[999]
          bg-black/70
          backdrop-blur-sm
          flex
          items-center
          justify-center
          p-4
          md:p-10
        "
      >

        <motion.div

          initial={{ opacity: 0, scale: 0.95, y: 10 }}

          animate={{ opacity: 1, scale: 1, y: 0 }}

          transition={{ duration: 0.25 }}

          onClick={(e) => e.stopPropagation()}

          className="
            w-full
            max-w-5xl
            max-h-[85vh]
            overflow-y-auto
            bg-white
            dark:bg-[#111111]
            rounded-2xl
            shadow-2xl
            p-6
            md:p-8
          "
        >

          <div className="
            flex
            items-center
            justify-between
            mb-6
          ">

            <h4 className="font-bold text-lg text-gray-900 dark:text-white">
              {title}
            </h4>

            <button
              onClick={onClose}
              className="
                w-9 h-9
                rounded-full
                bg-gray-100
                dark:bg-slate-800
                flex
                items-center
                justify-center
                text-gray-600
                dark:text-gray-300
                hover:bg-gray-200
                dark:hover:bg-slate-700
                transition-colors
                shrink-0
              "
              aria-label="Close"
            >
              <HiOutlineXMark className="w-5 h-5" />
            </button>

          </div>

          {children}

        </motion.div>

      </motion.div>

    </AnimatePresence>

  );

};

export default ContentModal;
