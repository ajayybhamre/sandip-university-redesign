import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    program: "UG",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.country || !formData.message) {
      alert("Please fill in all required fields (Name, Email, Country, Message).");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        country: "",
        phone: "",
        program: "UG",
        subject: "",
        message: "",
      });
    }, 5000);
  };

  return (
    <section id="enquiry-form" className="py-20 bg-white border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200/60">
            Direct Inquiry
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-2">
            Send Us a Message
          </h2>
          <p className="text-sm text-slate-600">
            Fill out the form below to connect directly with the International Admissions Cell.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm relative">
          
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto animate-scale">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Enquiry Submitted Successfully</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you for contacting Sandip University International Admissions. Our representative will respond to your email within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                    Full Name <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Smith"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                    Email Address <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                    Country of Residence <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. Sri Lanka"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                    Phone Number (with Country Code)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+94 77 123 4567"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                    Degree Level
                  </label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                  >
                    <option value="UG">Undergraduate (UG)</option>
                    <option value="PG">Postgraduate (PG)</option>
                    <option value="Foundation">International Foundation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. B.Tech Computer Science eligibility query"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Message / Detailed Inquiry <span className="text-orange-600">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please enter your questions regarding program eligibility, fee structure, hostel, or visa assistance..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-medium text-slate-900 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-base transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Enquiry</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
