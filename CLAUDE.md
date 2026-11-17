# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio website: a single-page React 19 + TypeScript app built with Vite, styled with Tailwind CSS v4, and deployed on Vercel. The visual design was made in Claude Design and is implemented here section by section.

## Working with the owner

The owner is building this project to learn. Act as a mentor: give the next step with a short reason, let them write the code and run the commands, and review what they produce. Only write code, change config, or run state-changing commands (installs, git commits, pushes) when they explicitly ask. Skip quizzes and homework; answer questions when they ask.

Commits use Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`, `style:`). Do **not** add `Co-Authored-By: Claude` or any other Claude attribution to commits or PRs.

## Commands

```sh
npm run dev           # Vite dev server with HMR (does NOT type-check)
npm run build         # tsc -b (type-check) then vite build -> dist/
npm run preview       # serve dist/ locally to test the production build
npm run lint          # ESLint
npm run lint:fix      # ESLint with autofix
npm run format        # Prettier, rewrite files
npm run format:check  # Prettier, report only
npx tsc -b            # type-check only, no bundle
```

There is no test runner set up yet.

## Architecture and toolchain

- **Entry chain:** `index.html` (the only HTML page, with `<div id="root">`) loads `src/main.tsx`, which mounts `<App />` from `src/App.tsx` inside `StrictMode`. All UI lives under `App`.
- **Tailwind v4 has no `tailwind.config.js`.** It runs through the `@tailwindcss/vite` plugin in `vite.config.ts` and is loaded by `@import 'tailwindcss';` in `src/index.css`. Design tokens (colors, fonts, spacing, breakpoints) go in an `@theme` block in `src/index.css`. `.prettierrc` points `prettier-plugin-tailwindcss` at that file (`tailwindStylesheet`), so class sorting picks up custom theme values.
- **TypeScript uses project references.** `tsconfig.json` only references `tsconfig.app.json` (browser code in `src/`, DOM types, `vite/client`) and `tsconfig.node.json` (Node code: `vite.config.ts`). Settings that affect how code is written:
  - `verbatimModuleSyntax`: type-only imports must use `import type`.
  - `allowImportingTsExtensions`: local imports include the extension (`import App from './App.tsx'`).
  - `noUnusedLocals` / `noUnusedParameters`: unused code fails `npm run build`, which fails the Vercel deploy.
- **Lint and format:** ESLint flat config (`eslint.config.js`) with typescript-eslint, react-hooks and react-refresh. `eslint-config-prettier` must stay the **last** entry so ESLint never conflicts with Prettier. The react-refresh rule expects component files to export only components. Prettier style: no semicolons, single quotes. `.vscode/settings.json` (committed) formats on save and applies ESLint fixes.

## Environment and deployment

- **Node:** pinned in `.node-version` (26.13.1, an LTS release). Vercel reads it.
- **Vercel:** auto-deploys on every push to `main` using the Vite preset (`npm run build` -> `dist/`). Pushes to other branches get preview URLs. A failed type-check fails the deploy. Browser-exposed env vars must be prefixed `VITE_`.
- **Windows dev machine:** Git for Windows has `core.autocrlf=true` system-wide. `.gitattributes` (`* text=auto eol=lf`) forces LF to match Prettier. Don't create config files with PowerShell 5.1 `>` redirection, because it writes UTF-16.
