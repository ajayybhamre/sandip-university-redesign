import {
  FileEdit,
  BookOpen,
  FileText,
  BadgeCheck,
  IndianRupee,
  HelpCircle,
  ClipboardCheck,
  Globe,
} from "lucide-react";

export const admissionsMenuData = {
  title: "Admissions",
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
};
