'use strict';

const path = require('path');
const siteConfig = require('../../config');

module.exports = async (graphql, actions) => {
  const { createPage } = actions;
  const IndexPage = path.resolve('src/pages/index.js');

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