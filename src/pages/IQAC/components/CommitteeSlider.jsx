import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CommitteeSlider({ committees, selectedId, onSelect }) {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll limits
  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [committees]);

  const handleScroll = (direction) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Scroll active tab into view smoothly
  const activeTabRef = useRef(null);
  useEffect(() => {
    if (activeTabRef.current && sliderRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedId]);

  return (
    <div className="relative group w-full py-2">
      {/* Left Navigation Arrow */}
      <button
        type="button"
        onClick={() => handleScroll("left")}
        disabled={!canScrollLeft}
        aria-label="Previous Committees"
        className={`absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-gray-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-gray-700 dark:text-stone-300 flex items-center justify-center shadow-xs transition-all duration-200 ${
          canScrollLeft
            ? "hover:border-[#B32035] hover:text-[#B32035] dark:hover:text-red-400 cursor-pointer opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ChevronLeft size={18} />
      </button>

      {/* Slider Track */}
      <div
        ref={sliderRef}
        onScroll={checkScroll}
        className="flex items-center gap-2.5 overflow-x-auto scroll-smooth no-scrollbar scrollbar-none py-1.5 px-1 touch-pan-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {committees.map((item) => {
          const isSelected = item.id === selectedId;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              ref={isSelected ? activeTabRef : null}
              type="button"
              onClick={() => onSelect(item.id)}
              className={`relative flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg border text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap select-none ${
                isSelected
                  ? "bg-red-50/90 dark:bg-red-950/40 border-[#B32035]/30 dark:border-red-800/50 text-[#B32035] dark:text-red-400 font-semibold shadow-2xs"
                  : "bg-white dark:bg-stone-900 border-gray-200 dark:border-stone-800 text-gray-700 dark:text-stone-300 hover:border-gray-300 dark:hover:border-stone-700 hover:bg-gray-50/80 dark:hover:bg-stone-800/40"
              }`}
            >
              {Icon && (
                <Icon
                  size={15}
                  className={`flex-shrink-0 transition-colors duration-200 ${
                    isSelected
                      ? "text-[#B32035] dark:text-red-400"
                      : "text-gray-400 dark:text-stone-500"
                  }`}
                />
              )}
              <span>{item.shortName || item.name}</span>

              {/* Active Indicator Underline */}
              {isSelected && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#B32035] dark:bg-red-500 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        onClick={() => handleScroll("right")}
        disabled={!canScrollRight}
        aria-label="Next Committees"
        className={`absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border border-gray-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-gray-700 dark:text-stone-300 flex items-center justify-center shadow-xs transition-all duration-200 ${
          canScrollRight
            ? "hover:border-[#B32035] hover:text-[#B32035] dark:hover:text-red-400 cursor-pointer opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
