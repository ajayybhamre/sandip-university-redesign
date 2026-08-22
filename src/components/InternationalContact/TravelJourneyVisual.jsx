import { Plane, Train, Bus, MapPin, CheckCircle2 } from "lucide-react";
import "./TravelJourneyVisual.css";

const journeyNodes = [
  { step: "01", title: "Arrival Point", desc: "Mumbai Airport (BOM) or Nashik Railway Station", icon: Plane },
  { step: "02", title: "Nashik City Hub", desc: "Expressway or Central Bus Stand (CBS)", icon: Bus },
  { step: "03", title: "Trimbak Road Route", desc: "Local taxi or city bus towards Trimbakeshwar", icon: MapPin },
  { step: "04", title: "Sandip Campus", desc: "Arrive at University Gate & International Desk", icon: CheckCircle2 },
];

export default function TravelJourneyVisual() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/80 px-3.5 py-1.5 rounded-full">
            Journey Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-2">
            From Arrival to Campus
          </h2>
          <p className="text-sm text-slate-600">
            A simple visual timeline from your arrival in India to your campus orientation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {journeyNodes.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-orange-400 flex items-center justify-center mb-3 shadow-sm">
                  <IconComp className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-black text-orange-600 uppercase mb-1">STAGE {item.step}</span>
                <h3 className="font-bold text-slate-900 text-base mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
