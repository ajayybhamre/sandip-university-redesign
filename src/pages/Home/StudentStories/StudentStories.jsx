import students from "./studentData";

import { HiOutlineArrowRight } from "react-icons/hi2";
import events from "./eventData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function StudentSuccessStories() {
  const cardsPerPage = 4;

const [currentPage, setCurrentPage] = useState(0);

const totalPages = Math.ceil(students.length / cardsPerPage);

const 

currentStudents = students.slice(
  currentPage * cardsPerPage,
  currentPage * cardsPerPage + cardsPerPage
);
  return (
    <section
      className="
relative py-34 
bg-gradient-to-br bg-[linear-gradient(to_right,#dc2626_50%,#000000_50%)]
text-white
" id="scholarships"
    >
<div class="absolute top-0 left-0 w-full h-20 bg-white dark:bg-black rounded-b-[100px]"></div>
        
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* LEFT STICKY CONTENT */}

          <div
            className="
lg:sticky
lg:top-24
h-fit
"
          >
            <p
              className="
uppercase 
tracking-[5px]
text-black-300
text-sm
"
            >
              Student Achievements
            </p>

           <h2
className="
text-3xl
sm:text-4xl
lg:text-5xl
font-bold
mt-5
leading-tight
"
>
              Where Our 
               <span className="text-black"> Students </span>
              Create Success Stories
            </h2>

            <p
              className="
mt-6
text-gray-300
text-base
lg:text-lg
max-w-xl
"
            >
              From global placements to international universities and startup
              ventures, our students are creating impact worldwide.
            </p>

            {/* UPCOMING EVENTS */}

            <div
              className="
mt-8
lg:mt-10
bg-white
rounded-2xl
p-4
sm:p-5
text-gray-800
shadow-lg
"
            >
              <div
                className="
flex
justify-between
items-center
mb-5
"
              >
                <h3
                  className="
text-black-900
font-bold
text-lg
"
                >
                  UPCOMING EVENTS
                </h3>

       <button
className="
text-xs
sm:text-sm
text-black-700
font-semibold
"
>
                  View All →
                </button>
              </div>

              <div className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="
flex
gap-4
items-center
border-b
pb-4
last:border-none
"
                  >
                    {/* DATE BOX */}

                    <div
                      className="
w-14
h-14
rounded-lg
bg-black-50
flex
flex-col
items-center
justify-center
shrink-0
"
                    >
                      <h4
                        className="
text-xl
font-bold
text-black-700
"
                      >
                        {event.date}
                      </h4>

                      <span
                        className="
text-xs
text-gray-500
"
                      >
                        {event.month}
                      </span>
                    </div>

                    {/* CONTENT */}

                    <div>
                      <h4
                        className="
font-semibold
text-sm
"
                      >
                        {event.title}
                      </h4>

                      <p
                        className="
text-xs
text-gray-500
mt-1
"
                      >
                        {event.category}
                      </p>

                      <p
                        className="
text-xs
text-gray-400
"
                      >
                        {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
             
className="
mt-8
lg:mt-10
w-full
sm:w-fit
flex
justify-center
items-center
gap-3
bg-red-600
text-white
px-6
py-3
rounded-full
font-semibold

"
            >
              Explore Stories
              <HiOutlineArrowRight />
            </button>
          </div>

{/* RIGHT SCROLL CARDS */}
<div>
  <div className="space-y-8">
    {currentStudents.map((student, index) => (
      <div
        key={index}
        className="
        bg-white
        text-gray-800
        rounded-3xl
        p-5
        sm:p-6
        shadow-xl
        flex
        flex-col
        md:flex-row
        lg:flex-row
        justify-between
        items-center
        gap-8
        sticky
        flex-wrap
        lg:top-20
        "
      >
        {/* LEFT */}
        <img
          src={student.image}
          alt={student.name}
          className="
          w-42
          h-60
          rounded-2xl
          object-cover
          shadow-lg
          "
        />

        {/* CENTER */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
            {student.category}
          </span>

          <h3 className="text-2xl font-bold mt-4">
            {student.name}
          </h3>

          <p className="text-gray-500 mt-2">
            {student.course}
          </p>

          <p className="text-blue-600 font-semibold mt-2">
            {student.achievement}
          </p>

          <p className="text-gray-600 mt-5 leading-7 max-w-md">
            {student.description}
          </p>

          <button
            className="
            mt-6
            bg-[#081b3a]
            text-white
            px-5
            py-2.5
            rounded-full
            text-sm
            hover:bg-blue-700
            transition
            "
          >
            View Story →
          </button>
        </div>

        {/* RIGHT */}
        <div
          className="
          bg-gray-50
          rounded-2xl
          p-6
          text-center
          w-full
          max-w-[220px]
          shadow-md
          "
        >
          <img
            src={student.logo}
            alt={student.company}
            className="h-12 object-contain mx-auto"
          />

          <h3 className="text-3xl font-bold text-green-600 mt-6">
            {student.package}
          </h3>

          <p className="text-gray-500 mt-2 text-sm">
            {student.company}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Pagination Dots */}
  {totalPages > 1 && (
    <div className="flex justify-center mt-10 gap-3">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentPage === index
              ? "bg-white scale-125"
              : "bg-white/40 hover:bg-white/70"
          }`}
        />
      ))}
    </div>
  )}
</div>
        </div>
      </div>
    </section>
  );
}
