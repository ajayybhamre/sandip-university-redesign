import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function IQACContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section className="py-20 bg-[#FAF7F2] dark:bg-[#1A1815] transition-colors duration-300 border-t border-[#EAE3D7] dark:border-[#2C2720]">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8">
        <div className="bg-white dark:bg-[#201C18] rounded-3xl border border-amber-200/80 dark:border-amber-900/40 p-8 sm:p-12 shadow-xl overflow-hidden relative">
          
          {/* Decorative Background Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Contact Info Column */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900 text-xs font-bold text-[#C8102E] dark:text-red-400 uppercase tracking-wider mb-6">
                <ShieldCheck size={14} />
                <span>IQAC Secretariat Contact</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#1C1917] dark:text-[#F5F2EB] tracking-tight leading-tight mb-4">
                Connect with the <span className="text-[#C8102E]">Quality Assurance Cell</span>
              </h2>

              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                For quality compliance queries, academic audit feedback, statutory documentation requests, or institutional collaborations, reach out directly to the IQAC Secretariat.
              </p>

              {/* Direct Info List */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-[#C8102E] flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Office Address</h4>
                    <p className="text-sm font-semibold text-[#1C1917] dark:text-[#F5F2EB] leading-relaxed">
                      IQAC Office, Ground Floor, Academic Block,<br />
                      Sandip University, Mahiravani, Trimbak Road,<br />
                      Nashik - 422213, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900/50 flex items-center justify-center text-amber-600 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Toll-Free Helpline</h4>
                    <p className="text-sm font-semibold text-[#1C1917] dark:text-[#F5F2EB]">
                      1800 212 2714
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900/50 flex items-center justify-center text-[#C8102E] flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Official IQAC Email</h4>
                    <p className="text-sm font-semibold text-[#1C1917] dark:text-[#F5F2EB]">
                      iqac@sandipuniversity.edu.in
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-6 bg-[#FAF7F2] dark:bg-[#181512] rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-extrabold text-[#1C1917] dark:text-[#F5F2EB] mb-2 flex items-center gap-2">
                <span>Submit Quality Inquiry / Feedback</span>
                <Sparkles size={16} className="text-amber-500" />
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                Send your official queries directly to the IQAC Director & Secretariat.
              </p>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-center"
                >
                  <CheckCircle2 size={36} className="mx-auto mb-2 text-emerald-600" />
                  <h4 className="font-extrabold text-base">Inquiry Submitted Successfully!</h4>
                  <p className="text-xs mt-1">Thank you. The IQAC Secretariat will review your inquiry promptly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Prof. / Mr. / Ms."
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#201C18] border border-gray-300 dark:border-gray-700 text-sm focus:outline-none focus:border-[#C8102E] text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#201C18] border border-gray-300 dark:border-gray-700 text-sm focus:outline-none focus:border-[#C8102E] text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                      Subject / Topic *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Academic Audit / Feedback Submission"
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#201C18] border border-gray-300 dark:border-gray-700 text-sm focus:outline-none focus:border-[#C8102E] text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1">
                      Message / Feedback *
                    </label>
                    <textarea 
                      rows={4} 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your inquiry or suggestion for the IQAC team..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#201C18] border border-gray-300 dark:border-gray-700 text-sm focus:outline-none focus:border-[#C8102E] text-gray-900 dark:text-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-[#C8102E] hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
