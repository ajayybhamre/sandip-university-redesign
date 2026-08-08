// Sandip University Complete Admission Documents Dataset

export const DOCUMENT_CATEGORIES = [
  {
    id: "academic",
    name: "Academic Documents",
    description: "Official marksheets, passing certificates, and transcripts from qualifying examinations.",
    bgClass: "bg-blue-50/70",
    borderClass: "border-t-4 border-t-blue-500 border-blue-200",
    textClass: "text-blue-700",
    progressClass: "from-blue-500 to-[#0F1B2B]"
  },
  {
    id: "identity",
    name: "Identity Documents",
    description: "Government-issued identity cards, nationality proof, and address verification documents.",
    bgClass: "bg-purple-50/70",
    borderClass: "border-t-4 border-t-purple-500 border-purple-200",
    textClass: "text-purple-700",
    progressClass: "from-purple-500 to-[#0F1B2B]"
  },
  {
    id: "category",
    name: "Category Documents",
    description: "Certificates required for reservation quotas, fee concessions, and special categories.",
    bgClass: "bg-amber-50/70",
    borderClass: "border-t-4 border-t-amber-500 border-amber-200",
    textClass: "text-amber-700",
    progressClass: "from-amber-500 to-[#0F1B2B]"
  },
  {
    id: "additional",
    name: "Additional Documents",
    description: "Supplementary certificates, gap affidavits, medical fitness, and domicile records.",
    bgClass: "bg-teal-50/70",
    borderClass: "border-t-4 border-t-teal-500 border-teal-200",
    textClass: "text-teal-700",
    progressClass: "from-teal-500 to-[#0F1B2B]"
  }
];

export const DOCUMENTS_MASTER_LIST = [
  // --- 1. ACADEMIC DOCUMENTS ---
  {
    id: "acad-1",
    category: "academic",
    name: "Qualifying Examination Certificate",
    required: true,
    description: "Official 10th (SSC) & 12th (HSC) or qualifying diploma passing certificate issued by recognized Board.",
    notes: "Must present original certificate along with two self-attested photocopies during physical campus verification."
  },
  {
    id: "acad-2",
    category: "academic",
    name: "Degree Certificate",
    required: true,
    description: "Bachelor's or Master's degree passing certificate for postgraduate and Ph.D. applicants.",
    notes: "Provisional degree certificate accepted if final convocation degree is pending."
  },
  {
    id: "acad-3",
    category: "academic",
    name: "College / School Leaving Certificate (TC)",
    required: true,
    description: "Original Transfer Certificate (TC) or Leaving Certificate from the institution last attended.",
    notes: "Mandatory original document submission. Photocopies will not be accepted for TC."
  },
  {
    id: "acad-4",
    category: "academic",
    name: "Mark Sheet / Transcript",
    required: true,
    description: "Semester-wise statement of marks for all qualifying examinations.",
    notes: "All semester marksheets must be verified. Backlog marksheets must also be produced."
  },
  {
    id: "acad-5",
    category: "academic",
    name: "Migration Certificate",
    required: false,
    description: "Migration certificate issued by previous Board or University outside Maharashtra State.",
    notes: "Compulsory only for non-Maharashtra State Board candidates. 15-day submission grace period granted."
  },

  // --- 2. IDENTITY DOCUMENTS ---
  {
    id: "ident-1",
    category: "identity",
    name: "Aadhaar Card",
    required: true,
    description: "Clear photocopy of Government of India issued Aadhaar Card displaying 12-digit UID number.",
    notes: "Name on Aadhaar card must match academic marksheets exactly."
  },
  {
    id: "ident-2",
    category: "identity",
    name: "PAN Card",
    required: false,
    description: "Permanent Account Number (PAN) card of student or parent for financial records.",
    notes: "Recommended for scholarship applications and fee payment receipting."
  },
  {
    id: "ident-3",
    category: "identity",
    name: "Passport",
    required: false,
    description: "Valid Indian or International Passport for identity verification and international exchanges.",
    notes: "Mandatory for NRI / OCI / Foreign National candidates along with valid Student Visa."
  },
  {
    id: "ident-4",
    category: "identity",
    name: "Driving License",
    required: false,
    description: "Government-issued driving permit copy as valid photo identity proof.",
    notes: "Optional secondary identity verification document."
  },
  {
    id: "ident-5",
    category: "identity",
    name: "Voter ID / Election Card",
    required: false,
    description: "Elector's Photo Identity Card (EPIC) issued by Election Commission of India.",
    notes: "Optional address and identity verification proof."
  },

  // --- 3. CATEGORY DOCUMENTS ---
  {
    id: "cat-1",
    category: "category",
    name: "Caste Certificate & Validity",
    required: false,
    description: "Caste Certificate and Caste Validity Certificate issued by Competent Revenue Authority of Maharashtra.",
    notes: "Required for SC, ST, OBC, VJ/NT, SBC candidates claiming fee concessions or reserved seat quota."
  },
  {
    id: "cat-2",
    category: "category",
    name: "Income Certificate",
    required: false,
    description: "Annual family income certificate issued by Tehsildar for EBC / Freeship scholarship eligibility.",
    notes: "Income certificate must be valid for financial year 2025–26."
  },
  {
    id: "cat-3",
    category: "category",
    name: "Disability Certificate (PwD)",
    required: false,
    description: "Disability certificate issued by Civil Surgeon or Authorized Medical Board (minimum 40% disability).",
    notes: "Qualifies candidate for specialized campus accessibility support and quota benefits."
  },

  // --- 4. ADDITIONAL DOCUMENTS ---
  {
    id: "add-1",
    category: "additional",
    name: "Gap Certificate",
    required: false,
    description: "Notarized affidavit on ₹100 Stamp Paper explaining any academic gap of 1 year or more post-qualifying exam.",
    notes: "Format draft available at the University Admission Helpdesk."
  },
  {
    id: "add-2",
    category: "additional",
    name: "Medical Fitness Certificate",
    required: false,
    description: "Certificate of physical fitness issued by Registered Medical Practitioner (MBBS).",
    notes: "Required prior to hostel room allotment and sports facility access."
  },
  {
    id: "add-3",
    category: "additional",
    name: "NRI Certificate",
    required: false,
    description: "NRI sponsorship affidavit and embassy verification certificate for international quota seats.",
    notes: "Must include sponsor's passport copy and bank statement."
  },
  {
    id: "add-4",
    category: "additional",
    name: "Domicile Certificate",
    required: false,
    description: "Domicile certificate issued by Maharashtra State Revenue Department establishing state domicile.",
    notes: "Mandatory for State Quota seats under Maharashtra DTE CAP CAP allotment."
  },
  {
    id: "add-5",
    category: "additional",
    name: "Sports Certificate",
    required: false,
    description: "District, State, or National level athletic representation certificate issued by recognized sports federation.",
    notes: "Qualifies candidate for up to 25% Sports Scholarship fee waiver."
  }
];

export const DOCUMENT_FAQS = [
  {
    question: "Can I submit self-attested photocopies during initial verification?",
    answer: "Yes, self-attested photocopies are accepted for initial document submission. However, original marksheets and certificates must be presented at the campus desk for physical cross-checking."
  },
  {
    question: "How many passport size photographs are required?",
    answer: "You must bring 4 recent color passport-size photographs (3.5 cm x 4.5 cm) with a plain white background. Write your full name and application ID on the back of each photo."
  },
  {
    question: "What if I am missing a conditional document at the time of admission?",
    answer: "Candidates missing non-mandatory documents (such as Gap Affidavit or Migration Certificate) are granted a 15-day grace period post-allotment to submit them at the admissions office."
  },
  {
    question: "Is the Migration Certificate compulsory for all candidates?",
    answer: "Migration Certificate is compulsory only for candidates who passed their qualifying examination from a Board or University located outside the State of Maharashtra."
  }
];
