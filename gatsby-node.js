/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require("fs")
const yaml = require("js-yaml")
exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const ymlDoc = yaml.safeLoad(fs.readFileSync("./content/index.yml", "utf-8"))
  ymlDoc.forEach(element => {
    createPage({
      path: element.path,
      component: require.resolve("./src/templates/basic-template.js"),
      context: {
        pageContent: element.content,
        links: element.links,
      },
    })
  })
}
