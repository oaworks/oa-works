---
layout: "layouts/products.liquid"
title: Infrastructure
meta_description: "Our products are backed by a core infrastructure built with entirely open code and open data in line with our values."
---
Here we detail some of the core technical details of our infrastructure, but if you don't want to know those just know our systems are:

* Performance and stable
* Cheap and easy to run
* Portable and forkable
* Modern and flexible
* Built with best-in-class tools

## Data

We pull data from a variety of major players in the scholarly communications landscape. Our main data sources for our tools include:

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

We build plain and simple so our sites can be fast and beautiful across the globe.

* We build using the “JAMStack” architecture. It’s used for its excellent performance and ease of scaling, low cost, and excellent security and developer experiences.
* We generate our websites using 11ty, a simple static site generator based on Node.js. Each of our websites is standalone, with shared templates to ease production.
* Our sites are hosted on Cloudflare Pages, a CDN (Content Delivery Network) which serves them from hundreds of locations across the world so they’re fast and provides a highly streamlined developer experience.
* When login is required, which we avoid whenever possible, we use a password-less system and OAuth2, along with browser session cookies. This ensures that we have a high security system, with little to no risk of leaking passwords. This system is a part of our backend.
* Privacy protecting analytics are provided by Simple Analytics.
We also limit the use of dependencies that track users (e.g Google Web Fonts) or slow down our sites (e.g jQuery)


## Product Frontends

Our major products like ShareYourPaper.org are designed to be embedded into any institution’s website (including our own).

* We designed our frontends as embeds so that institutions could flexibly deploy our tools on their own websites, with their own brands. We host the scripts that support them so they’re simple to set up and maintain.
* Where embedding is not desired, we can also build and run standalone websites/web pages that simply use these embeds.
* The scripts are hosted on our servers and cached by CloudFlare,
* The frontends can be configured by end users by passing pre-set configs as part of the config code they copy to their website.
* The product’s frontend and backend are completely separate and communicate over public and documented APIs.
* Some of our tools—e.g., Open Access Button Chrome and Firefox extensions and ILLiad plugins—use separate approaches required to integrate with a particular vendor. However, the general pattern of splitting frontends from backends is respected.


## API

APIs do the heavy lifting behind the scenes. We make an API for everything we do and work to document and release it for anyone to use.

* Our API is a RESTful JSON API built using a serverless system called CloudFlare Workers.
* CloudFlare Workers acts like our server for most queries and distributes our API code to hundreds of data centers around the world. This setup means response times can be as little as 10ms (10x less than what humans perceive as instant) and that the API is almost infinitely scalable and resilient, with little to no work on our part.
* Cloudflare Workers provides a significantly lower cost, more performant option than similar providers (like AWS, Azure) for what we need. However, should that change, our code is easily portable to another serverless provider or back to servers that we control and manage (e.g., using NGINX & Redis).


## Backend

We manage backend servers containing our catalogue, logs, and other long running background jobs. This is where we store mirrors of CrossRef, Wikidata, and other services’ data if we can’t access them quickly enough “on the fly.”

* All our backend code is written using Node.js with Coffeescript. Node.js is an extremely popular and well-supported system for using Javascript to run backend services. We chose it for its ease of writing (as it means you can write Javascript, a widely known language, on the frontend and backend), as well as excellent performance, scalability, and tooling. Coffeescript is a flavor of Javascript that provides some “nice to have” benefits when writing code. It compiles to and is executed as vanilla Javascript, which means it’s optional.
* Backend data is stored in an Elasticsearch index cluster, which gives us best-in-the-world search capability across hundreds of millions of records (and can scale to billions with a little more cost).
* Our servers are Ubuntu Linux virtual servers from Digital Ocean, hosted in Europe. Digital Ocean is a cloud hosting provider with competitive prices, as well as an excellent developer experience and track record.
* We keep snapshots of the servers for use as backups and for transportability to other service providers if necessary.
* Our backend uses a series of specialized services for some functions. For instance, we use Mailgun for programmatic email, Puppeteer for web scraping, Cron for job scheduling, Amazon S3 Buckets for backing up non-public encrypted data, and various python and BASH shell scripts for loading data dumps from other providers (e.g., CrossRef). These are either Open Source systems, or occasionally convenient providers of generic systems (e.g., mail).
