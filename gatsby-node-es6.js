import entries from "./content/entries.js"

exports.createPages = async ({ graphql, actions }) => {
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

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
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
