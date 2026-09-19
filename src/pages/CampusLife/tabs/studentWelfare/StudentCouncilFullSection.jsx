import { motion } from "framer-motion";
import { HiOutlineEnvelope, HiOutlineDocumentArrowDown } from "react-icons/hi2";

import stCouncilLogo from "../../../../assets/images/campus-life/student-welfare/st-council-logo.png";
import SimpleList from "./shared/SimpleList";
import {
  councilPositions,
  candidateEligibility,
  voterEligibility,
  selectionCommittee,
  selectionPhases,
  councilObjectives,
  councilMemberYears,
} from "./data/lists";

const SectionHeading = ({ children }) => (
  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
    {children}
  </h4>
);

const SubHeading = ({ children }) => (
  <p className="font-semibold text-sm text-gray-800 dark:text-gray-100 mb-3">
    {children}
  </p>
);

const StudentCouncilFullSection = () => (
  <div className="space-y-14">

    {/* Logo + intro */}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="
        grid
        grid-cols-1
        sm:grid-cols-[1fr_140px]
        gap-6
        items-center
      "
    >

      <div>
        <SectionHeading>Student Council</SectionHeading>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
          Sandip University has established a Student Council, led by the
          Director of Student Welfare, to enrich the student experience
          and promote overall development. The council focuses on
          aligning its activities with the vision of Student Welfare,
          emphasizing student engagement, leadership, and skill
          development. Serving on the council provides students with
          invaluable experience in communication, decision-making, and
          problem-solving, which is essential for their personal and
          professional growth.
        </p>
      </div>

      <div className="
        flex
        items-center
        justify-center
        rounded-2xl
        border
        border-gray-100
        dark:border-slate-700
        bg-white
        p-4
        w-full
        max-w-[140px]
        mx-auto
        sm:mx-0
        sm:ml-auto
        order-first
        sm:order-last
      ">
        <img
          src={stCouncilLogo}
          alt="Sandip University Student Council"
          className="w-full h-full object-contain"
        />
      </div>

    </motion.div>

    {/* Selection process */}

    <div className="space-y-6">

      <div>
        <SubHeading>Selection Process and Structure</SubHeading>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
          The Director of Student Welfare initiates the formation of the
          Student Council each year by releasing an open call for
          interested students. Those who apply undergo a council
          selection interview conducted by the student council selection
          panel. The panel consists of domain-specific mentors. The
          committee members elect the University Student Council, with
          the Director of Student Welfare serving as the presiding
          officer for the process.
        </p>
      </div>

      <div>
        <SubHeading>Procedure for Student Council Selections</SubHeading>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
          The Student's Council consists of the seven major positions.
          Every year a notification is released from the Office of
          Registrar in the month of February-March. This notification is
          circulated to all the Schools/departments. Individual
          departments in all the Schools select their Class
          representative for each class. Thereafter, Class
          Representatives (CRs) who are interested in contesting for
          these posts can fill their application, and the final
          selections are based on active involvement in student clubs
          and forums.
        </p>
      </div>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div>
        <SectionHeading>The seven positions for the Student Council include:</SectionHeading>
        <SimpleList items={councilPositions} />
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-6 mt-4">
          In addition, Executive Member Positions for each of the
          respective schools are also available.
        </p>
      </div>

      <div className="space-y-8">

        <div>
          <SectionHeading>Eligibility Criteria</SectionHeading>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-5">
            To ensure fair participation and representation, candidates
            must meet the following criteria:
          </p>

          <SubHeading>Candidate Eligibility</SubHeading>
          <SimpleList items={candidateEligibility} />

          <div className="mt-6">
            <SubHeading>Voter Eligibility</SubHeading>
            <SimpleList items={voterEligibility} />
          </div>
        </div>

      </div>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div>
        <SectionHeading>Selection Committee</SectionHeading>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-4">
          The Selection Committee consists of the Director Students'
          Welfare as the Presiding officer along with:
        </p>
        <SimpleList items={selectionCommittee} />
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mt-4">
          The Selection Committee will ensure transparency and fairness
          throughout the process.
        </p>
      </div>

      <div>
        <SectionHeading>Phases of the Selection Process</SectionHeading>
        <SimpleList items={selectionPhases} />
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mt-4">
          The Committee will count votes under strict supervision.
          Winners for each position will be declared based on majority
          votes. Results will be published within 24 hours of the voting
          process.
        </p>
      </div>

    </div>

    <div className="space-y-6">

      <div>
        <SectionHeading>Selection Focus: Active Involvement in Clubs and Forums</SectionHeading>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
          Active participation in student clubs and forums will carry
          significant weight in the shortlisting process. Contributions
          such as leadership roles, event organization, and
          participation records will be reviewed.
        </p>
      </div>

      <div>
        <SectionHeading>Code of Conduct for Candidates</SectionHeading>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-3">
          All candidates must adhere to the following guidelines:
        </p>
        <SimpleList
          items={[
            "Maintain respectful behavior during presentations and Violation of rules may result in disqualification after review by the Selection",
          ]}
        />
      </div>

      <div>
        <SectionHeading>Dispute Resolution Mechanism</SectionHeading>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
          A dedicated grievance redressal team will handle complaints
          related to nominations, or results. Appeals must be made in
          writing within 48 hours of any dispute.
        </p>
      </div>

    </div>

    {/* Objectives */}

    <div>
      <SectionHeading>Objectives of Student Council</SectionHeading>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-6">
        The Main objectives of Sandip University Student Council are to:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {
          councilObjectives.map((objective, index) => (
            <motion.div
              key={objective.lead}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="
                bg-gray-50 dark:bg-slate-900
                border border-gray-200 dark:border-slate-700
                rounded-2xl p-5
              "
            >
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-6">
                <span className="font-bold text-gray-900 dark:text-white">
                  {objective.lead}
                </span>{" "}
                {objective.rest}
              </p>
            </motion.div>
          ))
        }
      </div>
    </div>

    {/* Council members by year */}

    <div>
      <SectionHeading>Student Council Members</SectionHeading>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Rosters by academic year — downloadable PDFs.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {
          councilMemberYears.map((year, index) => (
            <motion.a
              key={year}
              href={`/student-council/${year}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="
                flex flex-col items-center gap-2 text-center
                bg-gray-50 dark:bg-slate-900
                border border-gray-200 dark:border-slate-700
                rounded-2xl p-5
                hover:border-red-300
              "
            >
              <HiOutlineDocumentArrowDown className="text-red-600 w-6 h-6" />
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                {year}
              </span>
            </motion.a>
          ))
        }
      </div>
    </div>

    {/* Contact */}

    <div className="
      flex items-center gap-3
      bg-red-50 dark:bg-red-900/20
      border border-red-100 dark:border-red-900
      rounded-2xl p-6
    ">
      <HiOutlineEnvelope className="text-red-600 w-6 h-6 shrink-0" />
      <a
        href="mailto:student.council@sandipuniversity.edu.in"
        className="text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-red-600 transition-colors"
      >
        student.council@sandipuniversity.edu.in
      </a>
    </div>

  </div>
);

export default StudentCouncilFullSection;
