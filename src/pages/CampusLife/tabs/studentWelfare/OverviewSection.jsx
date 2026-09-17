import { motion } from "framer-motion";
import { HiOutlineEnvelope } from "react-icons/hi2";

import SimpleList from "./shared/SimpleList";
import {
  councilPositions,
  eligibilityCriteria,
  selectionCommittee,
  selectionPhases,
} from "./data/lists";

const SectionHeading = ({ children }) => (
  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
    {children}
  </h4>
);

const OverviewSection = () => (
  <div className="space-y-12">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Overview</SectionHeading>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
        The Directorate of Student Welfare (DSW), led by the Director
        Students' Welfare, serves as the cornerstone for nurturing holistic
        student development. It provides guidance, mentorship, and
        resources — spanning career counseling, mental health services,
        sports, and leadership opportunities.
      </p>
    </motion.div>

    <div>
      <SectionHeading>Student Council</SectionHeading>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-4">
        Established to enrich student experience, led by the Director of
        Student Welfare. Serving on the council builds communication,
        decision-making, and problem-solving skills.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-2 font-semibold">
        Selection Process and Structure
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-4">
        Annual open call → selection interview by a domain-mentor panel →
        committee elects the council, DSW presides.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-2 font-semibold">
        Procedure for Student Council Selections
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
        Notification released Feb–March by Registrar's office → departments
        select Class Representatives (CRs) → interested CRs apply for the 7
        major posts → selection based on active involvement in clubs/forums.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div>
        <SectionHeading>The 7 Student Council Positions</SectionHeading>
        <SimpleList items={councilPositions} numbered />
      </div>

      <div>
        <SectionHeading>Eligibility Criteria</SectionHeading>
        <SimpleList items={eligibilityCriteria} />
      </div>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div>
        <SectionHeading>Selection Committee</SectionHeading>
        <SimpleList items={selectionCommittee} />
      </div>

      <div>
        <SectionHeading>Phases of Selection</SectionHeading>
        <SimpleList items={selectionPhases} numbered />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
          Results published within 24 hours of voting.
        </p>
      </div>

    </div>

    <div>
      <SectionHeading>Selection Focus / Code of Conduct / Dispute Resolution</SectionHeading>
      <SimpleList
        items={[
          "Active club/forum involvement is weighted heavily in shortlisting.",
          "Candidates must maintain respectful behavior; violations lead to disqualification.",
          "A grievance team handles nomination/result disputes; appeals must be made in writing within 48 hours.",
        ]}
      />
    </div>

    <div className="
      flex items-center gap-3
      bg-red-50 dark:bg-red-900/20
      border border-red-100 dark:border-red-900
      rounded-2xl p-6
    ">
      <HiOutlineEnvelope className="text-red-600 w-6 h-6 shrink-0" />
      <div>
        <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
          Darshan Ahire, Director Students' Welfare
        </p>
        <a
          href="mailto:dirsw@sandipuniversity.edu.in"
          className="text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 transition-colors"
        >
          dirsw@sandipuniversity.edu.in
        </a>
      </div>
    </div>

  </div>
);

export default OverviewSection;
