const pluginSass = require("eleventy-plugin-sass");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
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
