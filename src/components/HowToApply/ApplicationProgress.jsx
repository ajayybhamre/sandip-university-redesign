import { motion } from "framer-motion";
import { Send, SearchCheck, Award, CreditCard, CheckCircle2, ChevronRight } from "lucide-react";
import "./ApplicationProgress.css";

const progressPipeline = [
  { step: "01", name: "Application", icon: Send, desc: "Submit details & documents online" },
  { step: "02", name: "Verification", icon: SearchCheck, desc: "Academic scrutiny & eligibility" },
  { step: "03", name: "Admission", icon: Award, desc: "Provisional offer letter issued" },
  { step: "04", name: "Fee Payment", icon: CreditCard, desc: "Secure Wire Transfer remittance" },
  { step: "05", name: "Confirmation", icon: CheckCircle2, desc: "Final admission & visa clearance" },
];

export default function ApplicationProgress() {
  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/60">
            End-to-End Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Application + Payment Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Visualizing fee payment as one seamless stage within your overall admission process.
          </p>
        </div>

        {/* Pipeline Container */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {progressPipeline.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="relative flex flex-col items-center text-center p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-orange-500/40 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-orange-400 flex items-center justify-center mb-4 shadow-sm">
                  <IconComp className="w-6 h-6" />
                </div>

                <span className="font-mono text-xs font-black text-orange-600 uppercase mb-1">STAGE {item.step}</span>
                <h3 className="font-extrabold text-slate-900 text-base mb-1">{item.name}</h3>
                <p className="text-xs text-slate-500 leading-snug">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
