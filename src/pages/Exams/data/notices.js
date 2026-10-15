const base = "/exam-docs/notices";

/* Newest first. `date` is ISO (YYYY-MM-DD). */
const notices = [
  {
    id: "circular-099r",
    type: "Circular",
    date: "2026-09-22",
    ref: "SUN/CoE/ESE/OCT-NOV 2026/099R",
    title:
      "Examination Forms for End Semester Examination (ESE) OCT-NOV 2026 (Regulation 2017/2023)",
    summary:
      "Form-filling dates, late fees, hall ticket dispatch and commencement of practical and theory exams for Session-I and Session-II.",
    file: `${base}/Circular-099R-ESE-OCT-NOV-2026.pdf`,
    isNew: true,
  },
  {
    id: "reschedule-nybie02",
    type: "Notification",
    date: "2026-05-28",
    ref: "SUN/COE/NOTIFICATION-ESE_22 MAY 26/965",
    title:
      "Rescheduling / Re-conduct of ESE MAY-2026 — NYBIE02 International Financial Management",
    summary:
      "Re-examination on Monday, 08 June 2026, 10:00 AM to 1:00 PM. The exam held on 22 May 2026 stands cancelled.",
    file: `${base}/Reschedule-Order-NYBIE02-8-June-2026.pdf`,
  },
];

export default notices;
