import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Staging passed because staging has twelve users and none of them are named O'Brien.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
