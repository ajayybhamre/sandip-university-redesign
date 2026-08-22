import { OFFICIAL_CONTACT_INFO } from "../../pages/InternationalAdmission/contactTravelData";
import { UserCheck, Globe, Phone, Mail, ArrowRight } from "lucide-react";
import "./QuickContactCards.css";

export default function QuickContactCards() {
  return (
    <section className="py-12 bg-white text-slate-900 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Admissions Support */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-orange-300 transition-colors text-left flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Admissions Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Applications, eligibility criteria, specializations, and offer letters.
              </p>
            </div>
            <a
              href="#enquiry-form"
              className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:text-orange-700"
            >
              <span>Contact Admissions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: International Desk */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-orange-300 transition-colors text-left flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">International Student Desk</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Visa support letters, FRRO registration, and arrival assistance.
              </p>
            </div>
            <a
              href="#enquiry-form"
              className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:text-orange-700"
            >
              <span>Get Support</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Call Us */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-orange-300 transition-colors text-left flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Call Us Directly</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 font-mono font-bold text-slate-900">
                Toll-Free: {OFFICIAL_CONTACT_INFO.tollFree}<br />
                Direct: {OFFICIAL_CONTACT_INFO.admissionsPhone1}
              </p>
            </div>
            <a
              href={`tel:${OFFICIAL_CONTACT_INFO.tollFree.replace(/-/g, "")}`}
              className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:text-orange-700"
            >
              <span>Call Helpline Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Email Us */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:border-orange-300 transition-colors text-left flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Email Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4 font-mono">
                {OFFICIAL_CONTACT_INFO.internationalEmail}
              </p>
            </div>
            <a
              href={`mailto:${OFFICIAL_CONTACT_INFO.internationalEmail}`}
              className="text-xs font-bold text-orange-600 flex items-center gap-1 hover:text-orange-700"
            >
              <span>Send Email</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
