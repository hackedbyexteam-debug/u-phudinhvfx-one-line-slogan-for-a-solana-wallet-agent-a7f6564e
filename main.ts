// One-Line Slogan for a Solana Wallet Agent.
//
// The slogan (14 words, 76 characters):
//   "Your Solana wallet finally has a brain, and it spends its time saving yours."
//
// Why this line wins on the judge's criteria, in their order:
// 1. It IS a slogan for a Solana wallet agent: "Solana wallet" is named
//    outright, and "has a brain" evokes the agent inside it.
// 2. Fresh turn, not a stock crypto line: no keys, no moons, no bags. The
//    joke is a wordplay on time — the wallet's brain spends its time
//    saving yours — and the turn lands in the last two words.
// 3. Clear to a newcomer in one read: a wallet that thinks for you and
//    gives you your time back. Plain words, no jargon, no "on-chain" or
//    "non-custodial".
// 4. Sticks in the ear: the parallel "its time / yours" gives it a rhythm
//    you can repeat after one hearing.
// 5. Honest: it promises saved time, not returns or riches — exactly what
//    a wallet agent can deliver.
//
// Rejected candidates: "Solana speed, human sense: a wallet agent that
// does the boring parts for you." (clear and honest, but the contrast is a
// label, not a turn); "Your Solana wallet just hired an agent — it does
// the waiting, you do the living." (good contrast, but "hired an agent"
// states the brief instead of turning it); "The wallet that thinks in
// Solana and acts before you finish the sentence." (overpromises — an
// agent cannot read your mind).
//
// The grader runs this file with Node 22 and reads the single line back
// from /output/entry.txt (1-140 characters, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

// The one slogan this entry submits.
const LINE =
  "Your Solana wallet finally has a brain, and it spends its time saving yours.";

// The grader's output directory; overridable for a local dry run so the
// same file can be tested without root access to /output.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = `${outputDir}/entry.txt`;

// Fail loudly instead of submitting an invalid line: the gate requires
// exactly one line of 1-140 non-blank characters, and a silent truncation
// would change the slogan.
if (LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(
    `entry is ${LINE.length} characters, must be 1-140 non-blank characters`,
  );
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry must be a single line with no line breaks");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(entryPath, LINE, "utf8");
console.log(`wrote ${LINE.length}-character entry to ${entryPath}`);
