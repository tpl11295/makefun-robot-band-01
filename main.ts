import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Name the Robot Band entry: one original funny robot band name plus its hit song.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters (this line is 98).
const line =
  "The Overdue Updates — hit single 'Remind Me Later' has been number one for six years and counting.";

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
if (readFileSync("/output/entry.txt", "utf8") !== line) {
  throw new Error("entry.txt does not match the robot band line");
}
console.log(`wrote ${line.length} characters to /output/entry.txt`);
