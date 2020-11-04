import React from "react"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { graphql, Link } from "gatsby"
import Header from "../components/header"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <SEO title="Home" />
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> 
        <Typography variant="h4" component="h2">Index</Typography>
        <ul>
          {data.allMarkdownRemark.edges.map(post => (
            <li><Link key={post.node.id} to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></li>
          ))}
        </ul>
        <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.jeesookim.com/">Andrew Kim</a>
        </footer>
      </Box>
    </Container>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

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
