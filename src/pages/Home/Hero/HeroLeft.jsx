import { TypeAnimation } from "react-type-animation";

function HeroLeft({ item }) {
  return (
    <div className="max-w-2xl text-white">

      {/* Subtitle */}
      <p className="text-white-400 uppercase tracking-[4px] font-semibold mb-4">
        {item.subtitle}
      </p>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
        {item.title}
      </h1>

      {/* Type Animation */}
      <div className="text-2xl md:text-4xl font-semibold text-white-400 mb-6">
        Become a{" "}
        <TypeAnimation
          sequence={[
            "Engineer", 2000,
            "Doctor", 2000,
            "Scientist", 2000,
            "Entrepreneur", 2000,
            "Researcher", 2000,
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
        />
      </div>

      {/* Description */}
      <p className="text-lg leading-8 text-gray-200 mb-8">
        {item.description}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">

        <button className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-full transition">
          {item.button1}
        </button>

        <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full transition">
          {item.button2}
        </button>

      </div>

    </div>
  );
}

export default HeroLeft;