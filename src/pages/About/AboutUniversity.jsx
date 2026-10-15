import aboutImg from "../../assets/images/slider2.webp";

export default function AboutUniversity() {
  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="relative">

            <img
              src={aboutImg}
              alt="About University"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />

            <div className="absolute bottom-8 left-8 bg-black dark:bg-red-600 text-white rounded-2xl px-8 py-6 shadow-xl">

              <h3 className="text-4xl font-bold text-red-500 dark:text-white">
                25+
              </h3>

              <p className="text-gray-200 mt-2">
                Years of Academic Excellence
              </p>

            </div>

          </div>

          {/* Content */}
          <div>

            <span className="inline-block bg-red-100 dark:bg-red-600 dark:text-white text-red-600 px-5 py-2 rounded-full font-semibold mb-5">
              ABOUT SANDIP UNIVERSITY
            </span>

            <h2 className="text-5xl font-bold text-black dark:text-white leading-tight mb-8">
              Transforming Education Through
              <span className="text-red-600">
                {" "}
                Innovation & Excellence
              </span>
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mb-6">
              Sandip University is committed to nurturing future-ready
              professionals through quality education, cutting-edge
              infrastructure, industry collaborations, and research-driven
              learning. Our student-centric ecosystem empowers learners with
              technical expertise, leadership qualities, and global
              perspectives.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-8 mb-10">
              With experienced faculty, world-class laboratories, innovation
              centers, and vibrant campus life, the university offers a
              holistic educational experience that inspires creativity,
              entrepreneurship, and lifelong learning.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">

              <div className="
                border
                border-gray-200
                dark:border-red-600/40
                rounded-2xl
                p-6
                bg-white
                dark:bg-[#111111]
                hover:shadow-xl
                transition-all
                duration-300
              ">

                <h4 className="text-xl font-semibold mb-3 text-black dark:text-white">
                  Industry Collaboration
                </h4>

                <p className="text-gray-600 dark:text-gray-300">
                  Partnerships with leading industries for internships,
                  live projects and placements.
                </p>

              </div>

              <div className="
                border
                border-gray-200
                dark:border-red-600/40
                rounded-2xl
                p-6
                bg-white
                dark:bg-[#111111]
                hover:shadow-xl
                transition-all
                duration-300
              ">

                <h4 className="text-xl font-semibold mb-3 text-black dark:text-white">
                  Research & Innovation
                </h4>

                <p className="text-gray-600 dark:text-gray-300">
                  Encouraging innovation through research labs,
                  incubation and entrepreneurship.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}