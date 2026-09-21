import { AlertCircle, ShieldAlert, Check } from "lucide-react";
import "./ImportantPaymentNote.css";

export default function ImportantPaymentNote() {
  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        <div className="p-8 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-slate-900 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-start gap-6">
          
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <AlertCircle className="w-6 h-6" />
          </div>

          <div className="flex-1 space-y-3">
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <span>Important Before You Transfer</span>
            </h3>

            <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Applicant ID Requirement:</strong> Always include the student's Full Name and Application ID in the wire transfer memo / reference field.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Bank Charges:</strong> All intermediary banking charges, telegraphic transfer (TT) fees, and exchange rates must be borne by the sender.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span><strong>Receipt Issuance:</strong> Official university receipt and Final Admission Letter will be issued upon net fund credit into Sandip University account.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
