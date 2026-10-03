/*
  Result permalinks live on THIS site: /exams/results/<slug>
  Each one opens the redesigned lookup page (pages/Exams/ResultLookup.jsx), whose form
  submits to `legacyUrl` (the university result portal). Items with isPdf open the PDF directly.
  When a result moves to a new portal, change only `legacyUrl` here — the public
  link (/exams/results/<slug>) never changes.
*/
const old = "https://www.sandipuniversity.edu.in";

export const RESULTS_BASE = "/exams/results";

export const resultGroups = [
  {
    label: "Latest",
    items: [
      {
        slug: "end-semester-examinations-result",
        title: "End Semester Examinations Result",
        date: "Latest",
        legacyUrl: `${old}/result/display_new.php`,
        isNew: true,
        featured: true,
      },
      {
        slug: "phd-coursework-feb-2026",
        title: "Ph.D. Course Work Examination — FEB 2026",
        date: "12 May 2026",
        legacyUrl: `${old}/result/display_phd.php?exam=120526P`,
        isNew: true,
      },
    ],
  },
  {
    label: "2025",
    items: [
      {
        slug: "socse-soet-ug-pg-ese-may-2025",
        title: "SoCSE and SoET — UG/PG — All semesters, all branches — ESE MAY 2025",
        date: "25 Jul 2025",
        legacyUrl: `${old}/result/display.php?exam=07202502D`,
      },
      {
        slug: "socse-soet-btech-8th-sem-ese-may-2025",
        title: "SoCSE and SoET — B.Tech Eighth Semester, all branches — ESE MAY 2025",
        date: "18 Jul 2025",
        legacyUrl: `${old}/result/display.php?exam=157052`,
      },
      {
        slug: "sops-sos-sol-socms-ese-may-2025",
        title: "SOPS, SOS, SOL, SOCMS — End Semester Examinations MAY 2025",
        date: "12 Jul 2025",
        legacyUrl: `${old}/result/display.php?exam=All112507`,
      },
      {
        slug: "socsa-bca-mca-bsc-aiml-ese-may-2025",
        title: "SoCSA — BCA / MCA / BSc AIML — End Semester Examinations MAY 2025",
        date: "12 Jul 2025",
        legacyUrl: `${old}/result/display.php?exam=07202502S`,
      },
      {
        slug: "sod-ese-may-2025",
        title: "SOD — End Semester Examinations MAY 2025",
        date: "02 Jul 2025",
        legacyUrl: `${old}/result/display.php?exam=07202502D`,
      },
      {
        slug: "phd-coursework-feb-2025",
        title: "Ph.D. Course Work Examination — FEB 2025",
        date: "18 Apr 2025",
        legacyUrl: `${old}/result/display_phd.php?exam=170425P`,
      },
    ],
  },
  {
    label: "Archive (2020–21)",
    items: [
      {
        slug: "sunpet-2020",
        title: "SUNPET 2020 Result",
        date: "30 Mar 2021",
        legacyUrl: `${old}/pdf/416-Final-result-SUNPET-2020.pdf`,
        isPdf: true,
      },
      {
        slug: "phd-coursework-nov-2020",
        title: "Ph.D. Course Work Examination — NOV 2020",
        date: "26 Feb 2021",
        legacyUrl: `${old}/result/display_phd.php`,
      },
    ],
  },
];

export const findResult = (slug) =>
  resultGroups.flatMap((g) => g.items).find((r) => r.slug === slug);

export const resultPath = (slug) => `${RESULTS_BASE}/${slug}`;
