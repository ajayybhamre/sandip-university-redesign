import { FileText, Plane, Home } from "lucide-react";
import "./PreArrivalSupport.css";

const stages = [
  {
    stage: "Before Admission",
    icon: FileText,
    desc: "Program selection, document evaluation, eligibility verification, and Provisional Offer Letter processing.",
  },
  {
    stage: "Before Arrival",
    icon: Plane,
    desc: "Visa Support Letters, travel advice, flight schedule coordination, and pre-departure checklists.",
  },
  {
    stage: "After Arrival",
    icon: Home,
    desc: "Airport reception, international hostel check-in, FRRO police registration, SIM card, and orientation.",
  },
];

export default function PreArrivalSupport() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/80 px-3.5 py-1.5 rounded-full">
            Full Journey Assistance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Need Help Before You Travel?
          </h2>
          <p className="text-base text-slate-600">
            International students can contact the university for assistance at every phase of their transition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <div key={idx} className="p-7 rounded-3xl bg-white border border-slate-200 shadow-2xs text-left">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{st.stage}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
