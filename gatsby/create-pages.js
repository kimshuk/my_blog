'use strict';

const path = require('path');
const _ = require('lodash');
const siteConfig = require('../../config');
const createPostsPages = require('./pagination/create-posts-pages.js');

const createPages = async ({graphql, actions, reporter}) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/post-template.js');
  const IndexPage = path.resolve('src/pages/index.js');

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js')
  })

  const result = await graphql(`{
    allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
       ag   }
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

  edges.forEach(edge => {
    createPage({
      path: edge.node.frontmatter.path,
      component: postTemplate
    })
  })

  const { postsPerPage } = siteConfig;
  const numPages = Math.ceil(edges.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/' : `/page/${i}`,
      component: IndexPage,
      context: {
        currentPage: i + 1,
        numPages,
        postsLimit: postsPerPage,
        postsOffset : i * postsPerPage,
        prevPagePath: i <= 1 ? '/' : `/page/${i - 1}`,
        nextPagePath: `/page/${i+1}`,
        hasPrevPage: i !==0,
        hasNextPage: i !== numPages - 1,
      }
    })
  })
}

module.exports = createPages;