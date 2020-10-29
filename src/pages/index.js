import React from "react"
import { graphql, Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h2>Index</h2>
    <ul>
    {data.allMarkdownRemark.edges.map(post => (
      <li><Link key={post.node.id} to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></li>
    ))}
    </ul>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      filter: { frontmatter: { draft: { eq: false } } }
      sort: {fields: [ frontmatter___date ], order: DESC}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default IndexPage
