const base = "/exam-docs/timetables";

const schools = {
  SOET: "School of Engineering & Technology",
  SOCSE: "School of Computer Sciences & Engineering",
  SOCMS: "School of Commerce & Management Studies",
  SOD: "School of Design",
  SOL: "School of Law",
  SOPS: "School of Pharmaceutical Sciences",
  SOS: "School of Science",
};

const make = (code, session, pages, size, note) => ({
  code,
  name: schools[code],
  file: `${base}/${code}-${session}.pdf`,
  pages,
  size,
  note,
});

/* size is shown on the card so students know before opening large files */
const timetableSessions = [
  {
    id: "may-2026",
    label: "End Semester — MAY 2026",
    items: [
      make("SOET", "MAY-2026", 46, "1 MB"),
      make("SOCSE", "MAY-2026", 28, "0.2 MB"),
      make("SOCMS", "MAY-2026", 36, "4 MB"),
      make("SOD", "MAY-2026", 18, "1.9 MB"),
      make("SOL", "MAY-2026", 26, "3.3 MB"),
      make("SOPS", "MAY-2026", 8, "0.8 MB"),
      make("SOS", "MAY-2026", 20, "2.3 MB"),
    ],
  },
  {
    id: "dec-2025",
    label: "End Semester — DEC 2025",
    items: [
      make("SOET", "DEC-2025", 43, "26 MB"),
      make("SOCSE", "DEC-2025", 25, "18 MB"),
      {
        ...make("SOCMS", "DEC-2025-revised", 18, "9 MB", "Revised 5 Nov 2025"),
      },
      make("SOD", "DEC-2025", 18, "9.6 MB"),
      make("SOL", "DEC-2025", 16, "10.7 MB"),
      make("SOPS", "DEC-2025", 6, "0.3 MB"),
      make("SOS", "DEC-2025", 20, "12 MB"),
    ],
  },
  {
    id: "phd-feb-2026",
    label: "Ph.D. Course Work — FEB 2026",
    items: [
      {
        code: "PhD",
        name: "Ph.D. Course Work End Semester Examination",
        file: `${base}/PhD-Coursework-FEB-2026.pdf`,
        pages: 2,
        size: "0.2 MB",
        note: "Revised",
      },
    ],
  },
];

export default timetableSessions;
