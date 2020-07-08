
import entries from "./content/entries.js"

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  entries.forEach((element) => {
    createPage({
      path: `/day/${element.day}`,
      component: require.resolve("./src/templates/basic-template.js"),
      context: {
        title: element.title,
        links: [{ to: "/", name: "Home" }, ...(element.links || [])],
        pageContent: element.subtitle,
      },
    })
  })
}

import { createFilePath } from "gatsby-source-filesystem"

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
