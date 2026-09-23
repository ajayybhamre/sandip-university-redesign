import { PARTNERS_DATA } from "../../pages/InternationalAdmission/partnersData";
import PartnerCard from "./PartnerCard";
import { Sparkles } from "lucide-react";
import "./FeaturedPartners.css";

export default function FeaturedPartners({ onViewDetails }) {
  const featured = PARTNERS_DATA.filter((p) => p.featured);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-100/80 px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Key University Alliances</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Featured Global Partners
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((partner) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
