import {
  HiOutlineAcademicCap,
  HiOutlineBuildingLibrary,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiArrowRight,
} from "react-icons/hi2";

import aboutImage from "../../assets/images/slier3.webp";

const features = [
  {
    icon: HiOutlineAcademicCap,
    title: "Quality Education",
    desc: "Industry-oriented curriculum with experienced faculty.",
  },
  {
    icon: HiOutlineBuildingLibrary,
    title: "Modern Campus",
    desc: "World-class laboratories, library and smart classrooms.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Global Exposure",
    desc: "International collaborations and exchange opportunities.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Innovation",
    desc: "Research, incubation and entrepreneurship ecosystem.",
  },
];

export default function About() {
  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300"  data-aos="fade-up" id="about" >
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="relative">

            <img
              src={aboutImage}
              alt=""
              className="rounded-3xl w-full h-[650px] object-cover"
            />

            <div className="absolute -bottom-8 -right-8 bg-black dark:bg-red-600 text-white rounded-3xl p-8 shadow-2xl">

              <h2 className="text-5xl font-bold text-red-500 dark:text-white">
                25+
              </h2>

              <p className="mt-2">
                Years of Academic Excellence
              </p>

            </div>

          </div>

          {/* Right */}

          <div>

            <span className="bg-red-100 dark:bg-red-600 dark:text-white text-red-600 px-5 py-2 rounded-full font-semibold">
              ABOUT UNIVERSITY
            </span>

            <h2 className="text-5xl font-bold mt-6 leading-tight text-black dark:text-white">
              Empowering Students to Build
              <span className="text-red-600">
                {" "}
                Successful Careers
              </span>
            </h2>

            <p className="mt-8 text-gray-600 dark:text-gray-300 leading-8">
              Sandip University is committed to academic excellence,
              innovation, research, and holistic development. We prepare
              students with industry-ready skills, leadership qualities,
              and ethical values.
            </p>

            <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">
              Through advanced infrastructure, experienced faculty,
              industry partnerships, and experiential learning, the
              university creates an environment where students thrive.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              {features.map((item, index) => {

                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-4"
                  >
                    <div className="w-14 h-14 rounded-xl bg-red-100 dark:bg-red-600/20 border border-transparent dark:border-red-600 flex items-center justify-center">

                      <Icon className="text-2xl text-red-600 dark:text-red-500" />

                    </div>

                    <div>

                      <h4 className="font-semibold text-lg text-black dark:text-white">
                        {item.title}
                      </h4>

                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        {item.desc}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

            <button className="mt-10 bg-red-600 hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-white px-8 py-4 rounded-full flex items-center gap-2">

              Explore More

              <HiArrowRight />

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}