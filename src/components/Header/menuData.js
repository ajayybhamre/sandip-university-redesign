import {
  GraduationCap,
  BookOpen,
  Users,
  IndianRupee,
  FileText,
  BadgeCheck,
  Download,
  HelpCircle,
  ClipboardCheck,
  Building2,
  Home,
  Briefcase,
  Scale,
  Pill,
  Leaf,
  FlaskConical,
  Microscope,
  Award,
  FolderKanban,
  FileEdit,
  Globe,
  Sparkles,
} from "lucide-react";

const menuData = [
  {
    title: "Admissions",
    mega: true,
    customType: "admissions",
    header: {
      title: "ADMISSIONS",
      subtitle: "Explore National & International admission pathways for 2026-27",
      badgeText: "Admissions Open 2026-27",
    },
    sections: [
      {
        heading: "NATIONAL ADMISSION MENU",
        badge: "NEW",
        iconType: "cap",
        links: [
          {
            title: "Apply Now",
            path: "/apply",
            icon: FileEdit,
            badge: "NEW",
          },
          {
            title: "Programs",
            path: "/programs",
            icon: BookOpen,
          },
          {
            title: "Document List",
            path: "/documents",
            icon: FileText,
          },
          {
            title: "Eligibility",
            path: "/eligibility",
            icon: BadgeCheck,
          },
          {
            title: "Fees & Scholarships",
            path: "/fee-structure",
            icon: IndianRupee,
          },
          {
            title: "Help Centre",
            path: "/contact",
            icon: HelpCircle,
          },
        ],
      },
      {
        heading: "INTERNATIONAL ADMISSION MENU",
        badge: "NEW",
        iconType: "globe",
        links: [
          {
            title: "Apply Now",
            path: "/apply",
            icon: FileEdit,
            badge: "NEW",
          },
          {
            title: "Programs",
            path: "/programs",
            icon: BookOpen,
          },
          {
            title: "Admission Procedure",
            path: "/admission-process",
            icon: ClipboardCheck,
          },
          {
            title: "Visa & Transfer Support",
            path: "/international",
            icon: Globe,
          },
          {
            title: "Fees & Scholarships",
            path: "/fee-structure",
            icon: IndianRupee,
          },
          {
            title: "International Help Desk",
            path: "/contact",
            icon: HelpCircle,
          },
        ],
      },
    ],
  },

  {
    title: "Programs",
    mega: true,
    sections: [
      {
        heading: "Schools",
        links: [
          {
            title: "Engineering",
            path: "/schools/engineering",
            icon: GraduationCap,
          },
          {
            title: "Management",
            path: "/schools/management",
            icon: Briefcase,
          },
          {
            title: "Law",
            path: "/schools/law",
            icon: Scale,
          },
          {
            title: "Pharmacy",
            path: "/schools/pharmacy",
            icon: Pill,
          },
          {
            title: "Agriculture",
            path: "/schools/agriculture",
            icon: Leaf,
          },
          {
            title: "Science",
            path: "/schools/science",
            icon: FlaskConical,
          },
        ],
      },
    ],
  },

  {
    title: "Research",
    mega: true,
    sections: [
      {
        heading: "Research",
        links: [
          {
            title: "Research Centres",
            path: "/research/centres",
            icon: Microscope,
          },
          {
            title: "Publications",
            path: "/research/publications",
            icon: BookOpen,
          },
          {
            title: "Patents",
            path: "/research/patents",
            icon: Award,
          },
          {
            title: "Projects",
            path: "/research/projects",
            icon: FolderKanban,
          },
        ],
      },
    ],
  },

  {
    title: "International",
    mega: false,
  },

  {
    title: "Placements",
    path: "/placement",
    mega: false,
  },

  {
    title: "About Us",
    path: "/about",
    mega: false,
  },

  {
    title: "Academic",
    path: "/academic",
    mega: false,
  },

  {
    title: "Contact",
    path: "/contact",
    mega: false,
  },
];

export default menuData;