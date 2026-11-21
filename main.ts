import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The tide comes in over the flat sand, and goes out again. The gulls keep their own slow time. Somewhere below the surface, a stone you dropped as a child is still turning, a little smoother each year, and the sea is in no hurry to finish it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
