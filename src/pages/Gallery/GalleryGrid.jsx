export default function GalleryGrid({ images }) {
  return (
    <section className="pb-24 bg-white dark:bg-black transition-colors duration-300">

      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {images.map((item) => (

            <div
              key={item.id}
              className="
              group
              bg-white
              dark:bg-[#111111]
              rounded-3xl
              overflow-hidden
              border
              border-red-100
              dark:border-red-600/30
              shadow-lg
              hover:shadow-[0_15px_40px_rgba(234,31,40,0.25)]
              transition-all
              duration-500
              hover:-translate-y-2
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

              </div>

              {/* Content */}

              <div className="p-6">

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

                <p
                  className="
                  text-black/70
                  dark:text-white/75
                  leading-7
                  transition-colors
                  duration-300
                  "
                >
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