import { TRAVEL_COMPARISON } from "../../pages/InternationalAdmission/contactTravelData";
import { Compass, CheckCircle2 } from "lucide-react";
import "./TravelComparison.css";

export default function TravelComparison() {
  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/60">
            Route Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-2">
            Quick Travel Comparison
          </h2>
          <p className="text-sm text-slate-600">
            Compare key distances, travel times, and transport modes at a glance.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[11px]">
                <th className="p-4">Arrival Route / Station</th>
                <th className="p-4">Best For</th>
                <th className="p-4">Approx. Distance</th>
                <th className="p-4">Transport Options</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-slate-50/50">
              {TRAVEL_COMPARISON.map((row, idx) => (
                <tr key={idx} className="hover:bg-orange-50/40 transition-colors">
                  <td className="p-4 font-bold text-slate-900">{row.route}</td>
                  <td className="p-4 text-slate-600 font-medium">{row.bestFor}</td>
                  <td className="p-4 font-mono font-bold text-orange-600">{row.distance}</td>
                  <td className="p-4 text-slate-700">{row.options}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden space-y-3">
          {TRAVEL_COMPARISON.map((row, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
              <div className="flex items-center justify-between font-bold text-slate-900 text-sm">
                <span>{row.route}</span>
                <span className="text-orange-600 font-mono">{row.distance}</span>
              </div>
              <div className="text-slate-500 font-medium">{row.bestFor}</div>
              <div className="text-slate-700 font-semibold pt-1 border-t border-slate-200">{row.options}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
