import React from 'react';
import { Link } from 'gatsby';
import { Typography } from '@material-ui/core';

const Feed = ({ edges }) => (
  <ul>
    {edges.map(post => (
      <li key={post.node.id}>
        <time dateTime={ new Date(post.node.frontmatter.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }) }>
          { new Date(post.node.frontmatter.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }) }
        </time>
        <Typography component='h2' variant='h3'>
          <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
        </Typography>
        <Typography component='p'>{post.node.frontmatter.description}</Typography>
        <Link to={post.node.frontmatter.path}>Read</Link>
      </li>
    ))}
  </ul>
);

export default Feed;