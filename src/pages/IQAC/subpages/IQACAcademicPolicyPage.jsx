import { BookOpen, CheckCircle2, Award, FileText, Layers, Shield } from "lucide-react";
import IQACSubPageLayout from "../components/IQACSubPageLayout";
import seoData from "../../../components/SEO/seoData";

const academicPolicies = [
  {
    title: "Choice Based Credit System (CBCS)",
    description: "Flexible curriculum framework allowing students to choose interdisciplinary electives, open electives, and skill enhancement courses.",
    highlights: [
      "Standard credit transfer framework across all constituent schools",
      "Interdisciplinary course choices in Emerging Technologies, Management & Humanities",
      "Continuous internal evaluation (CIE) combined with End Semester Examinations (ESE)",
    ],
  },
  {
    title: "Outcome-Based Education (OBE) Framework",
    description: "Systematic curriculum mapping of Program Outcomes (POs), Program Specific Outcomes (PSOs), and Course Outcomes (COs).",
    highlights: [
      "Blooms Taxonomy based question paper setting and assessment rubrics",
      "Direct and indirect attainment measurement for continuous course correction",
      "BoS curriculum alignment with National Credit Framework (NCrF)",
    ],
  },
  {
    title: "Research Ethics & Academic Integrity Policy",
    description: "Zero-tolerance anti-plagiarism guidelines, ethical clearance protocols, and publication incentive rules for faculty and students.",
    highlights: [
      "Mandatory Turnitin / Urkund plagiarism checks prior to dissertation & paper submission",
      "Institutional Ethics Committee (IEC) clearance for biological & human research",
      "Financial incentives for high-impact Scopus & Web of Science publications",
    ],
  },
  {
    title: "Examination Regulations & Reform Policy",
    description: "Transparent, digitized examination evaluation, re-totalling mechanisms, and outcome assessment safeguards.",
    highlights: [
      "Barcoded answer books and digital evaluation rooms for transparency",
      "Timely declaration of semester results via online student portal",
      "Supplementary and remedial examination provisions for student support",
    ],
  },
];

export default function IQACAcademicPolicyPage() {
  return (
    <IQACSubPageLayout
      seo={seoData.iqacAcademicPolicy}
      badge="ACADEMIC REGULATIONS & GUIDELINES"
      title="Academic Policy & Guidelines"
      subtitle="Statutory academic rules, Choice Based Credit System (CBCS), Outcome-Based Education (OBE) frameworks, research ethics, and examination regulations."
    >
      <div className="space-y-12">
        <div className="grid md:grid-cols-2 gap-6">
          {academicPolicies.map((pol, idx) => (
            <div key={idx} className="bg-white dark:bg-[#201C18] rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-[#C8102E] mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1C1917] dark:text-[#F5F2EB] mb-2">{pol.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{pol.description}</p>

              <div className="space-y-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                {pol.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                    <CheckCircle2 size={16} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </IQACSubPageLayout>
  );
}
