import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import "./FAQ.css";

const faqList = [
  {
    q: "How do international students apply to Sandip University?",
    a: "International applicants can apply directly via our online International Admissions portal. You will fill out your personal profile, choose your desired degree program, and upload clear scanned copies of required academic transcripts and passport.",
  },
  {
    q: "Which documents are required for application evaluation?",
    a: "The core documents required include a valid international passport copy, official High School (10+2) or Bachelor's marksheets/transcripts, passport-size photographs, and English Medium of Instruction proof.",
  },
  {
    q: "How is the AIU equivalence certificate obtained?",
    a: "The Association of Indian Universities (AIU), New Delhi issues equivalence certificates for foreign academic qualifications. The Sandip University International Desk assists admitted students with the AIU application process upon arrival.",
  },
  {
    q: "When should tuition and admission fees be paid?",
    a: "Initial seat reservation / processing fee is payable upon receiving your official Provisional Offer Letter. The remaining tuition and hostel fees are remitted prior to Final Admission Letter issuance and campus arrival.",
  },
  {
    q: "How can I make an international wire transfer for fee payment?",
    a: "You can initiate a Telegraphic Transfer (TT) / SWIFT wire transfer from your local foreign bank account using Sandip University's official ICICI Bank SWIFT Code (ICICINBBXXX) and Account Number (002705012548).",
  },
  {
    q: "Where should I submit payment confirmation?",
    a: "After completing your bank wire transfer, upload the transaction receipt / UTR slip directly to your student portal or email it to international@sandipuniversity.edu.in along with your Applicant Name & Application ID.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq-section" className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/80 px-3.5 py-1.5 rounded-full">
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Everything you need to know about international applications and wire transfer payments.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqList.map((item, idx) => {
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
                    <HelpCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <h3 className="text-base font-bold text-slate-900">
                      {item.q}
                    </h3>
                  </div>

                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-orange-600" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                    <p>{item.a}</p>
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
