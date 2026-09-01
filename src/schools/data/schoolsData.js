import {
  Award,
  BookOpen,
  Briefcase,
  FlaskConical,
  GraduationCap,
  Pill,
  Scale,
} from "lucide-react";

// Real school-specific photos — add more here as they become available.
import socseImage from "../../assets/images/schools/socse.webp";
import socmsImage from "../../assets/images/schools/socms.webp";
import sopsImage from "../../assets/images/schools/sops.webp";

// Fallback for schools that don't have a dedicated photo yet.
// TODO: replace each usage below with its own image as soon as it's ready,
// same way SOCSE/SOCMS/SOPS are wired.
import fallbackImage from "../../assets/images/IMG_0862.webp";

const schoolsData = [
  {
    id: "engineering-technology",
    code: "SOET",
    name: "School of Engineering & Technology",
    slug: "engineering-technology",
    tagline: "Build solutions for the challenges shaping tomorrow.",
    icon: GraduationCap,
    image: fallbackImage,
    programsCount: 18,
    level: "Undergraduate & Postgraduate",
  },
  {
    id: "computer-science",
    code: "SOCSE",
    name: "School of Computer Science & Engineering",
    slug: "computer-science",
    tagline: "Turn curiosity about computing into meaningful innovation.",
    icon: BookOpen,
    image: socseImage,
    programsCount: 3,
    level: "Undergraduate & Postgraduate",
  },
  {
    id: "management",
    code: "SOCMS",
    name: "School of Commerce & Management Studies",
    slug: "management",
    tagline: "Develop the judgement and confidence to lead business forward.",
    icon: Briefcase,
    image: socmsImage,
    programsCount: 3,
    level: "Undergraduate & Postgraduate",
  },
  {
    id: "science",
    code: "SOS",
    name: "School of Sciences",
    slug: "science",
    tagline: "Question deeply, investigate carefully, discover boldly.",
    icon: FlaskConical,
    image: fallbackImage,
    programsCount: 3,
    level: "Undergraduate & Postgraduate",
  },
  {
    id: "pharma",
    code: "SOPS",
    name: "School of Pharmacy & Paramedical Sciences",
    slug: "pharma",
    tagline: "Prepare for a healthcare future grounded in science and care.",
    icon: Pill,
    image: sopsImage,
    programsCount: 3,
    level: "Undergraduate & Postgraduate",
  },
  {
    id: "law",
    code: "SOL",
    name: "School of Law",
    slug: "law",
    tagline: "Strengthen your voice, reasoning, and sense of justice.",
    icon: Scale,
    image: fallbackImage,
    programsCount: 3,
    level: "Undergraduate & Postgraduate",
  },
  {
    id: "fashion-beauty",
    code: "SOD",
    name: "School of Design",
    slug: "fashion-beauty",
    tagline: "Shape ideas into thoughtful experiences and visual worlds.",
    icon: Award,
    image: fallbackImage,
    programsCount: 3,
    level: "Undergraduate & Postgraduate",
  },
];

export default schoolsData;
