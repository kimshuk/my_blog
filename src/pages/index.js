import React from "react"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Layout from '../components/Layout'

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Box>
          <SEO title="Home" />
          <Typography variant="h4" component="h2">Index</Typography>
          <ul>
            {data.allMarkdownRemark.edges.map(post => (
              <li key={post.node.id}><Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></li>
            ))}
          </ul>

        </Box>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQueryAndSiteTitleQuery {
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
    site {
        siteMetadata {
          title
        }
      }
  }
`

export default IndexPage
