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
    >
      <SectionHeading>All-Round Institutional and Student Development</SectionHeading>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
        The student-led council plays a pivotal role in shaping
        initiatives that contribute to both the university's development
        and students' welfare. Through brainstorming sessions, council
        members design and implement events and programs that benefit
        the student body. This focus on student welfare has been a
        cornerstone of the council's objectives.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div>
        <SectionHeading>Key Components of All-Round Institutional Development</SectionHeading>
        <SimpleList items={institutionalDevelopment} />
      </div>

      <div>
        <SectionHeading>Key Components of All-Round Student Development</SectionHeading>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-4">
          All-round student development, also known as holistic or
          whole-child education, refers to nurturing students in
          multiple dimensions — intellectual, emotional, social,
          physical, and ethical — to prepare them for success in all
          areas of life. The following are the core components
          consistently identified as essential for fostering
          well-rounded individuals:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
          {
            studentDevelopment.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 leading-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 mt-2" />
                <span>{item}</span>
              </div>
            ))
          }
        </div>
      </div>

    </div>

    <div>
      <SectionHeading>Student-Run Clubs and Professional Chapters</SectionHeading>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-4">
        The council oversees a variety of student-run clubs, each
        related to diverse areas such as technical skills, culture,
        innovation, outreach, and professional development. These clubs
        organize hands-on projects, workshops, conferences, and
        consultations, allowing students to apply theoretical knowledge
        in practical settings. Some of the Flagship events are:
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
      <SectionHeading>Representation in Competitions and Events</SectionHeading>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-4">
        Every year, the council organizes teams representing Sandip
        University at national and international competitions, paper
        and project presentations, hackathons, conferences, and
        volunteering services. This promotes the university and gives
        students a platform to showcase their talents and expand their
        horizons. Some of the Flagship events are:
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
