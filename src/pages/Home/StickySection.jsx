import bgImage from "../../assets/images/slider1.jpg";

export default function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "Academic Excellence",
      description:
        "Industry-oriented curriculum designed with experienced faculty members and modern teaching methodologies.",
    },
    {
      number: "02",
      title: "World-Class Infrastructure",
      description:
        "Smart classrooms, advanced laboratories, digital library, hostels, sports complex, and innovation center.",
    },
    {
      number: "03",
      title: "Excellent Placements",
      description:
        "Top recruiters, internships, career guidance, and skill development for successful careers.",
    },
    {
      number: "04",
      title: "Research & Innovation",
      description:
        "Promoting innovation, entrepreneurship, patents, funded projects, and interdisciplinary research.",
    },
  ];

  return (
<section
  className="relative overflow-hidden rounded-b-[80px] bg-fixed bg-center bg-cover"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>
      {/* Dark Overlay */}
     <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 py-28">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center text-white mb-20">

            <p className="uppercase tracking-[6px] text-white-400">
              WHY CHOOSE US
            </p>

            <h2 className="text-5xl font-bold mt-5">
              Shape Your Future With Us
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-gray-200">
              Discover an inspiring learning environment that empowers students
              through innovation, research, industry exposure, and global
              opportunities.
            </p>

          </div>

          {/* Cards */}

        {/* Cards */}

<div className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-4 
  gap-5 
  md:gap-8
">

  {features.map((item) => (

    <div
      key={item.number}
      className="
        bg-white/10 
        backdrop-blur-lg 
        border 
        border-white/20 
        rounded-2xl 
        p-5 
        sm:p-6 
        lg:p-8
        hover:bg-white/20 
        transition-all 
        duration-500
        flex
        flex-col
        h-full
      "
    >

      {/* Number */}
      <span 
        className="
          text-5xl 
          sm:text-6xl 
          font-bold 
          text-white
          opacity-90
        "
      >
        {item.number}
      </span>


      {/* Title */}
      <h3 
        className="
          text-xl 
          sm:text-2xl 
          font-bold 
          text-white 
          mt-3
        "
      >
        {item.title}
      </h3>


      {/* Description */}
      <p 
        className="
          text-sm 
          sm:text-base 
          text-gray-200 
          mt-4 
          leading-6 
          sm:leading-7
          flex-grow
        "
      >
        {item.description}
      </p>


      {/* Button */}
      <button 
        className="
          mt-6
          w-full
          sm:w-fit
          px-5 
          py-2.5
          rounded-full 
          bg-red-600 
          text-white
          font-semibold 
          text-sm
          sm:text-base
          hover:bg-white 
          transition
        "
      >
        Learn More
      </button>

    </div>

  ))}

</div>

        </div>
      </div>
    </section>
  );
}