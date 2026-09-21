import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi2";

const HighlightsBanner = () => {
  return (

    <motion.div

      initial={{ opacity: 0, y: 20 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.6 }}

      viewport={{ once: true }}

      className="
        relative
        overflow-hidden
        rounded-2xl
        bg-gradient-to-br
        from-[#0b1220]
        to-red-950
        px-5
        py-5
        md:px-8
        md:py-6
      "
    >

      <div className="
        relative
        flex
        flex-col
        lg:flex-row
        lg:items-center
        gap-4
        lg:gap-8
      ">

        <div className="
          inline-flex
          items-center
          gap-2
          bg-red-600/15
          border
          border-red-500/30
          text-red-400
          text-[11px]
          font-semibold
          uppercase
          tracking-[1.5px]
          px-3
          py-1.5
          rounded-full
          shrink-0
          w-fit
        ">
          <HiOutlineSparkles className="w-3.5 h-3.5" />
          Placement Highlights
        </div>

        <p className="
          text-gray-300
          leading-6
          text-sm
          flex-1
          text-justify
        ">
          Over <span className="text-white font-semibold">200+ companies</span> like
          KPIT, LTI, Atos Syntel, Mphasis, Jaro, HFFC, IndiaMART, Amazon, Flipkart,
          Zensar and many more visit Sandip University every year for placements.
        </p>

        <div className="
          hidden
          lg:block
          w-px
          h-10
          bg-white/10
          shrink-0
        " />

        <div className="
          flex
          items-center
          gap-3
          shrink-0
        ">

          <div className="
            w-10
            h-10
            rounded-full
            bg-red-600
            flex
            items-center
            justify-center
            text-white
            font-bold
            text-xs
            shrink-0
          ">
            SJ
          </div>

          <p className="
            text-gray-400
            text-xs
            italic
            leading-5
            max-w-[220px]
            text-justify
          ">
            "Extremely proud of our students"
            <span className="block not-italic text-red-400 font-semibold mt-0.5">
              — Dr. Sandip N. Jha, Chairman
            </span>
          </p>

        </div>

      </div>

    </motion.div>

  );
};

export default HighlightsBanner;
