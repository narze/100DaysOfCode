import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default function DayEntry({ data }) {
  const entry = data.markdownRemark

  return (
    <Layout>
      <SEO title={`Day ${entry.frontmatter.day}`} />

      <div className="container mx-auto">
        <nav className="flex justify-center p-4">
          <div className="text-xl font-semibold">
            #100DaysOfCode
          </div>
        </nav>


        <section className="py-12 px-4">
          <h2 className="text-3xl text-center mb-2 font-heading">Day {entry.frontmatter.day} | {entry.frontmatter.title}</h2>
          <p className="mt-1 my-4 text-center text-gray-400">{entry.frontmatter.date}</p>

          <div className="px-20 my-4 text-center">
            {entry.frontmatter.cover && <Img fixed={entry.frontmatter.cover.childImageSharp.fixed} />}
          </div>

          <div dangerouslySetInnerHTML={{ __html: entry.html }} />
          <Link className="text-gray-600 font-semibold underline" to="/">Back</Link>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        day
        cover {
          childImageSharp {
            fixed(width: 600) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
