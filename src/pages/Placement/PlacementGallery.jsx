import { useState } from "react";
import placementGallery from "./placementGalleryData";
import { Link } from "react-router-dom";

const tabs = [
  {
    id: "campus",
    label: "Campus Drive",
  },
  {
    id: "workshop",
    label: "Workshops",
  },
  {
    id: "internship",
    label: "Internships",
  },
  {
    id: "recruiters",
    label: "Recruiters",
  },
];

export default function PlacementGallery() {
  const [activeTab, setActiveTab] = useState("campus");

  return (
    <section className="py-24 bg-white dark:bg-black transition-colors duration-300">

      <div className="container mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="uppercase tracking-[4px] text-red-600 font-semibold">
            Placement Gallery
          </span>

          <h2 className="text-5xl font-black mt-4 text-black dark:text-white transition-colors">
            Explore Our Placement Activities
          </h2>

          <p className="text-black/70 dark:text-white/80 mt-5 max-w-3xl mx-auto transition-colors">
            Discover campus drives, workshops, internships and recruiter
            interactions that prepare our students for successful careers.
          </p>

        </div>

        {/* Tabs */}

        <div className="flex flex-wrap justify-center gap-4 mb-14">

          {tabs.map((tab) => (

            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
             className={`
px-8
py-3
rounded-full
font-semibold
transition-all
duration-300

${
activeTab === tab.id
? "bg-red-600 text-white shadow-lg"
: "bg-white dark:bg-[#111111] text-black dark:text-white border border-red-200 dark:border-red-600/40 hover:bg-red-600 hover:text-white"
}
`}
            >
              {tab.label}
            </button>

          ))}

        </div>

        {/* Cards */}
{/* Gallery */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

  {placementGallery[activeTab].map((item) => (

    <div
      key={item.id}
    className="
group
relative
overflow-hidden
rounded-[28px]
bg-white
dark:bg-[#111111]
border
border-red-100
dark:border-red-600/30
shadow-lg
hover:shadow-[0_15px_40px_rgba(234,31,40,0.25)]
transition-all
duration-500
hover:-translate-y-3
"
    >

      {/* Image */}

      <div className="relative overflow-hidden h-72">

        <img
          src={item.image}
          alt={item.title}
          className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />

        {/* Overlay */}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
from-black/90
via-black/40
to-transparent
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
          "
        ></div>

        {/* Badge */}

        <span
          className="
          absolute
          top-5
          left-5
          bg-red-600
          text-white
          text-xs
          uppercase
          tracking-wider
          px-4
          py-2
          rounded-full
          shadow-lg
          "
        >
          {tabs.find((tab) => tab.id === activeTab)?.label}
        </span>

        {/* Button */}

        <div
          className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          opacity-0
          translate-y-8
          group-hover:translate-y-0
          group-hover:opacity-100
          transition-all
          duration-500
          "
        >
         <Link
  to={item.link}
 className="
inline-flex
items-center
gap-2
bg-white
text-red-600
px-6
py-3
rounded-full
font-semibold
border
border-red-600
hover:bg-red-600
hover:text-white
transition-all
duration-300
"
>
  View Gallery
</Link>
        </div>

      </div>

      {/* Content */}

      <div className="p-7">

        <h3
          className="
text-2xl
font-bold
mb-3
text-black
dark:text-white
transition-colors
duration-300
group-hover:text-red-600
"
        >
          {item.title}
        </h3>

        <p className="text-black/70 dark:text-white/75 leading-7 transition-colors">

          {item.description}

        </p>

      </div>

    </div>

  ))}

</div>

      </div>

    </section>
  );
}