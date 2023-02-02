![made-with-python](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)

<h1>
<p align="center">
<img align="center" src="https://lohxt1.github.io/_assets/eli51.png" alt="ELI5-app"/>
<!-- <br/> -->
<!-- <img align="center" src="https://lohxt1.github.io/_assets/eli52.png" alt="ELI5-app"/> -->
<br/><br/>ELI5-app
</h1>
  <p align="center">
    [NextJS - Tailwind - Prisma] app for generating simplified explaination for any sort of complex text.
    <br />
    </p>
</p>

## About The Project

ELI5 (Explain Like I'm 5) is an app designed to provide simplified explanations for complex texts. The explanations generated by ELI5 are powered by OpenAI's GPT-3 API

## Tech Stack

- [Next.js](https://nextjs.org/) – `framework`
- [Typescript](https://www.typescriptlang.org/) – `language`
- [Tailwind](https://tailwindcss.com/) – `CSS`
- [Prisma](https://prisma.io/) – `ORM`
- [Postgresql](https://railway.app/) – `database`
- [NextAuth.js](https://next-auth.js.org/) – `auth`
- [Vercel](https://vercel.com/) – `hosting`

## Running the code `locally`

To run the code locally, open _Terminal_ in your `projects` folder and take the steps:

```bash
# STEP 1: Get sources from GitHub
$ git clone https://github.com/lohxt1/eli5-app.git
$ cd eli5-app

# STEP 2: Install the requirements
$ npm install

# STEP 3: Setting up Prisma

# Modify the schema if required and validate it by running
$ npx prisma validate

# Generate Prisma client
$ npx prisma generate

# Push the schema changes
# make sure you have the right DATABASE_URL in .env file
$ npx prisma db push

# STEP 4: Running the app in dev mode
$ npm run dev
```
