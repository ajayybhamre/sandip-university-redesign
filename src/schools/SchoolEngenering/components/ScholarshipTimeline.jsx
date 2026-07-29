import { motion } from "framer-motion";
import {
  FaUserEdit,
  FaFileAlt,
  FaSearch,
  FaCheckCircle,
  FaMoneyCheckAlt,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserEdit />,
    title: "Apply Online",
    description:
      "Complete the scholarship application form through the university admission portal.",
  },
  {
    icon: <FaFileAlt />,
    title: "Submit Documents",
    description:
      "Upload all required academic certificates, income proof, and supporting documents.",
  },
  {
    icon: <FaSearch />,
    title: "Verification",
    description:
      "The scholarship committee verifies your eligibility and submitted documents.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Approval",
    description:
      "Eligible students receive scholarship approval from the university.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Fee Benefit",
    description:
      "Scholarship amount is adjusted in tuition fees or credited as applicable.",
  },
];

const ScholarshipTimeline = () => {
  return (
    <section className="relative py-24 bg-gray-50 dark:bg-slate-950 overflow-hidden rounded-b-[60px] lg:rounded-b-[100px]">

      {/* Background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-red-500/10 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-black-500/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <span className="uppercase tracking-[4px] text-red-600 font-semibold">
            Financial Support
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Scholarship Process
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-8">
            Our scholarship process is simple, transparent, and designed to help
            deserving students receive financial assistance with ease.
          </p>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Center Line */}

          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-600 to-red-700 transform -translate-x-1/2 rounded-full"></div>

          {steps.map((step, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              className={`relative mb-10 flex items-center ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              }`}
            >

              {/* Content */}

              <div className="lg:w-1/2">
                <div
                  className={`bg-white dark:bg-slate-900 shadow-xl rounded-3xl border border-gray-200 dark:border-slate-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    index % 2 === 0
                      ? "lg:mr-16"
                      : "lg:ml-16"
                  }`}
                >

                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-red-600 text-white flex items-center justify-center text-2xl shadow-lg">
                      {step.icon}
                    </div>

                    <div>

                      <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                        Step {index + 1}
                      </span>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                        {step.title}
                      </h3>

                    </div>

                  </div>

                  <p className="mt-6 text-gray-600 dark:text-gray-300 leading-8">
                    {step.description}
                  </p>

                </div>
              </div>

              {/* Circle */}
                            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-red-600 border-4 border-white dark:border-slate-950 shadow-lg"></div>
              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Information Section */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="rounded-3xl bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white p-10 lg:p-14 shadow-2xl">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* Left */}

              <div>

                <span className="uppercase tracking-[3px] text-red-100 font-semibold">
                  Scholarship Benefits
                </span>

                <h3 className="mt-4 text-3xl md:text-4xl font-bold">
                  Invest in Your Future Without Financial Barriers
                </h3>

                <p className="mt-6 text-red-100 leading-8">
                  Sandip University offers various merit-based, sports,
                  government, and special scholarships to encourage talented
                  students and make quality education accessible to everyone.
                </p>

              </div>

              {/* Right */}

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

  <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-5 md:p-6 text-center">
    <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold">
      100%
    </h4>
    <p className="mt-2 text-sm sm:text-base text-red-100">
      Merit Scholarship
    </p>
  </div>

  <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-5 md:p-6 text-center">
    <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold">
      30+
    </h4>
    <p className="mt-2 text-sm sm:text-base text-red-100">
      Scholarship Schemes
    </p>
  </div>

  <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-5 md:p-6 text-center">
    <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold">
      2000+
    </h4>
    <p className="mt-2 text-sm sm:text-base text-red-100">
      Students Benefited
    </p>
  </div>

  <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-5 md:p-6 text-center">
    <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold">
      Easy
    </h4>
    <p className="mt-2 text-sm sm:text-base text-red-100">
      Online Application
    </p>
  </div>

</div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ScholarshipTimeline;