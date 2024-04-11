const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {

  dir: {
    output: "docs"
  }

  eleventyConfig.addPassthroughCopy("manifest.json");
  eleventyConfig.addPassthroughCopy("img/**/*.*");

  eleventyConfig.setTemplateFormats(["md", "html", "rss", "njk"]);

  eleventyConfig.addTemplateFormats("css");

  eleventyConfig.addTemplateFormats("js");

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });
};
