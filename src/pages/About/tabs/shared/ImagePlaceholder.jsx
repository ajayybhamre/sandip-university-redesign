import { HiOutlinePhoto } from "react-icons/hi2";

const ImagePlaceholder = ({ label, className = "", rounded = "rounded-2xl" }) => (

  <div
    className={`
      ${rounded}
      border-2
      border-dashed
      border-gray-300
      dark:border-slate-600
      bg-gray-50
      dark:bg-slate-900
      flex
      flex-col
      items-center
      justify-center
      gap-2
      text-center
      p-6
      ${className}
    `}
  >

    <HiOutlinePhoto className="
      w-8
      h-8
      text-gray-300
      dark:text-slate-600
    " />

    {
      label && (
        <span className="
          text-xs
          font-medium
          text-gray-400
          dark:text-slate-500
        ">
          {label}
        </span>
      )
    }

  </div>

);

export default ImagePlaceholder;
