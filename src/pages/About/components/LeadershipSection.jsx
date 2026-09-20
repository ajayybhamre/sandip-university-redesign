import { useState } from "react";
import { ArrowRight, Quote, X, Award, UserCheck, ShieldCheck } from "lucide-react";
import presidentImg from "../../../assets/images/gayatri.webp"; 

const leaders = [
  {
    id: "president",
    name: "Dr. Sandip Kumar Jha",
    title: "Hon'ble President",
    role: "President, Sandip University & Founder Chairman, Sandip Foundation",
    quote:
      "Education is the most powerful tool to transform society. At Sandip University, our commitment is to provide world-class education that empowers youth with knowledge, technical expertise, and ethical values.",
    fullMessage: `Dear Students and Parents,

Welcome to Sandip University, a center of educational transformation and innovation. When we laid the foundation of Sandip Foundation over 25 years ago, our vision was simple yet profound: to create an ecosystem of higher learning that nurtures future-ready leaders equipped to solve complex real-world challenges.

At Sandip University, we believe that education must transcend traditional textbook learning. Across our 250+ acre eco-friendly campus in Nashik, we have integrated Education 5.0 and Industry 4.0 standards into every academic discipline. Our state-of-the-art laboratories, research incubation centers, and distinguished faculty members ensure that every student develops both technical competence and human values.

We invite you to embark on this extraordinary journey of discovery, growth, and global achievement.

Warm regards,
Dr. Sandip Kumar Jha
Hon'ble President, Sandip University`,
    image: presidentImg,
  },
  {
    id: "chairman",
    name: "Hon'ble Chairman",
    title: "Chairman, Board of Trustees",
    role: "Sandip University Educational & Research Trust",
    quote:
      "We strive to create an ecosystem of innovation and academic rigor where every student discovers their true potential and excels in their chosen career path.",
    fullMessage: `Greetings to all academic aspirants and scholars,

The Board of Trustees at Sandip University remains steadfastly committed to institutional governance, infrastructural expansion, and global academic partnerships. Our aim is to position Sandip University among the top research and teaching institutions in Asia.

Through strategic industrial collaborations, continuous curriculum upgrades, and student-centric support systems, we ensure that our graduates are well-prepared to lead multinational organizations or build pioneering entrepreneurial ventures.

We extend our best wishes to all students entering Sandip University this academic year.

Sincerely,
Board of Management & Trustees
Sandip University`,
    image: null,
  },
  {
    id: "vc",
    name: "Prof. (Dr.) Vice Chancellor",
    title: "Hon'ble Vice Chancellor",
    role: "Academic & Administrative Head, Sandip University",
    quote:
      "Our outcome-based curriculum, research emphasis, and strong industry linkages ensure our graduates are future-ready for global challenges and lifelong learning.",
    fullMessage: `From the Vice Chancellor's Desk,

Academic rigor, research innovation, and ethical integrity form the cornerstone of Sandip University's educational framework. As Vice Chancellor, my primary objective is to foster an inclusive academic environment where curious minds are encouraged to ask tough questions and seek ground-breaking solutions.

Our faculty members, hailing from prestigious national and international institutes, mentor students through hands-on project-based learning, industrial internships, and interdisciplinary research projects. We continue to strengthen our tie-ups with global universities, enabling student exchanges and international exposure.

I welcome you to Sandip University and look forward to celebrating your achievements.

Best wishes,
Prof. (Dr.) Vice Chancellor
Sandip University`,
    image: null,
  },
];

export default function LeadershipSection() {
  const [activeLeader, setActiveLeader] = useState(null);

  return (
    <section id="leadership" className="py-20 lg:py-28 bg-[#FAF7F2] dark:bg-[#161411] text-[#2B231D] dark:text-[#F3EFE9] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#EAE3D7] dark:border-[#2C2720]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold text-[#E86B7B] uppercase tracking-widest px-3.5 py-1 rounded-full bg-[#24201C] text-[#FAF7F2] border border-[#3D342B] shadow-sm">
                03 — LEADERSHIP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1C1714] dark:text-[#F3EFE9] leading-tight font-sans">
              Visionary <span className="text-[#C8102E]">University Leadership</span>
            </h2>
          </div>
          <p className="text-sm text-[#564B42] dark:text-[#C5BBB0] max-w-md">
            Guided by distinguished academic leaders and visionaries dedicated to institutional growth and student success.
          </p>
        </div>

        {/* Leadership Editorial Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="flex flex-col justify-between p-8 rounded-2xl bg-[#F5F0E6] dark:bg-[#1C1A16] border border-[#E5DDD0] dark:border-[#332C24] hover:border-[#C8102E]/50 transition-all duration-300 group shadow-xs"
            >
              <div>
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-6">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#C8102E]"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-[#EFE7DA] dark:bg-[#2A231C] border-2 border-[#E3D7C5] dark:border-[#3D3328] flex items-center justify-center text-[#C8102E] font-bold text-xl">
                      {leader.name.charAt(0)}
                    </div>
                  )}

                  <div>
                    <span className="text-[11px] font-bold text-[#C8102E] dark:text-[#E86B7B] uppercase tracking-wider block">
                      {leader.title}
                    </span>
                    <h3 className="text-lg font-extrabold text-[#2B231D] dark:text-[#F3EFE9] leading-snug font-sans">
                      {leader.name}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#6E6156] dark:text-[#A89D91] font-medium mb-6 line-clamp-2">
                  {leader.role}
                </p>

                {/* Quote Block */}
                <div className="relative pl-4 border-l-2 border-[#C8102E] mb-6">
                  <Quote size={16} className="text-[#C8102E]/40 mb-1" />
                  <p className="text-xs sm:text-sm text-[#4A4037] dark:text-[#D5C9BD] italic leading-relaxed">
                    "{leader.quote}"
                  </p>
                </div>
              </div>

              {/* Read Message Button */}
              <button
                onClick={() => setActiveLeader(leader)}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#C8102E] dark:text-[#E86B7B] group-hover:text-red-700 dark:group-hover:text-[#F58F9C] uppercase tracking-wider pt-4 border-t border-[#E5DDD0] dark:border-[#332C24] transition-colors cursor-pointer"
              >
                <span>Read Full Message</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Leadership Message Modal */}
      {activeLeader && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#FAF7F2] dark:bg-[#1C1A16] rounded-2xl border border-[#E5DDD0] dark:border-[#332C24] p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveLeader(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#EFE7DA] dark:bg-[#2A231C] flex items-center justify-center text-[#564B42] dark:text-[#C5BBB0] hover:text-[#C8102E] transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#EAE3D7] dark:border-[#2C2720]">
              {activeLeader.image ? (
                <img
                  src={activeLeader.image}
                  alt={activeLeader.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#C8102E]"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-[#EFE7DA] dark:bg-[#2A231C] border-2 border-[#E3D7C5] dark:border-[#3D3328] flex items-center justify-center text-[#C8102E] font-bold text-xl">
                  {activeLeader.name.charAt(0)}
                </div>
              )}
              <div>
                <span className="text-xs font-bold text-[#C8102E] dark:text-[#E86B7B] uppercase tracking-wider block">
                  {activeLeader.title}
                </span>
                <h3 className="text-xl font-black text-[#2B231D] dark:text-[#F3EFE9] font-sans">
                  {activeLeader.name}
                </h3>
                <p className="text-xs text-[#6E6156] dark:text-[#A89D91] mt-1">
                  {activeLeader.role}
                </p>
              </div>
            </div>

            {/* Full Message Body */}
            <div className="space-y-4 text-sm text-[#4A4037] dark:text-[#D5C9BD] leading-relaxed font-normal whitespace-pre-line">
              {activeLeader.fullMessage}
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-6 border-t border-[#EAE3D7] dark:border-[#2C2720] flex justify-end">
              <button
                onClick={() => setActiveLeader(null)}
                className="px-5 py-2 rounded-full bg-[#C8102E] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
              >
                Close Message
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
