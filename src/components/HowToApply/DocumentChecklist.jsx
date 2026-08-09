import { useState } from "react";
import { CheckCircle2, ChevronDown, FileCheck, ShieldCheck, Download } from "lucide-react";
import "./DocumentChecklist.css";

const documentItems = [
  {
    title: "Valid International Passport",
    required: true,
    desc: "Clear scanned copy of first & last pages showing passport number, birth date, and expiry (minimum 6 months validity from date of application).",
  },
  {
    title: "High School / 10+2 / Secondary Certificate",
    required: true,
    desc: "Official Grade 10 and 12 marksheets / certificates or A-Level equivalent certified by the relevant examination board.",
  },
  {
    title: "Bachelor's Degree & Transcripts (For PG)",
    required: "For PG Applicants",
    desc: "Official graduation degree certificate and semester-wise transcripts certified by your previous university.",
  },
  {
    title: "Passport-Size Photographs",
    required: true,
    desc: "Recent colored passport photographs with white background (35mm x 45mm, JPEG/PNG format).",
  },
  {
    title: "AIU Equivalence Certificate",
    required: "Required at Reporting",
    desc: "Equivalence certificate issued by Association of Indian Universities (AIU), New Delhi for foreign secondary/tertiary qualifications.",
  },
  {
    title: "English Proficiency / Medium of Instruction",
    required: true,
    desc: "Certificate from previous institution stating English was the primary Medium of Instruction, or IELTS / TOEFL score.",
  },
  {
    title: "Medical Fitness & Vaccination Record",
    required: "Mandatory at Campus",
    desc: "Medical fitness certificate signed by a registered practitioner and valid COVID-19 / Yellow Fever vaccination record.",
  },
];

export default function DocumentChecklist() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/80 px-3.5 py-1.5 rounded-full">
            Document Preparation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Required Documents Checklist
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Please prepare clear digital PDF/JPEG scans of the following documents before beginning your application.
          </p>
        </div>

        {/* Accordion Cards List */}
        <div className="space-y-4">
          {documentItems.map((doc, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {doc.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200/60 px-2.5 py-0.5 rounded-full">
                      {typeof doc.required === "boolean" ? "Mandatory" : doc.required}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-orange-600" : ""}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                    <p className="mb-3">{doc.desc}</p>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Scan Quality: Clear 300 DPI Color Scan recommended (PDF/JPG format, max 5MB).</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
