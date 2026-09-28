import { useState } from "react";
import { motion } from "framer-motion";

import YearPills from "../shared/YearPills";
import PublicationsTable from "./facultyOutput/shared/PublicationsTable";
import publications2024 from "./facultyOutput/data/publications2024";
import publications2023 from "./facultyOutput/data/publications2023";
import publications2022 from "./facultyOutput/data/publications2022";

const yearData = {
  "2024": publications2024,
  "2023": publications2023,
  "2022": publications2022,
};

const years = Object.keys(yearData);

const FacultyOutputTab = () => {

  const [activeYear, setActiveYear] = useState(years[0]);

  const items = yearData[activeYear];

  return (
    <div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h3 className="font-bold text-2xl text-gray-900 dark:text-white">
          Faculty Research Publications
        </h3>
      </motion.div>

      <YearPills years={years} active={activeYear} onSelect={setActiveYear} />

      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-6">
        {activeYear} ({items.length} publications)
      </h4>

      <PublicationsTable items={items} />

    </div>
  );
};

export default FacultyOutputTab;
