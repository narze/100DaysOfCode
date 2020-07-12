import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="container mx-auto">
      <nav className="flex justify-center p-4">
        <div className="text-xl font-semibold">
          #100DaysOfCode
        </div>
      </nav>

      <section className="hero-image">
        <div className="overlay py-32 px-4 text-center">
          <div className="w-full max-w-2xl mx-auto">
            <span className="text-sm font-semibold">Learn coding with</span>
            <h2 className="text-5xl mt-2 mb-6 leading-tight font-heading">
              100 Days Of Code
            </h2>
            <p className="subtitle mb-8 leading-relaxed">
              A 100-day project which will change your life. Join us!
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-3xl text-center mb-8 font-heading">Entries</h2>
        <div className="flex flex-wrap -mx-4">
          {
            data.allMarkdownRemark.edges.map(({ node }) => (
              <div key={node.id} className="w-full lg:w-1/3 px-4 mb-8">
                <Link to={node.fields.slug}>
                  <div className="h-full pb-8 rounded shadow-md">
                    <img
                      className="mb-4"
                      src="placeholders/pictures/work.jpg"
                      alt=""
                    />
                    <div className="px-6">
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
      </section>

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
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(sort: {fields: frontmatter___day, order: ASC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            day
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
