import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (!existsSync("VIDEO.json")) {
  console.error("VIDEO.json not found next to main.ts");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
copyFileSync("VIDEO.json", join(outDir, "VIDEO.json"));
console.log(`copied VIDEO.json -> ${join(outDir, "VIDEO.json")}`);
