import React from "react"
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { graphql, Link } from "gatsby"
import {useSiteMetadata} from '../hooks'
import Layout from '../components/Layout/Layout'
import Page from '../components/Page/Page'

import Sidebar from "../components/Sidebar/Sidebar";

const IndexPage = ({data}) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  return (
    <Layout>
      <Container maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <Sidebar />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <Page>
              <Typography variant="h4" component="h2">Index</Typography>
              <ul>
                {data.allMarkdownRemark.edges.map(post => (
                  <li key={post.node.id}><Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></li>
                ))}
              </ul>
            </Page>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQueryAndSiteTitleQuery {
    allMarkdownRemark(
      limit: 10
      filter: { frontmatter: { draft: { eq: false } } }
      sort: {fields: [ frontmatter___date ], order: ASC}
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
