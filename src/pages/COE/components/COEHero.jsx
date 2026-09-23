import coeHeroimg from "../../../assets/images/IMG_6309.webp";
import { motion } from "framer-motion";

const COEHero = ({
  headline = "Controller of Examinations",
  subtitle = "You will find information connected to the university examinations for all the Programmes offered at the Sandip University",
  ctaLabel = "View Examination Resources",
  ctaTargetId = "coe-links",
  backgroundImage = coeHeroimg,
}) => {
  const scrollToTarget = () => {
    document.getElementById(ctaTargetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          {headline}
        </h1>

        <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80">
          {subtitle}
        </p>

        
      </motion.div>
    </section>
  );
};

export default COEHero;