import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

import ResponsiveTable from "../shared/ResponsiveTable";
import {
  fundedResearchColumns,
  fundedResearch2023_24,
  fundedResearch2022_23,
  fundedResearch2021_22,
  fundedResearch2019_20,
} from "./funding/data/fundedResearch";
import {
  consultancyColumns,
  consultancy2023_24,
  consultancy2022_23,
  consultancy2021_22,
  consultancy2019_20,
} from "./funding/data/consultancy";
import mous, { mouColumns } from "./funding/data/mous";

const subTabs = [
  { id: "funded", title: "Funded Sponsored Research" },
  { id: "consultancy", title: "Consultancy & Corporate Training" },
  { id: "mou", title: "Industry Collaborations / MOU Signed" },
];

const YearGroup = ({ year, columns, rows }) => (
  <div className="mb-10">
    <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{year}</h4>
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{rows.length} entries</p>
    <ResponsiveTable columns={columns} rows={rows} />
  </div>
);

const FundingTab = () => {

  const [subTab, setSubTab] = useState("funded");

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
          Funding & Industry Engagement
        </h3>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-10 border-b border-gray-200 dark:border-slate-700 pb-4">
        {
          subTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSubTab(tab.id)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-semibold transition-all
                ${
                  subTab === tab.id
                  ? "bg-gray-900 dark:bg-white text-white dark:text-black shadow-md"
                  : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
                }
              `}
            >
              {tab.title}
            </button>
          ))
        }
      </div>

      {
        subTab === "funded" && (
          <div>
            <YearGroup year="2023-24" columns={fundedResearchColumns} rows={fundedResearch2023_24} />
            <YearGroup year="2022-23" columns={fundedResearchColumns} rows={fundedResearch2022_23} />
            <YearGroup year="2021-22" columns={fundedResearchColumns} rows={fundedResearch2021_22} />
            <YearGroup year="2019-20" columns={fundedResearchColumns} rows={fundedResearch2019_20} />
          </div>
        )
      }

      {
        subTab === "consultancy" && (
          <div>
            <a
              href="https://www.sandipconsultancycell.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 mb-8
                text-sm font-semibold text-red-600
                hover:text-red-700 transition-colors
              "
            >
              Sandip Consultancy Cell
              <HiOutlineArrowTopRightOnSquare className="w-4 h-4" />
            </a>
            <YearGroup year="2023-24" columns={consultancyColumns} rows={consultancy2023_24} />
            <YearGroup year="2022-23" columns={consultancyColumns} rows={consultancy2022_23} />
            <YearGroup year="2021-22" columns={consultancyColumns} rows={consultancy2021_22} />
            <YearGroup year="2019-20" columns={consultancyColumns} rows={consultancy2019_20} />
          </div>
        )
      }

      {
        subTab === "mou" && (
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              {mous.length} signed MOUs. Each also carries a signed-document
              PDF on the source site, hosted on the NAAC documentation
              subdomain — not included here as raw links.
            </p>
            <ResponsiveTable columns={mouColumns} rows={mous} />
          </div>
        )
      }

    </div>
  );
};

export default FundingTab;
