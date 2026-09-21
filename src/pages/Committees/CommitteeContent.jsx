import { motion } from "framer-motion";
import { HiOutlineEnvelope, HiOutlineExclamationTriangle, HiOutlineDocumentArrowDown } from "react-icons/hi2";

import ResponsiveTable from "./shared/ResponsiveTable";
import committees, { tableColumns } from "./data/committeesData";

const SimpleBullets = ({ items }) => (
  <ul className="space-y-3">
    {
      items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 leading-6">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0 mt-2" />
          <span>{item}</span>
        </li>
      ))
    }
  </ul>
);

const CommitteeContent = ({ activeId }) => {

  const committee = committees.find((c) => c.id === activeId) || committees[0];

  return (
    <motion.div
      key={committee.id}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-10"
    >

      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
          {committee.title}
        </h3>
        {
          committee.email && (
            <a
              href={`mailto:${committee.email}`}
              className="text-sm text-red-600 hover:text-red-700 transition-colors"
            >
              {committee.email}
            </a>
          )
        }
      </div>

      {
        committee.aims && (
          <div>
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">Aims</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
              {committee.aims}
            </p>
          </div>
        )
      }

      {
        committee.objectives && (
          <div>
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">Objectives</h4>
            <SimpleBullets items={committee.objectives} />
          </div>
        )
      }

      {
        committee.functions && (
          <div>
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">Functions</h4>
            <SimpleBullets items={committee.functions} />
          </div>
        )
      }

      {
        committee.procedure && (
          <div>
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">Complaint Redressal Procedure</h4>
            <SimpleBullets items={committee.procedure} />
          </div>
        )
      }

      <div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Members</h4>
        <ResponsiveTable columns={committee.columns || tableColumns} rows={committee.rows} />
      </div>

      {
        committee.process && (
          <div className="space-y-6">

            <div className="
              flex flex-wrap items-center gap-4
              bg-red-50 dark:bg-red-900/20
              border border-red-100 dark:border-red-900
              rounded-2xl p-6
            ">
              <HiOutlineEnvelope className="text-red-600 w-6 h-6 shrink-0" />
              <a href={`mailto:${committee.process.email}`} className="text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-red-600 transition-colors">
                {committee.process.email}
              </a>
              <span className="text-sm text-gray-600 dark:text-gray-300">{committee.process.contact}</span>
            </div>

            <div>
              <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Nature of Grievance/Complaint Considered</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{committee.process.natureNote}</p>
              <SimpleBullets items={committee.process.nature} />
            </div>

            <div>
              <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-3">Process for Grievance/Complaint Resolution</h4>
              <ol className="space-y-3 list-decimal pl-5">
                {
                  committee.process.steps.map((step, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-300 leading-6">
                      {step}
                    </li>
                  ))
                }
              </ol>
            </div>

          </div>
        )
      }

      {
        committee.resources && committee.resources.length > 0 && (
          <div>
            <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Official Documents</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {
                committee.resources.map((resource, index) => (
                  <motion.a
                    key={resource.title}
                    href={resource.href}
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
                      {resource.title.replace(" (PDF)", "")}
                    </span>
                  </motion.a>
                ))
              }
            </div>
          </div>
        )
      }

      {
        committee.note && (
          <div className="
            flex items-start gap-3
            bg-amber-50 dark:bg-amber-900/20
            border border-amber-200 dark:border-amber-800
            rounded-2xl p-5
          ">
            <HiOutlineExclamationTriangle className="text-amber-600 w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 dark:text-amber-300 leading-6">
              {committee.note}
            </p>
          </div>
        )
      }

    </motion.div>
  );
};

export default CommitteeContent;
