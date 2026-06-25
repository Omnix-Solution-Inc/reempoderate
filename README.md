# ReEmpoderate Platform

Plataforma digital de transformación consciente, coaching ontológico, arte y marketplace.

## Arquitectura

- **Frontend:** Next.js 14 (App Router) — deployado en Vercel
- **Backend:** Base44 (entities, backend functions, auth)
- **Dominios:** reempoderate.com (principal) + subdominios por cliente

## Estructura de Ambientes

```
reempoderate.com          → Landing principal ReEmpoderate
app.reempoderate.com      → Plataforma (login requerido)
thebellawildflower.com    → Landing + sistema floral (ambiente piloto)
[cliente].reempoderate.com → Ambiente por cliente
```

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/ui
- Base44 SDK (backend + auth)
- NextAuth.js (Google / Microsoft OAuth)

## Setup Local

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deploy

Conectar repo a Vercel. Variables de entorno en `.env.example`.
