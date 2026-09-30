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
  Info,  Images,UsersRound,
  HeartHandshake,Dumbbell,Trophy

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
            // title: "Programs",
            // path: "/programs",

            title: "Postgraduate",
            path: "/postgraduate",

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

// {
//     title: "Academics",
//     path: "/academics",
//     mega: false,
//   },

  {
    title: "Schools",
    mega: true,
    sections: [
      {
        heading: "Schools",
        links: [
          
          {
            title: "School Of Engineering & Technology",
            path: "/schools/engineering-technology",
            icon: GraduationCap,
          },
          {
            title: "School Of Computer Science & Engineering",
            path: "/schools/computer-science",
            icon: BookOpen,
          },
          {
            title: "School Of Commerce & Managment Studies",
            path: "/schools/management",
            icon: Briefcase,
          },
          {
            title: "School Of Science",
            path: "/schools/science",
            icon: FlaskConical,
          },
          {
            title: "School of Pharmaceutical Sciences ",
            path: "/schools/pharma",
            icon: Pill,
          },
          {
            title: "School Of Law",
            path: "/schools/law",
            icon: Scale,
          },
          {
            title: "School Of Design",
            path: "/schools/fashion-beauty",
            icon: Award,
          },
        ],
      },
    ],
  },


  {
    title: "Examinations",
    path: "/coe",
    mega: false,
  },
  {
    title: "Research",
    mega: true,
    sections: [
      {
        heading: "Research",
        links: [
          {
            title: "Overview",
            path: "/research?tab=overview",
            icon: Microscope,
          },
          {
            title: "Faculty Publications",
            path: "/research?tab=faculty-output",
            icon: BookOpen,
          },
          {
            title: "Books / Book Chapters",
            path: "/research?tab=books",
            icon: BookOpen,
          },
          {
            title: "Funding & Industry",
            path: "/research?tab=funding",
            icon: FolderKanban,
          },
          {
            title: "IPR / Patents",
            path: "/research?tab=ipr",
            icon: Award,
          },
          {
            title: "Centre of Excellence",
            path: "/research?tab=centre-of-excellence",
            icon: Building2,
          },
          {
            title: "Central Instrumentation Center",
            path: "/research?tab=cic",
            icon: FlaskConical,
          },
          {
            title: "Policies",
            path: "/research?tab=policies",
            icon: FileText,
          },
        ],
      },
      {
        heading: "Ph.D.",
        links: [
          {
            title: "Ph.D. Programme",
            path: "/phd",
            icon: GraduationCap,
          },
          {
            title: "Admission",
            path: "/phd/admission",
            icon: FileEdit,
          },
          {
            title: "Degrees Awarded",
            path: "/phd/degree-awarded",
            icon: Award,
          },
          {
            title: "Undertaking",
            path: "/phd/undertaking",
            icon: FileText,
          },
        ],
      },
    ],
  },

  // {
  //   title: "International",
  //   mega: false,
  // },

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
    title: "Campus Life",
    mega: true,
    sections: [
      {
        heading: "Campus Life",
        links: [
          {
            title: "Gallery & Media",
            path: "/campus-life?tab=gallery-media",
            icon: Images,
          },
          {
            title: "SUN Clubs",
            path: "/campus-life?tab=sun-clubs",
            icon: UsersRound,
          },
          {
            title: "Student Welfare",
            path: "/campus-life?tab=student-welfare",
            icon: HeartHandshake,
          },
          {
            title: "Achievement",
            path: "/campus-life?tab=achievement",
            icon: Trophy,
          },
          {
            title: "Sports",
            path: "/campus-life?tab=sports",
            icon: Dumbbell,
          },
        ],
      },
    ],
  },

  // {
  //   title: "Academic",
  //   path: "/academic",
  //   mega: false,
  // },

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

  // {
  //   title: "Contact",
  //   path: "/contact",
  //   mega: false,
  // },
];

export default menuData;