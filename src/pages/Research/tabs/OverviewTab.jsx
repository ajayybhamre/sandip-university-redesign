import { motion } from "framer-motion";
import { HiOutlineCheckCircle } from "react-icons/hi2";

const focusAreas = [
  "Artificial Intelligence and Machine Learning",
  "Data Science and Analytics",
  "Cybersecurity and Digital Forensics",
  "Internet of Things (IoT) and Smart Systems",
  "Renewable Energy and Sustainability",
  "Healthcare and Biotechnology",
  "Materials Science and Nanotechnology",
  "Social Sciences and Humanities",
];

const strengths = [
  "Interdisciplinary research collaborations",
  "Industry-academia partnerships",
  "State-of-the-art research infrastructure",
  "Highly qualified and experienced research faculty",
  "Strong research funding and support",
  "Active research culture and events",
];

const impact = [
  "Publications in top-tier journals and conferences",
  "Patents and technology transfers",
  "Research-based startup incubation",
  "Policy and societal impact",
  "Collaboration with global research institutions",
];

const opportunities = [
  "PhD and postdoctoral research programs",
  "Research internships and projects for students",
  "Faculty research seed grants",
  "Industry-sponsored research collaborations",
];

const objectives = [
  "To create awareness and opportunities in Research and Development among the students & faculty and to create Research and Development atmosphere in every department (Focus on strength and Weakness of individual faculty)",
  "To create interest and atmosphere among the staff members to take up Research projects and improve their knowledge, skills and qualifications.",
  "Identification of staff interest and divided it into paper writing, proposal writing for research project, proposal writing for workshop/seminar/conference.",
  "Identification of published patent and finding their viability to convert it into commercialization",
  "To encourage staff members and students to publish technical papers for publishing in National and reputed International Conferences/Journals like Scopus/WoS by dividing the activity among each individual staff",
  "To assist for applying and getting funds from various available funding agencies like DST, SERB, UGC, CSIR, DRDO, ISRO, DBT, AICTE etc.",
  "To create effective links with government departments, authorities, business, and commerce and industry organizations relevant to the university research activities",
  "To develop and coordinate strategies for maximizing the faculty's success in gaining external research funding.",
];

const List = ({ items }) => (
  <ul className="space-y-3">
    {
      items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 leading-6">
          <HiOutlineCheckCircle className="text-red-600 w-5 h-5 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))
    }
  </ul>
);

const OverviewTab = () => (
  <div className="space-y-12">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">
        Overview
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
        Sandip University is committed to advancing knowledge and innovation
        through cutting-edge research in various fields. Our research
        endeavors aim to address pressing global challenges, drive economic
        growth, and improve the human condition. We foster a culture of
        inquiry, creativity, and collaboration, providing a stimulating
        environment for faculty, students, and industry partners to work
        together.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      <div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
          Research Focus Areas
        </h4>
        <List items={focusAreas} />
      </div>

      <div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
          Research Strengths
        </h4>
        <List items={strengths} />
      </div>

      <div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
          Research Impact
        </h4>
        <List items={impact} />
      </div>

      <div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
          Research Opportunities
        </h4>
        <List items={opportunities} />
      </div>

    </div>

    <div>
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">
        Major Objectives of Research & Consultancy Cell
      </h3>
      <List items={objectives} />
    </div>

  </div>
);

export default OverviewTab;
