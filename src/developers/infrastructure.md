---
layout: "layouts/products.liquid"
title: Infrastructure
meta_description: "Our products are backed by a core infrastructure built with entirely open code and open data in line with our values."
---
Our infrastructure is what makes our powerfully simple tools possible. Behind the scenes it enables:

* 100ms API response times so you’re never left watching a loading bar.
* 0 privacy invading trackers so users’ data stays theirs.
* AA accessibility so more people can use our services.
* 750GB of open data to answer your problems.
* 100/100 on Google’s web metrics so you can enjoy a great user experience.
* 99.999% uptime so you can count on us.
* Servers in 200 cities and 100 countries so you get a first class service everywhere.
* Documented, open code built with popular languages means you can fork and run it too.

Read on for more technical details.

## Data

We pull data from a variety of major players in the scholarly communications landscape. Our main data sources for our tools include:

* [CrossRef](https://crossref.org)
* [Unpaywall](https://unpaywall.org)
* [Microsoft Academic Graph](https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/)
* [Shareyourpaper.org Permissions](https://shareyourpaper.org/permissions)
* [DOAJ](https://doaj.org/)
* [Europe PMC](https://europepmc.org/)
* [WikiData](https://www.wikidata.org/wiki/Wikidata:Main_Page)
* [ROR (Research Organization Registry)](https://ror.org/)

## Websites

We build plain and simple so our sites can be fast and beautiful across the globe.

* We build using the “[JAMStack](https://jamstack.org/)” architecture. It’s used for its excellent performance and ease of scaling, low cost, and excellent security and developer experiences.
* We generate our websites using 11ty, a simple static site generator based on [Node.js](https://nodejs.org/en/). Each of our websites is standalone, with shared templates to ease production.
* Our sites are hosted on [Cloudflare Pages](https://pages.cloudflare.com/), a CDN (Content Delivery Network) which serves them from hundreds of locations across the world so they’re fast and provides a highly streamlined developer experience.
* When login is required, which we avoid whenever possible, we use a password-less system and OAuth2, along with browser session cookies. This ensures that we have a high security system, with little to no risk of leaking passwords. This system is a part of our backend.
* Privacy protecting analytics are provided by [Simple Analytics](https://simpleanalytics.com).
We also limit the use of dependencies that track users (e.g Google Web Fonts) or slow down our sites (e.g jQuery)

## Product Frontends

Our major products like [ShareYourPaper.org](https://ShareYourPaper.org) are designed to be embedded into any institution’s website (including our own).

* We designed our frontends as embeds so that institutions could flexibly deploy our tools on their own websites, with their own brands. We host the scripts that support them so they’re simple to set up and maintain.
* Where embedding is not desired, we can also build and run standalone websites/web pages that simply use these embeds.
* The scripts are hosted on our servers and cached by CloudFlare,
The frontends can be configured by end users by passing pre-set configs as part of the config code they copy to their website.
* The product’s frontend and backend are completely separate and communicate over public and documented APIs.
* Some of our tools—e.g., Open Access Button Chrome and Firefox extensions and ILLiad plugins—use separate approaches required to integrate with a particular vendor. However, the general pattern of splitting frontends from backends is respected.

## API

APIs do the heavy lifting behind the scenes. We make an API for everything we do and work to document and release it for anyone to use.

* Our API is a RESTful JSON API built using a serverless system called [CloudFlare Workers](https://workers.cloudflare.com/).
* CloudFlare Workers acts like our server for most queries and distributes our API code to hundreds of data centers around the world. This setup means response times can be as little as 10ms (10x less than what humans perceive as instant) and that the API is almost infinitely scalable and resilient, with little to no work on our part.
* Cloudflare Workers provides a significantly lower cost, more performant option than similar providers (like AWS, Azure) for what we need. However, should that change, our code is easily portable to another serverless provider or back to servers that we control and manage (e.g., using NGINX & Redis).

## Backend

Our servers contain our catalogue, logs, and other background jobs where we can’t access them quickly enough “on the fly.”

* All our backend code is written using Node.js with [Coffeescript](https://coffeescript.org/). Node.js is a popular and well-supported system for using Javascript for backend services. We chose it for its ease of writing as well as excellent performance, scalability, and tooling. Coffeescript is a flavor of Javascript that provides some “nice to have” benefits, but it compiles to vanilla Javascript, so it’s optional.
* Backend data is stored in an [OpenSearch](https://www.opensearch.org/) index cluster, which gives us best-in-the-world search capability across hundreds of millions of records. We store mirrors of CrossRef, Wikidata, among other sources.
* Our servers are Ubuntu Linux virtual servers from [Digital Ocean](https://www.digitalocean.com/), hosted in Europe. Digital Ocean is a cloud hosting provider with competitive prices, as well as an excellent developer experience and track record.
* We keep snapshots of our servers for use as backups and for transportability to other service providers if necessary.
* Our backend uses a few specialized services. We use Mailgun for programmatic email, Puppeteer for web scraping, Cron for job scheduling, Amazon S3 Buckets for backing up non-public encrypted data, and various python and BASH shell scripts for loading data dumps from other providers. These are Open Source where possible.
