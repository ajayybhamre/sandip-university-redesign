import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo-dark.webp";

export default function Preloader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="
          fixed
          inset-0
          z-[9999]
          flex
          items-center
          justify-center
          
          "
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col items-center">

            {/* Logo */}

            <img
              src={logo}
              alt="Logo"
              className="w-50  mb-8"
            />

            {/* Loader */}

            <div className="flex gap-3">

              <span className="w-3 h-3 rounded-full bg-red-400 animate-bounce"></span>

              <span
                className="w-3 h-3 rounded-full bg-red-400 animate-bounce"
                style={{ animationDelay: ".2s" }}
              ></span>

              <span
                className="w-3 h-3 rounded-full bg-red-400 animate-bounce"
                style={{ animationDelay: ".2s" }}
              ></span>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}