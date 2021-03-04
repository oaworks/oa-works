const pluginSass = require("eleventy-plugin-sass");
const CleanCSS = require("clean-css");

const markdownIt = require('markdown-it')
const markdownItAttrs = require('markdown-it-attrs')

const markdownItOptions = {
  html: true,
  breaks: true,
  linkify: true
}

const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)

module.exports = function(eleventyConfig) {
  eleventyConfig.setLibrary('md', markdownLib)

  // Copy to _site/
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("fonts");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("favicons");

  // Add CSS minifier
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Copy css/ to _site/
  // eleventyConfig.addPassthroughCopy('css');

  // eleventyConfig.addPlugin(pluginSass, sassPluginOptions);

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true
  });

  return {
    passthroughFileCopy: true

  };
};
