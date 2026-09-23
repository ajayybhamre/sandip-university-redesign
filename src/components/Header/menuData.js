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

  Images,
  UsersRound,
  HeartHandshake,
  Trophy,
  Dumbbell,
} from "lucide-react";

const menuData = [
  {
    title: "Admissions",
    mega: true,
    sections: [
      {
        heading: "Admissions",
        links: [
          {
            title: "Postgraduate",
            path: "/postgraduate",
            icon: BookOpen,
          },
          {
            title: "PhD Admissions",
            path: "/phd",
            icon: Users,
          },
        ],
      },
      {
        heading: "Resources",
        links: [
          {
            title: "Fee Structure",
            path: "/fee-structure",
            icon: IndianRupee,
          },
          {
            title: "Admission Process",
            path: "/admission-process",
            icon: ClipboardCheck,
          },
          {
            title: "Eligibility",
            path: "/eligibility",
            icon: BadgeCheck,
          },
          {
            title: "Brochure",
            path: "/brochure",
            icon: Download,
          },
          {
            title: "FAQ",
            path: "/faq",
            icon: HelpCircle,
          },
        ],
      },
      {
        heading: "Quick Links",
        links: [
          {
            title: "Apply Now",
            path: "/apply",
            icon: FileText,
          },
          {
            title: "Download Form",
            path: "/download-form",
            icon: Download,
          },
          {
            title: "Campus Tour",
            path: "/campus-tour",
            icon: Building2,
          },
          {
            title: "Hostel",
            path: "/hostel",
            icon: Home,
          },
        ],
      },
    ],
  },

{
    title: "Academics",
    path: "/academics",
    mega: false,
  },

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

<<<<<<< HEAD
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

  {
    title: "Academic",
    path: "/academic",
    mega: false,
  },
=======
  
>>>>>>> origin/sai

  {
    title: "Contact",
    path: "/contact",
    mega: false,
  },
];

export default menuData;
