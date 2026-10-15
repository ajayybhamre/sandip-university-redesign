const base = "/exam-docs/how-to-apply";
const ERP_URL = "https://erp.sandipuniversity.com/login/index/student";

/*
  Mirrors the Examination SOPs table: each row can have
  sop (procedure PDF), form (application PDF) and online ({ label, url }).
*/
const howToApply = [
  {
    no: 1,
    title: "General Instructions",
    sop: `${base}/Website-How-to-Apply.pdf`,
  },
  {
    no: 2,
    title: "SOPs for Appearing Examination",
    sop: `${base}/SOPs-for-Appearing-Examination.pdf`,
  },
  {
    no: 3,
    title: "Applying for Transcript Certificate",
    sop: `${base}/SOPs-for-Student-Examination-Activities1.pdf`,
    form: `${base}/Application-for-Transcript.pdf`,
    online: {
      label: "Apply Online",
      to: "/exams/transcript-application",
    },
  },
  {
    no: 4,
    title: "Applying for Degree Certificate",
    form: `${base}/Application-Form-for-Degree-Certificate.pdf`,
    online: {
      label: "Apply Online",
      to: "/exams/transcript-application",
    },
  },
  {
    no: 5,
    title: "Applying for Duplicate / Degree-Diploma Certificate / Statement of Grades",
    form: `${base}/Application-for-Duplicate--Degree_Diploma_Certificate_Grade-sheet.pdf`,
    online: {
      label: "Apply Online",
      to: "/exams/transcript-application",
    },
  },
  {
    no: 6,
    title: "Applying for Correction in Degree-Diploma Certificate / Statement of Grades",
    form: `${base}/Application-for--Corrections-Degree_Diploma_Certificate_Grade-sheet.pdf`,
    online: {
      label: "Apply Online",
      to: "/exams/transcript-application",
    },
  },
  {
    no: 7,
    title: "Applying for Photocopy of Answer Sheet (through Student ERP Portal)",
    online: { label: "Student ERP", url: ERP_URL },
  },
  {
    no: 8,
    title: "Applying for Revaluation of Answer Sheet (through Student ERP Portal)",
    online: { label: "Student ERP", url: ERP_URL },
  },
  {
    no: 9,
    title: "Academic Malpractice",
    sop: `${base}/Academic-Malpractice.pdf`,
  },
  {
    no: 10,
    title: "SOPs for Certificate Verification",
    sop: `${base}/SOPs-for-Agency-Verification-new.pdf`,
  },
];

export default howToApply;
