import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import "./PaymentInstructions.css";

const paymentSteps = [
  {
    num: "01",
    title: "Obtain Required Amount",
    desc: "Refer to your official Provisional Offer Letter for exact tuition, hostel, and processing fee amounts.",
  },
  {
    num: "02",
    title: "Initiate Wire Transfer",
    desc: "Visit your local foreign bank branch or log in to international online banking telegraphic transfer.",
  },
  {
    num: "03",
    title: "Enter Bank Details Exactly",
    desc: "Input Sandip University ICICI Bank details, SWIFT Code (ICICINBBXXX), and account number accurately.",
  },
  {
    num: "04",
    title: "Mention Student Applicant ID",
    desc: "Crucial: Include student's Full Name and Application Reference Number in payment remarks/memo.",
  },
  {
    num: "05",
    title: "Save Reference / SWIFT Receipt",
    desc: "Retain a copy of the bank wire transfer confirmation slip or UTR reference number.",
  },
  {
    num: "06",
    title: "Submit Payment Proof",
    desc: "Upload scanned payment proof to your student portal or email to international@sandipuniversity.edu.in.",
  },
];

export default function PaymentInstructions() {
  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/60">
            Remittance Directives
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Payment Instructions
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Follow this 6-step checklist when executing your international wire transfer.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paymentSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xl font-black text-orange-600 bg-orange-100/80 px-2.5 py-0.5 rounded-lg">
                    {step.num}
                  </span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
