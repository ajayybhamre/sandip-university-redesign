import { Plane, Compass, Building2, PhoneCall, ArrowRight } from "lucide-react";
import "./InternationalArrivalGuide.css";

export default function InternationalArrivalGuide() {
  return (
    <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3.5 py-1.5 rounded-full">
            Foreign Student Orientation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3 mb-2">
            Arriving in India?
          </h2>
          <p className="text-sm text-slate-300">
            A simple 4-step arrival protocol for international applicants arriving at Sandip University.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-3">
              <Plane className="w-5 h-5" />
            </div>
            <span className="text-xs font-sans font-bold text-orange-400">STEP 01</span>
            <h3 className="font-bold text-white text-base">Arrive in India</h3>
            <p className="text-xs text-slate-300 leading-relaxed">Land at Mumbai CSIA (BOM) or Shirdi Airport with your valid Indian Student Visa.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-xs font-sans font-bold text-orange-400">STEP 02</span>
            <h3 className="font-bold text-white text-base">Reach Nashik Hub</h3>
            <p className="text-xs text-slate-300 leading-relaxed">Take express highway cab or express train to Nashik Road Railway Station.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-3">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="text-xs font-sans font-bold text-orange-400">STEP 03</span>
            <h3 className="font-bold text-white text-base">Travel to Campus</h3>
            <p className="text-xs text-slate-300 leading-relaxed">Proceed to Trimbak Road campus. Campus gates are open 24/7 for student arrivals.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center mb-3">
              <PhoneCall className="w-5 h-5" />
            </div>
            <span className="text-xs font-sans font-bold text-orange-400">STEP 04</span>
            <h3 className="font-bold text-white text-base">Report to Support Desk</h3>
            <p className="text-xs text-slate-300 leading-relaxed">Connect with the 24/7 International Desk for hostel check-in and FRRO registration.</p>
          </div>

        </div>

      </div>
    </section>
  );
}
