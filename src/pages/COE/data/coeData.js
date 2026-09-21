// src/pages/COE/data/coeData.js
//
// Everything static (about copy, quick links, contact, How to Apply SOPs)
// lives here as plain data, same convention as schools/data/schoolsData.js.
//
// The three "changing" lists — noticesData, resultsData, timetablesData —
// are ALSO here for now, but treat them as a placeholder wire, not a
// permanent home. They're deliberately shaped to match what a future
// backend response would look like (id / title / publishedAt / fileUrl /
// externalLink), so that when the CoE backend exists, only
// `hooks/useCoeItems.js` needs to change — swap its internals to fetch from
// the API and return the same shape. No page or card component changes.

import {
  Bell,
  FileText,
  CalendarClock,
  ClipboardList,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  FileCheck2,
  FileSearch,
  RotateCcw,
  BadgeAlert,
  ScrollText,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
export const coeHero = {
  headline: "Office of the Controller of Examinations",
  // PLACEHOLDER — point this at a real photo, same way schoolsData.js does
  // (static import + shared fallbackImage pattern). Using the hero image
  // already in assets/ for now:
  // import coeHeroImg from "../../../assets/hero.png";
};

// ---------------------------------------------------------------------------
// About / Introduction (COE main page)
// ---------------------------------------------------------------------------
export const coeAbout = {
  intro:
    "The Controller of Examinations is responsible for preparing and scheduling university examinations across all programmes offered at Sandip University. The office coordinates the central evaluation of answer scripts, publication of results, and issue of grade cards, transcripts, provisional certificates, degree certificates, migration certificates, and duplicate certificates.", // PLACEHOLDER — confirm wording with the CoE office
  verification:
    "The office also provides genuineness and verification services to Government entities, educational institutions, corporate bodies, and private verification agencies, and arranges pre- and post-auditing of question papers and answer booklets by internal and external subject experts.", // PLACEHOLDER
};

export const coeResponsibilities = [
  "Registration and enrolment of courses",
  "Admission to examinations",
  "Examination time table",
  "Issue and collection of examination application forms & payment of examination fees",
  "Detention / cancellation of candidature for appearing in the examination",
  "Printing and issue of hall tickets",
  "Collection of internal assessment marks for theory / practical / purely internal courses",
  "Appointment of examiners (external / internal) for examinations",
  "Conduct of theory and practical examinations",
]; // PLACEHOLDER — adapt to Sandip's actual scope of work

// ---------------------------------------------------------------------------
// Quick links — the 4 sub-pages, shown as cards on the COE main page
// ---------------------------------------------------------------------------
export const coeQuickLinks = [
  {
    id: "notices",
    title: "Examination Notices",
    description: "Latest circulars, schedules, and announcements from the examination office.",
    icon: Bell,
    path: "/coe/notices",
  },
  {
    id: "results",
    title: "Results",
    description: "Access published results for university examinations.",
    icon: FileText,
    path: "/coe/results",
  },
  {
    id: "timetables",
    title: "Timetables",
    description: "Examination timetables for all schools and programmes.",
    icon: CalendarClock,
    path: "/coe/timetables",
  },
  {
    id: "how-to-apply",
    title: "How to Apply",
    description: "Procedures and application forms for certificates, revaluation, and more.",
    icon: ClipboardList,
    path: "/coe/how-to-apply",
  },
];

// ---------------------------------------------------------------------------
// Contact details (COE main page — footer band)
// ---------------------------------------------------------------------------
export const coeContact = {
  email: "coe@sandipuniversity.edu.in", // PLACEHOLDER — confirm actual mailbox
  phone: "+91 9607978068", // from the live site's Exam menu helpline
  address: "Trimbak Road, Mahiravani, Nashik, Maharashtra 422213",
  coordinatorsPdf:
    "https://www.sandipuniversity.edu.in/pdf/Departmentwise-CoE-Co-ordinators-AY-2025-2026.pdf",
};

export const erpLoginUrl = "https://erp.sandipuniversity.com/login/index/student";

// ---------------------------------------------------------------------------
// How to Apply — this one genuinely IS static (fixed SOPs, not the
// office's changing content), broken down from the live site's single SOP
// table into categories.
// ---------------------------------------------------------------------------
const DOC_BASE = "https://www.sandipuniversity.edu.in/show_file.php?doc_name=apply/";

export const howToApplyCategories = [
  {
    id: "general",
    label: "General & Conduct",
    icon: ScrollText,
    items: [
      {
        id: "general-instructions",
        title: "General Instructions",
        description: "Overview of examination procedures and student responsibilities.",
        procedureLink: `${DOC_BASE}Website-How-to-Apply.pdf`,
      },
      {
        id: "sop-appearing",
        title: "SOPs for Appearing Examination",
        description: "Standard operating procedure students must follow to appear for exams.",
        procedureLink: `${DOC_BASE}SOPs-for-Appearing-Examination.pdf`,
      },
      {
        id: "academic-malpractice",
        title: "Academic Malpractice",
        description: "Policy and process for academic malpractice cases during examinations.",
        procedureLink:
          "https://www.sandipuniversity.edu.in/how-to-apply/pdf/Academic-Malpractice.pdf",
        icon: BadgeAlert,
      },
    ],
  },
  {
    id: "certificates",
    label: "Certificates & Documents",
    icon: FileCheck2,
    items: [
      {
        id: "transcript",
        title: "Transcript Certificate",
        description: "Apply for an official academic transcript.",
        procedureLink: `${DOC_BASE}SOPs-for Student-Examination-Activities1.pdf`,
        applicationLink: `${DOC_BASE}Application-for-Transcript.pdf`,
        onlineLink: "https://www.sandipuniversity.edu.in/how-to-apply/search_by_prn.php",
      },
      {
        id: "degree-certificate",
        title: "Degree Certificate",
        description: "Application form for issue of the original degree certificate.",
        applicationLink: `${DOC_BASE}Application-Form-for-Degree-Certificate.pdf`,
      },
      {
        id: "duplicate-certificate",
        title: "Duplicate Degree / Diploma / Grade Sheet",
        description: "Apply for a duplicate copy of a degree, diploma certificate, or statement of grades.",
        applicationLink: `${DOC_BASE}Application-for-Duplicate--Degree_Diploma_Certificate_Grade-sheet.pdf`,
      },
      {
        id: "correction-certificate",
        title: "Correction in Degree / Diploma / Grade Sheet",
        description: "Request a correction on an issued degree, diploma certificate, or statement of grades.",
        applicationLink: `${DOC_BASE}Application-for--Corrections-Degree_Diploma_Certificate_Grade-sheet.pdf`,
      },
    ],
  },
  {
    id: "answer-sheet",
    label: "Answer Sheet Services",
    icon: FileSearch,
    items: [
      {
        id: "photocopy",
        title: "Photocopy of Answer Sheet",
        description: "Request a photocopy of your evaluated answer sheet.",
        note: "Apply through the Student ERP Portal",
        icon: FileSearch,
      },
      {
        id: "revaluation",
        title: "Revaluation of Answer Sheet",
        description: "Request revaluation of an evaluated answer sheet.",
        note: "Apply through the Student ERP Portal",
        icon: RotateCcw,
      },
    ],
  },
  {
    id: "verification",
    label: "Verification",
    icon: ShieldCheck,
    items: [
      {
        id: "certificate-verification",
        title: "Certificate Verification (Agencies)",
        description:
          "SOPs for government entities, institutions, corporates, and verification agencies confirming certificate genuineness.",
        procedureLink: `${DOC_BASE}SOPs-for-Agency-Verification-new.pdf`,
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// TEMPORARY — Notices / Results / Timetables. Replace with real entries now;
// replace the *data source* (this file → an API call inside useCoeItems)
// once the backend exists. Shape: { id, title, publishedAt, fileUrl?,
// externalLink?, isNew? }
// ---------------------------------------------------------------------------
export const noticesData = [
  {
    id: "notice-placeholder-1",
    title: "PLACEHOLDER — Winter Semester End Examination Schedule",
    publishedAt: "2026-09-15",
    fileUrl: "#", // PLACEHOLDER — real PDF link
    isNew: true,
  },
  {
    id: "notice-placeholder-2",
    title: "PLACEHOLDER — Revised Guidelines for Answer Sheet Revaluation",
    publishedAt: "2026-09-05",
    fileUrl: "#",
  },
]; // PLACEHOLDER DATA — replace with real circulars/notices before launch

export const resultsData = [
  {
    id: "result-placeholder-1",
    title: "PLACEHOLDER — B.Tech Semester Results (Odd Semester 2026)",
    publishedAt: "2026-08-20",
    externalLink: "#", // PLACEHOLDER — real results portal link
  },
]; // PLACEHOLDER DATA — replace with real result links before launch

export const timetablesData = [
  {
    id: "timetable-placeholder-1",
    title: "PLACEHOLDER — UG End Semester Examination Timetable",
    publishedAt: "2026-09-10",
    fileUrl: "#", // PLACEHOLDER — real PDF link
  },
]; // PLACEHOLDER DATA — replace with real timetable links before launch

export const contactIcons = { Mail, Phone, MapPin };
