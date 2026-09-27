// Captures the real MOCA site (https://moca-portfolio.vercel.app) for the portfolio hover video.
// Run: HOVER_KIT_DIR=<portfolio>/resources/hover-videos/kit HOVER_KIT_DEPS=<deps>/package.json node capture.mjs
// Only navigation and the language menu are used: no form is submitted.
import { writeFileSync } from "node:fs";
const { openBrowser, warmUp, shoot, box } = await import(`${process.env.HOVER_KIT_DIR}/capture.mjs`);

const dir = new URL("./captures", import.meta.url).pathname;
const SITE = "https://moca-portfolio.vercel.app";
const { browser, page } = await openBrowser();
const layout = {};

// Landing: the subtitle is typed by the site itself; capture its progression.
await page.goto(SITE, { waitUntil: "domcontentloaded" });
await page.waitForSelector('a[href="/home"]:visible');
await page.evaluate(() => document.fonts.ready);
const typing = [];
const t0 = Date.now();
for (let i = 0; i < 40; i++) {
  await page.screenshot({ path: `${dir}/landing-${i}.png` });
  typing.push({ i, ms: Date.now() - t0, text: await page.locator("text=/^Expert/ >> visible=true").first().innerText().catch(() => "") });
  await page.waitForTimeout(60);
}
layout.typing = typing;
layout.getStarted = await box(page, 'a[href="/home"]:visible');

// The featured-projects carousel (react-carousel3) lays itself out on window resize;
// without one it is still empty in a fresh headless page.
const settle = async (p) => {
  await p.waitForLoadState("networkidle");
  await warmUp(p);
  await p.evaluate(() => window.dispatchEvent(new Event("resize")));
  await p.mouse.move(640, 790);
  await p.waitForTimeout(1500);
};

// Home in English, the real language menu, then the same page in French.
await page.goto(`${SITE}/en/home`, { waitUntil: "networkidle" });
await settle(page);
await shoot(page, dir, "home-en", { full: false });
layout.globe = await box(page, 'button[aria-label="language"]:visible');
await page.click('button[aria-label="language"]:visible');
await page.mouse.move(640, 790);
await page.waitForTimeout(500);
await shoot(page, dir, "menu", { full: false });
const fr = page.locator("button:visible", { hasText: /^French$/ }).first();
layout.french = await box(page, 'button:text-is("French"):visible');
await fr.hover();
await page.waitForTimeout(400);
await shoot(page, dir, "menu-hover", { full: false });
await Promise.all([page.waitForURL("**/fr/home"), fr.click()]);
await settle(page);
await shoot(page, dir, "home-fr");
layout.solutions = await box(page, "text=Nos Solutions UX Sur Mesure >> visible=true");
layout.plans = await box(page, "text=Abonnements >> visible=true");

writeFileSync(`${dir}/layout.js`, `window.LAYOUT = ${JSON.stringify(layout, null, 2)};\n`);
console.log(JSON.stringify(layout));
await browser.close();
