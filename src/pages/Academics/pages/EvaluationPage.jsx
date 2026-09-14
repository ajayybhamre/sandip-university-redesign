import { useEffect } from "react";
import { ClipboardCheck } from "lucide-react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header/Header";
import SubPageHeader from "../components/SubPageHeader";
import DataTable from "../components/DataTable";
import GradeScaleBar from "../components/GradeScaleBar";
import evaluationData from "../data/evaluationData";

export default function EvaluationPage() {
  useEffect(() => {
    document.title = "System of Evaluation | Sandip University";
  }, []);

  // W (Withdrawal) isn't a point on the performance scale, so it's excluded
  // from the visual bar — it still appears as a row in the table below.
  const scaleRows = evaluationData.gradingRows.filter((row) => row.grade !== "W");

  return (
    <>
      <Header />
      <main className="bg-white text-gray-900 dark:bg-black dark:text-white">
        <SubPageHeader icon={ClipboardCheck} title={evaluationData.header.title} intro={evaluationData.header.intro} />

        <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-[1400px]">

            <p className="mb-8 max-w-[760px] text-base leading-7 text-gray-600 dark:text-gray-400">
              {evaluationData.intro}
            </p>

            <div className="grid max-w-[760px] grid-cols-1 gap-4 sm:grid-cols-2">
              {evaluationData.assessmentComponents.map((component) => (
                <div key={component.label} className="rounded-xl border border-gray-200 p-5 dark:border-gray-800">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{component.label}</p>
                    <p className="shrink-0 text-lg font-bold text-red-600 dark:text-red-400">{component.weight}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{component.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-[1100px]">
              <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Grading scale</h2>
              <GradeScaleBar rows={scaleRows} />
              <DataTable columns={evaluationData.columns} rows={evaluationData.gradingRows} caption="Grading scale" />
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{evaluationData.gradingNote}</p>
            </div>

            <div className="mt-10 max-w-[760px]">
              <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Passing thresholds</h2>
              <div className="space-y-5">
                {evaluationData.passingThresholds.map((threshold) => (
                  <div key={threshold.category}>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{threshold.category}</p>
                    <ul className="mt-1.5 list-disc space-y-1 pl-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {threshold.rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">{evaluationData.passingNote}</p>
            </div>

            <div className="mt-10 max-w-[760px]">
              <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">GPA &amp; CGPA</h2>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {evaluationData.gpaInfo.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>

            <div className="mt-10 max-w-[760px]">
              <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Answer script &amp; revaluation</h2>
              <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {evaluationData.revaluationInfo.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}