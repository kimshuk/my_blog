import React from 'react';
import { Link } from 'gatsby';
import { Typography, makeStyles } from '@material-ui/core';
import styles from './Feed.module.scss';

const useStyles = makeStyles((theme) => ({
  feedContainer: {
    listStyleType: 'none',
    padding: '2.5rem 2.1875rem',
    margin: 0
  },
  feedItemTitle: {
    fontSize: '1.6875rem',
    lineHeight: '2.4375rem',
    marginTop: 0,
    marginBottom: '0.8125rem'
  },
  feedItemLink: {
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.main,
      borderBottom: `1px solid ${theme.palette.primary.main}`,
      textDecoration: 'none'
    }
  },
  feedDescContainer: {
    fontSize: theme.typography.body1,
    lineHeight: '1.625rem',
    marginBottom: '1.21875rem'
  }
}))

const Feed = ({ edges }) => {
  const classes = useStyles();

  return (
    <ul className={classes.feedContainer}>
      {edges.map(post => (
        <li key={post.node.id} className={styles['feed__item']}>
          <time className={styles['feed__item-meta-time']} dateTime={ new Date(post.node.frontmatter.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }) }>
            { new Date(post.node.frontmatter.date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }) }
          </time>
          <Typography component='h2' variant='h3' className={classes.feedItemTitle}>
            <Link to={post.node.fields.slug} className={classes.feedItemLink}>
                {post.node.frontmatter.title}
            </Link>
          </Typography>
          <Typography component='p' className={classes.feedDescContainer}>{post.node.frontmatter.description}</Typography>
          <Link to={post.node.fields.slug}>Read</Link>
        </li>
      ))}
    </ul>
  )
};

export default Feed;