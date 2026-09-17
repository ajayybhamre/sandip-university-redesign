import { motion } from "framer-motion";

import SimpleList from "./shared/SimpleList";
import {
  institutionalDevelopment,
  studentDevelopment,
  flagshipEvents,
  flagshipCompetitions,
} from "./data/lists";

const SectionHeading = ({ children }) => (
  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
    {children}
  </h4>
);

const KeyRolesSection = () => (
  <div className="space-y-12">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >

      <div>
        <SectionHeading>All-Round Institutional Development</SectionHeading>
        <SimpleList items={institutionalDevelopment} />
      </div>

      <div>
        <SectionHeading>All-Round Student Development</SectionHeading>
        <SimpleList items={studentDevelopment} />
      </div>

    </motion.div>

    <div>
      <SectionHeading>Student-Run Clubs & Professional Chapters</SectionHeading>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-4">
        The council oversees clubs across technical, cultural, innovation,
        outreach, and professional domains.
      </p>
      <div className="flex flex-wrap gap-2">
        {
          flagshipEvents.map((event) => (
            <span
              key={event}
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-slate-800 text-sm font-semibold text-gray-700 dark:text-gray-200"
            >
              {event}
            </span>
          ))
        }
      </div>
    </div>

    <div>
      <SectionHeading>Representation in Competitions</SectionHeading>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-4">
        Teams represent Sandip University at national and international
        hackathons, conferences, and paper presentations.
      </p>
      <div className="flex flex-wrap gap-2">
        {
          flagshipCompetitions.map((competition) => (
            <span
              key={competition}
              className="px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/20 text-sm font-semibold text-red-600"
            >
              {competition}
            </span>
          ))
        }
      </div>
    </div>

  </div>
);

export default KeyRolesSection;
