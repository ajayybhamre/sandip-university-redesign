import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowUpRight } from "lucide-react";
import imgOrientation from "../../assets/images/intl_orientation.png";
import imgVaccination from "../../assets/images/intl_vaccination.png";
import imgCancer from "../../assets/images/intl_cancer_awareness.png";
import imgForum from "../../assets/images/intl_forum.png";
import "./EventsSection.css";

const events = [
  {
    id: 1,
    title: "International Students Orientation Program",
    category: "Orientation",
    desc: "Comprehensive orientation welcoming international students for Academic Year 2021-22, covering academic guidelines and campus life.",
    date: "21/09/2021",
    venue: "Y Building, Sandip Campus",
    image: imgOrientation,
  },
  {
    id: 2,
    title: "Free Vaccination Drive for International Students",
    category: "Health & Wellness",
    desc: "Dedicated free vaccination and health protection initiative organized for over 100+ international participants.",
    date: "27/09/2021 & 07/10/2021",
    venue: "O Building, Sandip Campus",
    image: imgVaccination,
  },
  {
    id: 3,
    title: "Cancer Awareness & Health Camp",
    category: "Health & Wellness",
    desc: "Special health screening and awareness seminar conducted in collaboration with HCG Manavata Cancer Care Centre.",
    date: "07/10/2021",
    venue: "O Building Auditorium",
    image: imgCancer,
  },
  {
    id: 4,
    title: "Open Forum Discussion",
    category: "Student Dialogue",
    desc: "Interactive feedback and dialogue platform for international students to interact directly with university leaders.",
    date: "AY 2021-22",
    venue: "Main Auditorium",
    image: imgForum,
  },
];

export default function EventsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 text-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/80 px-3.5 py-1.5 rounded-full">
            Campus Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Events & Experiences
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Highlights from recent international orientation programs, health drives, and student forums.
          </p>
        </div>

        {/* 4 Modern Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: event.id * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-orange-400 border border-orange-500/30 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {event.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                    {event.desc}
                  </p>
                </div>
              </div>

              {/* Meta Footer */}
              <div className="p-5 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
                <div className="flex items-center gap-1.5 text-orange-600 font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{event.venue}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
