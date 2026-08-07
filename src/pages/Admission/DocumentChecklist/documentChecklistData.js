// Single source of truth for Sandip University Document Checklist Data

export const CHECKLIST_SECTIONS = [
  { id: "academic", label: "Academic" },
  { id: "identity", label: "Identity" },
  { id: "category", label: "Category" },
  { id: "additional", label: "Additional" },
  { id: "faq", label: "FAQ" },
];

export const CHECKLIST_DOCUMENTS = [
  // --- Academic Section ---
  {
    id: "academic-10th-12th-marksheet",
    section: "academic",
    title: "Qualifying examination marksheets (10th & 12th)",
    status: "mandatory", // 'mandatory' | 'conditional'
    copyType: "original", // 'original' | 'photocopy'
    description: "Official statement of marks for 10th (SSC) and 12th (HSC) or qualifying diploma exam.",
    iconType: "certificate", // 'file' | 'id-card' | 'certificate' | 'photo'
    hasDetailedModal: false,
  },
  {
    id: "academic-degree-certificate",
    section: "academic",
    title: "Degree passing certificate",
    status: "mandatory",
    copyType: "photocopy",
    description: "Official passing certificate or degree completion certificate issued by recognized board or university.",
    iconType: "certificate",
    hasDetailedModal: false,
  },
  {
    id: "academic-transfer-certificate",
    section: "academic",
    title: "School / college leaving certificate (TC)",
    status: "mandatory",
    copyType: "original",
    description: "Original Transfer Certificate (TC) or Leaving Certificate from the institution last attended.",
    iconType: "file",
    hasDetailedModal: false,
  },
  {
    id: "academic-migration-certificate",
    section: "academic",
    title: "Migration certificate",
    status: "conditional",
    copyType: "original",
    description: "Required for candidates passing from board or university located outside Maharashtra state.",
    iconType: "file",
    hasDetailedModal: false,
  },

  // --- Identity Section ---
  {
    id: "identity-aadhaar-card",
    section: "identity",
    title: "Aadhaar identity card",
    status: "mandatory",
    copyType: "photocopy",
    description: "Clear photocopy of Government of India issued Aadhaar Card showing student UID number.",
    iconType: "id-card",
    hasDetailedModal: false,
  },
  {
    id: "identity-domicile-certificate",
    section: "identity",
    title: "Domicile and nationality certificate",
    status: "mandatory",
    copyType: "photocopy",
    description: "Certificate issued by Executive Magistrate or Revenue Department establishing domicile and nationality.",
    iconType: "id-card",
    hasDetailedModal: false,
  },
  {
    id: "identity-passport-photographs",
    section: "identity",
    title: "Recent passport size photographs",
    status: "mandatory",
    copyType: "original",
    description: "Four recent color photographs (3.5 cm x 4.5 cm) with white background and candidate name written on reverse.",
    iconType: "photo",
    hasDetailedModal: false,
  },

  // --- Category Section ---
  {
    id: "category-caste-certificate",
    section: "category",
    title: "Caste and caste validity certificate",
    status: "conditional",
    copyType: "photocopy",
    description: "Required for SC, ST, OBC, VJ/NT, SBC, and EWS candidates claiming fee concessions or reserved seat quotas.",
    iconType: "certificate",
    hasDetailedModal: false,
  },
  {
    id: "category-disability-certificate",
    section: "category",
    title: "Persons with disability (PWD) certificate",
    status: "conditional",
    copyType: "photocopy",
    description: "Disability certificate issued by Civil Surgeon or Authorized Medical Board (minimum 40% disability).",
    iconType: "file",
    hasDetailedModal: false,
  },
  {
    id: "category-defence-certificate",
    section: "category",
    title: "Defence personnel dependent certificate",
    status: "conditional",
    copyType: "photocopy",
    description: "Certificate issued by Zilla Sainik Welfare Board for children of active or ex-servicemen personnel.",
    iconType: "file",
    hasDetailedModal: false,
  },
  {
    id: "category-gazette-name-change",
    section: "category",
    title: "Government gazette for name change",
    status: "conditional",
    copyType: "photocopy",
    description: "Official Gazette publication copy if the candidate's legal name differs between Aadhaar and marksheets.",
    iconType: "file",
    hasDetailedModal: false,
  },
  {
    id: "category-kashmiri-migrant",
    section: "category",
    title: "Jammu and Kashmir migrant certificate",
    status: "conditional",
    copyType: "photocopy",
    description: "Displaced Kashmiri family certificate issued by Relief Commissioner or District Magistrate.",
    iconType: "file",
    hasDetailedModal: false,
  },

  // --- Additional Section ---
  {
    id: "additional-gap-affidavit",
    section: "additional",
    title: "Educational gap affidavit",
    status: "conditional",
    copyType: "original",
    description: "Notarized affidavit on ₹100 Judicial Stamp Paper explaining any gap of 1 year or more post-qualifying exam.",
    iconType: "file",
    hasDetailedModal: false,
  },
  {
    id: "additional-entrance-scorecard",
    section: "additional",
    title: "Entrance examination scorecard",
    status: "conditional",
    copyType: "photocopy",
    description: "Valid scorecard of MHT-CET, JEE Main, GATE, PERA CET, or SU-JEE entrance exam.",
    iconType: "certificate",
    hasDetailedModal: false,
  },
  {
    id: "additional-equivalence-certificate",
    section: "additional",
    title: "AIU equivalence certificate",
    status: "conditional",
    copyType: "photocopy",
    description: "Association of Indian Universities (AIU) certificate for candidates passing from international or foreign boards.",
    iconType: "certificate",
    hasDetailedModal: true, // Special document needing multi-format detailed modal preview
    modalDetails: {
      title: "AIU Equivalence Certificate Guidelines",
      acceptedFormats: [
        "Official AIU Equivalence Certificate (Original + Attested Copy)",
        "Association of Indian Universities Evaluation Statement",
        "Embassy Student Verification Letter (for Foreign Nationals)",
      ],
      notes: [
        "Mandatory for Cambridge International (IGCSE/A-Levels), International Baccalaureate (IB), and foreign school boards.",
        "Foreign nationals must also submit student visa, valid passport, and NOC.",
      ],
    },
  },
];

export const CHECKLIST_FAQS = [
  {
    id: "faq-1",
    question: "Can I submit self-attested photocopies during initial verification?",
    answer: "Yes, self-attested photocopies are accepted for initial document submission. However, original marksheets and certificates must be presented at the campus verification desk for physical cross-checking.",
  },
  {
    id: "faq-2",
    question: "How many passport size photographs are required?",
    answer: "You must submit 4 recent color passport-size photographs (3.5 cm x 4.5 cm) with a plain white background. Write your candidate name and application ID on the back of each photo.",
  },
  {
    id: "faq-3",
    question: "What if I am missing a conditional document at the time of admission?",
    answer: "Candidates missing non-mandatory documents (such as Gap Affidavit or Migration Certificate) are granted a 10-day grace period post-allotment to submit them at the admissions office.",
  },
  {
    id: "faq-[#4]",
    id: "faq-4",
    question: "Is the Migration Certificate compulsory for all candidates?",
    answer: "Migration Certificate is compulsory only for candidates who passed their qualifying examination from a Board or University outside the State of Maharashtra.",
  },
];
