import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default function Page({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges
  const { currentPage, numPages } = pageContext

  return (
    <Layout>
      <SEO title={`Page ${currentPage}`} />

      <div className="container mx-auto">
        <nav className="flex justify-center p-4">
          <div className="text-xl font-semibold">
            <Link to="/">#100DaysOfCode</Link>
          </div>
        </nav>

        <section className="py-12 px-4">
          <h2 className="text-3xl text-center mb-8 font-heading">
            {`Page ${currentPage}`}
          </h2>
          <div className="flex flex-wrap -mx-4">
            {
              posts.map(({ node }, i) => (
                <div key={i} className="card">
                  <Link to={node.fields.slug}>
                    { node.frontmatter.cover && <Img fluid={node.frontmatter.cover.childImageSharp.fluid} /> }
                    <div className="pb-8 rounded shadow-md">
                      <div className="mt-4 px-6">
                        <small>Day {node.frontmatter.day} | {node.frontmatter.date}</small>
                        <h3 className="text-xl my-3 font-heading">
                          {node.frontmatter.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>

          <div className="flex justify-around">
            {Array.from({ length: numPages }, (_, i) => (
              <Link key={`pagination-number${i + 1}`} to={`/page/${i + 1}`}>
                <div className="p-1 px-4 bg-teal-300">
                  {i + 1}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query pageQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___day], order: DESC },
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            day
            cover {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
