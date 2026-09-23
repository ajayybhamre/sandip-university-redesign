import { useState } from "react";
import { MessageSquare, Users, GraduationCap, Briefcase, HeartHandshake, Send, CheckCircle2 } from "lucide-react";
import IQACSubPageLayout from "../components/IQACSubPageLayout";
import seoData from "../../../components/SEO/seoData";

const feedbackCategories = [
  { id: "students", title: "Student Feedback", icon: GraduationCap, desc: "Course content, teaching methodology, laboratory facilities, and LMS usability." },
  { id: "faculty", title: "Faculty Feedback", icon: Users, desc: "Curriculum relevance, research encouragement, administrative support, and infrastructure." },
  { id: "employers", title: "Employer Feedback", icon: Briefcase, desc: "Industry readiness, technical competence, soft skills, and placement performance." },
  { id: "alumni", title: "Alumni Feedback", icon: HeartHandshake, desc: "Institutional impact, career preparation, societal relevance, and lifelong learning." },
];

export default function IQACFeedbackSystemPage() {
  const [activeTab, setActiveTab] = useState("students");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <IQACSubPageLayout
      seo={seoData.iqacFeedback}
      badge="STAKEHOLDER ENGAGEMENT PORTAL"
      title="360° Feedback System"
      subtitle="Structured online feedback mechanisms for Students, Faculty, Employers, Alumni, and Parents to drive continuous institutional quality enhancement."
    >
      <div className="space-y-12">
        {/* Feedback Category Tabs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {feedbackCategories.map((cat) => {
            const IconComp = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#C8102E] text-white border-[#C8102E] shadow-md scale-102"
                    : "bg-white dark:bg-[#201C18] text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-800 hover:border-amber-300"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                  <IconComp size={20} className={isSelected ? "text-white" : "text-[#C8102E]"} />
                </div>
                <h4 className="font-bold text-base mb-1">{cat.title}</h4>
                <p className={`text-xs ${isSelected ? "text-white/80" : "text-gray-500"}`}>{cat.desc}</p>
              </button>
            );
          })}
        </div>

        {/* Feedback Form Card */}
        <div className="bg-white dark:bg-[#201C18] rounded-3xl p-6 sm:p-10 border border-gray-200 dark:border-gray-800 shadow-sm max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold text-[#C8102E] uppercase tracking-wider">ONLINE FEEDBACK FORM</span>
            <h3 className="text-2xl font-black text-[#1C1917] dark:text-[#F5F2EB] mt-1 capitalize">
              {activeTab} Feedback Submission
            </h3>
            <p className="text-xs text-gray-500 mt-1">Your authentic feedback helps IQAC upgrade academic benchmarks.</p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 text-emerald-800 text-center">
              <CheckCircle2 size={36} className="mx-auto mb-2 text-emerald-600" />
              <h4 className="font-extrabold text-base">Feedback Submitted!</h4>
              <p className="text-xs mt-1">Thank you. Your responses have been securely logged into the IQAC feedback database.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Full Name *</label>
                  <input type="text" required placeholder="Enter full name" className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#181512] border border-gray-300 dark:border-gray-700 text-sm focus:outline-none focus:border-[#C8102E]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                  <input type="email" required placeholder="Enter email" className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#181512] border border-gray-300 dark:border-gray-700 text-sm focus:outline-none focus:border-[#C8102E]" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Department / School *</label>
                  <select className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#181512] border border-gray-300 dark:border-gray-700 text-sm focus:outline-none focus:border-[#C8102E]">
                    <option>School of Engineering & Technology</option>
                    <option>School of Management Studies</option>
                    <option>School of Pharmaceutical Sciences</option>
                    <option>School of Law</option>
                    <option>School of Science</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Overall Quality Rating *</label>
                  <select className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#181512] border border-gray-300 dark:border-gray-700 text-sm focus:outline-none focus:border-[#C8102E]">
                    <option>Excellent (5 Stars)</option>
                    <option>Very Good (4 Stars)</option>
                    <option>Good (3 Stars)</option>
                    <option>Satisfactory (2 Stars)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">Detailed Suggestions / Comments *</label>
                <textarea rows={4} required placeholder="Share your suggestions for curriculum or facility improvements..." className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] dark:bg-[#181512] border border-gray-300 dark:border-gray-700 text-sm focus:outline-none focus:border-[#C8102E] resize-none" />
              </div>

              <button type="submit" className="w-full py-3 rounded-xl bg-[#C8102E] hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md">
                <span>Submit Feedback</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </IQACSubPageLayout>
  );
}
