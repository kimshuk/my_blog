'use strict';

const path = require('path');
const _ = require('lodash');
const siteConfig = require('../config');

const createPages = async ({graphql, actions, reporter}) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/post-template.js');
  // const indexTemplate = path.resolve('src/templates/index-template.js');

  const result = await graphql(`{
    allMarkdownRemark(
      filter: { frontmatter: { draft: { ne: true }} }
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }`);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { edges } = result.data.allMarkdownRemark;
  
  edges.forEach((edge, index) => {
    const prev = index === edges.length - 1 ? null : edges[index + 1].node;
    const next = index === 0 ? null : edges[index - 1].node

    console.log(edge.node.fields.slug, "edge.node.fields.slug")

    createPage({
      path: edge.node.fields.slug,
      component: postTemplate,
      context: {
        slug: edge.node.fields.slug,
        prev,
        next
      }
    })
  })

  // const { postsPerPage } = siteConfig;
  // const numPages = Math.ceil(edges.length / postsPerPage);

  // Array.from({ length: numPages }).forEach((_, i) => {
  //   createPage({
  //     path: i === 0 ? '/' : `/page/${i}`,
  //     component: indexTemplate,
  //     context: {
  //       currentPage: i,
  //       numPages,
  //       postsLimit: postsPerPage,
  //       postsOffset : i * postsPerPage,
  //       prevPagePath: i <= 1 ? '/' : `/page/${i - 1}`,
  //       nextPagePath: `/page/${i+1}`,
  //       hasPrevPage: i !==0,
  //       hasNextPage: i !== numPages - 1,
  //     }
  //   })
  // })
}

module.exports = createPages;