import { PARTNERS_DATA } from "../../pages/InternationalAdmission/partnersData";
import { Globe, ArrowRight } from "lucide-react";
import "./RegionExplorer.css";

const regions = [
  { name: "Europe", desc: "Germany, Belarus, Russia, Poland, Bulgaria, Lithuania" },
  { name: "Asia", desc: "Singapore, Malaysia, Sri Lanka, South Korea, Bangladesh, Nepal" },
  { name: "Australia & Oceania", desc: "Charles Sturt University pathways" },
  { name: "North America", desc: "UC Riverside California" },
  { name: "Africa", desc: "BA ISAGO University" },
];

export default function RegionExplorer({ onSelectRegion }) {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/80 px-3.5 py-1.5 rounded-full">
            Global Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-2">
            Global Reach
          </h2>
          <p className="text-sm text-slate-600">
            Discover Sandip University's academic tie-ups categorized by geographical region.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {regions.map((reg) => {
            const count = PARTNERS_DATA.filter((p) => p.region === reg.name).length;
            return (
              <button
                key={reg.name}
                onClick={() => onSelectRegion(reg.name)}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-orange-500 hover:shadow-md transition-all text-left flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Globe className="w-5 h-5 text-orange-600" />
                    <span className="text-xs font-sans font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {count} Partner{count > 1 ? "s" : ""}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base group-hover:text-orange-600 transition-colors mb-1">
                    {reg.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                    {reg.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-orange-600">
                  <span>Explore Partners</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
