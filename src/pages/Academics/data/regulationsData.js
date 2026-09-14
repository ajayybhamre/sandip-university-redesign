const regulationsData = {
  header: {
    title: "Academic Regulations",
    intro:
      "The academic framework governing every programme at Sandip University — credits, course categories, attendance, registration, and the standards of academic integrity.",
  },
  intro:
    "These regulations apply to all programmes under the Choice Based Credit System (CBCS). The summaries below cover the sections students reference most; the complete regulatory text is available as a download.",
  topics: [
    {
      title: "Credit System Basics",
      highlight: "Minimum Credits + Required Courses = Programme Completion",
      intro:
        "Sandip University follows the Choice Based Credit System (CBCS) for applicable programmes. Students earn credits by successfully completing courses prescribed in their programme curriculum.",
      bullets: [
        "1 credit = 15 hours of lecture/tutorial, or a minimum of 30 hours of laboratory, practical, field work, training, or project work.",
        "Students must fulfil both the minimum credit requirement and the prescribed course-category requirements to complete their programme.",
        "Completing the required number of credits alone is not sufficient if mandatory University Core (UC), Programme Core (PC), or Programme Elective (PE) requirements remain incomplete.",
      ],
    },
    {
      title: "Course Types",
      intro: "Courses are organised into categories that balance structured learning with academic flexibility.",
      subsections: [
        {
          heading: "University Core (UC)",
          text: "Mandatory courses that provide knowledge beyond the student's main discipline. Internships, projects, and certain common academic activities may form part of UC requirements.",
        },
        {
          heading: "Programme Core (PC)",
          text: "Compulsory courses specific to the programme. All PC courses must be completed and cannot be substituted.",
        },
        {
          heading: "Programme Elective (PE)",
          text: "Specialised or advanced courses that allow students to explore areas related to their programme.",
        },
        {
          heading: "Open Elective (OE)",
          text: "Courses students may choose across disciplines, according to their interests and the academic framework of their programme.",
        },
      ],
    },
    {
      title: "Attendance",
      highlight: "Minimum Attendance: 80%",
      intro:
        "Students are expected to maintain 100% attendance in all courses. Considering illness and emergency situations, students are permitted up to 20% absence, making 80% the minimum requirement under these regulations.",
      bullets: [
        "Attendance is monitored through the University's attendance system.",
        "Students falling below the minimum attendance requirement may be barred from the next evaluation component.",
        "Students with CGPA ≥ 8.00 and no current supplementary courses may receive an additional 10% relaxation for participating in approved seminars, conferences, workshops, and training programmes, subject to the regulation.",
        "Prolonged absence beyond the permitted limit may result in a Break of Study.",
      ],
    },
    {
      title: "Registration Windows",
      highlight: "Late Registration: Up to 21 Days",
      intro: "Course registration is mandatory every semester for the courses a student intends to study.",
      bullets: [
        "Registration is conducted on dates announced by the respective School.",
        "Students with outstanding university dues cannot register.",
        "Late registration may be permitted for valid reasons for up to 21 calendar days from the beginning of the semester, with approval and the applicable late-registration fee.",
        "Students must obtain the required academic approval for registration.",
        "Failure to register in a semester may make the student's studentship liable to cancellation.",
        "The normal academic load is around 20–24 credits per semester, depending on the programme.",
        "Students may register for 16 to 36 credits in a regular semester, subject to the applicable rules.",
      ],
    },
    {
      title: "Add / Drop Courses",
      highlight: "Add / Drop Window: First 10 Instructional Days",
      intro:
        "Students may add or drop courses during the first 10 instructional days of a regular semester, subject to credit limits and resource availability.",
      bullets: [
        "Courses registered after the Add/Drop period are treated as final for the semester.",
        "Dropped courses do not appear on the semester Grade Sheet.",
        "A dropped course may be taken in a later semester.",
        "Current-semester supplementary courses cannot be dropped.",
        "There is no re-registration fee for registering a previously dropped course again under this regulation.",
      ],
    },
    {
      title: "Academic Integrity & Malpractice",
      highlight: "Maintain Academic Integrity",
      intro:
        "Students are expected to maintain academic integrity and discipline in all examinations and academic activities. Academic malpractice is investigated by the University's Malpractice Committee, and can affect examination eligibility and academic progression.",
      // Kept deliberately brief here rather than listing every possible
      // penalty — see detailAction below.
      detailAction: { label: "View detailed rules (PDF)", url: "https://www.sandipuniversity.edu.in/academics/images/SUN-Academic-Regulations.pdf" },
    },
    {
      title: "Promotion, Programme Completion & Degree",
      intro: "Students must complete the required courses, credits, and programme requirements within the prescribed period.",
      subsections: [
        {
          heading: "Academic Progress",
          text: "Students whose academic performance falls below the prescribed threshold may be placed under academic probation and may receive guidance on pacing their programme.",
        },
        {
          heading: "Programme Completion",
          bullets: [
            "The programme is completed only after all required courses and credits are successfully cleared.",
            "Mandatory UC, PC, and PE requirements must also be fulfilled.",
            "Students with pending supplementary courses may receive the additional completion period permitted under the regulations.",
            "The regulation specifies an additional three-year grace period in applicable cases, subject to the stated approval conditions.",
          ],
        },
        {
          heading: "Degree Award",
          text: "After successfully completing the required course and credit requirements, eligible students receive a Provisional Certificate. The degree is formally conferred at the subsequent Convocation.",
        },
      ],
    },
  ],
  download: {
    label: "Download the complete Academic Regulations (PDF)",
    url: "https://www.sandipuniversity.edu.in/academics/images/SUN-Academic-Regulations.pdf",
  },
};

export default regulationsData;