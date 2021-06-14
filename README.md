# next-css-modules-single-file

This repository demonstrates a possible Next.js bug related to CSS optimization.

## Steps

1. Bootstrap an app: `npx create-next-app`
2. Set up some components with their own CSS
  * See Button, List components in [./components/].
  * These components use CSS Modules. Next.js creates separate CSS output for
    these by default.
3. Add mini-css-extract-plugin's
[instructions for "Extracting all CSS in a single file"](https://github.com/webpack-contrib/mini-css-extract-plugin#extracting-all-css-in-a-single-file)
  to the project's [`next.config.js`](./next.config.js)
4. Run a build: `npm run build`
5. Start the app: `npm start`

## Expected

The built Next.js server serves a single CSS file for the app.

## Observed

The Next.js build fails:

```shell
$ npm run build

> next-css-modules-single-file@0.1.0 build
> next build

info  - Using webpack 4. Reason: custom webpack configuration in next.config.js https://nextjs.org/docs/messages/webpack5
info  - Checking validity of types
Found more than one file in server entrypoint pages/_app [ 'styles.js', 'pages/_app.js' ]
Found more than one file in server entrypoint pages/index [ 'styles.js', 'pages/index.js' ]
info  - Creating an optimized production build
info  - Compiled successfully
info  - Collecting page data .node:internal/process/promises:246
          triggerUncaughtException(err, true /* fromPromise */);
          ^

Error: Cannot find module for page: /_app
    at pageNotFoundError (/Users/dudeman/next-css-modules-single-file/node_modules/next/dist/next-server/server/require.js:1:454)
    at getPagePath (/Users/dudeman/next-css-modules-single-file/node_modules/next/dist/next-server/server/require.js:1:1263)
    at requirePage (/Users/dudeman/next-css-modules-single-file/node_modules/next/dist/next-server/server/require.js:1:1397)
    at loadComponents (/Users/dudeman/next-css-modules-single-file/node_modules/next/dist/next-server/server/load-components.js:1:1365)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async Object.hasCustomGetInitialProps (/Users/dudeman/next-css-modules-single-file/node_modules/next/dist/build/utils.js:26:1276) {
  type: 'Error',
  code: 'ENOENT'
}
```

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
