// _data/posts.js
const { EleventyFetch } = require("@11ty/eleventy-fetch");

// ---------------------------------------------------------------------------
//  Configuration – use env-vars in production and fall back to demo creds
// ---------------------------------------------------------------------------
const GHOST_URL = process.env.GHOST_URL || "https://oabutton.ghost.io";
const GHOST_KEY = process.env.GHOST_CONTENT_KEY || "cdfb45e729a2cc651f79ab3b9d";

// Build the REST URL manually so we can hand it to EleventyFetch
const FILTER = encodeURIComponent("tag:-talk");           // exclude "talk" tag
const FIELDS = "title,slug,feature_image,feature_image_alt,published_at,updated_at";
const ORDER  = encodeURIComponent("published_at DESC");   // newest first
const API    = `${GHOST_URL}/ghost/api/content/posts/`;
const URL    = `${API}?key=${GHOST_KEY}&filter=${FILTER}&fields=${FIELDS}&order=${ORDER}&limit=all`;

module.exports = async function () {
  /*
    duration  – how long to cache the file. 1h ≈ “run at most once an hour”.
                If you pass --ignore-cache on the CLI the file is re-downloaded immediately.
    type      – we expect JSON
    fetchOptions.headers.Accept-Version – tell Ghost we want the v5 Content API
  */
  const json = await EleventyFetch(URL, {
    duration: "1h",
    type: "json",
    fetchOptions: { headers: { "Accept-Version": "v5" } }
  });

  // Ghost wraps the array inside { posts: [...] }
  return json.posts;
};
