import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi2";

import faqs from "./faqData";

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <div
      className="space-y-4"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      {faqs.map((item, index) => (
        <div
          key={item.id}
          className="
          bg-white
          rounded-2xl
          shadow-lg
          overflow-hidden
          transition-all
          duration-300
          "
        >
          {/* Question */}

          <button
            onClick={() =>
              setActive(active === index ? null : index)
            }
            className="
            w-full
            flex
            justify-between
            items-center
            px-6
            py-5
            text-left
            "
          >
            <h3 className="font-semibold text-lg text-gray-800">
              {item.question}
            </h3>

            <div
              className="
              w-10
              h-10
              rounded-full
              bg-red-100
              flex
              items-center
              justify-center
              shrink-0
              "
            >
              {active === index ? (
                <HiMinus className="text-red-600 text-xl" />
              ) : (
                <HiPlus className="text-red-600 text-xl" />
              )}
            </div>
          </button>

          {/* Answer */}

          <div
            className={`
              transition-all
              duration-500
              overflow-hidden
              ${
                active === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }
            `}
          >
            <div className="px-6 pb-6 text-gray-600 leading-7">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}