# FE Starter 2026

Next.js + TypeScript + Prisma + PostgreSQL fullstack starter, ready for deployment on Vercel.  

Deployed here: https://fe-starter-2026.vercel.app/


---

## Quickstart

```bash
# Clone
git clone <repo-url>
cd fe-starter-2026

# Install dependencies
npm install

# Set up .env
echo 'DATABASE_URL="postgresql://<username>@localhost:5432/fe_starter_2026"' > .env

# Generate Prisma client, migrate, and seed
npx prisma generate
npx prisma migrate dev
npm run seed

# Start dev server
npm run dev
```

## Features

Next.js 16 + React 19 + TypeScript

Prisma ORM + PostgreSQL (DB Hosted via Neon)

TailwindCSS

CRUD for User, Post, Entry

Vercel-ready deployment

## Deployment Notes

Set DATABASE_URL on Vercel.

Seed data will run locally; ensure migrations are committed.
