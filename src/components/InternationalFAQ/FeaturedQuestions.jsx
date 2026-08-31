import { INTL_FAQS_DATA } from "../../pages/InternationalAdmission/intlFaqData";
import { HelpCircle, ArrowRight } from "lucide-react";
import "./FeaturedQuestions.css";

export default function FeaturedQuestions({ onSelectQuestion }) {
  const featured = INTL_FAQS_DATA.filter((item) => item.featured);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/80 px-3.5 py-1.5 rounded-full">
            Popular Queries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-2">
            Most Asked Questions
          </h2>
          <p className="text-sm text-slate-600">
            Quickly jump to the most common queries from foreign applicants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectQuestion(item.id)}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-orange-500 hover:shadow-md transition-all text-left flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded border border-orange-200/60 mb-3 inline-block">
                  {item.categoryLabel}
                </span>

                <h3 className="font-bold text-slate-900 text-base group-hover:text-orange-600 transition-colors mb-2 leading-snug">
                  {item.question}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                  {item.answer}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-orange-600">
                <span>Read Full Answer</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
