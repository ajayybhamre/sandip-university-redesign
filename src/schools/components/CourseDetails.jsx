// Route entry for /schools/:schoolSlug and /schools/:schoolSlug/:courseSlug.
// It only decides which page to show; the pages themselves live in their own files.

import { useParams } from "react-router-dom";

import { getProgramDetails } from "../data/courseDetailsData";
import ProgrammeNotFound from "../programme/ProgrammeNotFound";
import ProgrammePage from "../programme/ProgrammePage";
import SchoolDetails from "./SchoolDetails";

export default function CourseDetails() {
  const { schoolSlug, courseSlug } = useParams();

  if (!courseSlug) return <SchoolDetails schoolSlug={schoolSlug} />;

  const programme = getProgramDetails(schoolSlug, courseSlug);
  return programme ? <ProgrammePage programme={programme} /> : <ProgrammeNotFound />;
}
