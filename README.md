# ⚡ Boilerplate Next.js

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](#)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14-blue?logo=postgresql)](#)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-blue?logo=tailwind-css)](#)

A modern starter template for full-stack applications with **Next.js 15**, Google authentication, PostgreSQL (via Prisma), and a complete UI component library based on **shadcn/ui**. Pre-configured for rapid development with authentication, database integration, theming, and accessible UI.

## ✨ Features

* ⚡ **Next.js 15** with App Router
* 🔐 **Google Authentication** via better-auth
* 🗄️ **PostgreSQL Database** using Prisma ORM
* 🖌️ **Prebuilt UI Components** using **shadcn/ui** and Tailwind CSS
* 🌗 **Light/Dark Theme Toggle** with state persistence
* 🔔 **Toast Notifications**

## 🚀 Usage: Create a New Project

Run the setup script to scaffold a new project:

```bash
python setup.py <your_app_name>
```

This will:

* Copy the boilerplate to a folder named `<your_app_name>`
* Replace all instances of `"boilerplate"` with your app name
* Initialize a new Git repository
* Install dependencies with **npm**

After setup, enter your new project directory and follow the next steps.

## 🛠️ Getting Started

### 1. Install dependencies

```bash
npm install
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

* `npm run dev` – Start development server
* `npm run build` – Build for production
* `npm start` – Run production server
* `npm run lint` – Lint project files

## 💻 Tech Stack

* **Frontend:** Next.js 15, React 19, Tailwind CSS, **shadcn/ui**
* **Backend:** Prisma ORM, PostgreSQL
* **Auth:** Google OAuth (better-auth)
* **UI:** Accessible, reusable components (Button, Card, Dialog, Table, etc.)

## 🎨 Theming

* Light/dark mode toggle
* Theme state persisted across sessions

## 🔑 Authentication

* Sign in with Google
* Session management via PostgreSQL

## 📂 UI Components

All reusable components are located in `src/components/ui` based on **shadcn/ui**, ensuring consistent design and rapid development.
