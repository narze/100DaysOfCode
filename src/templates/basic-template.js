import React from "react"
import { Link } from "gatsby"

const basicTemplate = props => {
  const { pageContext } = props
  const { pageContent, links, title } = pageContext
  return (
    <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
      <h1>{title}</h1>
      <p>{pageContent}</p>
      <ul>
        {(links || []).map((item, index) => {
          return (
            <li key={`link_${index}`}>
              <Link to={item.to}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default basicTemplate
