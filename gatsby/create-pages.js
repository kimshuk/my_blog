'use strict';

const path = require('path');
const _ = require('lodash');
const createPostsPages = require('./pagination/create-posts-pages.js');

const createPages = async ({graphql, actions, reporter}) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/post-template.js');

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

  _.each(edges, (edge) => {
    createPage({
      path: edge.node.frontmatter.path,
      component: postTemplate
    })
  })

  await createPostsPages(graphql, actions);
}

module.exports = createPages;