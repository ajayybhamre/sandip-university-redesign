import { socialTabs } from "./socialData";

export default function SocialSidebar({ active, setActive }) {
  return (
    <div className="space-y-5">

      {/* Heading */}

      <div className="mb-6">

        <h3 className="text-2xl font-bold text-white">
          Follow Us
        </h3>

        <p className="text-gray-300 mt-2">
          Choose your favourite platform
        </p>

      </div>

      {/* Social Buttons */}

      {socialTabs.map((item) => {

        const Icon = item.icon;

        return (

          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`
            group
            w-full
            rounded-3xl
            overflow-hidden
            transition-all
            duration-500
            border

            ${
              active === item.id
                ? "bg-white text-[#0B2346] border-white shadow-2xl scale-[1.03]"
                : "bg-white/10 border-white/20 backdrop-blur-xl hover:bg-white/20"
            }
            `}
          >

            <div className="flex items-center gap-5 p-5">

              {/* Icon */}

              <div
                className={`
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-br
                ${item.color}
                flex
                items-center
                justify-center
                text-white
                text-3xl
                shadow-lg
                `}
              >

                <Icon />

              </div>

              {/* Text */}

              <div className="flex-1 text-left">

                <h3
                  className={`
                  font-bold
                  text-lg

                  ${
                    active === item.id
                      ? "text-[#0B2346]"
                      : "text-white"
                  }
                  `}
                >
                  {item.title}
                </h3>

                <p
                  className={`
                  mt-1
                  text-sm

                  ${
                    active === item.id
                      ? "text-gray-600"
                      : "text-gray-300"
                  }
                  `}
                >
                  {item.followers} Followers
                </p>

              </div>

            </div>

          </button>

        );

      })}

      {/* Bottom Card */}

      <div
        className="
        mt-8
        rounded-3xl
        p-8
        bg-gradient-to-br
        from-red-400
        via-orange-400
        to-orange-500
        text-[#0B2346]
        shadow-2xl
        "
      >

        <p className="uppercase tracking-[3px] text-sm font-semibold">

          Campus Reach

        </p>

        <h2 className="text-5xl font-bold mt-4">

          120K+

        </h2>

        <p className="mt-3 font-medium">

          Students, Alumni & Visitors Connected

        </p>

      </div>

    </div>
  );
}