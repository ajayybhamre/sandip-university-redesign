import { motion } from "framer-motion";
import { HiOutlineCheckCircle, HiOutlineDocumentText } from "react-icons/hi2";

import ResponsiveTable from "../shared/ResponsiveTable";
import {
  programmeColumns,
  programmes,
  eligibilityCriteria,
  programmeDuration,
  admissionRules,
  feesInfo,
  documentsRequired,
  relatedLinks,
} from "./phd/data/phdData";

const SimpleList = ({ items, numbered = false }) => (
  <ol className={`space-y-3 ${numbered ? "list-decimal pl-5" : "list-none"}`}>
    {
      items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 leading-6">
          {
            !numbered && <HiOutlineCheckCircle className="text-red-600 w-4 h-4 shrink-0 mt-0.5" />
          }
          <span>{item}</span>
        </li>
      ))
    }
  </ol>
);

const PhdTab = () => (
  <div className="space-y-14">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-6">
        Programmes Offered
      </h3>
      <ResponsiveTable columns={programmeColumns} rows={programmes} />
    </motion.div>

    <div>
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">
        About Ph.D. Programme
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
        The Ph.D. Programme at SUN is designed for candidates to solve
        mainly real time industrial, local, regional, national and
        inter-national issues/problems. This is a win-win situation for the
        University and the Industry where the Ph.D. scholar gets exposed to
        challenging problems which has immediate impact on the industries
        and societal welfare.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">
        Ph.D Selection Procedure
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-8">
        Eligible candidates list published on website → Written Test (SUN
        Ph.D. Entrance Test – SUNPET) at SUN Campus.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Eligibility Criteria</h4>
          <SimpleList items={eligibilityCriteria} />
        </div>
        <div>
          <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Duration of the Programme</h4>
          <SimpleList items={programmeDuration} />
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">
        Important Instructions / Ph.D Admissions Rules
      </h3>
      <SimpleList items={admissionRules} />
    </div>

    <div>
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-6">
        Fees & Fellowship
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {
          feesInfo.map((item) => (
            <div key={item.title} className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl p-5">
              <p className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">{item.detail}</p>
            </div>
          ))
        }
      </div>
    </div>

    <div>
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-4">
        How to Apply
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-4">
        The online application form is available on website
        sandipuniversity.edu.in. The same may be filled online and
        submitted on or before the last date.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify mb-8">
        Please ensure your eligibility before applying for the Programme.
        The Application Processing fees once paid by the candidates will
        not be refunded, in any case if they are found ineligible for the
        applied Programme. Candidates must ensure that application is
        complete in all respects, including fees payment. The incomplete
        application or application without necessary attachments may not
        be considered. Applications received after the due date will not
        be considered and the application processing fees paid will not
        be refunded.
      </p>

      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">Certificates/Documents to be Enclosed</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {
          documentsRequired.map((doc) => (
            <div key={doc} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 leading-6">
              <HiOutlineDocumentText className="text-red-600 w-4 h-4 shrink-0 mt-0.5" />
              <span>{doc}</span>
            </div>
          ))
        }
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900 rounded-2xl p-5">
          <p className="font-bold text-gray-900 dark:text-white mb-2">Application Fee & Mode of Payment</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">
            ₹750 for SC/ST/Female candidates; ₹1,500 for others. Paid online
            via net banking, debit card, credit card, etc.
          </p>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900 rounded-2xl p-5">
          <p className="font-bold text-gray-900 dark:text-white mb-2">Ph.D. Entrance Test</p>
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">
            Venue: O-Building, Sandip University Campus, Nashik. Part I:
            Research Methodology, 50 MCQs (50 marks). Part II:
            Discipline-specific, 50 MCQs (50 marks). Total: 100 marks.
          </p>
        </div>
      </div>
    </div>

    <div>
      <h3 className="font-bold text-2xl text-gray-900 dark:text-white mb-6">
        Related Pages
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          relatedLinks.map((link) => (
            <div
              key={link.title}
              className="flex flex-col gap-1 bg-gray-50 dark:bg-slate-900 border border-dashed border-gray-300 dark:border-slate-700 rounded-2xl p-5"
            >
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{link.title}</span>
              <span className="text-xs text-gray-400">{link.note} — page to be built</span>
            </div>
          ))
        }
      </div>
    </div>

  </div>
);

export default PhdTab;
