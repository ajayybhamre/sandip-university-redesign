import { motion } from "framer-motion";

const OverviewSection = () => (
  <div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
        Overview
      </h4>

      <div className="space-y-4">

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
          At Sandip University, we believe that the education goes far
          beyond classrooms and textbooks — it is a dynamic journey of
          personal and professional transformation. The Directorate of
          Student Welfare (DSW) led by the Director Students' Welfare
          serves as the cornerstone for nurturing holistic student
          development in alignment with the University's vision of
          nurturing future-ready professionals steeped in Indian values
          and equipped with global perspective.
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
          The DSW is committed to creating a vibrant, inclusive, and
          supportive campus environment where students can reach their
          full potential. In order to ensure students' overall
          well-being, the Directorate provides guidance, mentorship, and
          resources that allow them to succeed academically,
          emotionally, socially, and physically. The university offers
          career counseling, mental health services, sports, and
          leadership opportunities that enrich student life and
          cultivate excellence.
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
          To foster learning that leads to lifelong growth, the
          Directorate works closely with faculty, student bodies, and
          administration to foster innovation and collaboration. DSW
          stands at the forefront of a broader movement toward academic
          and societal transformation, forming conscientious leaders and
          responsible citizens who will make meaningful contributions to
          India and the world.
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-7 text-justify">
          Welcome to our pioneering journey, where together we build a
          brighter, empowered, and values-driven future.
        </p>

      </div>
    </motion.div>

  </div>
);

export default OverviewSection;
