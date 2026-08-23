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
    id: "soet",
    code: "SOET",
    name: "School of Engineering & Technology",
    slug: "soet",
    tagline: "Build solutions for the challenges shaping tomorrow.",
    icon: GraduationCap,
    image: fallbackImage,
    programsCount: 18,
    level: "Undergraduate & Postgraduate",
  },
  {
    id: "socse",
    code: "SOCSE",
    name: "School of Computer Science & Engineering",
    slug: "socse",
    tagline: "Turn curiosity about computing into meaningful innovation.",
    icon: BookOpen,
    image: socseImage,
    programsCount: 3,
    level: "Undergraduate & Postgraduate",
  },
  {
    id: "socms",
    code: "SOCMS",
    name: "School of Commerce & Management Studies",
    slug: "socms",
    tagline: "Develop the judgement and confidence to lead business forward.",
    icon: Briefcase,
    image: socmsImage,
    programsCount: 3,
    level: "Undergraduate & Postgraduate",
  },
  {
    id: "sos",
    code: "SOS",
    name: "School of Sciences",
    slug: "sos",
    tagline: "Question deeply, investigate carefully, discover boldly.",
    icon: FlaskConical,
    image: fallbackImage,
    programsCount: 3,
    level: "Undergraduate & Postgraduate",
  },
  {
    id: "sops",
    code: "SOPS",
    name: "School of Pharmacy & Paramedical Sciences",
    slug: "sops",
    tagline: "Prepare for a healthcare future grounded in science and care.",
    icon: Pill,
    image: sopsImage,
    programsCount: 3,
    level: "Undergraduate & Postgraduate",
  },
  {
    id: "sol",
    code: "SOL",
    name: "School of Law",
    slug: "sol",
    tagline: "Strengthen your voice, reasoning, and sense of justice.",
    icon: Scale,
    image: fallbackImage,
    programsCount: 3,
    level: "Undergraduate & Postgraduate",
  },
  {
    id: "sod",
    code: "SOD",
    name: "School of Design",
    slug: "sod",
    tagline: "Shape ideas into thoughtful experiences and visual worlds.",
    icon: Award,
    image: fallbackImage,
    programsCount: 3,
    level: "Undergraduate & Postgraduate",
  },
];

export default schoolsData;