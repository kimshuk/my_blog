'use strict';

const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    if (typeof node.frontmatter.slug !== 'undefined') {
      const dirname = getNode(node.parent).relativeDirectory;
  
      createNodeField({
        node,
        name: 'slug',
        value: `/blogs/${node.frontmatter.slug}`
      });
    } else {
      const value = createFilePath({ node, getNode, basePath: 'blog' });
  
      createNodeField({
        node,
        name: 'slug',
        value: `/blogs${value}`
      })
    }
  }

  // Need to add tags in MD - frontmatter
  // if (node.frontmatter.tags) {

  // }

  // Need to add category in MD - frontmatter
  // if (node.frontmatter.category) {

  // }

}

module.exports = onCreateNode;