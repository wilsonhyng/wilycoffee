module.exports = function(eleventyConfig) {
  // Example configuration
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Other configuration options...
  
  return {
      dir: {
          input: "src",
          output: "_site"
      }
  };
};
