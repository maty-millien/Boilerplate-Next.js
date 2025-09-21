## AGENTS.md — Guidance for AI coding agents

This file captures the repository-specific knowledge an AI coding agent needs to be immediately productive in this Next.js + Prisma boilerplate.

High-level summary

- Stack: Next.js 15 (app router), React 19, TypeScript, TailwindCSS, Prisma (Postgres). See `package.json` and `prisma/schema.prisma`.
- Purpose: a SaaS-ready starter with auth (Google), DB via Prisma, and a shadcn-based UI in `src/components/ui` and `src/app` pages.
- Code organization: UI components live under `src/components/ui`; app routes are in `src/app` (landing, auth, dashboard). Generated Prisma client and query engine are in `generated/`.

Important project scripts and workflows

- Install: project uses bun (README and `package.json` scripts). Typical flow in README:
  - `bun install`
  - Create `.env` with `DATABASE_URL`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`.
  - `npx prisma migrate deploy` (or `pnpx prisma generate`) to set up Prisma client.
  - Dev server: `bun run dev` (also `npm`/`pnpm` can work since `package.json` contains scripts like `dev`, `build`). See `package.json` scripts.
- Setup helper: `setup.sh` clones and replaces placeholders for templating; it excludes `AGENTS.md` during templating.

Key conventions and patterns (concrete, observable)

- No comments policy: Never write any comments in code. (Explicit rule — do not introduce comments.)
- Never run lint/tests/dev server: Agents must NOT execute linters, tests, or start the dev server. (Explicit rule.)
- Alias paths: `components.json` defines path aliases such as `@/components`, `@/lib`, `@/hooks`. Use them when adding imports to match existing code.
- UI primitives: The repo uses a central `src/components/ui` directory of reusable components (buttons, inputs, sidebar, dialogs). Prefer composing from those primitives rather than creating ad-hoc UI.
- Client vs server: Files in `src/app/*` follow Next.js app-router conventions — server components by default, `"use client"` at top marks client components (e.g., `src/app/landing/components/navbar.tsx`). Add `"use client"` only when DOM or hooks are needed.
- Type-first: Codebase uses TypeScript and sometimes `satisfies` clauses for shape checking (see `chart-03.tsx` using `satisfies ChartConfig`). Keep types explicit and prefer `satisfies` where appropriate.

Examples from the codebase

- Import alias: import UI button with `import { Button } from "@/components/ui/button";` (see `src/app/landing/components/footer.tsx`).
- Client component pattern: `src/app/landing/components/navbar.tsx` begins with `"use client"` and imports React hooks — follow that pattern for interactive components.
- Prisma and generated client: the generated Prisma client lives under `generated/` and `@prisma/client` is listed in dependencies — when modifying DB code, ensure `prisma generate` is run (note: agents must not run commands; just document).

Files and directories to examine when diagnosing features

- `src/app` — app routes, layouts, and pages
- `src/components/ui` — shared UI primitives
- `src/lib` — helpers such as `auth.ts` and `utils.ts`
- `prisma/schema.prisma` — DB schema and relations
- `generated/` — Prisma client and query engine artifacts
- `setup.sh` and `components.json` — templating scripts and shadcn config

Safety and repository rules (must follow exactly)

- Never write any comments in code. Do not add `//` or `/* */` comments in files you modify.
- Never run linter, tests or development server. Do not execute `bun run dev`, `npm run dev`, `pnpm`, `npm test`, `bun`, `eslint`, or similar commands.

Small implementation heuristics

- Keep changes minimal and local: prefer adding components under `src/components` or `src/app/<area>/components` matching existing structure.
- Follow Tailwind class conventions used in components (e.g., `text-muted-foreground`, `bg-muted`) to stay consistent.
- When adding a new client component, put `"use client"` at the top and import React hooks only inside those files.
- When adding new imports, use aliases from `components.json` (e.g., `@/components/ui`, `@/lib`).
