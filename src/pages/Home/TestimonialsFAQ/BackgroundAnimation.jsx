import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineSparkles,
} from "react-icons/hi2";

export default function BackgroundAnimation() {
  return (
    <>
      {/* Grid Background */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)]
        bg-[size:70px_70px]
        "
      />

      {/* Large Quote */}
      <div
        className="
        absolute
        -top-16
        left-10
        text-[320px]
        font-bold
        text-red-500/5
        select-none
        leading-none
        "
      >
        "
      </div>

      {/* Blob 1 */}
      <div
        className="
        blob1
        absolute
        top-10
        left-10
        w-72
        h-72
        rounded-full
        bg-red-400/20
        blur-[120px]
        "
      />

      {/* Blob 2 */}
      <div
        className="
        blob2
        absolute
        right-10
        top-32
        w-96
        h-96
        rounded-full
        bg-blue-400/20
        blur-[140px]
        "
      />

      {/* Blob 3 */}
      <div
        className="
        blob3
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        w-80
        h-80
        rounded-full
        bg-yellow-300/20
        blur-[140px]
        "
      />

      {/* Floating Graduation Cap */}
      <div
        className="
        icon1
        absolute
        top-32
        right-44
        text-red-500/20
        text-6xl
        "
      >
        <HiOutlineAcademicCap />
      </div>

      {/* Floating Book */}
      <div
        className="
        icon2
        absolute
        bottom-24
        left-24
        text-blue-500/20
        text-5xl
        "
      >
        <HiOutlineBookOpen />
      </div>

      {/* Floating Sparkle */}
      <div
        className="
        icon3
        absolute
        top-1/2
        right-20
        text-yellow-400/30
        text-5xl
        "
      >
        <HiOutlineSparkles />
      </div>

      {/* Small Floating Particles */}
      <div className="particle absolute top-20 left-1/3 w-3 h-3 rounded-full bg-red-400/40"></div>
      <div className="particle absolute top-60 right-1/4 w-2 h-2 rounded-full bg-blue-400/40"></div>
      <div className="particle absolute bottom-24 left-1/4 w-4 h-4 rounded-full bg-yellow-400/40"></div>
      <div className="particle absolute bottom-40 right-1/3 w-2 h-2 rounded-full bg-green-400/40"></div>
      <div className="particle absolute top-1/2 left-12 w-3 h-3 rounded-full bg-pink-400/40"></div>
    </>
  );
}