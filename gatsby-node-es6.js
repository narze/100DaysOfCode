
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
