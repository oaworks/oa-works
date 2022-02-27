const CleanCSS = require("clean-css");

const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

const sal = require('sal.js');
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)

module.exports = function(eleventyConfig) {
  eleventyConfig.setLibrary('md', markdownLib)

  eleventyConfig.addPlugin(lazyImagesPlugin);

  const cacheBusterOptions = {
    outputDirectory: 'dist',
    createResourceHash(outputDirectoy, url, target) {
      return Date.now();
    }
  };
  eleventyConfig.addPlugin(cacheBuster(cacheBusterOptions));

  // Set directories to pass through to the dist folder
  eleventyConfig.addPassthroughCopy('./src/assets/img/');
  eleventyConfig.addPassthroughCopy('./src/assets/fonts/');
  eleventyConfig.addPassthroughCopy('./src/assets/js/');
  eleventyConfig.addPassthroughCopy('./src/assets/favicons/');

  eleventyConfig.addPassthroughCopy({
    "node_modules/sal.js/dist/sal.css": "sal.css",
    "node_modules/sal.js/dist/sal.css.map": "sal.css.map",
    "node_modules/sal.js/dist/sal.js": "js/sal.js",
    "node_modules/sal.js/dist/sal.js.map": "js/sal.js.map"
  });

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true
  });

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
};
};
