import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const latestEntryNode = data.latestEntry.edges[0] && data.latestEntry.edges[0].node
  const tagGroups = data.tagGroups && data.tagGroups.group

  return (
  <Layout>
    <SEO title="Home" />

    <div className="container mx-auto">
      <nav className="flex justify-center p-4">
        <div className="text-xl font-semibold">
          <Link to="/">#100DaysOfCode</Link>
        </div>
      </nav>

      <section className="hero-image">
        <div className="overlay py-32 px-4 text-center">
          <div className="w-full max-w-2xl mx-auto">
            <span className="text-sm font-semibold">Learn coding with</span>
            <h2 className="text-5xl mt-2 mb-6 leading-tight font-heading">
              100 Days Of Code
            </h2>
            <p className="mb-8 leading-relaxed">
              1% better every day, 2.7x better in 100 days!
            </p>
          </div>
        </div>
      </section>

      { latestEntryNode &&
        <section className="py-12 px-4">
          <h2 className="text-3xl text-center mb-8 font-heading">Latest : Day {latestEntryNode.frontmatter.day}</h2>

          <Link to={latestEntryNode.fields.slug}>
            <div className="mx-32">
              {latestEntryNode.frontmatter.cover && <Img fluid={latestEntryNode.frontmatter.cover.childImageSharp.fluid} />}
              <div className="pb-8 rounded shadow-md">
                <div className="mt-4 px-6">
                  <small>Day {latestEntryNode.frontmatter.day} | {latestEntryNode.frontmatter.date}</small>
                  <h3 className="text-xl my-3 font-heading">
                    {latestEntryNode.frontmatter.title}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </section>
      }

      <section className="py-12 px-4">
        <h2 className="text-3xl text-center mb-8 font-heading">All Entries</h2>
        <div className="flex flex-wrap -mx-4">
          {
            data.entries.edges.map(({ node }) => (
              <div key={node.id} className="card">
                <Link to={node.fields.slug}>
                  {node.frontmatter.cover && <Img fluid={node.frontmatter.cover.childImageSharp.fluid} />}
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

        <div className="flex justify-end">
          <Link to={`/page/2`}>
            <div className="p-2 bg-teal-300">
              Next →
            </div>
          </Link>
        </div>
      </section>

      { tagGroups &&
        <section className="py-8 px-4">
          <h2 className="text-3xl text-center mb-2 font-heading">What I have learned</h2>

          <div className="p-6 flex flex-wrap justify-center items-center">
            {
              tagGroups.sort((a, b) => b.totalCount - a.totalCount)
                       .map(({ tag, totalCount }, i) => (
                <div key={i} className="flex-initial">
                  {
                    totalCount > 10 ? (
                      <div className="text-xl p-3 m-1 border rounded">
                        <strong>{tag}</strong> {totalCount} Days
                      </div>
                    ) :
                    totalCount > 1 ? (
                      <div className="text-base p-2 m-1 border rounded">
                        <strong>{tag}</strong> {totalCount} Days
                      </div>
                    ) : (
                      <div className="text-xs p-1 m-1 border rounded">
                        <strong>{tag}</strong> {totalCount} Day
                      </div>
                    )
                  }
                </div>
              ))
            }
          </div>
        </section>
      }

      <footer className="flex flex-wrap items-center justify-between p-4">
        <div className="w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center">
          &copy; {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
        <div className="w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center">
          <a href="https://github.com/narze/100daysofcode">Github</a>
        </div>
      </footer>
    </div>
  </Layout>
)}

export default IndexPage

export const query = graphql`
  query {
    entries: allMarkdownRemark(
      sort: {fields: frontmatter___day, order: DESC},
      limit: 9,
      skip: 0
    ) {
      edges {
        node {
          id
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
    latestEntry: allMarkdownRemark(limit: 1, sort: {fields: frontmatter___day, order: DESC}) {
      edges {
        node {
          id
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
    tagGroups: allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`
