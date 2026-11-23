import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const source = join(dirname(fileURLToPath(import.meta.url)), "VIDEO.json");
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) throw new Error("MAKEFUN_OUTPUT_DIR is not set to an output directory");
if (!existsSync(source)) throw new Error(`VIDEO.json not found next to main.ts: ${source}`);
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "VIDEO.json");
copyFileSync(source, target);
console.log(`Copied VIDEO.json to ${target}`);
