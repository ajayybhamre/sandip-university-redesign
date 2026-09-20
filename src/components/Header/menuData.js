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
  Phone,
  Library,
  ShieldCheck,
  Target,
  Compass,
  Landmark,
  FileSpreadsheet,
  MessageSquare,
  Info,
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
            title: "Scholarships",
            path: "/scholarships",
            icon: IndianRupee,
          },
          {
            title: "Help Centre",
            path: "/help",
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
            title: "Overview",
            path: "/international-admission/overview",
            icon: Globe,
          },
          {
            title: "How to Apply",
            path: "/international-admission/how-to-apply",
            icon: FileEdit,
            badge: "NEW",
          },
          {
            title: "Programs",
            path: "/international-admission/programs",
            icon: BookOpen,
          },
          {
            title: "International Partnerships",
            path: "/international-admission/partnerships",
            icon: Users,
          },
          {
            title: "FAQs",
            path: "/international-admission/faqs",
            icon: HelpCircle,
          },
          {
            title: "Contact Us",
            path: "/international-admission/contact",
            icon: Phone,
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
    title: "IQAC",
    path: "/iqac",
    mega: true,
    customType: "iqac",
    sections: [
      {
        links: [
          {
            title: "Internal Quality Assurance Cell (IQAC)",
            path: "/iqac",
          },
          {
            title: "IIQA Self Disclosure",
            path: "/iqac/self-disclosure",
          },
          {
            title: "Central Library",
            path: "/central-library",
          },
          {
            title: "Feedback System",
            path: "/iqac/feedback-system",
          },
        ],
      },
      {
        links: [
          {
            title: "Committees",
            path: "/iqac/committees",
          },
          {
            title: "Sustainability",
            path: "/iqac/sustainability",
          },
          {
            title: "Academic Policy",
            path: "/iqac/academic-policy",
          },
          {
            title: "NAAC",
            path: "/iqac/naac",
          },
        ],
      },
    ],
  },

  {
    title: "Contact",
    path: "/contact",
    mega: false,
  },
];

export default menuData;