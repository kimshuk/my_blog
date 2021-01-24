import React from "react"
import { Container, Grid, Typography, Divider, makeStyles } from '@material-ui/core';
import { graphql, Link } from "gatsby"
import { useSiteMetadata } from '../hooks'
import Layout from '../components/Layout/Layout'
import Feed from '../components/Feed/Feed'
import Sidebar from "../components/Sidebar/Sidebar";
import Paginate from '../components/Paginate/Paginate';

const useStyles = makeStyles((theme) => ({
  gridContainerRoot: {
    flexWrap: 'nowrap'
  },
  dividerRoot: {
    backgroundImage: 'linear-gradient(to bottom, #e6e6e6 0%, #e6e6e6 48%, #FFF 100%)',
    backgroundSize: 'auto',
    width: '0.0625rem',
    height: '33.75rem',
    marginTop: '2.635rem'
  }
}))

const IndexPage = ({data, pageContext}) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const classes = useStyles();
  const { edges } = data.allMarkdownRemark;
  console.log(edges, "edges");

  return (
    <Layout>
      <Container maxWidth="md">
        <Grid className={classes.gridContainerRoot} container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <Sidebar />
          </Grid>
          <Divider className={classes.dividerRoot} orientation="vertical" />
          <Grid item lg={8} md={6} xs={12}>
            <Feed  />
            <Paginate pageContext={pageContext} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

{/* <Page>
<Typography variant="h4" component="h2">Index</Typography>
<ul>
  {data.allMarkdownRemark.edges.map(post => (
    <li key={post.node.id}><Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link></li>
  ))}
</ul>
</Page> */}

export const pageQuery = graphql`
  query IndexQueryAndSiteTitleQuery($postsLimit: Int! = 10, $postsOffset: Int! = 0) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
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
