import React from 'react';
import { Container, Typography, Box, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '../Link/Link';

const useStyles = makeStyles({
  button: {
    backgroundColor: '#fafafa',
    boxShadow: 'none',
    border: '1px solid #e6e6e6',
    position: 'fixed',
    margin: '0',
    top: '30px',
    left: '30px',
    '&:hover': {
      backgroundColor: '#fafafa'
    }
  },
  postTitle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '3rem'
  },
  publishedText: {
    fontStyle: 'italic'
  }
})

const Post = ({post}) => {
  const classes = useStyles();
  const { html } = post;
  const { tags, title, date } = post.frontmatter;

  return (
    <Container maxWidth="sm">
      <Box my={4}>
          <Fab className={classes.button} href="/" variant="extended" size="medium">
            All Articles
          </Fab>
          <Typography className={classes.postTitle} variant="h2" component="h1" gutterBottom>{title}</Typography>
          <div dangerouslySetInnerHTML={{__html: html}} />
          <Typography className={classes.publishedText} variant="body1" component="p">Published on: {new Date(date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' })}</Typography>
      </Box>
    </Container>
  )
}

export default Post;