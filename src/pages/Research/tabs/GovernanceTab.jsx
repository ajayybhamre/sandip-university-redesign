import { motion } from "framer-motion";

import ResponsiveTable from "../shared/ResponsiveTable";

const committeeColumns = [
  { key: "sr", label: "Sr. No" },
  { key: "designation", label: "Designation" },
  { key: "position", label: "Committee Position" },
];

const committeeRows = [
  { sr: 1, designation: "Vice Chancellor", position: "Chairperson" },
  { sr: 2, designation: "Registrar", position: "Member" },
  { sr: 3, designation: "Director (IQAC)", position: "Member" },
  { sr: 4, designation: "Deans of all schools", position: "Member" },
  { sr: 5, designation: "Controller of Examination", position: "Member" },
  { sr: 6, designation: "Dean Research", position: "Member Secretary" },
];

const ethicsPrinciples = [
  { title: "Respect for persons", detail: "Treat all participants with dignity and respect, ensuring their rights and privacy are protected." },
  { title: "Informed consent", detail: "Obtain explicit consent from participants, ensuring they understand the research purposes, risks, and benefits." },
  { title: "Confidentiality", detail: "Maintain confidentiality of participant data and protect sensitive information." },
  { title: "Honesty and transparency", detail: "Ensure accuracy, truthfulness, and clarity in reporting research findings and methods." },
  { title: "Objectivity and bias avoidance", detail: "Strive for objectivity, avoiding personal biases and ensuring a fair representation of diverse perspectives." },
  { title: "Responsible data management", detail: "Ensure proper data storage, security, and disposal, adhering to ethical guidelines for data management." },
  { title: "Collaboration and authorship", detail: "Recognize contributors' roles and responsibilities, ensuring fair authorship and acknowledgment practices." },
  { title: "Conflict of interest avoidance", detail: "Declare and manage potential conflicts of interest, ensuring research integrity and objectivity." },
  { title: "Participant vulnerability protection", detail: "Be aware of and protect participants' vulnerabilities, ensuring their well-being and safety." },
  { title: "Ethical review and compliance", detail: "Adhere to ethical review processes and comply with relevant regulations and standards." },
  { title: "Cultural sensitivity and inclusivity", detail: "Value diverse perspectives, ensuring research is inclusive and sensitive to cultural contexts." },
  { title: "Research integrity and accountability", detail: "Take responsibility for research conduct, ensuring integrity, and accountability throughout the research process." },
];

const GovernanceTab = () => (
  <div className="space-y-14">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-6">
        Research Committee
      </h3>
      <ResponsiveTable columns={committeeColumns} rows={committeeRows} />
    </motion.div>

    <div>
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">
        Code of Ethics in Research
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-8">
        Sandip University is committed to fostering a culture of ethical
        research that upholds the highest standard of integrity, honesty and
        responsibility. This code of ethics outlines the principles and
        standards that all researchers at Sandip University are expected to
        adhere to.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {
          ethicsPrinciples.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-5"
            >
              <p className="font-bold text-gray-900 dark:text-white mb-2">{p.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">{p.detail}</p>
            </motion.div>
          ))
        }
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mt-8">
        This code of ethics serves as a foundation for ethical
        decision-making in educational research, prioritizing the
        well-being, privacy, and dignity of participants while promoting
        integrity, objectivity, and inclusivity in research practices.
      </p>
    </div>

  </div>
);

export default GovernanceTab;
