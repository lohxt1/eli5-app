<div align="center" >
  <h1 
    align="center"
    style="text-decoration:underline;text-decoration-style:dashed"
  >TodoX</h1>
  <a href="https://github.com/trpc/trpc/blob/main/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/trpc/trpc" />
  </a>
  <a href="https://twitter.com/lohxt">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40lohxt&style=social&url=https%3A%2F%2Ftwitter.com%2Flohxt" />
  </a>
  <br />
  <br />
</div>

<p align="center" style="font-weight:400;font-size:20px;">
  An minimal todo app with paswordless auth.<br />Created using the <a href="https://github.com/trpc/trpc/blob/main/LICENSE">
    Next-magic-link-auth
  </a> starter template
</p>

## Tech Stack

- **[Next.js](https://nextjs.org/) – framework**
- **[Typescript](https://www.typescriptlang.org/) – language**
- **[Tailwind](https://tailwindcss.com/) – CSS**
- **[Prisma](https://prisma.io/) – ORM**
- **[Planetscale](https://railway.app/) – MYSQL database**
- **[NextAuth.js](https://next-auth.js.org/) – auth**
- **[Vercel](https://vercel.com/) – hosting**

## Additional plugins/libraries

**prettier-plugin-sort-imports** - To sort all the imports in a particular order
**prettier-plugin-tailwindcss** - To sort the tailwind classnames
**clsx** & **tailwind-merge** - To organize and improve the readabilty of the tailwind classes

## Running locally

> .env

- Using the `.env.example` file as reference, create a `.env` file with valid values.

> Install Modules

- Run `npm install`
  (node v16.7.0 was used at the time of creation)

> Prisma

- Modify the schema if required and validate it by running `npx prisma validate`
- Run `npx prisma db push`
  (make sure you have the right DATABASE_URL in env file)

> Running the app

- `npm run dev`

## Implementation

**TodoX** is built as a standard Next.js application with a customizable **[Middleware](https://nextjs.org/docs/advanced-features/middleware)**

**Passwordless authentication** using custom magic-links.

**Optimistic UI** achieved by the **[SWR](https://github.com/vercel/swr)** v2.0 library

**[Planetscale](https://www.planetscale.com/)** is used as the database for storing user data and todos. You can refer to the _Prisma schema_ **[here](/prisma/schema.prisma)**.
