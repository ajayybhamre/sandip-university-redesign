import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import SectionBg from "../../../components/Animated/SectionBg";
import SplitHeading from "../../../components/Animated/SplitHeading";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] px-4 py-20 dark:bg-[#0B0B0D] sm:px-6 lg:py-28">
      <SectionBg variants={["dots"]} />

      <div
        data-aos="zoom-in"
        className="relative z-10 mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-gradient-to-br from-[#C8102E] via-[#9F0D24] to-[#4A0611] px-8 py-16 text-center text-white shadow-2xl shadow-[#C8102E]/25 sm:px-16 lg:py-20"
      >
        <SectionBg variants={["rings", "noise"]} tone="dark" glow={false} />

        <div className="relative">
          <SplitHeading
            variant="rise"
            className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            parts={[{ t: "Ready to shape your future at Sandip University?" }]}
          />
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85"
          >
            Join thousands of students on a journey with world-class infrastructure and dedicated
            placement support.
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="350"
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/apply"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-[#C8102E] shadow-xl transition hover:bg-rose-50 bg-white-keep focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Apply now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-8 py-4 text-lg font-bold backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Phone className="h-5 w-5" />
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
