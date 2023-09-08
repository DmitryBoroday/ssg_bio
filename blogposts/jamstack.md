---
title: 'Welcome To The Jamstack'
date: 'March 7, 2023'
excerpt: 'In this review, we will be looking at the new Python book from Oriley'
cover_image: '/images/jamstack.jpg'
---

In recent years, Jamstack has become one of the hottest terms in the developer community. More and more people are talking about it, and several technologies have been developed following this trend. Specifically, many of these were built on top of React, which is one of the most appreciated libraries by front-end developers. So, it is time to delve into the relationship between Jamstack and React.

## What is Jamstack?

Originally, Jamstack was referenced as JAMstack, where J stood for JavaScript, A for API, and M for Markup. In detail, Jamstack was conceived as a new web development architecture built on top of client-side JavaScript, reusable APIs accessible via HTTPS to abstract the database layer, and prebuilt markup generated once at deployment time.

Jamstack has evolved a lot since then, turning into a movement. As a result, the term has been adopted widely by a variety of technologies, which has made defining what exactly Jamstack represents today difficult. On the other hand, it is still considered an architectural approach to building websites based on these two key principles:

**Decoupling**

All services involved in a website should be clearly separated. This means that each component will be easier to upgrade, improve, or change, because inherently independent of the others. Specifically, the front-end should be decoupled from the back-end. As stated in the official documentation, adopting a headless CMS solution is an easy way to achieve decoupling. In fact, as we have already covered here, a headless CMS allows you to decouple your front-end from your back-end when it comes to content management and beyond.

**Pre-rendering**

Jamstack websites are generally pre-rendered. This means that all the pages that make up the front-end are built and compiled into JavaScript, HTML, and CSS files at deploy time by using an SSG (Static-Site Generation) approach. Then, these files are usually served from a CDN (Content Delivery Network). In this process, the back-end is involved at build-time to retrieve the data to build the pages through the APIs it exposes. But these APIs can also be called by the browser to change the page dynamically through JavaScript.

## Why Adopt Jamstack?

As promoted by the official website, there are at least 5 good reasons to adopt Jamstack. Let’s see them all:

**Performance**

With pre-rendered pages, you do not need to generate pages for every request. This makes the response time of your website lightning fast.

**Security**

Its decoupling nature makes it more difficult to break the entire architecture with a single attack.

**Scaling and hosting**

Because the files are pre-rendered, they can be hosted from a CDN, which is notoriously cheaper, faster, and easier to scale than traditional hosting.

**Maintainability**

No hosting complexity means less maintainability involved. Since most of the effort is done at built-time, the generated website can be considered stable as a result.

**Portability**

Since all the pages your website consists of exist after the deployment, they can easily be transferred to any static hosting solution.

## Jamstack Next.js

At the time of writing, Next.js is the most popular JavaScript framework based on React. According to the 2023 Web Almanac, 63.6% of Jamstack sites are generated with Next.js, making it the most adopted framework on the market when it comes to Jamstack.
But Next.js is not just a static site generator and comes with a surprising number of cutting-edge built-in features, such as SEO and image optimization. Plus, it is supported by top-notch documentation and by thousand of NPM libraries.

**Pros:**

It is the React-based framework with the largest community

Comes with several built-in optimizations and advanced features

Supported by a vast option of libraries

Supports IGS (Incremental Static Regeneration)

Can be deployed on Vercel in minutes effortlessly

**Cons:**

Does not support plugins

Not fully supported by all deployment platforms
