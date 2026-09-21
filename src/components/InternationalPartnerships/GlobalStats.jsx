import { PARTNERS_DATA, getCountriesList } from "../../pages/InternationalAdmission/partnersData";
import { Globe, Building2, MapPin, Award } from "lucide-react";
import "./GlobalStats.css";

export default function GlobalStats() {
  const partnerCount = PARTNERS_DATA.length;
  const countryCount = getCountriesList().length;

  const stats = [
    { value: `${partnerCount}+`, label: "Global Partner Institutions", icon: Building2 },
    { value: `${countryCount}`, label: "Countries Represented", icon: MapPin },
    { value: "5", label: "Continental Regions", icon: Globe },
    { value: "100%", label: "Student & Research Scope", icon: Award },
  ];

  return (
    <section className="py-12 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-3">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight mb-1">
                  {st.value}
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {st.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
