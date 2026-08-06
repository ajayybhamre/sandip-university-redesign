

const DeanSection = () => {
  return (
   <section className="relative overflow-hidden bg-white dark:bg-slate-950 py-20 rounded-t-[50px]">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-red-500/10 blur-3xl"></div>

      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle,#000_1px,transparent_1px)] [background-size:22px_22px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-600 font-semibold uppercase tracking-widest">
            Leadership
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Message from the Dean
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 dark:text-gray-300">
            Leading with excellence, innovation, and commitment to creating the
            next generation of engineers and leaders.
          </p>
        </motion.div>

        {/* Content */}
       <div className="grid lg:grid-cols-12 gap-14 items-center">
          {/* Left */}
        <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}
  className="relative lg:col-span-5"
>
            <motion.img
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              src={deanImage}
              alt="Dean"
              className="rounded-3xl shadow-2xl border-8 border-white dark:border-slate-800"
            />

            {/* Floating Experience Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 right-5 bg-red-600 text-white rounded-2xl px-6 py-4 shadow-xl"
            >
              <h3 className="text-3xl font-bold">
                {deanData.experience}
              </h3>

              <p className="text-sm">
                Years of Experience
              </p>
            </motion.div>
          </motion.div>

          {/* Right */}
         <motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}
  className="lg:col-span-7"
>
            <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-900/70 border border-gray-200 dark:border-slate-700 rounded-3xl shadow-xl p-10">

              <FaQuoteLeft className="text-red-600 text-5xl mb-6" />

              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {deanData.name}
              </h3>

              <p className="text-red-600 font-semibold mt-2">
                {deanData.designation}
              </p>

              <div className="w-20 h-1 bg-red-600 rounded-full my-6"></div>

              <p className="leading-8 text-gray-600 dark:text-gray-300 text-justify">
                {deanData.message}
              </p>

              {/* Signature */}
              <div className="mt-10">
                <h4 className="font-bold text-xl text-gray-900 dark:text-white">
                  {deanData.name}
                </h4>

                <p className="text-gray-500 dark:text-gray-400">
                  {deanData.designation}
                </p>
              </div>

              {/* Button */}
              <button className="group mt-10 inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/30">
                Read Full Message

                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
      
      </div>
    </section>
  );
};

export default DeanSection;
  export { default } from "../../components/DeanSection";