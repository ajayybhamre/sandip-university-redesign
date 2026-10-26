import { Link } from "react-router-dom";
import quickLinks from "./quickLinksData";

/* Floating strip that overlaps the bottom of the hero. */
export default function QuickLinks() {
  const goToAnchor = (e, path) => {
    e.preventDefault();
    const el = document.getElementById(path.replace("#", ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", path);
    }
  };

  return (
    <section
      aria-label="Quick links"
      className="relative z-30 mx-auto -mt-24 max-w-7xl px-4 sm:px-6 lg:-mt-28"
    >
      <div
        data-aos="fade-up"
        className="grid grid-cols-2 gap-1 rounded-[28px] border border-slate-200/80 bg-white p-3 shadow-2xl shadow-slate-900/15 dark:border-white/10 dark:bg-[#15151A] sm:p-4 md:grid-cols-3 lg:grid-cols-6"
      >
        {quickLinks.map((item, i) => {
          const Icon = item.icon;
          const cls =
            "group flex flex-col items-center rounded-2xl px-3 py-5 text-center transition duration-300 hover:-translate-y-1.5 hover:bg-rose-50 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]/50";
          const body = (
            <>
              <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-[#C8102E] ring-1 ring-rose-100 transition duration-300 group-hover:scale-110 group-hover:bg-[#C8102E] group-hover:text-white dark:bg-[#C8102E]/15 dark:ring-[#C8102E]/20">
                <Icon className="text-[28px]" />
              </span>
              <span className="block text-[15px] font-bold text-slate-900 dark:text-white">
                {item.title}
              </span>
              <span className="mt-0.5 block text-[13px] text-slate-500 dark:text-slate-400">
                {item.subtitle}
              </span>
            </>
          );

          return item.isAnchor ? (
            <a
              key={item.id}
              href={item.path}
              onClick={(e) => goToAnchor(e, item.path)}
              data-aos="zoom-in"
              data-aos-delay={120 + i * 70}
              className={cls}
            >
              {body}
            </a>
          ) : (
            <Link
              key={item.id}
              to={item.path}
              data-aos="zoom-in"
              data-aos-delay={120 + i * 70}
              className={cls}
            >
              {body}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
