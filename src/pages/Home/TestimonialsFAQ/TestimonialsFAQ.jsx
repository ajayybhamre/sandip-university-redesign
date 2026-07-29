import ReviewSlider from "./ReviewSlider";
import FAQ from "./FAQ";
import BackgroundAnimation from "./BackgroundAnimation";
// import useTestimonialsAnimation from "../../hooks/useTestimonialsAnimation";

export default function TestimonialsFAQ() {
    // useTestimonialsAnimation();
  return (
    
<section
  className="
    testimonial-section
    relative
    overflow-hidden
    py-16
    md:py-24
    bg-[radial-gradient(circle_at_top_left,#fee2e2_0%,#ffffff_40%,#eff6ff_100%)]
dark:bg-[radial-gradient(circle_at_top_left,#1f2937_0%,#111827_45%,#030712_100%)]
    transition-colors
    duration-300
  "
>
    
    <BackgroundAnimation />
     <div
className="
testimonial-content
relative
z-10
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
"
>

        {/* Heading */}

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >

          <span className="uppercase tracking-[4px] text-red-600 font-semibold">
            Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-4 leading-tight transition-colors">
            What Our Students Say
          </h2>

         <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-300 max-w-2xl mx-auto px-2 transition-colors">
            Discover how our students transformed their careers through
            quality education, practical learning, and industry exposure.
          </p>

        </div>

        {/* Content */}

        <div
className="
grid
grid-cols-1
lg:grid-cols-2
gap-10
lg:gap-14
items-start
"
>

          {/* LEFT */}

    <div
  className="space-y-6 lg:space-y-8"
  data-aos="fade-right"
  data-aos-duration="1000"
>
  {/* Review Slider */}
  <ReviewSlider />

  {/* Latest News */}
<div className="
bg-[#081b3a]
dark:bg-gray-800
rounded-3xl
p-5
sm:p-6
text-white
shadow-xl
border
border-transparent
dark:border-gray-700
transition-colors
">

    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
      <div>
        <p className="uppercase tracking-[3px] text-red-400 text-xs font-semibold">
          Latest News
        </p>

       <h3 className="text-2xl sm:text-3xl font-bold mt-3 text-gray-900 dark:text-white transition-colors">
          Campus Highlights
        </h3>
      </div>

      <button className="text-sm font-medium hover:text-red-400 transition">
        View All →
      </button>
    </div>

    <div className="space-y-5">

      {/* News 1 */}
      <div className="flex gap-4 group cursor-pointer">

        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-red-600 flex flex-col items-center justify-center shrink-0">
          <span className="text-lg sm:text-xl font-bold">15</span>
          <span className="text-xs uppercase">Jul</span>
        </div>

        <div>
          <h4 className="font-semibold group-hover:text-red-400 transition">
            AI & Robotics Innovation Lab inaugurated
          </h4>

         <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mt-3 transition-colors">
            Students now have access to advanced AI research facilities.
          </p>
        </div>

      </div>

      <div className="border-t border-white/10"></div>

      {/* News 2 */}

      <div className="flex gap-4 group cursor-pointer">

        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-blue-600 flex flex-col items-center justify-center shrink-0">
          <span className="text-lg sm:text-xl font-bold">20</span>
          <span className="text-xs uppercase">Jul</span>
        </div>

        <div>
          <h4 className="font-semibold group-hover:text-blue-300 transition">
            International Research Summit 2026
          </h4>

          <p className="text-sm text-gray-300 mt-1">
            Experts from 15+ countries will participate in the summit.
          </p>
        </div>

      </div>

      <div className="border-t border-white/10"></div>

      {/* News 3 */}

      <div className="flex gap-4 group cursor-pointer">

        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-green-600 flex flex-col items-center justify-center shrink-0">
          <span className="text-lg sm:text-xl font-bold">28</span>
          <span className="text-xs uppercase">Jul</span>
        </div>

        <div>
          <h4 className="
font-semibold
text-sm
sm:text-base
group-hover:text-red-400
transition
">
            1000+ Placement Offers Achieved
          </h4>

          <p className="text-xs sm:text-sm text-gray-300 mt-1">
            Leading recruiters visited the campus during placement week.
          </p>
        </div>

      </div>

    </div>

  </div>

</div>
          {/* RIGHT */}

          <div
className="mt-8 lg:mt-0"
data-aos="fade-left"
            data-aos-duration="1000"
          >

            <div className="mb-8">

              <span className="uppercase tracking-[3px] text-red-600 font-semibold">
                FAQ
              </span>

            <h3 className="text-2xl sm:text-3xl font-bold mt-3 text-gray-900 dark:text-white transition-colors">
                Frequently Asked Questions
              </h3>

            <p className="text-sm sm:text-base text-gray-500 mt-3 dark:text-white transition-colors">
                Everything you need to know before taking admission.
              </p>

            </div>

            <FAQ />

          </div>

        </div>

      </div>
    </section>
  );
}