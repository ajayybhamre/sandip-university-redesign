// Sandip University International Student FAQs Dataset

export const INTL_FAQ_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "admissions", label: "Admissions" },
  { id: "programs", label: "Programs" },
  { id: "fees", label: "Fees & Wire Transfer" },
  { id: "documents", label: "Documents" },
  { id: "visa", label: "Visa & Immigration" },
  { id: "hostel", label: "Hostel & Campus Life" },
  { id: "support", label: "International Support" },
  { id: "career", label: "Career & Placements" },
  { id: "parents", label: "For Parents" },
];

export const INTL_FAQS_DATA = [
  // ==================== ADMISSIONS ====================
  {
    id: "adm-1",
    category: "admissions",
    categoryLabel: "Admissions",
    question: "Does Sandip University admit international and NRI students?",
    answer: "Yes, Sandip University welcomes international applicants from across the globe under the International Admissions Quota. Applicants can apply directly through our online International Admissions Portal.",
    keywords: ["international", "nri", "apply", "quota", "foreign"],
    ctaText: "View How to Apply",
    ctaLink: "/international-admission/how-to-apply",
    featured: true,
  },
  {
    id: "adm-2",
    category: "admissions",
    categoryLabel: "Admissions",
    question: "What are the general eligibility criteria for UG and PG programs?",
    answer: "For Undergraduate (UG) programs, applicants must have completed 10+2 / High School Diploma recognized as equivalent to Indian Higher Secondary. For Postgraduate (PG) programs, a recognized Bachelor's Degree in a relevant discipline is required.",
    keywords: ["eligibility", "criteria", "undergraduate", "postgraduate", "qualification"],
    ctaText: "Check Eligibility Rules",
    ctaLink: "/international-admission/how-to-apply",
  },
  {
    id: "adm-3",
    category: "admissions",
    categoryLabel: "Admissions",
    question: "How will I know my application selection status?",
    answer: "Once submitted, the International Admissions Cell evaluates your transcripts within 3 to 5 business days. Qualified candidates receive an official Provisional Offer Letter via email.",
    keywords: ["status", "selection", "offer letter", "provisional"],
  },

  // ==================== PROGRAMS ====================
  {
    id: "prog-1",
    category: "programs",
    categoryLabel: "Programs",
    question: "What is the medium of instruction for all degree programs?",
    answer: "English is the official medium of instruction for all undergraduate, postgraduate, and doctoral degree programs at Sandip University.",
    keywords: ["medium of instruction", "english", "language", "teaching"],
    featured: true,
  },
  {
    id: "prog-2",
    category: "programs",
    categoryLabel: "Programs",
    question: "What degree programs are offered for international applicants?",
    answer: "Sandip University offers B.Tech, M.Tech, BBA, MBA, B.Pharm, M.Pharm, BA LL.B, B.Sc, and International Foundation Program (IFP) specializations across 7 specialized schools.",
    keywords: ["programs", "courses", "degrees", "btech", "mba", "pharmacy"],
    ctaText: "Explore All Programs",
    ctaLink: "/international-admission/programs",
  },

  // ==================== FEES & WIRE TRANSFER ====================
  {
    id: "fee-1",
    category: "fees",
    categoryLabel: "Fees & Wire Transfer",
    question: "How can I pay my tuition fee via International Wire Transfer?",
    answer: "You can initiate a Telegraphic Transfer (TT) / SWIFT wire transfer from your local bank using Sandip University's official ICICI Bank SWIFT Code (ICICINBBXXX) and Account Number (002705012548). Always include your Applicant ID in the memo.",
    keywords: ["fee", "wire transfer", "swift", "bank", "icici", "payment"],
    ctaText: "View Wire Transfer Details",
    ctaLink: "/international-admission/how-to-apply#wire-transfer-details",
    featured: true,
  },
  {
    id: "fee-2",
    category: "fees",
    categoryLabel: "Fees & Wire Transfer",
    question: "Are scholarships available for international students?",
    answer: "Yes, merit-based tuition fee waivers and international scholar scholarships are available for deserving candidates based on academic transcripts and early application submission.",
    keywords: ["scholarship", "financial aid", "waiver", "discount"],
    featured: true,
  },

  // ==================== DOCUMENTS ====================
  {
    id: "doc-1",
    category: "documents",
    categoryLabel: "Documents",
    question: "Which documents are compulsory for international admission?",
    answer: "Compulsory documents include: 1) Valid Passport copy, 2) High School / Bachelor's Marksheets & Certificates, 3) Passport-size Photographs, 4) English Medium of Instruction proof, and 5) AIU Equivalence Certificate.",
    keywords: ["documents", "passport", "transcripts", "checklist", "aiu"],
    ctaText: "View Required Documents",
    ctaLink: "/international-admission/how-to-apply#document-checklist",
    featured: true,
  },
  {
    id: "doc-2",
    category: "documents",
    categoryLabel: "Documents",
    question: "What is an AIU Equivalence Certificate and how do I obtain it?",
    answer: "The Association of Indian Universities (AIU), New Delhi issues equivalence certificates for foreign academic qualifications. The Sandip International Desk assists admitted students with AIU processing upon arrival.",
    keywords: ["aiu", "equivalence", "certificate", "association of indian universities"],
  },

  // ==================== VISA & IMMIGRATION ====================
  {
    id: "visa-1",
    category: "visa",
    categoryLabel: "Visa & Immigration",
    question: "Does Sandip University assist with Indian Student Visa processing?",
    answer: "Yes, upon confirming your admission, Sandip University issues official Visa Support Letters and Final Admission Letters required by the Indian Embassy / High Commission in your home country.",
    keywords: ["visa", "immigration", "embassy", "frro", "passport"],
    featured: true,
  },
  {
    id: "visa-2",
    category: "visa",
    categoryLabel: "Visa & Immigration",
    question: "What is FRRO Registration and is it compulsory?",
    answer: "Foreign Regional Registration Office (FRRO) registration is mandatory for foreign nationals residing in India on a student visa longer than 180 days. The International Student Cell assists with online FRRO filing within 14 days of arrival.",
    keywords: ["frro", "registration", "immigration", "police verification"],
  },

  // ==================== HOSTEL & CAMPUS LIFE ====================
  {
    id: "hos-1",
    category: "hostel",
    categoryLabel: "Hostel & Campus Life",
    question: "Is hostel accommodation available for international students?",
    answer: "Yes, Sandip University provides dedicated on-campus AC and Non-AC international hostels equipped with 24/7 security, high-speed Wi-Fi, laundry, and hygienic dining canteens.",
    keywords: ["hostel", "accommodation", "living", "canteen", "ac room"],
    featured: true,
  },
  {
    id: "hos-2",
    category: "hostel",
    categoryLabel: "Hostel & Campus Life",
    question: "Are international dietary requirements accommodated in campus canteens?",
    answer: "Yes, campus dining canteens offer diverse food options including vegetarian, non-vegetarian, and continental meals prepared under strict hygiene standards.",
    keywords: ["food", "canteen", "dining", "meals", "halal"],
  },

  // ==================== INTERNATIONAL SUPPORT ====================
  {
    id: "sup-1",
    category: "support",
    categoryLabel: "International Support",
    question: "What support services are provided by the International Desk?",
    answer: "The International Desk provides 24/7 support including airport reception, campus orientation, SIM card assistance, banking setup, local police reporting, and academic mentoring.",
    keywords: ["support", "international desk", "orientation", "airport pickup"],
  },

  // ==================== CAREER & PLACEMENTS ====================
  {
    id: "car-1",
    category: "career",
    categoryLabel: "Career & Placements",
    question: "Does Sandip University provide internship and placement assistance?",
    answer: "Yes, the Corporate Relations Cell offers 100% placement training, resume workshops, and campus placement drives with over 200+ global hiring partners.",
    keywords: ["career", "placements", "jobs", "internships", "companies"],
  },

  // ==================== FOR PARENTS ====================
  {
    id: "par-1",
    category: "parents",
    categoryLabel: "For Parents",
    question: "How is student safety and campus security maintained?",
    answer: "The campus features 24/7 CCTV surveillance, gated security checkpoints, biometric hostel access, female wardens, and an on-campus 24/7 medical center with ambulance services.",
    keywords: ["parents", "safety", "security", "cctv", "medical", "hospital"],
  },
];
