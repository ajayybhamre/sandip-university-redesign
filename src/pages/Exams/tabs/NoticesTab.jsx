import { motion } from "framer-motion";

import ResponsiveTable from "../shared/ResponsiveTable";
import { PdfLink, NewBadge } from "../components/DocButtons";
import notices from "../data/notices";

const formatDate = (iso) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const columns = [
  { key: "date", label: "Date" },
  { key: "ref", label: "Reference No." },
  { key: "notice", label: "Notice" },
  { key: "file", label: "Download" },
];

const rows = notices.map((n) => ({
  date: formatDate(n.date),
  ref: n.ref,
  notice: (
    <div>
      <span className="font-semibold text-gray-900 dark:text-white">
        {n.type}: {n.title}
      </span>
      {n.isNew && <NewBadge />}
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 leading-5">
        {n.summary}
      </p>
    </div>
  ),
  file: <PdfLink file={n.file} label="PDF" />,
}));

const NoticesTab = () => (
  <div className="space-y-14">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">
        Examination Notices
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-6">
        Circulars and notifications issued by the Office of the Controller of
        Examinations, newest first.
      </p>
      <ResponsiveTable columns={columns} rows={rows} />
    </motion.div>

  </div>
);

export default NoticesTab;
