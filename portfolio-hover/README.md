# portfolio-hover

Source of the hover preview shown on thomasmoserdev.com/projects for this project.

- `capture.mjs`: captures the real site (moca-portfolio.vercel.app) into `captures/`: the landing
  page's own typewriter, the home page, the language menu and the home page after switching to French.
  No form is submitted.
- `comp.html`: the 8s, 1280x800 loop, drawn from the captures (every frame is a function of time).
- `out/`: rendered `moca.mp4` (silent H.264) and its first frame.

`engine.js`, `base.css` and `render.mjs` are copied from the portfolio's `resources/hover-videos/kit`,
which documents how to capture and render.
