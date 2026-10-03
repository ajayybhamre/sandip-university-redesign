import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import LookupLayout from "./components/LookupLayout";
import LookupForm from "./components/LookupForm";
import { findResult } from "./data/results";
import { PORTAL_FORM } from "./data/resultForm";

/* /exams/results/:slug — redesigned result lookup (PRN + date of birth) */
export default function ResultLookup() {

  const { slug } = useParams();
  const result = findResult(slug);

  // Archive items that are plain PDFs open directly
  useEffect(() => {
    if (result?.isPdf) window.location.replace(result.legacyUrl);
  }, [result]);

  if (!result) return <Navigate to="/exams?tab=results" replace />;
  if (result.isPdf) return null;

  return (
    <LookupLayout
      badge="Examination Results"
      title="Results"
      description="Enter your PRN and date of birth to view your examination result."
      currentPage="Results"
      heading={result.title}
      intro="Enter your PRN and date of birth (dd-mm-yyyy) exactly as in your university records. Your result opens in a new tab."
    >
      <LookupForm
        action={result.legacyUrl}
        method={PORTAL_FORM.method}
        prnField={PORTAL_FORM.prnField}
        dobField={PORTAL_FORM.dobField}
        submitLabel="View Result"
      />
    </LookupLayout>
  );
}
