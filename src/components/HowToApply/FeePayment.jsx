import { motion } from "framer-motion";
import { CreditCard, Landmark, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import "./FeePayment.css";

export default function FeePayment() {
  return (
    <section id="fee-payment" className="py-20 bg-white text-slate-900 border-b border-slate-200/80 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/60">
            Payment Options
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Fee Payment
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Secure your admission through the official payment process.
          </p>
        </div>

        {/* Two Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Option 01: Online Payment */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-orange-500/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-sans text-xs font-black text-orange-600 uppercase bg-orange-100/80 px-3 py-1 rounded-md">
                  OPTION 01
                </span>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                Online Portal Payment
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Pay processing fees or initial seat reservation amounts instantly through our secure online student payment portal.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Supports International Credit & Debit Cards (Visa / Mastercard)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Instant digital payment receipt generated</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>256-bit SSL encrypted transaction security</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-orange-600">
              <span>Portal Payment Gateway</span>
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* Option 02: International Wire Transfer */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-sans text-xs font-black text-orange-400 uppercase bg-orange-500/20 px-3 py-1 rounded-md border border-orange-500/30">
                  OPTION 02 — RECOMMENDED FOR TUITION
                </span>
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                  <Landmark className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-3">
                International Wire Transfer
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Direct bank-to-bank SWIFT transfer for full tuition fee payments from your local foreign bank account.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>SWIFT Transfer / Telegraphic Transfer (TT)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Official University ICICI / SBI Bank Account</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Requires Applicant ID in Wire Transfer Remarks</span>
                </div>
              </div>
            </div>

            <a
              href="#wire-transfer-details"
              className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors"
            >
              <span>View Bank Wire Transfer Details Below</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
