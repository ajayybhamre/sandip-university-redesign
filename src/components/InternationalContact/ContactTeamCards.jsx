import { CONTACT_TEAMS } from "../../pages/InternationalAdmission/contactTravelData";
import { Phone, Mail, Clock, Building2 } from "lucide-react";
import "./ContactTeamCards.css";

export default function ContactTeamCards() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100/80 px-3.5 py-1.5 rounded-full">
            Department Directory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-2">
            Contact the Right Team
          </h2>
          <p className="text-sm text-slate-600">
            Reach out directly to specialized admissions or support desks for faster assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTACT_TEAMS.map((team, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-orange-400 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                  {team.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {team.purpose}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <a href={`tel:${team.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-orange-600 font-mono">
                      {team.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-orange-600 flex-shrink-0" />
                    <a href={`mailto:${team.email}`} className="hover:text-orange-600 font-mono truncate">
                      {team.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500">
                    <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span>{team.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
