# AGENTS.md — Agent customization for this repo

Purpose: give AI coding agents the minimal, actionable context they need to be productive in this React + Vite frontend.

- **Run & build**: install and run with `npm install` then `npm run dev`. Build with `npm run build`. Preview production build with `npm run preview`. Lint with `npm run lint`.

- **Key files**: [package.json](package.json) (scripts & deps), [README.md](README.md), [vite.config.js](vite.config.js), [eslint.config.js](eslint.config.js), [src](src/) (application source).

- **Project type**: React 19 app powered by Vite. Uses TailwindCSS and ESLint. Routing via `react-router-dom` (v7).

- **Where to work**: UI components live in `src/components/`, page-level views in `src/pages/`, assets in `src/assets/`, API wrappers in `src/api/`.

- **Style & conventions**:
  - Prefer functional React components and hooks.
  - Keep presentational components under `components/` and page logic inside `pages/`.
  - Tailwind utility classes are used; avoid adding large inline styles unless necessary.
  - Run `npm run lint` before committing; follow existing ESLint rules in `eslint.config.js`.

- **Tests**: none present — do not add test scaffolding without asking the maintainers.

- **Dependency changes**: do not update `package.json` dependencies or lockfiles without a brief description in the PR. For any new dependency, include justification and a minimal example of its use.

- **PR & change guidance for agents**:
  - Make small, focused changes with clear commit messages.
  - Run `npm run build` locally for changes that affect bundling/SSR.
  - If making UI changes, include before/after screenshots or a short demo note in the PR.

If you want more-automated behaviors (auto-lint PR checks, CI job templates, or specialized agent skills for accessibility or dependency upgrades), tell me which you'd like and I can create the related customization files or skills.
