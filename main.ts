// The Perfect Pickup Line — make.fun entry
// Reads the pickup line from entry.txt in the bot directory and writes it,
// exactly and nothing else, to entry.txt in the output directory.
// Node 22+, stdlib only. No network, no wall clock, no files outside the repo.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const line = readFileSync(join(botDir, "entry.txt"), "utf8").replace(/\r?\n$/, "");
// The gate counts 1–200 characters: the line is 101, and the output is the
// line alone — no trailing newline, no extra whitespace, nothing else.

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
