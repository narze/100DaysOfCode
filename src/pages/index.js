import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import entries from "../../content/entries.js"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {/* <h1 className="bg-teal-400">Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    <div className="container mx-auto px-4">
      <nav className="flex justify-center p-4">
        <div className="text-xl text-indigo-500 font-semibold">
          #100DaysOfCode
        </div>
      </nav>

      <section className="py-12 px-4 text-center">
        <div className="w-full max-w-2xl mx-auto">
          <span className="text-sm font-semibold">Learn coding with</span>
          <h2 className="text-5xl mt-2 mb-6 leading-tight font-heading">
            100 Days Of Code
          </h2>
          <p className="mb-8 text-gray-500 leading-relaxed">
            A 100-day project which will change your life. Join us!
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-3xl text-center mb-8 font-heading">Entries</h2>
        <div className="flex flex-wrap -mx-4">
          {entries.reverse().map(element => {
            return (
              <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="h-full pb-8 rounded shadow-md">
                  <Link to={`/day/${element.day}`}>
                    <img
                      className="mb-4"
                      src="placeholders/pictures/work.jpg"
                      alt=""
                    />
                    <div className="px-6">
                      <small>Day {element.day} | {element.date}</small>
                      <h3 className="text-xl my-3 font-heading">
                        {element.title}
                      </h3>
                      <p className="text-gray-500">{element.subtitle}</p>
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-12 px-4">
      <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title}{" "}
              <span
                css={css`
                  color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </section>

      {/* <div className="flex p-4">
        <ul className="flex mx-auto list-reset border border-grey-light rounded">
          <li>
            <a
              className="block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500 border-r border-grey-light"
              href="#"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              className="block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500 border-r border-grey-light"
              href="#"
            >
              1
            </a>
          </li>
          <li>
            <a
              className="block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500 border-r border-grey-light"
              href="#"
            >
              2
            </a>
          </li>
          <li>
            <a
              className="block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500 border-r border-grey-light"
              href="#"
            >
              3
            </a>
          </li>
          <li>
            <a
              className="block px-3 py-2 text-blue-700 hover:text-white hover:bg-indigo-500"
              href="#"
            >
              Next
            </a>
          </li>
        </ul>
      </div> */}

      <footer className="flex flex-wrap items-center justify-between p-4">
        <div className="w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center">
          &copy; {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
        <div className="w-full lg:w-auto lg:mr-6 mb-4 lg:mb-0 text-center">
          <a href="https://github.com/narze/100daysofcode">Github</a>
        </div>
        {/* <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
          <div className="mx-auto lg:mx-0 lg:ml-auto">
            <a
              className="inline-block mt-0 text-blue-900 hover:text-blue-700"
              href="#"
            >
              Products
            </a>
            <a
              className="inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700"
              href="#"
            >
              Team
            </a>
            <a
              className="inline-block mt-0 ml-8 text-blue-900 hover:text-blue-700"
              href="#"
            >
              Customers
            </a>
          </div>
          <div className="flex justify-center mt-4 lg:mt-0 lg:ml-8">
            <img
              className="w-6 h-6 mr-6"
              src="placeholders/icons/message.svg"
              alt=""
            />
            <img
              className="w-6 h-6"
              src="placeholders/icons/share.svg"
              alt=""
            />
          </div>
        </div> */}
      </footer>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
