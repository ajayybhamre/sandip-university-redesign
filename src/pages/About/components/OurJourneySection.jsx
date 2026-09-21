import { Calendar, Flag, Award, Sparkles } from "lucide-react";

const milestones = [
  {
    year: "2008",
    title: "Sandip Foundation Established",
    desc: "Founded by Dr. Sandip Kumar Jha to revolutionize higher education and technical research in Nashik, Maharashtra.",
  },
  {
    year: "2017",
    title: "Sandip University Act Passed",
    desc: "Enacted as a UGC-recognized State Private University by the Government of Maharashtra under Maharashtra Act No. XXXIX.",
  },
  {
    year: "2020",
    title: "Multidisciplinary School Expansion",
    desc: "Expanded into 7 specialized schools offering B.Tech, MBA, B.Pharm, LL.B, B.Sc Agriculture, and Doctoral Ph.D programs.",
  },
  {
    year: "2024+",
    title: "Global Recognition & Research Hub",
    desc: "250+ acre eco-friendly green campus hosting 50+ global MOUs, advanced research labs, and 100+ research patents filed.",
  },
];

export default function OurJourneySection() {
  return (
    <section id="our-journey" className="py-20 lg:py-28 bg-[#FAF7F2] dark:bg-[#161411] text-[#2B231D] dark:text-[#F3EFE9] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#EAE3D7] dark:border-[#2C2720]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold text-[#E86B7B] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#24201C] text-[#FAF7F2] border border-[#3D342B] shadow-sm">
                07 — OUR JOURNEY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C1714] dark:text-[#F3EFE9] leading-tight font-sans">
              Milestones of <span className="text-[#C8102E]">Excellence</span>
            </h2>
          </div>
          <p className="text-sm text-[#564B42] dark:text-[#C5BBB0] max-w-md">
            Tracing our journey from a pioneering educational foundation to a global research-driven university campus.
          </p>
        </div>

        {/* Clean Timeline Layout */}
        <div className="grid md:grid-cols-4 gap-6 relative">
          {milestones.map((ms, idx) => (
            <div
              key={idx}
              className="flex flex-col p-6 rounded-2xl bg-[#F5F0E6] dark:bg-[#1C1A16] border border-[#E5DDD0] dark:border-[#332C24] relative hover:border-[#C8102E]/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black font-mono text-[#C8102E] dark:text-[#E86B7B]">
                  {ms.year}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#24201C] border border-[#3D342B] flex items-center justify-center text-red-400 shadow-sm">
                  <Calendar size={15} />
                </div>
              </div>

              <h3 className="text-sm font-extrabold text-[#2B231D] dark:text-[#F3EFE9] mb-2 leading-snug font-sans">
                {ms.title}
              </h3>

              <p className="text-xs text-[#564B42] dark:text-[#C5BBB0] leading-relaxed font-normal">
                {ms.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
