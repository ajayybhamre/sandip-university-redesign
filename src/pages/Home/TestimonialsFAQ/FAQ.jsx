import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";
import faqs from "./faqData";

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4" data-aos="fade-left" data-aos-duration="1000">
      {faqs.map((item, index) => (
        <div
          key={item.id}
          className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/80 dark:border-zinc-800 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
        >
          {/* Question */}
          <button
            onClick={() => setActive(active === index ? null : index)}
            className="w-full flex justify-between items-center px-6 py-5 text-left cursor-pointer gap-4"
          >
            <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              {item.question}
            </h3>

            <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/30 flex items-center justify-center shrink-0">
              {active === index ? (
                <HiMinus className="text-[#C8102E] text-base" />
              ) : (
                <HiPlus className="text-[#C8102E] text-base" />
              )}
            </div>
          </button>

          {/* Answer */}
          <div
            className={`transition-all duration-500 overflow-hidden ${
              active === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6 text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium pt-2 border-t border-slate-100 dark:border-zinc-800">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}