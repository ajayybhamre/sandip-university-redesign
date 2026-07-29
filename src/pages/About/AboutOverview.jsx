

import {
  FaLeaf,
  FaSpa,
  FaHandsHelping,

  FaArrowRight,
} from "react-icons/fa";

import healingImg from "../../assets/images/slider1.jpg";

const steps = [
  {
    icon: <FaLeaf />,
    title: "Discover Yourself",
    desc: "Begin with a peaceful consultation to understand your emotional and physical well-being.",
  },
  {
    icon: <FaSpa />,
    title: "Personal Healing",
    desc: "Experience therapies thoughtfully designed to restore balance and inner peace.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Reconnect",
    desc: "Reconnect with your body, mind and soul through holistic wellness practices.",
  },
 
];

export default function AboutOverview() {

  return (
    <section
      id="about"
      className="relative overflow-hidden py-15 bg-white dark:bg-black transition-colors duration-300"  data-aos="fade-up"
    >
      {/* Background Blur */}

     

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[5px] text-red font-semibold">
            About Our Philosophy
          </p>

         <h2 className="mt-6 text-5xl md:text-6xl font-serif text-[#2B241F] dark:text-white leading-tight transition-colors">

            Healing Begins
           

            <span className="italic text-red">
              From Within
            </span>

          </h2>

          <p className="mt-8 text-gray-600 dark:text-gray-300 leading-8 text-lg transition-colors">
            We believe true healing happens when mind, body and soul
            are nurtured together through compassion, mindfulness
            and natural therapies.
          </p>

        </div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

          {/* Left Image */}

          <div className="relative">

            <img
              src={healingImg}
              alt=""
              className="rounded-[40px] w-full h-[650px] object-cover shadow-2xl"
            />

            {/* Floating Quote */}

           <div className="absolute -bottom-10 left-8 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl max-w-xs transition-colors">

             <p className="italic text-gray-600 dark:text-gray-300 leading-7 transition-colors">

                “Every journey begins with a single step toward
                yourself.”

              </p>

            </div>

          </div>

          {/* Right Timeline */}

          <div className="relative">

            {/* Vertical Line */}

           <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-600 transition-colors"></div>

            <div className="space-y-12">

              {steps.map((step, index) => (

                <div
                  key={index}
                  className="relative pl-20 group"
                >

                  {/* Circle */}

                  <div
                    className="
                    absolute
                    left-0
                    top-2
                    w-12
                    h-12
                    rounded-full
                    bg-[#ea1f28]
                    text-white
                    flex
                    items-center
                    justify-center
                    text-xl
                    transition
                    duration-500
                    group-hover:scale-110
                    "
                  >
                    {step.icon}
                  </div>

                 <div
  className="
    bg-white
    dark:bg-gray-800
    rounded-3xl
    p-8
    shadow-lg
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-2xl
  "
>

                   <h3 className="text-2xl font-serif text-[#2B241F] dark:text-white transition-colors">

                      {step.title}

                    </h3>

                   <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7 transition-colors">

                      {step.desc}

                    </p>

                  </div>

                </div>

              ))}

            </div>

            <button
             className="
mt-14
ml-14
flex
items-center
gap-3
bg-[#2B241F]
dark:bg-red-600
text-white
px-8
py-4
rounded-full
hover:bg-[#ea1f28]
transition-all
duration-300
"
            >

              Start Your Journey

              <FaArrowRight />

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}