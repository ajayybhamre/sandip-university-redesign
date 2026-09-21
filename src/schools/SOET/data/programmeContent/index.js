// Combines every course-content file in this folder into one lookup,
// keyed by course slug. To add a new SOET course:
//   1. Create ./<course-slug>.js in this folder (copy aerospace-engineering.js as a template).
//   2. Import it below and add it to the exported object with its slug as the key.

import aerospaceEngineering from "./aerospace-engineering.js";
import civilEngineering from "./civil-engineering.js";

export default {
  "aerospace-engineering": aerospaceEngineering,
  "civil-engineering": civilEngineering,
};