import { Link } from "react-router-dom";
import { HiOutlineSparkles } from "react-icons/hi2";

import "./recruiters.css";

import topRecruiters from "./data/topRecruiters";

const TopRecruitersSlider = () => (
  <div>

    <div className="
      flex
      items-center
      gap-3
      mb-6
    ">

      <div className="
        w-10
        h-10
        rounded-full
        bg-red-50
        dark:bg-red-900/30
        flex
        items-center
        justify-center
        shrink-0
      ">
        <HiOutlineSparkles className="text-red-600 w-5 h-5" />
      </div>

      <h4 className="
        font-bold
        text-lg
        text-gray-900
        dark:text-white
      ">
        Top Recruiters & Placements
      </h4>

    </div>

    <div className="relative about-recruiter-slider">

      {/* Left Fade */}
      <div className="
        absolute
        left-0
        top-0
        w-16
        md:w-28
        h-full
        bg-gradient-to-r
        from-white
        dark:from-black
        to-transparent
        z-10
      " />

      {/* Right Fade */}
      <div className="
        absolute
        right-0
        top-0
        w-16
        md:w-28
        h-full
        bg-gradient-to-l
        from-white
        dark:from-black
        to-transparent
        z-10
      " />

      <div className="about-recruiter-track">

        {
          [...topRecruiters, ...topRecruiters].map((company, index) => (

            <div
              key={`${company.name}-${index}`}
              className="
                w-36
                h-24
                md:w-40
                md:h-28
                mx-3
                shrink-0
                bg-white
                border
                border-gray-100
                dark:border-slate-700
                rounded-2xl
                shadow-md
                flex
                items-center
                justify-center
                p-4
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:shadow-xl
                hover:border-red-200
              "
            >

              <img
                src={company.logo}
                alt={company.name}
                title={company.name}
                loading="lazy"
                className="
                  max-h-10
                  md:max-h-12
                  max-w-full
                  object-contain
                "
              />

            </div>

          ))
        }

      </div>

    </div>

    <p className="
      mt-5
      text-sm
      text-gray-500
      dark:text-gray-400
      text-center
    ">
      See the full recruiter list and placement statistics on the{" "}
      <Link
        to="/placement"
        className="
          text-red-600
          font-semibold
          hover:underline
        "
      >
        Placements
      </Link>{" "}
      page.
    </p>

  </div>
);

export default TopRecruitersSlider;
