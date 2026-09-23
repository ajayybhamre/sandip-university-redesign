// Section registry.
//
// A programme content file (e.g. SOET/data/programmeContent/aerospace-engineering.js)
// is an object whose keys are sections:
//
//   export default {
//     overview: { body: "...", items: [...] },
//     syllabus: { body: "...", links: [...] },
//     ...
//   };
//
// * Only the keys present in the file are shown, in the order they appear in the file.
// * A key that matches an entry below uses that component, title and icon.
// * Any other key uses GenericSection, so a school can add its own sections
//   (clinical training, moot court, portfolio...) without touching any code:
//       clinicalTraining: { title: "Clinical Training", body: "...", items: [...] }
// * `type` lets a custom key reuse a registered component:
//       fees2: { type: "fees", title: "Scholarships", ... }
// * `title` and `icon` on a section override the defaults for that programme only.
//
// To swap a component for one whole school, use schoolProfiles.js.

import { BookOpen, BriefcaseBusiness, CircleDollarSign, FileText, FlaskConical, Info, Landmark, Target, Trophy } from "lucide-react";

import AchievementSection from "./AchievementSection";
import BoardSection from "./BoardSection";
import CareerSection from "./CareerSection";
import FeesSection from "./FeesSection";
import GenericSection from "./GenericSection";
import LabsSection from "./LabsSection";
import OutcomesSection from "./OutcomesSection";
import OverviewSection from "./OverviewSection";
import SyllabusSection from "./SyllabusSection";

export const sectionRegistry = {
  overview: { title: "Overview", icon: Info, Component: OverviewSection },
  syllabus: { title: "Syllabus", icon: BookOpen, Component: SyllabusSection },
  outcomes: { title: "PEO, PO, PSO, CO", icon: Target, Component: OutcomesSection },
  fees: { title: "Fees", icon: CircleDollarSign, Component: FeesSection },
  labs: { title: "Labs / Lab Facility", icon: FlaskConical, Component: LabsSection },
  achievement: { title: "Achievement", icon: Trophy, Component: AchievementSection },
  career: { title: "Career", icon: BriefcaseBusiness, Component: CareerSection },
  board: { title: "Board of Studies", icon: Landmark, Component: BoardSection },
  generic: { title: "", icon: FileText, Component: GenericSection },
};

// Keys in a content file that are not sections.
const NON_SECTION_KEYS = new Set(["hero"]);
// Fields that describe a section but are not content.
const META_FIELDS = new Set(["type", "title", "icon", "heading"]);

const humanize = (key) =>
  key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .replace(/^./, (char) => char.toUpperCase());

const hasContent = (data) => Object.keys(data).some((field) => !META_FIELDS.has(field));

/**
 * Turns a programme content file into the list the page renders.
 * Returns [{ id, title, icon, Component, data }] — one entry per section that has content.
 */
export function buildSections(content, profile = {}) {
  if (!content) return [];

  return Object.entries(content)
    .filter(([key, data]) => !NON_SECTION_KEYS.has(key) && data && typeof data === "object" && hasContent(data))
    .map(([key, data]) => {
      const type = data.type || key;
      const base = sectionRegistry[type] || sectionRegistry.generic;
      const entry = { ...base, ...(profile.sections?.[type] || {}) };

      return {
        id: key,
        title: data.title || entry.title || humanize(key),
        icon: data.icon || entry.icon,
        Component: entry.Component,
        data,
      };
    });
}
