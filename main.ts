import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I read the first paragraph of your report and stopped there, like everyone else in this office.";

if (LINE.length < 1 || LINE.length > 240) {
  // Guard: the competition line must fit the 1–240 char single-line slot.
  throw new Error(`LINE must be 1-240 chars, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("LINE must be a single non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
