import { socialContent } from "./socialData";

export default function SocialGallery({ active }) {
  const data = socialContent[active];

  return (
    <div
      className="
      relative
      rounded-[35px]
      overflow-hidden
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      shadow-2xl
      "
    >
      {/* Featured Image */}

      <div className="relative">

        <img
          src={data.featured}
          alt={data.heading}
          className="
          w-full
          h-[420px]
          object-cover
          "
        />

        {/* Dark Overlay */}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
          "
        />

        {/* Content */}

        <div
          className="
          absolute
          left-8
          bottom-8
          max-w-xl
          "
        >
          <span
            className="
            inline-block
            bg-red-400
            text-black
            px-4
            py-2
            rounded-full
            font-semibold
            text-sm
            "
          >
            {active}
          </span>

          <h2 className="text-4xl font-bold text-white mt-5">
            {data.heading}
          </h2>

          <p className="text-gray-200 mt-4">
            {data.description}
          </p>
        </div>
      </div>

      {/* Stats */}

      <div
        className="
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-5
        p-8
        "
      >
        <div
          className="
          rounded-2xl
          bg-white/10
          p-5
          text-center
          "
        >
          <h3 className="text-3xl font-bold text-red-400">
            {data.stats.followers}
          </h3>

          <p className="text-gray-300 mt-2">
            Followers
          </p>
        </div>

        <div
          className="
          rounded-2xl
          bg-white/10
          p-5
          text-center
          "
        >
          <h3 className="text-3xl font-bold text-red-400">
            {data.stats.likes}
          </h3>

          <p className="text-gray-300 mt-2">
            Likes
          </p>
        </div>

        <div
          className="
          rounded-2xl
          bg-white/10
          p-5
          text-center
          "
        >
          <h3 className="text-3xl font-bold text-red-400">
            {data.stats.reels}
          </h3>

          <p className="text-gray-300 mt-2">
            Reels
          </p>
        </div>

        <div
          className="
          rounded-2xl
          bg-white/10
          p-5
          text-center
          "
        >
          <h3 className="text-3xl font-bold text-red-400">
            {data.stats.reach}
          </h3>

          <p className="text-gray-300 mt-2">
            Reach
          </p>
        </div>
      </div>

      {/* Gallery */}

      <div
        className="
        grid
        grid-cols-2
        md:grid-cols-3
        gap-5
        p-8
        pt-0
        "
      >
        {data.posts.map((img, index) => (
          <div
            key={index}
            className="
            group
            overflow-hidden
            rounded-3xl
            "
          >
            <img
              src={img}
              alt=""
              className="
              w-full
              h-64
              object-cover
              transition
              duration-700
              group-hover:scale-110
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}