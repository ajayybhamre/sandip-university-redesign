
import {
  FaEdit,
  FaWhatsapp,
  FaEnvelopeOpenText,
  FaPhoneAlt,
} from "react-icons/fa";

const FloatingAction = () => {
  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50 hidden md:block">
    <div className="bg-[#ea1f28] border border-gray-400 rounded-l-xl shadow-xl overflow-hidden">
        <a
          href="#"
          className="flex flex-col items-center justify-center w-20 py-4 border-b border-red-800 text-white hover:bg-red-700 transition"
        >
          <FaEdit className="text-xl mb-2" />
          <span className="text-[12px] text-center leading-4">
            Apply Now
          </span>
        </a>

        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center w-20 py-4 border-b border-red-800 text-white hover:bg-red-600 transition"
        >
          <FaWhatsapp className="text-2xl text-white-400 mb-2" />
          <span className="text-[12px] text-center leading-4">
            WhatsApp
          </span>
        </a>

        <a
          href="#"
          className="flex flex-col items-center justify-center w-20 py-4 border-b border-red-800 text-white hover:bg-red-700 transition"
        >
          <FaEnvelopeOpenText className="text-xl mb-2" />
          <span className="text-[12px] text-center leading-4">
            Enquire Now
          </span>
        </a>

        <a
          href="tel:18002122714"
          className="flex flex-col items-center justify-center w-20 py-4 text-white hover:bg-red-700 transition"
        >
          <FaPhoneAlt className="text-xl mb-2" />
          <span className="text-[12px] text-center leading-4">
            Call Us
          </span>
        </a>
      </div>
    </div>
  );
};

export default FloatingAction;