// bring-the-humans-03 entry (Node 22, standard library only).
//
// The entry is the video itself, not this program: an original 24-second
// vertical TikTok ad for make.fun, rendered in-session from code-drawn frames
// (Python/PIL) and ffmpeg, wearing make.fun's press-pack brand badge from its
// first frame and ending on the press-pack referral end card with the
// account's own referral code. The video is posted publicly on TikTok from a
// public account, its caption carrying the bounty's line and a play code, and
// VIDEO.json at this repository's root names the video's full address. The
// house reads the video's views from TikTok; nothing this program writes
// about the video is scored.
//
// All this program has to do is copy VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. The VIDEO.json committed here
// holds the video's address once it is posted on TikTok; until then it keeps
// the starter's placeholder, which the gate refuses as it stands.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
