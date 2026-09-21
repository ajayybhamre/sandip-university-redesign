import { GraduationCap, CalendarRange, Layers, Sparkles } from "lucide-react";
import heroImage from "../../../assets/images/IMG_0868.webp";

const HERO_IMAGE = heroImage;

const facts = [
  { icon: GraduationCap, value: "7", label: "Schools" },
  { icon: CalendarRange, value: "2016", label: "Established" },
  { icon: Layers, value: "CBCS", label: "Credit system" },
  { icon: Sparkles, value: "NEP 2020", label: "Aligned" },
];

export default function AcademicsHero() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#081b3a] bg-cover bg-center"
      style={{ backgroundImage: `url(${HERO_IMAGE})` }}
    >
      {/* Flat, even tint (no blur, no box) — just enough to keep white text
          readable wherever it lands on the photo, center or bottom. */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/60"
        aria-hidden="true"
      />

      <div className="relative flex flex-1 flex-col items-center justify-center px-5 pt-24 text-center sm:px-8">
        
        <h1 className="text-6xl font-bold leading-none text-white sm:text-7xl lg:text-8xl">
          Academics
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
          Regulations, evaluation, the academic calendar, and the Centre for
          Indian Knowledge Systems — everything that governs how you study
          here, in one place.
        </p>
      </div>

      {/* <div className="relative px-5 pb-12 sm:px-8 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-[900px]">
          <dl className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-x-4">
            {facts.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <Icon size={20} className="text-red-400" aria-hidden="true" />
                <dt className="sr-only">{label}</dt>
                <dd className="text-xl font-bold text-white sm:text-2xl">{value}</dd>
                <dd className="text-xs text-white/60">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div> */}
    </section>
  );
}