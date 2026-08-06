import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = ({ programsData = { undergraduate: [], postgraduate: [] }, schoolName = "School", schoolSlug = "school" }) => {
  const [activeTab, setActiveTab] = useState("undergraduate");

  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-red-600 font-semibold uppercase tracking-widest">{schoolName}</p>

          <h2 className="text-4xl font-bold text-black dark:text-white mt-2 transition-colors">Programs Offered</h2>

          <p className="text-black/70 dark:text-white/70 max-w-2xl mx-auto mt-4 transition-colors">Choose from our industry-oriented undergraduate and postgraduate programs designed to prepare students for successful careers.</p>
        </div>

        <div className="flex justify-center mb-8 px-4">
          <div className="flex w-full max-w-fit overflow-x-auto scrollbar-hide rounded-full bg-white dark:bg-[#111111] p-1.5 shadow-lg border border-red-100 dark:border-red-900">
            <button onClick={() => setActiveTab("undergraduate")} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base md:px-8 md:py-3 font-semibold transition-all duration-300 ${activeTab === "undergraduate" ? "bg-red-600 text-white" : "text-black dark:text-white hover:bg-red-50 dark:hover:bg-red-900/30"}`}>Undergraduate</button>

            <button onClick={() => setActiveTab("postgraduate")} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base md:px-8 md:py-3 font-semibold transition-all duration-300 ${activeTab === "postgraduate" ? "bg-red-600 text-white" : "text-black dark:text-white hover:bg-red-50 dark:hover:bg-red-900/30"}`}>Postgraduate</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {programsData[activeTab]?.map((course) => (
            <Link key={course.id} to={course.slug ? `/schools/${schoolSlug}/${course.slug}` : "#"} className="group bg-white dark:bg-[#111111] border border-red-100 dark:border-red-900 rounded-xl px-6 py-5 hover:border-red-600 hover:shadow-xl transition-all duration-300 block">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/30 flex items-center justify-center group-hover:bg-red-600 transition-all duration-300">
                  <GraduationCap size={20} className="text-red-600 group-hover:text-white transition-all duration-300" />
                </div>

                <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-red-600 transition-colors">{course.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
