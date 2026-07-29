
import { FaChevronDown } from "react-icons/fa";

function FindProgram() {
  return (
    <section className="relative z-20 -mt-10 px-4 bg-[linear-gradient(to_right,#dc2626_50%,#000000_50%)]">
      <div
        className="
          max-w-[1600px] mx-auto
          bg-white
          rounded-3xl
          shadow-lg
          px-6 py-5
        "
      >

        {/* Title */}
        <h3 className="text-[#12336b] font-bold text-sm mb-4">
          Find Your Program
        </h3>


        {/* Form */}
        <div className="
          flex 
          items-center 
          gap-3
          lg:flex-row
          flex-col
        ">


          {/* Level */}
          <div className="relative w-full lg:w-1/4">
            <select
              className="
                appearance-none
                w-full
                border
                border-gray-200
                rounded-md
                px-4
                py-2
                text-sm
                text-gray-600
                outline-none
                focus:border-[#12336b]
              "
            >
              <option>Select Level</option>
              <option>UG</option>
              <option>PG</option>
              <option>PhD</option>
            </select>

            <FaChevronDown
              className="
                absolute
                right-4
                top-3
                text-gray-500
                text-xs
                pointer-events-none
              "
            />
          </div>


          {/* School */}
          <div className="relative w-full lg:w-1/4">
            <select
              className="
                appearance-none
                w-full
                border
                border-gray-200
                rounded-md
                px-4
                py-2
                text-sm
                text-gray-600
                outline-none
                focus:border-[#12336b]
              "
            >
              <option>Select School</option>
              <option>Engineering</option>
              <option>Management</option>
              <option>Science</option>
            </select>

            <FaChevronDown
              className="
                absolute
                right-4
                top-3
                text-gray-500
                text-xs
                pointer-events-none
              "
            />
          </div>



          {/* Specialization */}
          <div className="relative w-full lg:w-1/4">
            <select
              className="
                appearance-none
                w-full
                border
                border-gray-200
                rounded-md
                px-4
                py-2
                text-sm
                text-gray-600
                outline-none
                focus:border-[#12336b]
              "
            >
              <option>Select Specialization</option>
              <option>Computer Science</option>
              <option>AI & ML</option>
              <option>Data Science</option>
            </select>

            <FaChevronDown
              className="
                absolute
                right-4
                top-3
                text-gray-500
                text-xs
                pointer-events-none
              "
            />
          </div>



          {/* Button */}
          <button
            className="
              w-full
              lg:w-[140px]
              bg-red-700
              hover:bg-[#0b2148]
              text-white
              text-sm
              font-semibold
              py-2
              rounded-md
              transition
            "
          >
            Search
          </button>


        </div>

      </div>
    </section>
  );
}

export default FindProgram;