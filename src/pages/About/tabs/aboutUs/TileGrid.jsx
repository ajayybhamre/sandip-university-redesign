import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

const TileGrid = ({ items }) => (
  <div className="
    grid
    grid-cols-2
    sm:grid-cols-3
    lg:grid-cols-5
    gap-4
  ">

    {
      items.map((item, index) => {

        const Wrapper = item.link ? motion.a : motion.div;

        const wrapperProps = item.link
          ? {
              href: item.link,
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {};

        return (

          <Wrapper

            key={item.title}

            {...wrapperProps}

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.4, delay: index * 0.06 }}

            viewport={{ once: true }}

            whileHover={{ y: -4 }}

            className={`
              block
              bg-gray-50
              dark:bg-slate-900
              border
              border-gray-200
              dark:border-slate-700
              rounded-xl
              overflow-hidden
              flex
              flex-col
              text-center
              ${item.link ? "cursor-pointer" : ""}
            `}
          >

            <div className="
              relative
              w-full
              h-28
              sm:h-32
              overflow-hidden
            ">

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              {
                item.link && (

                  <div className="
                    absolute
                    top-2
                    right-2
                    w-6
                    h-6
                    rounded-full
                    bg-white/90
                    dark:bg-black/70
                    flex
                    items-center
                    justify-center
                    shadow-sm
                  ">
                    <HiOutlineArrowTopRightOnSquare className="w-3.5 h-3.5 text-red-600" />
                  </div>

                )
              }

            </div>

            <span className="
              text-xs
              font-semibold
              text-gray-700
              dark:text-gray-200
              leading-5
              p-3
            ">
              {item.title}
            </span>

          </Wrapper>

        );

      })
    }

  </div>
);

export default TileGrid;
