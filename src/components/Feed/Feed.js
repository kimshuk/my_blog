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
        <Link to={post.node.fields.slug}>
          <Typography component='h2' variant='h3'>
            {post.node.frontmatter.title}
          </Typography>
        </Link>
        <Typography component='p'>{post.node.frontmatter.description}</Typography>
        <Link to={post.node.fields.slug}>Read</Link>
      </li>
    ))}
  </ul>
);

export default Feed;