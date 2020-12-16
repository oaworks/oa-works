module.exports = function(eleventyConfig) {
  // Copy img/ to _site/
  eleventyConfig.addPassthroughCopy("img");

  // Copy css/ to _site/
  eleventyConfig.addPassthroughCopy('css');

  eleventyConfig.setLiquidOptions({
    dynamicPartials: true
  });

  return {
    passthroughFileCopy: true
  };
};
