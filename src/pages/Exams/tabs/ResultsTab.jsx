import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi2";

import ResponsiveTable from "../shared/ResponsiveTable";
import { ResultLink, NewBadge } from "../components/DocButtons";
import { resultGroups, resultPath } from "../data/results";

const columns = [
  { key: "exam", label: "Examination" },
  { key: "date", label: "Date" },
  { key: "result", label: "Result" },
];

const featured = resultGroups.flatMap((g) => g.items).find((r) => r.featured);

const ResultsTab = () => (
  <div className="space-y-14">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">
        Results
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-6">
        Examination results of Sandip University. Each result opens in a new tab.
      </p>

      {featured && (
        <div className="
          flex flex-wrap items-center gap-4
          bg-red-50 dark:bg-red-900/20
          border border-red-100 dark:border-red-900
          rounded-2xl p-6
        ">
          <HiOutlineAcademicCap className="text-red-600 w-6 h-6 shrink-0" />
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
            {featured.title}
            {featured.isNew && <NewBadge />}
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Search and view your latest semester result
          </span>
          <ResultLink
            to={resultPath(featured.slug)}
            label="Check Result"
            className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors"
          />
        </div>
      )}
    </motion.div>

    {resultGroups.map((group) => {

      const items = group.items.filter((r) => !r.featured);
      if (items.length === 0) return null;

      const rows = items.map((r) => ({
        exam: (
          <span className="font-semibold text-gray-900 dark:text-white">
            {r.title}
            {r.isNew && <NewBadge />}
          </span>
        ),
        date: r.date,
        result: <ResultLink to={resultPath(r.slug)} />,
      }));

      return (
        <motion.div
          key={group.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
            {group.label}
          </h4>
          <ResponsiveTable columns={columns} rows={rows} />
        </motion.div>
      );
    })}

  </div>
);

export default ResultsTab;
