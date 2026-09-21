import { Search, X, Filter } from "lucide-react";
import { REGIONS_LIST, getCountriesList } from "../../pages/InternationalAdmission/partnersData";
import PartnerCard from "./PartnerCard";
import "./PartnerExplorer.css";

export default function PartnerExplorer({
  partners,
  searchQuery,
  setSearchQuery,
  selectedRegion,
  setSelectedRegion,
  selectedCountry,
  setSelectedCountry,
  selectedType,
  setSelectedType,
  onClearFilters,
  onViewDetails,
}) {
  const countries = getCountriesList();
  const activeCount = (searchQuery ? 1 : 0) + (selectedRegion !== "All" ? 1 : 0) + (selectedCountry !== "All" ? 1 : 0) + (selectedType !== "All" ? 1 : 0);

  return (
    <section id="partner-explorer" className="py-16 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60">
              Complete Directory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Explore Our Global Partners
            </h2>
          </div>

          <div className="text-xs font-sans font-bold text-slate-500 bg-slate-100 px-3.5 py-1.5 rounded-full self-start md:self-auto">
            {partners.length} {partners.length === 1 ? "Partner Found" : "Partners Found"}
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-4 mb-10">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search university or institution..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Region Filter Buttons */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 overflow-x-auto no-scrollbar">
              {REGIONS_LIST.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedRegion === reg
                      ? "bg-slate-900 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>

            {/* Country Dropdown & Reset */}
            <div className="flex items-center gap-2">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer max-w-[180px] truncate"
              >
                <option value="All">All Countries</option>
                {countries.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              {activeCount > 0 && (
                <button
                  onClick={onClearFilters}
                  className="px-3 py-2.5 rounded-xl bg-orange-50 text-orange-600 border border-orange-200 text-xs font-bold hover:bg-orange-100 transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Partners Grid */}
        {partners.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <PartnerCard
                key={partner.id}
                partner={partner}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center text-slate-500 max-w-md mx-auto">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">No Partners Found</h3>
            <p className="text-sm text-slate-600 mb-4">Try another institution name, region or country filter.</p>
            <button
              onClick={onClearFilters}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
