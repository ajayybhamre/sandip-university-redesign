import { motion } from "framer-motion";

import ResponsiveTable from "../shared/ResponsiveTable";
import { PdfLink, ExternalLink, InternalLink } from "../components/DocButtons";
import howToApply from "../data/howToApply";

const dash = <span className="text-gray-400">—</span>;

const columns = [
  { key: "no", label: "Sr. No." },
  { key: "particulars", label: "Particulars" },
  { key: "sop", label: "Procedure / SOPs" },
  { key: "form", label: "Application" },
  { key: "online", label: "Online Link" },
];

const rows = howToApply.map((item) => ({
  no: item.no,
  particulars: (
    <span className="font-semibold text-gray-900 dark:text-white">
      {item.title}
    </span>
  ),
  sop: item.sop ? <PdfLink file={item.sop} /> : dash,
  form: item.form ? <PdfLink file={item.form} /> : dash,
  online: item.online ? (
    item.online.to ? (
      <InternalLink to={item.online.to} label={item.online.label} />
    ) : (
      <ExternalLink url={item.online.url} label={item.online.label} />
    )
  ) : (
    dash
  ),
}));

const HowToApplyTab = () => (
  <div className="space-y-14">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">
        How to Apply
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-6">
        Examination SOPs, student activities and verification — download the
        procedure and application form for each service, or apply online where
        available.
      </p>
      <ResponsiveTable columns={columns} rows={rows} />
    </motion.div>

  </div>
);

export default HowToApplyTab;
