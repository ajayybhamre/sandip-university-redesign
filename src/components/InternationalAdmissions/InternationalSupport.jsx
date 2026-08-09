import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail, HelpCircle, ArrowRight, MessageSquare } from "lucide-react";
import "./InternationalSupport.css";

export default function InternationalSupport() {
  return (
    <section className="py-16 bg-slate-100 text-slate-900 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              International Admissions Support
            </h2>
            <p className="text-sm text-slate-600">
              Have questions about eligibility, visa guidance, or fees? Our team is here to help.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-orange-400" />
            <span>Enquire Now</span>
          </Link>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Helpline */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Admission Helpline</h3>
              <p className="text-xs text-slate-500 mb-2">Toll Free & International Cell</p>
              <div className="text-sm font-extrabold text-orange-600 font-mono">1800-212-2714</div>
              <div className="text-xs text-slate-600 font-mono">+91 2594-222551</div>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Email Support</h3>
              <p className="text-xs text-slate-500 mb-2">Direct International Admissions Desk</p>
              <a href="mailto:international@sandipuniversity.edu.in" className="text-xs font-bold text-slate-900 hover:text-orange-600 transition-colors block">
                international@sandipuniversity.edu.in
              </a>
              <a href="mailto:info@sandipuniversity.edu.in" className="text-xs text-slate-600 hover:text-orange-600 transition-colors block">
                info@sandipuniversity.edu.in
              </a>
            </div>
          </div>

          {/* Card 3: Help Centre */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base mb-1">International Cell</h3>
              <p className="text-xs text-slate-500 mb-2">Sandip University Campus, Mahiravani, Trimbak Road, Nashik</p>
              <Link to="/help" className="text-xs font-bold text-orange-600 hover:underline inline-flex items-center gap-1">
                <span>View Help & FAQs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
