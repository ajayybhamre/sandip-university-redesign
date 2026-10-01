import {
  HiOutlineAcademicCap,
  HiOutlineLightBulb,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";

const cards = [
  {
    icon: HiOutlineAcademicCap,
    title: "Academic Excellence",
    description:
      "Delivering quality education through innovative teaching methodologies, experienced faculty, and outcome-based learning.",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Innovation & Research",
    description:
      "Empowering students and researchers to create impactful solutions through innovation, entrepreneurship, and advanced research.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Global Perspective",
    description:
      "Building future-ready graduates with international collaborations, industry exposure, and leadership opportunities.",
  },
];

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block bg-red-100 dark:bg-red-600 text-red-600 dark:text-white px-5 py-2 rounded-full font-semibold">
            WHO WE ARE
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-black dark:text-white">
            Building Future Leaders Through
            <span className="text-red-600">
              {" "}
              Quality Education
            </span>
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-8">
            Sandip University nurtures innovation, academic excellence,
            ethical values, and global competence while preparing students
            to become future professionals and responsible citizens.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {cards.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  border
                  border-gray-200
                  dark:border-red-600/40
                  bg-white
                  dark:bg-[#111111]
                  p-10
                  hover:-translate-y-3
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "
              >

                <div className="
                  w-20
                  h-20
                  rounded-2xl
                  bg-red-100
                  dark:bg-red-600/20
                  flex
                  items-center
                  justify-center
                  group-hover:bg-red-600
                  transition
                ">

                  <Icon className="text-4xl text-red-600 group-hover:text-white transition" />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-black dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">
                  {item.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}