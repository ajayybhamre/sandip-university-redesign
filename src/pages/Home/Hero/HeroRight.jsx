

function HeroRight({   gallery,activeIndex,swiperRef}) {
  return (
    <div className="hidden lg:flex flex-col gap-4 w-[340px]">

  {gallery.map((item, index) => (

<div
    key={index}
onClick={() => swiperRef.current.slideTo(index)}
    className={`cursor-pointer flex items-center rounded-xl overflow-hidden transition-all duration-300

    ${
        activeIndex===index
        ? "bg-white/30 scale-105 border-2 border-red-400"
        : "bg-white/10 hover:bg-white/20"
    }
`}
>

          {/* Image */}

    <img
  src={item.thumbnail}
  alt={item.title}
  className="w-42 h-42 object-cover rounded-lg"
/>
          {/* Content */}

        <div className="px-4">

<h3 className="text-white font-bold">
    {item.title}
</h3>

<p className="text-white/80 text-sm">
    Explore →
</p>

</div>

        </div>

      ))}

    </div>
  );
}

export default HeroRight;