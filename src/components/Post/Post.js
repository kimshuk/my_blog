import React from 'react';
import { Container, Typography, Box, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '../Link/Link';

const useStyles = makeStyles({
  button: {
    backgroundColor: '#fafafa'
  }
})

const Post = ({post}) => {
  const classes = useStyles();
  const { html } = post;
  const { tags, title, date } = post.frontmatter;

  return (
    <Container maxWidth="sm">
      <Box my={4}>
          <Fab className={classes.button} href="/" variant="extended">
            Go to the main page
          </Fab>
          <Typography variant="h2" component="h1" gutterBottom>{title}</Typography>
          <div dangerouslySetInnerHTML={{__html: html}} />
          <Typography variant="body1" component="p">Published on: {new Date(date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' })}</Typography>
      </Box>
    </Container>
  )
}

export default Post;