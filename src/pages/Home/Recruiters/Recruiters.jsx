import recruiters from "./recruiterData";
import "./recruiter.css";

export default function Recruiters() {
  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-red-600 font-semibold uppercase tracking-[4px]">
            Trusted Recruiters
          </span>

         <h2 className="text-4xl font-bold mt-4 text-[#0B2346] dark:text-white transition-colors">
            Our Students Work With
          </h2>

          <p className="text-gray-500 dark:text-gray-300 mt-5 max-w-2xl mx-auto transition-colors">
            Leading national and global companies recruit Sandip University graduates every year.
          </p>

        </div>

      </div>

      <div className="relative mt-16 recruiter-slider">

        {/* Left Fade */}
       <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
        {/* Right Fade */}
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>
        <div className="recruiter-track">

          {[...recruiters, ...recruiters].map((logo, index) => (

            <div
              key={index}
             className="
w-56
h-36
mx-4
bg-white
dark:bg-white
border
border-gray-100
dark:border-gray-700
rounded-3xl
shadow-md
flex
items-center
justify-center
transition-all
duration-500
hover:-translate-y-3
hover:shadow-2xl
"
            >

              <img
                src={logo}
                alt=""
              className="
h-16
object-contain
grayscale
opacity-70
dark:opacity-90
transition-all
duration-500
hover:grayscale-0
hover:opacity-100
"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}