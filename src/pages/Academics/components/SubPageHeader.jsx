import AcademicsBreadcrumb from "./AcademicsBreadcrumb";

export default function SubPageHeader({ icon: Icon, title, intro }) {
  return (
    <section className="border-b border-gray-200 bg-gray-50 px-5 pb-10 pt-8 dark:border-gray-800 dark:bg-slate-950 sm:px-8 lg:px-12 lg:pb-12 lg:pt-10">
      <div className="mx-auto max-w-[1400px]">
        <AcademicsBreadcrumb current={title} />

        <div className="mt-5 flex items-start gap-4">
          <span className="mt-1 hidden shrink-0 rounded-xl bg-[#081b3a]/10 p-3 text-[#081b3a] dark:bg-[#081b3a]/30 dark:text-white sm:inline-flex">
            <Icon size={22} aria-hidden="true" />
          </span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">{title}</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">{intro}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
