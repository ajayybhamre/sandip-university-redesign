import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import img1 from "../../../assets/images/slider1.jpg";
import img2 from "../../../assets/images/slider2.webp";
import img3 from "../../../assets/images/slier3.webp";
import img4 from "../../../assets/images/campus.png";

/* ================================
   SOCIAL SIDEBAR DATA
================================ */

export const socialTabs = [
  {
    id: "Instagram",
    title: "Instagram",
    icon: FaInstagram,
    followers: "48.2K",
    color: "from-pink-500 via-red-500 to-red-500",
  },
  {
    id: "YouTube",
    title: "YouTube",
    icon: FaYoutube,
    followers: "26.8K",
    color: "from-red-500 to-red-700",
  },
  {
    id: "LinkedIn",
    title: "LinkedIn",
    icon: FaLinkedin,
    followers: "31.4K",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "Facebook",
    title: "Facebook",
    icon: FaFacebook,
    followers: "18.7K",
    color: "from-blue-600 to-indigo-700",
  },
];

/* ================================
   SOCIAL GALLERY DATA
================================ */

export const socialContent = {
  Instagram: {
    featured: img1,

    heading: "Campus Life",

    description:
      "Explore student experiences, cultural events, campus festivals and unforgettable memories.",

    posts: [
      img1,
      img2,
      img3,
      img4,
      img2,
      img3,
    ],

    stats: {
      followers: "48K",
      likes: "250K",
      reels: "120",
      reach: "2.8M",
    },
  },

  YouTube: {
    featured: img2,

    heading: "Video Stories",

    description:
      "Watch university events, placement journeys, seminars and campus tours.",

    posts: [
      img2,
      img3,
      img4,
      img1,
      img3,
      img2,
    ],

    stats: {
      followers: "26K",
      likes: "160K",
      reels: "210",
      reach: "1.6M",
    },
  },

  LinkedIn: {
    featured: img3,

    heading: "Professional Network",

    description:
      "Research achievements, faculty excellence and placement success stories.",

    posts: [
      img3,
      img2,
      img1,
      img4,
      img1,
      img3,
    ],

    stats: {
      followers: "31K",
      likes: "95K",
      reels: "85",
      reach: "890K",
    },
  },

  Facebook: {
    featured: img4,

    heading: "Campus Community",

    description:
      "Stay updated with admissions, alumni events and university announcements.",

    posts: [
      img4,
      img2,
      img1,
      img3,
      img2,
      img4,
    ],

    stats: {
      followers: "18K",
      likes: "80K",
      reels: "55",
      reach: "620K",
    },
  },
};