import { useState } from "react";
import { motion } from "framer-motion";

import YearPills from "../shared/YearPills";
import BooksTable from "./facultyOutput/shared/BooksTable";
import books2023_24 from "./facultyOutput/data/books2023_24";
import books2022_23 from "./facultyOutput/data/books2022_23";

const ayData = {
  "2023-24": books2023_24,
  "2022-23": books2022_23,
};

const years = Object.keys(ayData);

const BooksTab = () => {

  const [activeYear, setActiveYear] = useState(years[0]);

  const items = ayData[activeYear];

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
          Books / Book Chapters
        </h3>
      </motion.div>

      <YearPills years={years} active={activeYear} onSelect={setActiveYear} />

      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-6">
        AY {activeYear} ({items.length})
      </h4>

      <BooksTable items={items} />

    </div>
  );
};

export default BooksTab;
