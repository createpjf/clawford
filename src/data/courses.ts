import type { ElectiveCourse } from "@/types";

/**
 * Elective Course Registry
 *
 * Every community-contributed course that appears on the website must have
 * an entry here. See docs/CONTRIBUTING-COURSES.md for the full contribution
 * guide and PR checklist.
 *
 * Status values:
 *   "pending"  — submitted via PR, awaiting first-party review
 *   "reviewed" — approved by first-party, safe to display prominently
 */
const courses: ElectiveCourse[] = [
  // Courses will be added here by open-source contributors via PR.
  // Each entry must correspond to a course package under courses/{course-id}/.
  // See docs/templates/course.json.template for the schema-conformant package format.
];

export default courses;
