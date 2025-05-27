# Boilerplate

A modern Next.js boilerplate with Google authentication, PostgreSQL (via Prisma), and a comprehensive UI component library.

## Usage: Create a New Project

To scaffold a new project using this boilerplate, run:

```
python setup.py <your_app_name>
```

This will:

- Copy the boilerplate to a new folder named `<your_app_name>`
- Replace all instances of "boilerplate" in files with your app name
- Initialize a new git repository
- Install dependencies with pnpm

After setup, follow the steps below inside your new project directory.

## Features

- Next.js 15 with App Router
- Google authentication (via better-auth)
- PostgreSQL database (Prisma ORM)
- Prebuilt, accessible UI components (Radix UI, custom, Tailwind CSS)
- Light/dark theme toggle
- Toast notifications

## Getting Started

### 1. Install dependencies

```
pnpm install
```

### 2. Configure environment variables

Create a `.env` file in the root with:

```
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 3. Set up the database

```
pnpm exec prisma migrate deploy
```

### 4. Run the development server

```
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Scripts

- `pnpm dev` – Start the dev server
- `pnpm build` – Build for production
- `pnpm start` – Start production server
- `pnpm lint` – Lint code

## Tech Stack

- Next.js 15
- React 19
- Prisma ORM
- PostgreSQL
- Tailwind CSS
- Radix UI
- better-auth

## Authentication

- Google OAuth (sign in with Google)
- Session management via PostgreSQL

## UI Components

Reusable components in `src/components/ui` (Button, Card, Dialog, Table, etc.)

## Theming

- Light/dark mode toggle
- Theme state persisted
