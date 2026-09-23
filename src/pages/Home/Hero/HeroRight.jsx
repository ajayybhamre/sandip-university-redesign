

function HeroRight({ gallery, activeIndex, swiperRef }) {
  return (
    <div className="hidden lg:flex flex-col gap-3.5 w-[340px]">
      {gallery.map((item, index) => (
        <div
          key={index}
          onClick={() => swiperRef.current.slideTo(index)}
          className={`cursor-pointer flex items-center p-2.5 rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
            activeIndex === index
              ? "bg-white/20 border-[#C8102E] shadow-xl shadow-red-600/20 scale-[1.03]"
              : "bg-white/10 border-white/15 hover:bg-white/20 hover:border-white/30"
          }`}
        >
          {/* Image */}
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-24 h-24 object-cover rounded-xl shadow-md"
          />

          {/* Content */}
          <div className="px-4 flex-1">
            <h3 className="text-white font-bold text-base mb-1">
              {item.title}
            </h3>
            <p className="text-red-400 text-xs font-semibold flex items-center gap-1">
              <span>Explore</span>
              <span>→</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroRight;