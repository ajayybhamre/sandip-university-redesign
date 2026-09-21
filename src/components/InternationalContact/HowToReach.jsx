import { TRAVEL_ROUTES } from "../../pages/InternationalAdmission/contactTravelData";
import { Plane, Car, Bus, Train, CheckCircle2, ArrowRight } from "lucide-react";
import "./HowToReach.css";

export default function HowToReach() {
  return (
    <section className="py-20 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/60">
            Travel Guide
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            How to Reach Sandip University
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Choose the most convenient travel option from air, road, bus, or railway connections.
          </p>
        </div>

        {/* 4 Travel Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. By Air */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-md">
                  <Plane className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">By Air</h3>
                  <p className="text-xs text-slate-500">International & Domestic Flights</p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                {TRAVEL_ROUTES.air.map((air, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 text-xs">
                    <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                      <span>{air.name}</span>
                      <span className="text-orange-600 font-sans">{air.distance}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-2">{air.desc}</p>
                    <div className="text-[11px] font-semibold text-slate-500">Approx. Travel Time: {air.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. By Road */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-md">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">By Road</h3>
                  <p className="text-xs text-slate-500">Highway Route Connections</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {TRAVEL_ROUTES.road.map((rd, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-800">
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{rd.city} to Campus</div>
                      <div className="text-slate-500 text-[11px]">{rd.via} ({rd.time})</div>
                    </div>
                    <span className="font-sans font-extrabold text-orange-600">{rd.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. By Bus */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-md">
                  <Bus className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">By Bus</h3>
                  <p className="text-xs text-slate-500">Intercity & Local Transit Steps</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                {TRAVEL_ROUTES.busSteps.map((bStep, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-start gap-3 text-xs">
                    <span className="font-sans text-xs font-black text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                      {bStep.step}
                    </span>
                    <div>
                      <strong className="text-slate-900 font-bold">{bStep.title}:</strong>{" "}
                      <span className="text-slate-600">{bStep.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. By Railway */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-md">
                  <Train className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">By Railway</h3>
                  <p className="text-xs text-slate-500">Central Railway Junction</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 text-xs">
                <div className="flex items-center justify-between font-bold text-slate-900 text-sm">
                  <span>{TRAVEL_ROUTES.railway.station}</span>
                  <span className="text-orange-600 font-sans">{TRAVEL_ROUTES.railway.distance}</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {TRAVEL_ROUTES.railway.desc}
                </p>
                <div className="text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-100">
                  Approx. Taxi Time: {TRAVEL_ROUTES.railway.time}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
