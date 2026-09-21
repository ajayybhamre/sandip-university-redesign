import { INTL_FAQ_CATEGORIES } from "../../pages/InternationalAdmission/intlFaqData";
import "./FAQCategories.css";

export default function FAQCategories({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="sticky top-20 z-30 bg-white/95 dark:bg-[#121216]/95 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 shadow-2xs py-4 mb-12 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {INTL_FAQ_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#C8102E] text-white shadow-md shadow-red-600/20"
                    : "bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-zinc-700 hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-[#C8102E] dark:hover:text-[#C8102E]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
