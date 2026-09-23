
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaArrowUp,
  FaAngleRight,

} from "react-icons/fa";
import logo from "../assets/images/logo-dark.webp";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 rounded-t-none md:rounded-t-[60px] lg:rounded-t-[100px] overflow-hidden mt-0">
      {/* Top Section */}
      <div className="max-w-[1600px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

          {/* Logo */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Sandip University"
              className="w-50 mb-4 bg-white p-2 ml-5"
            />

            <p className="text-sm leading-6 text-gray-400">
              Sandip University is committed to providing quality education,
              fostering innovation and shaping future leaders.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {[
                FaFacebookF,
                FaTwitter,
                FaLinkedinIn,
                FaInstagram,
                FaYoutube,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="/"
                  className="w-10 h-10 rounded-full bg-white text-black hover:bg-red-600 flex items-center justify-center transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase text-sm">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                "About Us",
                "Our Leadership",
                "Rankings & Awards",
                "News & Media",
                "Careers",
                "Contact Us",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="/"
                    className="flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <FaAngleRight className="text-white-400 text-xs" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          {/* Admissions */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase text-sm">
              Admissions
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                "Apply Now",
                "Admission Process",
                "Scholarships",
                "Downloads",
                "Important Dates",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="/"
                    className="flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <FaAngleRight className="text-white-400 text-xs" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          {/* Programs */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase text-sm">
              Programs
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                "Engineering",
                "Management",
                "Pharmacy",
                "Law",
                "Science",
                "Agriculture",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="/"
                    className="flex items-center gap-2 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <FaAngleRight className="text-white-400 text-xs" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase text-sm">
              Contact Us
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-white-400" />
                <span>
                  Mahiravani, Trimbak Road,
                  <br />
                  Nashik - 422213,
                  <br />
                  Maharashtra, India
                </span>
              </li>

              <li className="flex gap-3">
                <FaPhoneAlt className="text-white-400 mt-1" />
                <span>1800 212 2714</span>
              </li>

              <li className="flex flex-wrap gap-3">
                <FaEnvelopeOpenText className="text-white-400 mt-1" />
                <span>info@university.edu.in</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-red-900"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-sm text-gray-400 text-center md:text-left">
          © 2026 Sandip University. All Rights Reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="/" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="/" className="hover:text-white">
            Terms & Conditions
          </a>
          <a href="/" className="hover:text-white">
            Disclaimer
          </a>
          <a href="/" className="hover:text-white">
            Sitemap
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="border border-gray-500 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white hover:text-black transition"
        >
          Back to Top
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;