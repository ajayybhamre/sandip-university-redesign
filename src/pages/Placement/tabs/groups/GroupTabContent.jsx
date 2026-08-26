import { useState } from "react";
import { motion } from "framer-motion";

const GroupTabContent = ({ sections, components }) => {

  const [activeSection, setActiveSection] = useState(sections[0].id);

  const ActiveComponent = components[activeSection];

  return (
    <div>

      {/* Sub-section navigation */}

      <div className="
        flex
        flex-wrap
        gap-2
        mb-10
        pb-6
        border-b
        border-gray-100
        dark:border-slate-800
      ">

        {
          sections.map((section) => (

            <motion.button

              key={section.id}

              whileTap={{ scale: 0.96 }}

              onClick={() => setActiveSection(section.id)}

              className={`
                whitespace-nowrap
                px-4
                py-2
                rounded-full
                text-sm
                font-semibold
                border
                transition-all

                ${
                  activeSection === section.id
                  ?
                  "bg-red-600 text-white border-red-600 shadow-md"
                  :
                  "bg-transparent text-gray-600 dark:text-gray-300 border-gray-200 dark:border-slate-700 hover:border-red-300 hover:text-red-600"
                }
              `}
            >
              {section.title}
            </motion.button>

          ))
        }

      </div>

      {/* Active sub-section content */}

      <motion.div

        key={activeSection}

        initial={{ opacity: 0, y: 12 }}

        animate={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.35 }}
      >

        {ActiveComponent && <ActiveComponent />}

      </motion.div>

    </div>
  );
};

export default GroupTabContent;
