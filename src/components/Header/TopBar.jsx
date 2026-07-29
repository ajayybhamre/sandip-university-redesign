import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
 
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="hidden xl:block bg-[#000] text-white text-sm">
      <div className="max-w-[1600px] mx-auto flex justify-between items-center px-6 py-2">

        {/* Left Side */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-400" />
            <span>Nashik, Maharashtra, India</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-red-400" />
            <span>1800 212 2714</span>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-red-400" />
            <span>info@sandipuniversity.edu.in</span>
          </div>
        </div>

      {/* Right Side */}
<div className="flex items-center gap-3">

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-red-400 hover:text-[#0B2346] transition"
  >
    <FaFacebookF size={14} />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-red-400 hover:text-[#0B2346] transition"
  >
    <FaInstagram size={14} />
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-red-400 hover:text-[#0B2346] transition"
  >
    <FaLinkedinIn size={14} />
  </a>

  <a
    href="https://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-red-400 hover:text-[#0B2346] transition"
  >
    <FaYoutube size={14} />
  </a>



</div>

      </div>
    </div>
  );
}

export default TopBar;
