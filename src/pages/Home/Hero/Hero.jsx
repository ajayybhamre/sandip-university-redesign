import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { TypeAnimation } from "react-type-animation";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";


import heroData from "./heroData";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
// import FindProgram from "./FindProgram";


function Hero() {
    const swiperRef = useRef(null);
const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="relative">

<Swiper
  modules={[Autoplay, EffectFade]}
  effect="fade"
  speed={1000}
  loop={false}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }}
  onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}
  onSlideChange={(swiper) => {
    setActiveIndex(swiper.realIndex);
  }}
>
        {heroData.map((item, index) => (
         <SwiperSlide key={item.title}>
          <div
  className="relative h-[90vh] bg-cover bg-center"
  style={{
    backgroundImage: `url(${item.image})`,
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Hero Content */}
  <div className="absolute inset-0 flex items-center">

    <div className="max-w-[1600px] mx-auto w-full px-6">

      <div className="flex items-center justify-between gap-20">

        {/* Left Side */}
       <div className="w-full lg:w-1/2">
    <HeroLeft item={item} />
</div>

        {/* Right Side */}
      <div className="hidden lg:flex justify-end w-full">
    <HeroRight
        gallery={heroData}
        activeIndex={activeIndex}
        swiperRef={swiperRef}
    />
</div>

      </div>

    </div>

  </div>

</div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <FindProgram /> */}

    </section>
  );
}

export default Hero;