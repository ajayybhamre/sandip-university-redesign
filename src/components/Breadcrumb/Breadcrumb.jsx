import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi2";


export default function Breadcrumb({
  badge,
  title,
  description,
  currentPage,
  image,
}) {
  return (
    <section
      className="relative flex min-h-[430px] items-end overflow-hidden pb-24 pt-32 md:min-h-[540px] md:pb-28"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#081b3a]/95 via-[#081b3a]/72 to-[#081b3a]/30" />
      <div className="absolute bottom-0 right-0 h-full w-1/3 bg-gradient-to-l from-[var(--brand-red-600)]/20 to-transparent" />

     <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">

        <span className="border-l-2 border-[var(--brand-red-600)] pl-4 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
          {badge}
        </span>

        <h1 className="mt-6 max-w-5xl font-[var(--font-display)] text-5xl font-bold leading-[1.02] text-white md:text-7xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/75">
          {description}
        </p>

        <div className="mt-8 flex items-center text-sm text-white/70">

          <Link to="/">Home</Link>

          <HiChevronRight className="mx-2" />

          <span>{currentPage}</span>

        </div>
</div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-white/25" />
    </section>
  );
}
