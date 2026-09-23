import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, HelpCircle } from "lucide-react";
import "./ContactFAQ.css";

const contactFaqs = [
  {
    q: "Where is Sandip University located?",
    a: "Sandip University campus is located on Trimbak Road, Mahiravani, Nashik, Maharashtra 422213, India. It is situated approximately 15 km from Nashik city center.",
  },
  {
    q: "Which airport is closest to Sandip University campus?",
    a: "Shirdi Airport (SAG) is ~90 km (2 hours by road), while Chhatrapati Shivaji Maharaj International Airport (BOM) in Mumbai is ~180 km (3.5 to 4 hours by road/railway).",
  },
  {
    q: "How can I reach the university from Nashik Road Railway Station?",
    a: "Nashik Road Station (NK) is ~25 km from campus. Cabs, Uber, and local MSRTC city buses operating toward Trimbakeshwar stop directly in front of Sandip University Campus Gate.",
  },
  {
    q: "How can I contact the International Admissions Cell?",
    a: "You can reach the International Admissions Cell via email at international@sandipuniversity.edu.in or call our toll-free helpline at 1800-212-2714 / +91 91686 44445.",
  },
  {
    q: "How can I submit an online enquiry?",
    a: "You can fill out the online enquiry form on this page with your contact details and query. Our International Desk responds to all inquiries within 24 business hours.",
  },
];

export default function ContactFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/60">
            Quick Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-2">
            Contact & Travel FAQs
          </h2>
          <p className="text-sm text-slate-600">
            Common questions regarding campus location, travel options, and contacting admissions.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 mb-8">
          {contactFaqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="rounded-2xl bg-slate-50 border border-slate-200/90 overflow-hidden">
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <h3 className="text-base font-bold text-slate-900">{item.q}</h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-orange-600" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link to Full FAQ */}
        <div className="text-center">
          <Link
            to="/international-admission/faqs"
            className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 hover:text-orange-700 bg-orange-50 border border-orange-200/60 px-5 py-2.5 rounded-xl transition-colors"
          >
            <span>View All International FAQs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
