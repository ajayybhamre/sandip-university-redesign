import { useState } from "react";

import AccordionSection from "./shared/AccordionSection";
import PillTabs from "./shared/PillTabs";
import PdfCard from "./shared/PdfCard";
import ResponsiveTable from "../Research/shared/ResponsiveTable";

import {
  admissionDocs,
  importantDatesColumns,
  importantDates,
  importantDatesNote,
  eligibleCandidates,
  eligibleCandidatesNote,
} from "./data/admissionData";
import degreeAwardedList from "./data/degreeAwardedList";
import { infoAboutDegreesDocs, undertakingDoc } from "./data/infoAndUndertakingData";

const degreeAwardedColumns = [
  { key: "sr", label: "Sr. No." },
  { key: "name", label: "Name of the PhD Scholar" },
  { key: "title", label: "Title of the Thesis" },
  { key: "guide", label: "Name of the Guide/s" },
  { key: "year", label: "Year" },
];

const admissionSubTabs = ["Notification", "SUNPET Syllabus", "Important Dates", "Eligible Candidates List"];

const PhdAdmissionPanel = () => {

  const [subTab, setSubTab] = useState(admissionSubTabs[0]);
  const [discipline, setDiscipline] = useState(eligibleCandidates[0].discipline);

  const activeGroup = eligibleCandidates.find((g) => g.discipline === discipline);

  return (
    <div>
      <PillTabs tabs={admissionSubTabs} active={subTab} onSelect={setSubTab} size="sm" />

      <div className="mt-6">

        {
          subTab === "Notification" && (
            <PdfCard title={admissionDocs.notification.title} href={admissionDocs.notification.href} />
          )
        }

        {
          subTab === "SUNPET Syllabus" && (
            <PdfCard title={admissionDocs.syllabus.title} href={admissionDocs.syllabus.href} />
          )
        }

        {
          subTab === "Important Dates" && (
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                Important Dates of Ph. D. Programme Admission – July 2026 batch
              </h4>
              <ResponsiveTable columns={importantDatesColumns} rows={importantDates} />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">{importantDatesNote}</p>
            </div>
          )
        }

        {
          subTab === "Eligible Candidates List" && (
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                SUNPET (Ph.D. Entrance Test) Eligible Candidates — July 2026 Batch
              </h4>
              <PillTabs
                tabs={eligibleCandidates.map((g) => g.discipline)}
                active={discipline}
                onSelect={setDiscipline}
                size="sm"
              />
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {
                  activeGroup?.candidates.map((c) => (
                    <div
                      key={c.name}
                      className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-3"
                    >
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{c.name}</p>
                      {c.department && <p className="text-xs text-gray-500 dark:text-gray-400">{c.department}</p>}
                      {c.note && <p className="text-xs text-red-600 dark:text-red-400 mt-1">{c.note}</p>}
                    </div>
                  ))
                }
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-5">{eligibleCandidatesNote}</p>
            </div>
          )
        }

      </div>
    </div>
  );
};

const AdmissionsRecords = () => (
  <div className="space-y-4">

    <AccordionSection title="PH.D Admission">
      <PhdAdmissionPanel />
    </AccordionSection>

    <AccordionSection title="Ph.D Degree Awarded">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{degreeAwardedList.length} degrees awarded</p>
      <ResponsiveTable columns={degreeAwardedColumns} rows={degreeAwardedList} />
    </AccordionSection>

    <AccordionSection title="Information about the Ph.D. Degrees awarded by Sandip University, Nashik during 2020, 2021, 2022, 2023 and 2024">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {
          infoAboutDegreesDocs.map((doc) => (
            <PdfCard key={doc.title} title={doc.title} href={doc.href} />
          ))
        }
      </div>
    </AccordionSection>

    <AccordionSection title="Undertaking regarding Compliance of UGC Standing Committee">
      <PdfCard title={undertakingDoc.title} href={undertakingDoc.href} />
    </AccordionSection>

  </div>
);

export default AdmissionsRecords;
