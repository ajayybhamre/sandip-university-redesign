import { motion } from "framer-motion";

import ImagePlaceholder from "../../shared/ImagePlaceholder";
import memberships from "./data/memberships";

const MembershipGrid = () => (
  <div className="
    grid
    grid-cols-2
    sm:grid-cols-3
    lg:grid-cols-4
    gap-4
  ">

    {
      memberships.map((name, index) => (

        <motion.div

          key={name}

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.4, delay: index * 0.05 }}

          viewport={{ once: true }}
        >

          <ImagePlaceholder
            label={name}
            className="aspect-[3/2] w-full"
            rounded="rounded-xl"
          />

        </motion.div>

      ))
    }

  </div>
);

export default MembershipGrid;
