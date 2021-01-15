'use strict';

const path = require('path');
const _ = require('lodash');

const createPages = async ({graphql, actions}) => {
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

  if (result.errors) {
    return Promise.reject(result.errors);
  }

  const { edges } = result.data.allMarkdownRemark;

  _.each(edges, (edge) => {
    createPage({
      path: edge.node.frontmatter.path,
      component: postTemplate
    })
  })
}

module.exports = createPages;