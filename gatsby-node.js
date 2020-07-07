/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
require(`@babel/register`)({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

module.exports = require(`./gatsby-node-es6.js`);
