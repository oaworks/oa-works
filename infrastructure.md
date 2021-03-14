---
layout: "layouts/default.liquid"
title: Infrastructure [DRAFT]
meta_description: "Our products are backed by a core infrastructure built with exclusively open code, open data, and our values."
---

## Data

Our main data sources for our tools include:
* CrossRef
* Unpaywall
* Microsoft Academic Graph
* Bing
* Shareyourpaper.org Permissions
* DOAJ
* EUPMC
* WikiData
* ROR (Research Organization Registry)

## Websites

Our websites are built using HTML, CSS (using Flexbox for grids), and vanilla Javascript whenever possible (and when not, jQuery is used). They’re static websites, generated using 11ty, a leading static site generator. Each of our websites is standalone, with shared templates to ease production. They’re hosted on Netlify, a CDN (Content Delivery Network) that provides a highly streamlined developer experience, but they’re highly portable to any CDN or server. We also use Cloudflare for extra caching. This approach is popular and referred to as “JAMStack.” It’s used for its excellent performance and ease of scaling, low cost, and excellent security and developer experiences.

When login is required, which we avoid whenever possible, we use a password-less system and OAuth2, along with browser session cookies. This ensures that we have a high security system, with little to no risk of leaking passwords. This system is a part of our backend.

Analytics are provided by Simple Analytics and Cloudflare Web Analytics, both of which are privacy-focused.

## Product Frontends

Our recent products, like Shareyourpaper.org, are designed to be embedded into any website (including our own). The embed scripts are written in vanilla Javascript, CSS, and HTML and so require no dependencies to run. They’re hosted on our servers and cached by CloudFlare. The frontends can be configured by end users by passing pre-set configs as part of their embed code. The product’s frontend and backend are completely separate and communicate over public and documented APIs. This means that the frontend could be entirely forked and hosted separately.

We designed our frontends as embeds, so that institutions could flexibly deploy our tools on their own websites, with their own brands and fantastic performance, but without having to manage a complex set-up process and long-term support. Where this is not desired, we can also build and run standalone websites/web pages that simply use these embeds.

Some of our tools—e.g., Open Access Button Chrome and Firefox extensions and ILLiad plugins—use separate approaches required to integrate with a particular vendor. However, the general pattern of splitting our frontends from our backends is respected.

Privacy-focused analytics are provided by our API.

## Backend: API

Our API is a RESTful JSON API built using a serverless system called CloudFlare Workers. CloudFlare Workers acts like our server and distributes our API code to hundreds of data centers around the world. This setup means response times can be as little as 10ms (10x less than what humans perceive as instant) and that the API is almost infinitely scalable and resilient, with little to no work on our part. Cloudflare Workers provides a significantly lower cost, more performant option than other providers. However, should that change, our code is easily portable to another serverless provider or back to servers that we control and manage (e.g., using NGINX & Redis).

## Backend: Data search & storage

We also manage several backend servers containing our catalogue, logs, and background jobs that don’t need to run in Cloudflare Workers. This is where we store mirrors of CrossRef, Wikidata, and other services’ data that we can’t access quickly enough “on the fly.”

That data is stored in an Elasticsearch index cluster, which gives us best-in-the-world search capability across hundreds of millions of records (and can scale to billions with a little more cost). The backend is exposed to our frontends and Cloudlfare Workers, as well as to external services, via an NGINX web server.

Our servers are Ubuntu Linux virtual servers from Digital Ocean, hosted in Europe. Digital Ocean is a cloud hosting provider with competitive prices, as well as an excellent developer experience and track record. Once again, we’ve made sure we can port our code to another provider easily if required (AWS, Google Cloud, etc). We keep snapshots of the servers for use as backups and for transportability to other service providers if necessary.

## Backend: General
All our backend code is written using Node.js with Coffeescript. Node.js is an extremely popular and well-supported system for using Javascript to run backend services. We chose it for its ease of writing (as it means you can write Javascript, a widely known language, on the frontend and backend), as well as excellent performance, scalability, and tooling. Coffeescript is a flavor of Javascript that provides some “nice to have” benefits when writing code. It compiles to and is executed as vanilla Javascript, which means it’s optional.

We use multiple open source libraries and published algorithms for complex processes like TDM. We use everything from regular expressions to scrape web pages through to text analysis algorithms such as Levenshtein / Hamming distances, and machine learning cluster algorithms such as k-means. We also have some AI neural network code in development for potential future use to improve image analysis over standard available libraries. We also integrate with other service providers where useful, such as google entity extraction and sentiment analysis (and we also do some of our own). We’ll be making this stuff more externally usable, and it’s open source as well.

Our backend uses a series of specialized services for some functions. For instance, we use Mailgun for programmatic email, Puppeteer for web scraping, Cron for job scheduling, Amazon S3 Buckets for backing up non-public encrypted data, and various python and BASH shell scripts for loading data dumps from other providers (e.g., CrossRef). These are either Open Source systems, or convenient providers of generic systems (e.g., mail).
## Development

We use a wide variety of tools to help us manage the development and maintenance of our code. These are conveniences, and not integral to our codebase. Some major tools include:

* Our code is hosted on Github, and we make our code Open Source immediately as we build.
* For all our systems (websites, frontends, backends), we maintain identical development and production environments.
* We practice continuous integration and deployment using Git hooks.
* We conduct automated testing using Ghost Inspector (for end-to-end testing) and Difftest (a system developed in-house for checking JSON APIs for changes).
* We have built a variety of in-house tooling for analyzing logs, monitoring systems, sending alerts, and analyzing our codebase.
* We monitor and report the uptime of our systems using UptimeRobot and Updown.
* We use Google Sheets and Figma for rapid prototyping backend and frontend systems.
* Our code is backed up on Zenodo and Github’s own preservation system. We periodically check that our websites are archived by the Internet Archive.
