import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import confetti from "canvas-confetti";
import api from "../api/api"

export default function Popup() {


  const [open, setOpen] = useState(false);


const [formData, setFormData] = useState({
  full_name: "",
  email: "",
  phone: "",
  course: "",
  message: "",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000); // Opens after 1 second

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;
const handleSubmit = async (e) => {
  e.preventDefault();
   try {
    const response = await api.post(
      "submit-enquiry.php",
      formData
    );

    if (response.data.status) {
      

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        course: "",
        message: "",
      });
    } 

  } catch (error) {
    console.error(error);
    
  }

  const duration = 2500;
  const animationEnd = Date.now() + duration;

  const defaults = {
    startVelocity: 35,
    spread: 360,
    ticks: 100,
    zIndex: 10000,
  };

  const randomInRange = (min, max) =>
    Math.random() * (max - min) + min;

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: {
        x: randomInRange(0.1, 0.3),
        y: Math.random() - 0.2,
      },
    });

    confetti({
      ...defaults,
      particleCount,
      origin: {
        x: randomInRange(0.7, 0.9),
        y: Math.random() - 0.2,
      },
    });
  }, 250);
};

  return (
   <div
  className="fixed inset-0 bg-black/10 z-[9999] flex items-center justify-center p-4"  data-aos="slide-down"

  onClick={() => setOpen(false)}
>
      <div
  className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8"
  onClick={(e) => e.stopPropagation()}
>
       <button
  type="button"
  onClick={() => {
    setOpen(false);
  }}
  className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
>
  <FaTimes size={20} />
</button>
        <h2 className="text-3xl font-bold text-red-900 mb-2">
          Admissions Open 2026
        </h2>

        <p className="text-gray-600 mb-6">
          Fill out the enquiry form and our admission counselor will contact you.
        </p>

       <form onSubmit={handleSubmit} className="space-y-5">

  <input
    type="text"
    name="full_name"
    value={formData.full_name}
    onChange={handleChange}
    placeholder="Full Name"
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
  />

  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Email Address"
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
  />

  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={(e) =>
      setFormData({
        ...formData,
        phone: e.target.value.replace(/\D/g, "").slice(0, 10),
      })
    }
    placeholder="Mobile Number"
    maxLength={10}
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
  />

  <select
    name="course"
    value={formData.course}
    onChange={handleChange}
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
  >
    <option value="">Select Course</option>
    <option value="B.Tech">B.Tech</option>
    <option value="MBA">MBA</option>
    <option value="BCA">BCA</option>
    <option value="MCA">MCA</option>
    <option value="BBA">BBA</option>
    <option value="M.Tech">M.Tech</option>
  </select>

  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Your Message"
    rows="4"
    className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
  />

  <button
    type="submit"
    className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
  >
    Submit Enquiry
  </button>

</form>
      </div>
    </div>
  );
}