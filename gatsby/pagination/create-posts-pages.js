'use strict';

const path = require('path');
const siteConfig = require('../../config');

module.exports = async(graphql, actions) => {
  const { createPage } = actions;
  const IndexTemplate = path.resolve('src/pages/index.js')

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { draft: { ne: true }} }
      ) { totalCount }
    }
  `);

  const { postsPerPage } = siteConfig;
  const numPages = Math.ceil(result.data.allMarkdownRemark.totalCount / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/' : `/pages/${i}`,
      component: IndexTemplate,
      context: {
        currentPage: i,
        postsLimit: postsPerPage,
        postsOffset : i * postsPerPage,
        prevPagePath: i <= 1 ? '/' : `/pages/${i - 1}`,
        hasPrevPage: i !==0,
        hasNextPage: i !== numPages - 1,
        totalCount: result.data.allMarkdownRemark.totalCount
      }
    })
  })

  

}