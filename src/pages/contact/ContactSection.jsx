import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="dark:bg-gray-950 py-14 md:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-12 md:mb-16">

          <span className="inline-block text-blue-600 font-semibold uppercase tracking-[4px] text-sm">
            Contact Us
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            We'd Love To Hear From You
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-7">
            Have questions about admissions, courses, campus life, or
            anything else? Our team is ready to answer all your queries.
          </p>

        </div>

        {/* Main Content */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left */}

          <div className="space-y-5">

            {/* Address */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-md hover:shadow-xl transition duration-300 p-5 flex gap-4">

              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-blue-600" size={28} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Address
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-400 leading-7 text-sm sm:text-base">
                  Sandip University Campus
                  <br />
                  Trimbak Road
                  <br />
                  Nashik, Maharashtra 422213
                </p>
              </div>

            </div>

            {/* Phone */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-md hover:shadow-xl transition duration-300 p-5 flex gap-4">

              <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                <Phone className="text-green-600" size={28} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Phone
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-400 leading-7 text-sm sm:text-base">
                  +91 1800-212-2714
                  <br />
                  +91 253-6697500
                </p>
              </div>

            </div>

            {/* Email */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-md hover:shadow-xl transition duration-300 p-5 flex gap-4">

              <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0">
                <Mail className="text-red-600" size={28} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Email
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-400 leading-7 text-sm sm:text-base break-all">
                  admissions@sandipuniversity.edu.in
                  <br />
                  info@sandipuniversity.edu.in
                </p>
              </div>

            </div>

            {/* Working Hours */}

            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-md hover:shadow-xl transition duration-300 p-5 flex gap-4">

              <div className="w-14 h-14 rounded-2xl bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center flex-shrink-0">
                <Clock className="text-yellow-600" size={28} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Working Hours
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-400 leading-7 text-sm sm:text-base">
                  Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>

            </div>

            {/* Social */}

            <div className="pt-5">

              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Us
              </h4>

              <div className="flex flex-wrap gap-4">

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 shadow flex items-center justify-center hover:bg-blue-600 hover:text-white hover:scale-110 transition-all"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 shadow flex items-center justify-center hover:bg-sky-500 hover:text-white hover:scale-110 transition-all"
                >
                  <FaTwitter />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 shadow flex items-center justify-center hover:bg-pink-500 hover:text-white hover:scale-110 transition-all"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white dark:bg-gray-900 shadow flex items-center justify-center hover:bg-blue-700 hover:text-white hover:scale-110 transition-all"
                >
                  <FaLinkedinIn />
                </a>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-6 sm:p-8">

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Send us a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white resize-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition duration-300 hover:scale-[1.02]"
              >
                <Send size={20} />
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* Google Map */}

        <div className="mt-14 md:mt-20 rounded-3xl overflow-hidden shadow-xl">

          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Sandip%20University%20Nashik&output=embed"
            className="w-full h-72 sm:h-96 lg:h-[500px]"
            loading="lazy"
          />

        </div>

      </div>
    </section>
  );
}