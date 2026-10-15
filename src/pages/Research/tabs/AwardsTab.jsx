import { useState } from "react";
import { motion } from "framer-motion";

import ResponsiveTable from "../shared/ResponsiveTable";
import YearPills from "../shared/YearPills";
import {
  awardColumns,
  awards2023_24,
  awards2022_23,
  awards2021_22,
  awards2020_21,
  awards2019_20,
} from "./awards/data/awards";

const yearData = {
  "2023-24": awards2023_24,
  "2022-23": awards2022_23,
  "2021-22": awards2021_22,
  "2020-21": awards2020_21,
  "2019-20": awards2019_20,
};

const years = Object.keys(yearData);

const AwardsTab = () => {

  const [activeYear, setActiveYear] = useState(years[0]);

  const rows = yearData[activeYear];

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
          Research & Innovation Awards
        </h3>
      </motion.div>

      <YearPills years={years} active={activeYear} onSelect={setActiveYear} />

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{rows.length} entries</p>
      <ResponsiveTable columns={awardColumns} rows={rows} />

    </div>
  );
};

export default AwardsTab;
