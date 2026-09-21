import { HiOutlineSparkles } from "react-icons/hi2";

const SectionPlaceholder = ({ title }) => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        text-center
        py-24
        px-6
      "
    >
      <div
        className="
          w-16
          h-16
          rounded-full
          bg-red-50
          dark:bg-red-900/30
          flex
          items-center
          justify-center
          mb-6
        "
      >
        <HiOutlineSparkles className="w-8 h-8 text-red-600" />
      </div>

      <h3
        className="
          text-2xl
          font-bold
          text-gray-900
          dark:text-white
          mb-2
        "
      >
        {title}
      </h3>

      <p
        className="
          text-gray-500
          dark:text-gray-400
          max-w-md
        "
      >
        Content for this section will be added soon.
      </p>
    </div>
  );
};

export default SectionPlaceholder;
