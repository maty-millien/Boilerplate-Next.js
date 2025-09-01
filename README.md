# ⚡ Boilerplate Next.js

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](#)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14-blue?logo=postgresql)](#)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-blue?logo=tailwind-css)](#)

A modern starter template for full-stack applications with **Next.js 15**, Google authentication, PostgreSQL (via Prisma), and a complete UI component library based on **shadcn/ui**. Pre-configured for rapid development with authentication, database integration, theming, and accessible UI.

## ✨ Features

- ⚡ **Next.js 15** with App Router
- 🔐 **Google Authentication** via better-auth
- 🗄️ **PostgreSQL Database** using Prisma ORM
- 🖌️ **Prebuilt UI Components** using **shadcn/ui** and Tailwind CSS
- 🌗 **Light/Dark Theme Toggle** with state persistence
- 🔔 **Toast Notifications**

## 🚀 Usage

Run the setup script via curl to scaffold a new project. The script will prompt you for the app name interactively (you don't need to pass it on the command line):

```bash
curl -sSL https://raw.githubusercontent.com/maty-millien/boilerplate/main/setup.sh | sh
```

When you run the script it will:

- Download the latest boilerplate from GitHub
- Prompt you for an app name and copy the boilerplate into a folder with that name
- Replace all instances of `"boilerplate"` with your app name
- Initialize a new Git repository
- Install dependencies with **pnpm**

After setup, enter your new project directory and follow the next steps.

## 🛠️ Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Configure environment variables

Create a `.env` file in the root:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 3. Set up the database

```bash
npx prisma migrate deploy
```

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app.

## 📝 Scripts

- `pnpm run dev` – Start development server
- `pnpm run build` – Build for production
- `pnpm start` – Run production server
- `pnpm run lint` – Lint project files

## 💻 Tech Stack

- **Frontend:** Next.js 15, React 19, Tailwind CSS, **shadcn/ui**
- **Backend:** Prisma ORM, PostgreSQL
- **Auth:** Google OAuth (better-auth)
- **UI:** Accessible, reusable components (Button, Card, Dialog, Table, etc.)

## 🎨 Theming

- Light/dark mode toggle
- Theme state persisted across sessions

## 🔑 Authentication

- Sign in with Google
- Session management via PostgreSQL

## 📂 UI Components

All reusable components are located in `src/components/ui` based on **shadcn/ui**, ensuring consistent design and rapid development.
