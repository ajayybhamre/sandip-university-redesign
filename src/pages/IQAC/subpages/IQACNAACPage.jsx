import { Award, ShieldCheck, FileText, Download, CheckCircle2, Star, Calendar, Layers } from "lucide-react";
import IQACSubPageLayout from "../components/IQACSubPageLayout";
import seoData from "../../../components/SEO/seoData";

const naacCriteria = [
  {
    criterion: "Criterion 1",
    title: "Curricular Aspects",
    score: "Key Quality Indicator",
    description: "Outcome-Based Education (OBE) mapping, BoS syllabus revisions, interdisciplinary electives, and academic flexibility.",
  },
  {
    criterion: "Criterion 2",
    title: "Teaching-Learning and Evaluation",
    score: "Key Quality Indicator",
    description: "Student-centric pedagogy, experiential learning, ICT integration, transparent examination evaluation, and mentor-mentee framework.",
  },
  {
    criterion: "Criterion 3",
    title: "Research, Innovations and Extension",
    score: "Key Quality Indicator",
    description: "Scopus/Web of Science publications, patent filings, seed grants, Sandip Innovation incubator, and community outreach.",
  },
  {
    criterion: "Criterion 4",
    title: "Infrastructure and Learning Resources",
    score: "Key Quality Indicator",
    description: "Smart classrooms, central library digital OPAC, IEEE e-journals, advanced engineering labs, and green campus facilities.",
  },
  {
    criterion: "Criterion 5",
    title: "Student Support and Progression",
    score: "Key Quality Indicator",
    description: "Merit scholarships, placement assistance, alumni network, anti-ragging safeguards, and competitive exam guidance.",
  },
  {
    criterion: "Criterion 6",
    title: "Governance, Leadership and Management",
    score: "Key Quality Indicator",
    description: "Decentralized governance, statutory councils, administrative audits (AAA), e-governance ERP, and faculty development programs (FDPs).",
  },
  {
    criterion: "Criterion 7",
    title: "Institutional Values and Best Practices",
    score: "Key Quality Indicator",
    description: "Rooftop solar energy, zero-liquid discharge water recycling, gender equity cell, and industry-led curriculum distinctiveness.",
  },
];

export default function IQACNAACPage() {
  return (
    <IQACSubPageLayout
      seo={seoData.iqacNAAC}
      badge="NATIONAL ASSESSMENT & ACCREDITATION COUNCIL"
      title="NAAC Accreditation & Quality Ratings"
      subtitle="Overview of Sandip University's NAAC quality accreditation framework, 7 criteria benchmarks, AQAR submissions, and statutory certificates."
    >
      <div className="space-y-16">
        
        {/* Accreditation Overview Card */}
        <div className="bg-white dark:bg-[#201C18] rounded-3xl p-8 sm:p-10 border border-amber-300/80 dark:border-amber-700/60 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-300 text-xs font-bold text-amber-800 dark:text-amber-400 font-mono uppercase mb-4">
                <Star size={14} className="text-amber-500 fill-amber-500" />
                <span>Statutory NAAC Framework</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1C1917] dark:text-[#F5F2EB] mb-4">
                Institutional Quality & Assessment Standards
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Sandip University adheres strictly to the 7-point assessment framework formulated by the National Assessment and Accreditation Council (NAAC). The IQAC Secretariat systematically collects, audits, and uploads Annual Quality Assurance Reports (AQAR) to ensure post-accreditation quality sustenance.
              </p>

              <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C8102E]" />
                  <span>UGC & NAAC Aligned</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C8102E]" />
                  <span>Annual AQAR Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#C8102E]" />
                  <span>Periodic External AAA Audits</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#FAF7F2] dark:bg-[#181512] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 text-center">
              <Award size={48} className="mx-auto mb-3 text-[#C8102E]" />
              <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">Statutory NAAC Records</h3>
              <p className="text-xs text-gray-500 mb-4">Official Accreditation Certificates & Reports</p>
              <a
                href="#download-naac"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Downloading official NAAC Accreditation Document");
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C8102E] text-white font-bold text-xs uppercase tracking-wider hover:bg-red-700 transition-all shadow-md cursor-pointer"
              >
                <Download size={14} />
                <span>Download SSR Report</span>
              </a>
            </div>
          </div>
        </div>

        {/* 7 Assessment Criteria */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-[#C8102E] uppercase tracking-widest">ASSESSMENT FRAMEWORK</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1C1917] dark:text-[#F5F2EB] mt-1">
              The 7 NAAC Assessment Criteria
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {naacCriteria.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-[#201C18] rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-extrabold text-[#C8102E] bg-red-50 dark:bg-red-950/60 border border-red-200 px-3 py-1 rounded-full uppercase">
                      {item.criterion}
                    </span>
                    <span className="text-[10px] font-bold text-amber-700 font-mono">
                      {item.score}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1C1917] dark:text-[#F5F2EB] mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </IQACSubPageLayout>
  );
}
