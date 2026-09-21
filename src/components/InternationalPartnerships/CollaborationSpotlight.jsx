import { ArrowRight, CheckCircle2, Award } from "lucide-react";
import "./CollaborationSpotlight.css";

const spotlightStories = [
  {
    partner: "Charles Sturt University (Australia)",
    flag: "🇦🇺",
    title: "Joint Academic & Credit Transfer Framework",
    desc: "A bilateral MOU enabling Sandip University undergraduate engineering and management students to complete articulation pathways and credit transfers with CSU Australia.",
    points: ["Joint degree articulation options", "Faculty guest lectures", "Shared digital learning resources"],
  },
  {
    partner: "Belarusian National Technical University (Belarus)",
    flag: "🇧🇾",
    title: "Engineering Research & Robotics Exchange",
    desc: "Advanced technical collaboration focusing on heavy engineering, automation, and computer systems innovation between Nashik and Minsk research labs.",
    points: ["Co-authored technical research", "Virtual student hackathons", "Faculty exchange programs"],
  },
];

export default function CollaborationSpotlight() {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/60">
            Real Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            From Partnership to Opportunity
          </h2>
          <p className="text-base text-slate-600">
            Factual collaboration highlights demonstrating international outcomes for Sandip University scholars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {spotlightStories.map((story, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{story.flag}</span>
                  <span className="text-xs font-bold text-slate-600 bg-white border border-slate-200 px-3 py-1 rounded-full">
                    {story.partner}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                  {story.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {story.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-700">
                  {story.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
