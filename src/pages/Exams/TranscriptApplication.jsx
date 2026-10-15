import LookupLayout from "./components/LookupLayout";
import LookupForm from "./components/LookupForm";
import { TRANSCRIPT_FORM } from "./data/resultForm";

/* /exams/transcript-application — redesigned "Please Enter the PRN No" page */
export default function TranscriptApplication() {
  return (
    <LookupLayout
      badge="Examination"
      title="Apply Online"
      description="Apply online for transcript, degree, duplicate or corrected certificates using your PRN."
      currentPage="Apply Online"
      heading="Apply Online"
      intro="Enter your PRN to begin the online application for your certificate. Keep your documents ready — see the How to Apply tab for the procedure and application form."
    >
      <LookupForm
        action={TRANSCRIPT_FORM.action}
        method={TRANSCRIPT_FORM.method}
        prnField={TRANSCRIPT_FORM.prnField}
        submitLabel="Submit"
      />
    </LookupLayout>
  );
}
