---
title: "What's new in Next.js 13"
date: 'April 30, 2023'
excerpt: 'News about Next'
cover_image: '/images/next.jpg'
---

The announcement was made at the [Next.js](https://beta.nextjs.org/docs) Conf and took the community by storm. Developers worldwide spread the news about the features and goodies announced live on October 25th. Here's a summary of the new features in the App Router:

1. Routing
2. Rendering
3. Data Fetching
4. Caching
5. Optimizations
6. Transpilation
7. API
8. Tooling

## app/ Directory in Next.js (In Beta)

The new App Router works in a new directory named app. The app directory works alongside the pages directory to allow for incremental adoption. This allows you to opt some routes of your application into the new behavior while keeping other routes in the pages directory for previous behavior. The new App Router works in a new directory named app. The app directory works alongside the pages directory to allow for incremental adoption. This allows you to opt some routes of your application into the new behavior while keeping other routes in the pages directory for previous behavior.

        New file-system based router built on top of Server
        Components that supports layouts, nested routing,
        loading states, error handling, and more.
        Good to know: Routes across directories should not resolve
        to the same URL path and will cause a build-time error to prevent
        a conflict.

## Rendering

Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes. Next.js provided an easier way to break down your application into pages and prerender on the server by generating HTML and sending it to the client to be hydrated by React. However, this led to additional JavaScript needed on the client to make the initial HTML interactive.

Now, with Server and Client Components, React can render on the client and the server meaning you can choose the rendering environment at the component level.

By default, the app directory uses Server Components, allowing you to easily render components on the server and reducing the amount of JavaScript sent to the client.

You can interleave Server and Client Components in a component tree by importing a Client Component into a Server component, or by passing a Server Component as a child or a prop to a Client Component. Behind the scenes, React will merge the work of both environments.

## Data Fetching

Simplified data fetching with async/await support in React Components and the fetch() API that aligns with React and the Web Platform. Fetch data on the server using Server Components.
Fetch data in parallel to minimize waterfalls and reduce loading times.
For Layouts and Pages, fetch data where it's used. Next.js will automatically dedupe requests in a tree.
Use Loading UI, Streaming and Suspense to progressively render a page and show a result to the user while the rest of the content loads...

## Caching

New Next.js HTTP Cache and client-side cache optimized for Server Components and client-side navigation. The Next.js Cache is a persistent HTTP cache that can be globally distributed. This means the cache can scale automatically and be shared across multiple regions depending on your platform (e.g. Vercel).

Next.js extends the options object of the fetch() function to allow each request on the server to set its own persistent caching behavior. Together with component-level data fetching, this allows you to configure caching within your application code directly where the data is being used.

During server rendering, when Next.js comes across a fetch, it will check the cache to see if the data is already available. If it is, it will return the cached data. If not, it will fetch and store data for future requests.

        Good to know: This client-side cache is different from the server-side Next.js HTTP cache.

The new router has an in-memory client-side cache that stores the rendered result of Server Components (payload). The cache is split by route segments which allows invalidation at any level and ensures consistency across concurrent renders.

As users navigate around the app, the router will store the payload of previously fetched segments and prefetched segments in the cache.

This means, for certain cases, the router can re-use the cache instead of making a new request to the server. This improves performance by avoiding re-fetching data and re-rendering components unnecessarily.

## Optimization

Improved Image Component with native browser lazy loading. New Font Module with automatic font optimization.

The Next.js Image component extends the HTML <img> element with:

Size Optimization: Automatically serve correctly sized images for each device, using modern image formats like WebP and AVIF.
Visual Stability: Prevent layout shift automatically when images are loading.
Faster Page Loads: Images are only loaded when they enter the viewport using native browser lazy loading, with optional blur-up placeholders.

**next/font** will automatically optimize your fonts (including custom fonts) and remove external network requests for improved privacy and performance.

## Transpilation

Automatic transpilation and bundling of dependencies from local packages (like monorepos) or from external dependencies (node_modules). This replaces the next-transpile-modules package.

## API

Any file inside the folder app/api is mapped to /api/\* and will be treated as an API endpoint instead of a page. They are server-side only bundles and won't increase your client-side bundle size.

## Tooling

Introducing [Turbopack](https://turbo.build/pack), up to 700x faster Webpack replacement is an incremental bundler optimized for JavaScript and TypeScript, written in Rust.
