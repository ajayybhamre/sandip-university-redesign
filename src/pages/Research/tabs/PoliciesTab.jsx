import { motion } from "framer-motion";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const policyDocs = [
  { title: "Research Policy", href: "/research/policies/research-and-consultancy-sun-policy.pdf" },
  { title: "Maintenance Policy", href: "/research/policies/maintenance-policy.pdf" },
  { title: "IPR Policy", href: "/research/policies/ipr-policy-su.pdf" },
];

const PoliciesTab = () => (
  <div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white">
        Policies
      </h3>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {
        policyDocs.map((doc) => (
          <a
            key={doc.title}
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex flex-col items-center text-center gap-2
              bg-gray-50 dark:bg-slate-900
              border border-gray-200 dark:border-slate-700
              rounded-2xl p-6
              hover:border-red-300 dark:hover:border-red-800
              transition-colors
            "
          >
            <HiOutlineDocumentArrowDown className="text-red-600 w-6 h-6" />
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{doc.title}</span>
            <span className="text-xs text-gray-400">View PDF</span>
          </a>
        ))
      }
    </div>

  </div>
);

export default PoliciesTab;
