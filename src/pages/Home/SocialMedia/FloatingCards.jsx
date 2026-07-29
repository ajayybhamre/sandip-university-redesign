import { floatingCards } from "./floatingCards";

export default function FloatingCards() {
  return (
    <>
      {floatingCards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.id}
            className={`
              hidden
              xl:flex
              absolute
              ${card.position}
              ${card.animation}
              z-20
              items-center
              gap-4
              w-64
              rounded-3xl
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              shadow-2xl
              p-5
              transition-all
              duration-500
              hover:scale-105
              hover:bg-white/20
            `}
          >
            {/* Icon */}

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-gradient-to-br
                from-red-400
                to-orange-500
                flex
                items-center
                justify-center
                text-black
                text-2xl
                shrink-0
              "
            >
              <Icon />
            </div>

            {/* Text */}

            <div>

              <h3 className="font-bold text-lg text-black">
                {card.value}
              </h3>

              <p className="text-sm text-black">
                {card.title}
              </p>

            </div>
          </div>
        );
      })}
    </>
  );
}