# NextJs 14 Project

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# **Init project**

```bash
npx create-next-app@latest <project-name>
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Build and Run the production

```bash
# build
yarn build
#
yarn start

# Ctrl+C to stop
```

## Params and Query Parameters in NextJS with TS

- Params Parameters

```bash
# ex: {{url}}/path/1234
params:{
    id: string;
}
```

- Query parameter

```bash
# ex: {{url}}/query?id=1&page=1&limit=20
searchParams:{
    id?: string;
    page?: string;
    limit?: string;
}
```

# Dependencies

```bash
# MUI
yarn add @mui/material @emotion/react @emotion/styled

# Style engine
yarn add @mui/styled-engine-sc styled-components

# Icons
yarn add @mui/icons-material

# Roboto font
yarn add @fontsource/roboto

# Data table
yarn add @mui/x-data-grid

# React-medium-image-zoom & react-number-format
yarn add react-medium-image-zoom react-number-format

# Redux
yarn add @reduxjs/toolkit
yarn add react-redux
yarn add next-redux-wrapper

# Cookie for next/headers instead
yarn add cookie
yarn add @types/cookie

## Other related
yarn add formik formik-material-ui chart.js react-chartjs-2 axios react-iframe dayjs

```

## Enable or Disable tailwind css on `tailwind.configs.ts`

```bash
module.exports ={
    corePlugin: {
        preflight: false,
    },
};
```

## Enable to build production as standalone. access to config file in `next.config.mjs` as follows

```bash
const nextConfig = {
  distDir: "build", #// Change 'build' to your desired folder name
  output: "export", #// For static exports (if you're exporting a static site)
};
```
