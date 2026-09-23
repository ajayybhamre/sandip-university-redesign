import { PARTNERS_DATA, getCountriesList } from "../../pages/InternationalAdmission/partnersData";
import { MapPin, ArrowRight } from "lucide-react";
import "./CountryExplorer.css";

const countryFlags = {
  Australia: "🇦🇺",
  Belarus: "🇧🇾",
  Germany: "🇩🇪",
  Russia: "🇷🇺",
  "Sri Lanka": "🇱🇰",
  Singapore: "🇸🇬",
  Poland: "🇵🇱",
  Bangladesh: "🇧🇩",
  "South Korea": "🇰🇷",
  Botswana: "🇧🇼",
  Bulgaria: "🇧🇬",
  Lithuania: "🇱🇹",
  Nepal: "🇳🇵",
  Malaysia: "🇲🇾",
  USA: "🇺🇸",
};

export default function CountryExplorer({ onSelectCountry }) {
  const countries = getCountriesList();

  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/60">
            Country Directory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2 mb-2">
            Explore by Country
          </h2>
          <p className="text-sm text-slate-600">
            Click any country pill below to view partner institutions in that region.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {countries.map((c) => {
            const flag = countryFlags[c] || "🌐";
            const count = PARTNERS_DATA.filter((p) => p.country === c).length;
            return (
              <button
                key={c}
                onClick={() => onSelectCountry(c)}
                className="px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-orange-500 hover:bg-orange-50/40 transition-all duration-300 flex items-center gap-2.5 text-xs font-bold text-slate-800 shadow-2xs group cursor-pointer"
              >
                <span className="text-base">{flag}</span>
                <span>{c}</span>
                <span className="font-sans text-[10px] text-orange-600 bg-orange-100/80 px-2 py-0.5 rounded-full">
                  {count}
                </span>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-orange-600 group-hover:translate-x-0.5 transition-all" />
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
