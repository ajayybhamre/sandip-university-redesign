import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  GraduationCap,
  Building2,
  Globe2,
} from "lucide-react";

const stories = [
  {
    name: "Priya Sharma",
    course: "B.Tech – Computer Engineering",
    image: "/images/students/priya.jpg",
    quote:
      "Sandip University gave me the confidence and platform to chase my dreams.",
  },
  {
    name: "Rahul Patil",
    course: "MBA – Business Analytics",
    image: "/images/students/rahul.jpg",
    quote:
      "The industry exposure and faculty support here are truly exceptional.",
  },
  {
    name: "Sneha More",
    course: "B.Sc – Biotechnology",
    image: "/images/students/sneha.jpg",
    quote:
      "It's not just a university, it's a family that supports your growth.",
  },
];

const stats = [
  {
    icon: GraduationCap,
    title: "100%",
    text: "Placement Support",
  },
  {
    icon: Building2,
    title: "Top",
    text: "In West India",
  },
  {
    icon: Globe2,
    title: "Global",
    text: "Opportunities",
  },
];

export default function SuccessStories() {
  const [activeSlide, setActiveSlide] = useState(0);

  const previousSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? stories.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((prev) =>
      prev === stories.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        dark:bg-[#071a2b]
        transition-colors
        duration-500
      "
    >

      {/* =========================================================
          SUCCESS STORIES
      ========================================================= */}

      <section
        className="
          relative
          overflow-hidden
          py-14
          sm:py-16
          lg:py-20
          bg-[#f8fbff]
          dark:bg-[#081d30]
        "
      >

        {/* Background curved shape */}
        <div
          className="
            pointer-events-none
            absolute
            left-[-15%]
            bottom-[-180px]
            h-[360px]
            w-[75%]
            rounded-[50%]
            bg-[#edf7ff]
            dark:bg-[#0c2a40]
            transition-colors
            duration-500
          "
        />

        {/* Right soft shape */}
        <div
          className="
            pointer-events-none
            absolute
            right-[-15%]
            top-[25%]
            h-[300px]
            w-[45%]
            rounded-full
            bg-[#f0f8ff]
            dark:bg-[#0b2539]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-[1250px]
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[0.9fr_2fr]
              gap-10
              lg:gap-12
              items-center
            "
          >

            {/* =====================================================
                LEFT CONTENT
            ===================================================== */}

            <div
              className="
                text-center
                lg:text-left
              "
            >

              {/* Label */}
              <div
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-red-200
                  dark:border-red-400/30
                  bg-white
                  dark:bg-white/5
                  px-3
                  py-1
                  text-[9px]
                  sm:text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-red-500
                "
              >
                Our Achievers
              </div>

              {/* Heading */}
              <h2
                className="
                  mt-4
                  text-[30px]
                  leading-[1.05]
                  font-extrabold
                  tracking-tight
                  text-[#123b61]
                  dark:text-white

                  sm:text-[36px]

                  lg:text-[40px]
                "
              >
                Where Our Students
                <br />

                Create{" "}

                <span className="text-red-500">
                  Success Stories
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mx-auto
                  mt-4
                  max-w-[390px]
                  text-sm
                  leading-6
                  text-slate-600
                  dark:text-slate-300

                  lg:mx-0
                "
              >
                From academic excellence to global careers,
                our students are making a difference in the world.
              </p>

              {/* Button */}
              <button
                className="
                  group
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-red-500
                  bg-white
                  dark:bg-transparent
                  px-5
                  py-2.5
                  text-xs
                  sm:text-sm
                  font-semibold
                  text-red-500
                  transition-all
                  duration-300
                  hover:bg-red-500
                  hover:text-white
                "
              >
                Read More Stories

                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

            </div>


            {/* =====================================================
                RIGHT STUDENT CARDS
            ===================================================== */}

            <div className="relative">

              {/* Left arrow */}
              <button
                onClick={previousSlide}
                aria-label="Previous student story"
                className="
                  absolute
                  left-0
                  top-1/2
                  z-20
                  flex
                  h-8
                  w-8
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-600
                  shadow-md
                  transition
                  hover:scale-110
                  hover:text-red-500

                  dark:border-white/10
                  dark:bg-[#102c43]
                  dark:text-white
                "
              >
                <ChevronLeft size={16} />
              </button>


              {/* Cards */}
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-3
                  gap-4
                "
              >

                {stories.map((story, index) => (
                  <article
                    key={story.name}
                    className="
                      group
                      overflow-hidden
                      rounded-xl
                      border
                      border-slate-100
                      bg-white
                      p-3
                      shadow-[0_8px_25px_rgba(15,60,100,0.07)]
                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:shadow-[0_15px_35px_rgba(15,60,100,0.13)]

                      dark:border-white/10
                      dark:bg-[#102c43]
                      dark:shadow-black/20
                    "
                  >

                    {/* Student image */}
                    <div
                      className="
                        relative
                        overflow-hidden
                        rounded-lg
                        aspect-[1.35/0.85]
                      "
                    >
                      <img
                        src={story.image}
                        alt={story.name}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />
                    </div>


                    {/* Quote */}
                    <p
                      className="
                        mt-3
                        min-h-[65px]
                        text-[10px]
                        leading-[1.55]
                        text-slate-600
                        dark:text-slate-300
                      "
                    >
                      "{story.quote}"
                    </p>


                    {/* Student name */}
                    <h3
                      className="
                        mt-2
                        text-[11px]
                        font-bold
                        text-[#123b61]
                        dark:text-white
                      "
                    >
                      {story.name}
                    </h3>


                    {/* Course */}
                    <p
                      className="
                        mt-1
                        text-[9px]
                        text-slate-400
                        dark:text-slate-400
                      "
                    >
                      {story.course}
                    </p>

                  </article>
                ))}

              </div>


              {/* Right arrow */}
              <button
                onClick={nextSlide}
                aria-label="Next student story"
                className="
                  absolute
                  right-0
                  top-1/2
                  z-20
                  flex
                  h-8
                  w-8
                  translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  text-slate-600
                  shadow-md
                  transition
                  hover:scale-110
                  hover:text-red-500

                  dark:border-white/10
                  dark:bg-[#102c43]
                  dark:text-white
                "
              >
                <ChevronRight size={16} />
              </button>

            </div>

          </div>


          {/* =====================================================
              SLIDER DOTS
          ===================================================== */}

          <div
            className="
              mt-8
              flex
              justify-center
              gap-2
            "
          >
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to story ${index + 1}`}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300

                  ${
                    activeSlide === index
                      ? "w-2 bg-red-500"
                      : "w-2 bg-slate-300 dark:bg-slate-600"
                  }
                `}
              />
            ))}

            {/* Extra dots to match design */}
            <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
            <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600" />
          </div>

        </div>
      </section>


      {/* =========================================================
          CTA BANNER
      ========================================================= */}

      <section
        className="
          px-4
          pb-14
          sm:px-6
          sm:pb-16
          lg:px-10
          lg:pb-20
          bg-[#f8fbff]
          dark:bg-[#081d30]
        "
      >

        <div
          className="
            relative
            mx-auto
            max-w-[1200px]
            overflow-hidden
            rounded-2xl
            sm:rounded-[22px]
            min-h-[270px]
            sm:min-h-[300px]
            lg:min-h-[300px]
          "
        >

          {/* Campus background */}
          <img
            src="/images/campus/campus-banner.jpg"
            alt="Sandip University campus"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />


          {/* Light gradient */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-white
              via-white/90
              via-45%
              to-transparent

              dark:from-[#071a2b]
              dark:via-[#071a2b]/90
              dark:to-[#071a2b]/10
            "
          />


          {/* Red/yellow subtle overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-transparent
              via-transparent
              to-[#103a5d]/10
              dark:to-[#000]/20
            "
          />


          {/* Content */}
          <div
            className="
              relative
              z-10
              flex
              min-h-[270px]
              sm:min-h-[300px]
              flex-col
              justify-center
              px-6
              py-8

              sm:px-10

              lg:px-12
            "
          >

            {/* Label */}
            <div
              className="
                inline-flex
                w-fit
                rounded-full
                bg-white/90
                px-3
                py-1
                text-[9px]
                font-bold
                uppercase
                tracking-[0.12em]
                text-red-500
                shadow-sm

                dark:bg-white/10
                dark:text-red-400
              "
            >
              Join Our Community
            </div>


            {/* Heading */}
            <h2
              className="
                mt-3
                max-w-[380px]
                text-[28px]
                font-extrabold
                leading-[1]
                text-[#123b61]

                sm:text-[34px]

                lg:text-[38px]

                dark:text-white
              "
            >
              Be a Part of
              <br />

              Something{" "}

              <span className="text-red-500">
                Bigger
              </span>
            </h2>


            {/* Description */}
            <p
              className="
                mt-3
                max-w-[400px]
                text-xs
                leading-5
                text-slate-600

                sm:text-sm

                dark:text-slate-300
              "
            >
              Your future starts here. Take the first step towards
              your dream career with Sandip University.
            </p>


            {/* Buttons */}
            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-3
              "
            >

              {/* Apply */}
              <button
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-red-500
                  px-5
                  py-2.5
                  text-xs
                  font-bold
                  text-white
                  shadow-md
                  transition-all
                  duration-300
                  hover:bg-red-600
                  hover:shadow-lg
                "
              >
                Apply Now

                <ArrowRight
                  size={14}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>


              {/* Contact */}
              <button
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#123b61]
                  bg-white/70
                  px-5
                  py-2.5
                  text-xs
                  font-semibold
                  text-[#123b61]
                  backdrop-blur-sm
                  transition-all
                  hover:bg-white

                  dark:border-white/40
                  dark:bg-white/10
                  dark:text-white
                  dark:hover:bg-white/20
                "
              >
                Contact Us
              </button>

            </div>

          </div>


          {/* =====================================================
              STATS
          ===================================================== */}

          <div
            className="
              absolute
              bottom-4
              right-4
              z-20
              hidden

              sm:flex
              sm:w-[52%]

              lg:right-8
              lg:w-[48%]
            "
          >

            <div
              className="
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                bg-[#103a5d]/95
                px-5
                py-4
                text-white
                shadow-xl
                backdrop-blur-md

                dark:bg-[#061728]/95
              "
            >

              {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                  <React.Fragment key={stat.title}>

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        lg:gap-3
                      "
                    >

                      <Icon
                        size={22}
                        strokeWidth={1.7}
                        className="shrink-0"
                      />

                      <div>
                        <p
                          className="
                            text-sm
                            font-bold
                            leading-none
                          "
                        >
                          {stat.title}
                        </p>

                        <p
                          className="
                            mt-1
                            text-[9px]
                            text-white/70
                            whitespace-nowrap
                          "
                        >
                          {stat.text}
                        </p>
                      </div>

                    </div>

                    {index !== stats.length - 1 && (
                      <div className="h-9 w-px bg-white/20" />
                    )}

                  </React.Fragment>
                );
              })}

            </div>

          </div>

        </div>

      </section>

    </section>
  );
}