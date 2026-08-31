import { CheckCircle2, ArrowRight } from "lucide-react";
import "./PathwayComparison.css";

export default function PathwayComparison() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/80 px-3.5 py-1.5 rounded-full">
            Entry Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-2">
            Which Pathway Is Right For You?
          </h2>
          <p className="text-sm text-slate-600">
            Compare direct degree entry with our preparatory foundation pathway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Direct Entry */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="font-sans text-xs font-bold text-slate-500 uppercase bg-slate-100 px-3 py-1 rounded-md mb-3 inline-block">
                PATHWAY A
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Direct Entry</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                For international scholars who meet all direct academic, subject prerequisite, and English language eligibility requirements.
              </p>

              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Direct 1st Year enrollment into B.Tech, BBA, B.Pharm, LL.B, or M.Tech</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Requires recognized 10+2 / High School / Bachelor's Diploma</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Foundation Pathway */}
          <div className="p-7 rounded-3xl bg-white border-2 border-orange-500 shadow-md flex flex-col justify-between relative overflow-hidden">
            <span className="absolute top-0 right-0 bg-orange-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              RECOMMENDED FOR PREPARATION
            </span>

            <div>
              <span className="font-sans text-xs font-bold text-orange-600 uppercase bg-orange-50 px-3 py-1 rounded-md mb-3 inline-block">
                PATHWAY B
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Foundation Pathway</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                For students needing additional academic grounding, credit bridging, or English communication enhancement before degree entry.
              </p>

              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  <span>1-Year intensive academic & language preparatory program</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600" />
                  <span>Guaranteed progression into 1st Year university degree upon completion</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
