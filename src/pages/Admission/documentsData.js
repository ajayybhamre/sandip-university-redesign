import {
  GraduationCap,
  IdCard,
  UserCheck,
  Paperclip,
  FileCheck,
  Award,
  FileText,
  FileSignature,
  ShieldCheck,
  MapPin,
  Camera,
  HeartHandshake,
  ShieldAlert,
  HelpCircle,
} from "lucide-react";

export const OVERVIEW_STATS = [
  {
    id: "total",
    value: 15,
    label: "Required Documents",
    sublabel: "Complete admission checklist",
    color: "from-red-500 to-rose-600",
  },
  {
    id: "photos",
    value: 4,
    label: "Passport Photos",
    sublabel: "Recent color photographs",
    color: "from-amber-500 to-orange-600",
  },
  {
    id: "mandatory",
    value: 6,
    label: "Mandatory Documents",
    sublabel: "Required for all candidates",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "applicable",
    value: 9,
    label: "If Applicable",
    sublabel: "Specific category/quota requirements",
    color: "from-blue-500 to-indigo-600",
  },
];

export const DOCUMENT_CATEGORIES = [
  { id: "academic", label: "Academic", iconName: "📘", count: 4 },
  { id: "identity", label: "Identity", iconName: "🪪", count: 3 },
  { id: "category", label: "Category", iconName: "🏷", count: 5 },
  { id: "additional", label: "Additional", iconName: "📎", count: 3 },
];

export const REQUIRED_DOCUMENTS = [
  // ==========================================
  // 1. ACADEMIC DOCUMENTS
  // ==========================================
  {
    id: "doc_1",
    category: "academic",
    categoryName: "Academic Documents",
    title: "10th & 12th Marksheet of Qualifying Exam",
    specification: "Original + 2 Attested Copies",
    badgeType: "mandatory", // mandatory | applicable
    requiresOriginal: true,
    copyType: "Original + 2 Copies",
    icon: FileCheck,
    description:
      "Statement of marks for 10th (SSC) and 12th (HSC) or diploma/qualifying exam.",
    tips: [
      "Must show clear pass status and subject-wise score.",
      "Self-attestation or Gazetted Officer signature required on photocopies.",
      "Original marksheet verified at physical desk.",
    ],
    sampleFormat: "State Board / CBSE / ICSE / Recognized Board Marksheet",
  },
  {
    id: "doc_2",
    category: "academic",
    categoryName: "Academic Documents",
    title: "Passing / Degree Certificate",
    specification: "Attested Copy Required",
    badgeType: "mandatory",
    requiresOriginal: false,
    copyType: "Attested Photocopy",
    icon: Award,
    description:
      "Official Passing Certificate issued by the Board/University confirming qualification.",
    tips: [
      "Provisional passing certificate accepted if final degree is awaiting convocation.",
      "Copy must clearly state certificate number and issue date.",
    ],
    sampleFormat: "Board Passing Certificate / University Degree Certificate",
  },
  {
    id: "doc_3",
    category: "academic",
    categoryName: "Academic Documents",
    title: "Transfer Certificate (TC) / School Leaving",
    specification: "Original Copy Required",
    badgeType: "mandatory",
    requiresOriginal: true,
    copyType: "Original Required",
    icon: FileText,
    description:
      "Original Leaving Certificate or Transfer Certificate from the institution last attended.",
    tips: [
      "Original TC will be permanently retained by Sandip University.",
      "Keep 5-10 attested photocopies of your TC for personal future record.",
      "Must mention student conduct, date of birth, and leaving date.",
    ],
    sampleFormat: "Original School/College Leaving Certificate",
  },
  {
    id: "doc_4",
    category: "academic",
    categoryName: "Academic Documents",
    title: "Migration Certificate",
    specification: "Original Required (Outside Board/Univ)",
    badgeType: "mandatory",
    requiresOriginal: true,
    copyType: "Original Required",
    icon: ShieldCheck,
    description:
      "Migration Certificate issued by previous board or university for candidates outside Maharashtra board.",
    tips: [
      "Mandatory for registration with University Grants Commission (UGC).",
      "Original copy permanently retained after eligibility verification.",
    ],
    sampleFormat: "Original Migration Certificate from previous Board/Univ",
  },

  // ==========================================
  // 2. IDENTITY DOCUMENTS
  // ==========================================
  {
    id: "doc_5",
    category: "identity",
    categoryName: "Identity Documents",
    title: "Aadhaar Card",
    specification: "Photocopy Required",
    badgeType: "mandatory",
    requiresOriginal: false,
    copyType: "Photocopy",
    icon: IdCard,
    description:
      "Clear photocopy of Government of India issued Aadhaar Card for UIDAI registration.",
    tips: [
      "Name on Aadhaar must match 10th marksheet.",
      "Both front and back of Aadhaar must be copied on a single sheet.",
    ],
    sampleFormat: "12-Digit UIDAI Aadhaar Card Photocopy",
  },
  {
    id: "doc_6",
    category: "identity",
    categoryName: "Identity Documents",
    title: "Age / Nationality / Domicile Certificate",
    specification: "Attested Copy Required",
    badgeType: "mandatory",
    requiresOriginal: false,
    copyType: "Attested Photocopy",
    icon: MapPin,
    description:
      "Certificate issued by Executive Magistrate / Revenue Department establishing Domicile status.",
    tips: [
      "Mandatory for Maharashtra state seat quota & scholarship eligibility.",
      "Birth Certificate or TC acts as proof of age.",
    ],
    sampleFormat: "State Revenue Department Domicile / Nationality Certificate",
  },
  {
    id: "doc_7",
    category: "identity",
    categoryName: "Identity Documents",
    title: "Recent Passport Size Photographs",
    specification: "4 Original Color Photographs",
    badgeType: "mandatory",
    requiresOriginal: true,
    copyType: "4 Original Photos",
    icon: Camera,
    description:
      "Recent color passport size photographs with light/white background.",
    tips: [
      "Photos taken within last 3 months.",
      "Write Candidate Name and Application Form ID on the back of each photo.",
    ],
    sampleFormat: "3.5 cm x 4.5 cm Color Photograph with White Background",
  },

  // ==========================================
  // 3. CATEGORY DOCUMENTS
  // ==========================================
  {
    id: "doc_8",
    category: "category",
    categoryName: "Category Documents",
    title: "Caste Certificate & Caste Validity",
    specification: "Attested Copy (Reserved Category)",
    badgeType: "applicable",
    requiresOriginal: false,
    copyType: "Attested Photocopy",
    icon: UserCheck,
    description:
      "Caste Certificate & Validity Certificate issued by Sub-Divisional Officer (SDO) or Competent Authority.",
    tips: [
      "Mandatory for SC, ST, OBC, VJ/NT, SBC, EWS fee concessions.",
      "Non-Creamy Layer Certificate (current financial year) required for OBC/VJNT.",
    ],
    sampleFormat: "State Government Caste & Validity Certificate",
  },
  {
    id: "doc_9",
    category: "category",
    categoryName: "Category Documents",
    title: "Differently Abled (PWD) Certificate",
    specification: "Attested Copy (If Applicable)",
    badgeType: "applicable",
    requiresOriginal: false,
    copyType: "Attested Photocopy",
    icon: HeartHandshake,
    description:
      "Disability Certificate issued by Civil Surgeon or Authorized Medical Board.",
    tips: [
      "Minimum 40% permanent disability required for claiming PWD quota.",
    ],
    sampleFormat: "UDID Card or Civil Surgeon Medical Certificate",
  },
  {
    id: "doc_10",
    category: "category",
    categoryName: "Category Documents",
    title: "Dependent of Defence Personnel Certificate",
    specification: "Attested Copy (If Applicable)",
    badgeType: "applicable",
    requiresOriginal: false,
    copyType: "Attested Photocopy",
    icon: ShieldAlert,
    description:
      "Certificate issued by Zilla Sainik Welfare Board for children of active or ex-servicemen.",
    tips: [
      "Eligible for defence quota considerations and fee concessions.",
    ],
    sampleFormat: "Defence Service Record / Zilla Sainik Welfare Board Certificate",
  },
  {
    id: "doc_11",
    category: "category",
    categoryName: "Category Documents",
    title: "Gazette Notification for Change in Name",
    specification: "Photocopy of Gazette (If Applicable)",
    badgeType: "applicable",
    requiresOriginal: false,
    copyType: "Photocopy",
    icon: FileSignature,
    description:
      "Official Government Gazette publication or Marriage Certificate in case of name change.",
    tips: [
      "Mandatory if candidate name on Aadhaar differs from 10th marksheet.",
    ],
    sampleFormat: "Official State Government Gazette Copy",
  },
  {
    id: "doc_12",
    category: "category",
    categoryName: "Category Documents",
    title: "Jammu & Kashmir Migrant Certificate",
    specification: "Attested Copy (If Applicable)",
    badgeType: "applicable",
    requiresOriginal: false,
    copyType: "Attested Photocopy",
    icon: HelpCircle,
    description:
      "Certificate issued by Relief Commissioner / DM for displaced Kashmiri Hindu families.",
    tips: [
      "Mandatory for PMSSS or J&K Migrant reservation quota.",
    ],
    sampleFormat: "Relief Commissioner J&K Migration Certificate",
  },

  // ==========================================
  // 4. ADDITIONAL DOCUMENTS
  // ==========================================
  {
    id: "doc_13",
    category: "additional",
    categoryName: "Additional Documents",
    title: "Educational Gap Affidavit",
    specification: "Original Notarized Stamp Paper (If Applicable)",
    badgeType: "applicable",
    requiresOriginal: true,
    copyType: "Original Notarized",
    icon: FileSignature,
    description:
      "Affidavit explaining any gap year between qualifying exam and current admission.",
    tips: [
      "Required if gap is 1 year or more after 12th / Graduation.",
      "Printed on ₹100 Judicial Stamp Paper and notarized by Public Advocate.",
    ],
    sampleFormat: "Notarized Stamp Paper Affidavit signed by candidate & advocate",
  },
  {
    id: "doc_14",
    category: "additional",
    categoryName: "Additional Documents",
    title: "CET / Entrance Exam Scorecard",
    specification: "Photocopy (If Applicable)",
    badgeType: "applicable",
    requiresOriginal: false,
    copyType: "Photocopy",
    icon: Award,
    description:
      "Valid scorecard of MHT-CET, JEE Main, GATE, PERA CET, CAT, or SU-JEE exam.",
    tips: [
      "Required for merit scholarship eligibility or entrance quota seats.",
    ],
    sampleFormat: "Official Scorecard NTA / State CET Cell / Sandip University Entrance",
  },
  {
    id: "doc_15",
    category: "additional",
    categoryName: "Additional Documents",
    title: "Equivalence Certificate (AIU)",
    specification: "Attested Copy (If Applicable)",
    badgeType: "applicable",
    requiresOriginal: false,
    copyType: "Attested Photocopy",
    icon: ShieldCheck,
    description:
      "Association of Indian Universities (AIU) equivalence certificate for foreign/IB boards.",
    tips: [
      "Mandatory for candidates passing from international or foreign boards.",
    ],
    sampleFormat: "AIU Equivalence Certificate",
  },
];

export const BEFORE_YOU_VISIT_NOTES = [
  {
    id: "original_docs",
    icon: "📄",
    title: "Original Documents",
    subtitle: "Permanent Retention",
    desc: "Original Transfer Certificate (TC) and Migration Certificate will be permanently retained after physical verification. Keep 5-10 copies.",
  },
  {
    id: "passport_photos",
    icon: "📸",
    title: "Passport Photos",
    subtitle: "4 Recent Color Copies",
    desc: "Carry 4 recent color passport size photographs (3.5 cm x 4.5 cm) with a clean white background and name written on back.",
  },
  {
    id: "two_copies",
    icon: "🖨",
    title: "Bring 2 Copies",
    subtitle: "Self-Attested Photocopies",
    desc: "Submit 2 complete sets of self-attested photocopies of all required marksheets and certificates alongside originals.",
  },
  {
    id: "foreign_students",
    icon: "🌍",
    title: "Foreign Students",
    subtitle: "Equivalence & Visa Norms",
    desc: "Foreign and NRI candidates require AIU Equivalence Certificate, valid Student Visa, and UGC/AICTE compliance.",
  },
];

export const FAQ_ITEMS = [
  {
    id: "faq_1",
    question: "Can I submit self-attested photocopies instead of gazetted attestation?",
    answer:
      "Yes, self-attested photocopies (signed by the candidate) are accepted for initial document submission. However, original marksheets and certificates must be presented at the campus desk for physical cross-verification.",
  },
  {
    id: "faq_2",
    question: "How many passport size photographs are required?",
    answer:
      "You must bring 4 recent color passport-size photographs (3.5 cm x 4.5 cm) with a plain white background. Write your full name and application number on the back of each photo.",
  },
  {
    id: "faq_3",
    question: "Can I upload missing documents online later after provisional admission?",
    answer:
      "Yes! Candidates missing non-mandatory certificates (such as Educational Gap Affidavit or Migration Certificate) are granted a 10-day grace period post-allotment to submit or upload them on the student portal.",
  },
  {
    id: "faq_4",
    question: "Is the Migration Certificate compulsory for all candidates?",
    answer:
      "Migration Certificate is compulsory only for candidates who completed their qualifying examination from a Board or University outside the State of Maharashtra.",
  },
];

export const ADMISSION_CONTACT = {
  phone: "1800-212-2714",
  altPhone: "+91-2594-222555",
  email: "admissions@sandipuniversity.edu.in",
  address: "Sandip University Campus, Trimbak Road, Nashik, Maharashtra - 422213",
  timing: "Monday to Saturday: 9:00 AM - 6:00 PM (IST)",
};
