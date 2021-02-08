import React from "react"
import { Container, Grid, Divider, makeStyles } from '@material-ui/core';
import { graphql } from "gatsby"
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
  const { title: siteTitle, subtitle: siteSubtitle, author } = useSiteMetadata();
  const classes = useStyles();
  const { edges } = data && data.allMarkdownRemark;

  const {
    currentPage,
  } = pageContext;

  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return (
    <Layout title={`${pageTitle} - ${author.name}`} description={siteSubtitle}>
      <Container maxWidth="md">
        <Grid className={classes.gridContainerRoot} container>
          <Grid item lg={4} md={5} sm={12}>
            <Sidebar isIndex />
          </Grid>
          <Divider className={classes.dividerRoot} orientation="vertical" />
          <Grid item lg={8} md={7} sm={12}>
            <Feed edges={edges} />
            {pageContext && <Paginate pageContext={pageContext} />}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQueryAndSiteTitleQuery($postsLimit: Int!, $postsOffset: Int!) {
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
            date
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }`

