/*
  The result pages and the PRN search page are forms handled by the university's
  existing PHP portal. The new pages below only replace the *look* of those forms;
  on submit the browser POSTs to the portal, which returns the result.

  TODO (verify once, in the old pages: right-click > View Source > the <form> tag):
    - `method`            the form's method attribute
    - `prnField/dobField` the `name` attribute of each <input>
  If a name is different, change it here — nothing else needs touching.
*/
export const PORTAL_FORM = {
  method: "POST",
  prnField: "prn",
  dobField: "dob",
};

export const PORTAL_BASE = "https://www.sandipuniversity.edu.in";

/* Where the PRN search form on /exams/transcript-application posts to */
export const TRANSCRIPT_FORM = {
  action: `${PORTAL_BASE}/how-to-apply/search_by_prn.php`,
  method: "POST",
  prnField: "prn",
};
