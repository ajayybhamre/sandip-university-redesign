import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi2";


export default function Breadcrumb({
  badge,
  title,
  description,
  currentPage,
  image,
}) {
  return (
    <section
      className="relative h-[380px] md:h-[450px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081b3a]/90 via-[#081b3a]/75 to-[#081b3a]/60" />

      {/* Decorative Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

     <div className="relative max-w-7xl mx-auto px-6 w-full">

        <span className="bg-red-600 text-white px-5 py-2 rounded-full">
          {badge}
        </span>

        <h1 className="text-5xl font-bold text-white mt-6">
          {title}
        </h1>

        <p className="text-white/80 mt-6 max-w-3xl">
          {description}
        </p>

        <div className="flex items-center mt-8 text-white">

          <Link to="/">Home</Link>

          <HiChevronRight className="mx-2" />

          <span>{currentPage}</span>

        </div>
</div>

      {/* Bottom Curve */}
     {/* Layer 1 */}
{/* Layer 1 */}
<div className="absolute bottom-0 left-0 w-full dark:hidden">
  <svg
    viewBox="0 0 1440 220"
    className="w-full h-36 opacity-20 fill-red-500"
    preserveAspectRatio="none"
  >
    <path d="M0,140C240,220,480,60,720,120C960,180,1200,240,1440,100V220H0Z" />
  </svg>
</div>



{/* Layer 2 */}
<div className="absolute bottom-0 left-0 w-full dark:hidden">
  <svg
    viewBox="0 0 1440 220"
    className="w-full h-32 fill-white"
    preserveAspectRatio="none"
  >
    <path d="M0,120C220,200,480,40,720,120C980,200,1220,220,1440,80V220H0Z" />
  </svg>
</div>
    </section>
  );
}