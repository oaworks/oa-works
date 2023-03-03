[![Netlify Status](https://api.netlify.com/api/v1/badges/5e7bf013-1c7f-4a94-86fe-a8316ceb6e11/deploy-status)](https://app.netlify.com/sites/oaworks/deploys)

# OA.Works’ Official Site

OA.Works is a non-profit building tools so that open access is easy and equitable. They’re free, open source, and co-designed with advocates for a just world.

Built with [Eleventy](https://www.11ty.dev/).

## Running the site locally

Prerequisites:
- Running from the command line.
- Installing [Node.js](https://nodejs.dev/) and [Node Package Manager](https://www.npmjs.com/) or `npm`.


1. Clone this repository by typing in your terminal:
`git clone https://github.com/oaworks/oa-works.git`

2. Change to its newly created directory: `cd oa-works/`

3. Install Eleventy for this project: `npm install @11ty/eleventy`

4. You can now run the server by entering `npm run serve:dev`. This will also start a `gulp` task that will watch for changes in the preprocessed css and convert them to a minified `main.css` file.

5. Direct your web browser to `http://localhost:8080/`.

If running locally isn't your thing, try:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=support-codespaces&repo=321735364&machine=basicLinux32gb&devcontainer_path=.devcontainer%2Fdevcontainer.json&location=WestEurope)

## Setting environment variables

When cloning this repository locally, you will need to create a `.env` file that will contain:
```BASE_URL="http://localhost:8080"
ELEVENTY_ENV="dev"```

If building in staging or production, the commands are as follows:
`npm run build:staging` for staging, and `npm run build:prod` for production.

In Netlify, there are steps to take to build and deploy depending on the environment: Site Settings > Build & deploy > Environment. Under Environment variables: Edit variables and add `ELEVENTY_ENV` as the key and `prod` as the value.
