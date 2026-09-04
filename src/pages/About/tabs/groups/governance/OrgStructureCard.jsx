import { motion } from "framer-motion";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const OrgStructureCard = () => (

  <motion.div

    initial={{ opacity: 0, y: 20 }}

    whileInView={{ opacity: 1, y: 0 }}

    transition={{ duration: 0.5 }}

    viewport={{ once: true }}

    className="
      flex
      flex-col
      sm:flex-row
      items-center
      justify-between
      gap-5
      bg-gray-50
      dark:bg-slate-900
      border
      border-gray-200
      dark:border-slate-700
      rounded-2xl
      p-6
      shadow-md
    "
  >

    <div className="
      flex
      items-center
      gap-4
      text-center
      sm:text-left
      flex-col
      sm:flex-row
    ">

      <div className="
        w-12
        h-12
        rounded-full
        bg-red-100
        dark:bg-red-900/30
        flex
        items-center
        justify-center
        shrink-0
      ">
        <HiOutlineDocumentArrowDown className="text-red-600 w-6 h-6" />
      </div>

      <div>

        <h5 className="
          font-bold
          text-gray-900
          dark:text-white
        ">
          University Organization Structure
        </h5>

        <p className="
          text-sm
          text-gray-500
          dark:text-gray-400
        ">
          Full organizational chart — SU-Organization-Structure-2025.pdf
        </p>

      </div>

    </div>

    <a
      href="/SU-Organization-Structure-2025.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="
        shrink-0
        px-6
        py-3
        rounded-full
        bg-red-600
        text-white
        font-semibold
        text-sm
        hover:bg-red-700
        transition-colors
        whitespace-nowrap
      "
    >
      View / Download PDF
    </a>

  </motion.div>

);

export default OrgStructureCard;
