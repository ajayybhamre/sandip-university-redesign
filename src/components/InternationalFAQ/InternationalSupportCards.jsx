import { UserCheck, Plane, Compass, Globe, GraduationCap, PhoneCall } from "lucide-react";
import "./InternationalSupportCards.css";

const supportPillars = [
  { icon: UserCheck, title: "Admission Support", desc: "Dedicated international counselors guiding credential evaluation and offer letter issuance." },
  { icon: Plane, title: "Visa Assistance", desc: "Official Embassy letters and online FRRO registration support post-arrival." },
  { icon: Compass, title: "Campus Orientation", desc: "Guided campus tours, bank account setup, and SIM card activation upon arrival." },
  { icon: Globe, title: "Cultural Integration", desc: "International cultural festivals, language clubs, and peer Buddy Mentorship programs." },
  { icon: GraduationCap, title: "Academic Guidance", desc: "Personalized tutoring, credit transfer assistance, and English medium skill labs." },
  { icon: PhoneCall, title: "24/7 Student Desk", desc: "Round-the-clock emergency support desk for foreign students (Helpline: 1800-212-2714)." },
];

export default function InternationalSupportCards() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/80 px-3.5 py-1.5 rounded-full">
            Holistic Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Support for International Students
          </h2>
          <p className="text-base text-slate-600">
            Six pillars ensuring a smooth transition and enriching university experience in India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportPillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs text-left">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
