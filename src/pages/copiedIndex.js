import React from "react"
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { graphql, Link } from "gatsby"
import Header from "../components/header"
import Layout from '../components/Layout'

import Image from "../components/image"
import SEO from "../components/seo"
import Sidebar from "../components/Sidebar/Sidebar";

const IndexPage = ({data}) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <Sidebar />
      <Page>
        <Feed edges={edges} />
        <Pagination

        />
      </Page>
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query IndexQueryAndSiteTitleQuery {
//     allMarkdownRemark(
//       limit: 10
//       filter: { frontmatter: { draft: { eq: false } } }
//       sort: {fields: [ frontmatter___date ], order: DESC}
//     ) {
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             path
//             date
//           }
//         }
//       }
//     }
//     site {
//         siteMetadata {
//           title
//         }
//       }
//   }
// `

export default IndexPage
