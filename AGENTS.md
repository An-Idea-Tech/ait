<!-- BEGIN:nextjs-agent-rules -->
# An Idea Tech frontend: agent guide

## Scope and source of truth

- This repository root is the active Next.js application. Run commands here.
- A second `frontend/` directory mirrors much of the app. Treat it as a separate
  copy: do **not** duplicate edits there unless the task explicitly names it.
- Keep changes narrowly scoped. Preserve existing routes, copy, assets, and
  interaction behavior unless the requested work changes them.
- Check `git status --short` before editing. Do not overwrite unrelated user
  changes or untracked files.

## Stack and project layout

- Next.js 16.2, React 19, JavaScript/JSX, App Router, and Tailwind CSS 4.
- App routes are in `src/app/`; dynamic routes include:
  - `src/app/services/[slug]/page.jsx`
  - `src/app/work/[slug]/page.jsx`
  - `src/app/insights/[slug]/page.jsx`
- Reusable UI belongs in `src/components/`; page sections are grouped by feature
  under `src/components/section/`; content models are in `src/data/`.
- Use `@/` imports for `src/` modules (configured in `jsconfig.json`).
- Images, fonts, SVGs, and video are local under `public/`. Prefer existing
  assets and do not invent remote asset URLs.

## Next.js 16 conventions

- This project uses a newer Next.js release. Before relying on an unfamiliar or
  potentially changed API, read the relevant local guide under
  `node_modules/next/dist/docs/` and heed deprecation notices.
- Components are Server Components by default. Add `"use client"` only when a
  component needs browser state, effects, event handlers, or browser-only
  libraries (Lenis, Motion, etc.). Keep the client boundary as low as practical.
- Preserve `src/app/layout.jsx` providers: `ThemeProvider`, `Provider`, and
  `LenisProvider`. Do not move global behavior into individual pages.
- Use `next/link` for internal navigation and `next/image` where the existing
  component pattern uses it. Add an allowed host to `next.config.mjs` before
  introducing a new remote image source.
- Dynamic service/work/insight pages resolve existing data by slug. Update the
  corresponding `src/data/` module when adding or changing content rather than
  hard-coding duplicate page data.

## Styling and design

- Global styles and font variables live in `src/app/globals.css`; local Manrope
  font files are in `public/fonts/` and configured through the layout/CSS.
- Use Tailwind utilities and existing responsive patterns. `tailwind.config.js`
  retains project font-family aliases, while Tailwind 4 is loaded via
  `@tailwindcss/postcss`.
- Respect the `dark` class managed by `ThemeProvider`; ensure new text,
  backgrounds, borders, and focus states work in both themes when placed in a
  theme-aware area.
- Reuse shared primitives such as `Navbar`, `Footer`, `Logo`, `Button`, and
  `Button2` before creating equivalents. Preserve the site’s motion-led visual
  language, but avoid adding animation for purely decorative changes.
- Use semantic HTML, visible keyboard focus, accessible names for icon-only
  controls, and real `button`/`a`/`Link` elements for their native actions.

## Data, services, and safety

- Static site content is generally data-driven through `src/data/`. Follow the
  existing object shapes and slug conventions.
- `src/services/api.service.js` is the shared fetch wrapper. Reuse it for
  external API work instead of recreating error handling in components.
- Never commit secrets or add `.env*` values to client code. `.env*` files are
  ignored; use `NEXT_PUBLIC_` only for values that are deliberately safe to
  expose in the browser.

## Commands and verification

Run from this repository root:

```powershell
npm.cmd run dev
npm.cmd run lint
npm.cmd run build
npm.cmd run start
git diff --check
```

- Use `npm.cmd` in PowerShell; it avoids local execution-policy issues with
  `npm.ps1`.
- Use the existing `package-lock.json`; do not switch package managers or
  change dependencies without need.
- For UI changes, verify the affected route at desktop and narrow widths. For
  route/data changes, also test the relevant dynamic slug and not-found state.
- `npm.cmd run build` is the release-level check. Report any pre-existing
  warning or failure separately from the requested change.

## Change handoff

- Summarize changed files, the user-visible outcome, and checks actually run.
- Do not claim browser, build, or production verification that was not run.
- Keep this guide current when project architecture, commands, or agent-facing
  conventions change.
<!-- END:nextjs-agent-rules -->
