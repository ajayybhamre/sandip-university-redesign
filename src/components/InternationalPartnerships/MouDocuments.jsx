import { PARTNERS_DATA } from "../../pages/InternationalAdmission/partnersData";
import { FileText, Eye, ShieldCheck } from "lucide-react";
import "./MouDocuments.css";

export default function MouDocuments({ onViewDetails }) {
  const mouPartners = PARTNERS_DATA.filter((p) => p.mouAvailable);

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/80 px-3.5 py-1.5 rounded-full">
            Official Accords
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Partnership Documents
          </h2>
          <p className="text-base text-slate-600">
            Formal Memorandum of Understanding (MOU) records established with international partner institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mouPartners.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-orange-300 transition-all flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-base">{item.flag}</span>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">{item.name}</h3>
                  </div>
                  <div className="text-xs text-slate-500 font-mono line-clamp-1">{item.mouTitle}</div>
                </div>
              </div>

              <button
                onClick={() => onViewDetails(item)}
                className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center gap-1 flex-shrink-0 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5 text-orange-400" />
                <span>View MOU</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
