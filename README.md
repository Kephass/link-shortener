This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## To use this repository

First clone the repository, then

- Update the .env file with your own PlanetScale database url
- Login to prisma via de terminal
- run prisma
- run prisma studio, u can add you slugs there

, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000/api/get-url/[slug]](http://localhost:3000/api/get-url/[slug]) with whatever slug you've added to your db as the slug to see results.

## Technologies used

- Next.js
- TypeScript
- Prisma
- PlanetScale
