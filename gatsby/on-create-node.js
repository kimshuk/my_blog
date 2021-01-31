'use strict';

const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (typeof node.frontmatter.slug !== 'undefined') {
    const dirname = getNode(node.parent).relativeDirectory;

    console.log(getNode(node.parent), "getNode()");

    createNodeField({
      node,
      name: 'slug',
      value: `${dirname}/${node.frontmatter.slug}`
    });
  } else {
    const value = createFilePath({ node, getNode });
    console.log(value, "createFilePath");
    console.log(getNode(node.parent), "getNode()");

    createNodeField({
      node,
      name: 'slug',
      value
    })
  }

  // Need to add tags in MD - frontmatter
  // if (node.frontmatter.tags) {

  // }

  // Need to add category in MD - frontmatter
  // if (node.frontmatter.category) {

  // }

}

module.exports = onCreateNode;