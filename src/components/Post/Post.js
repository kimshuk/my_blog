import React from 'react';
import { Link } from 'gatsby';
import { Container, Typography, Box, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  postPaginationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1.5rem'
  },
  postPaginationLink: {
    fontWeight: 'bold',

  },
  publishedText: {
    fontStyle: 'italic'
  }
})

const Post = ({post, pageContext}) => {
  const classes = useStyles();
  const { html } = post;
  const { title, date } = post.frontmatter;
  const {next, prev} = pageContext;

  return (
    <Container maxWidth="sm">
      <Box my={6}>
          <Fab className={classes.button} href="/" variant="extended" size="medium">
            All Articles
          </Fab>
          <Typography className={classes.postTitle} variant="h2" component="h1" gutterBottom>{title}</Typography>
          <div dangerouslySetInnerHTML={{__html: html}} />
          <Typography className={classes.publishedText} variant="body1" component="p">Published on: {new Date(date).toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' })}</Typography>
          <div className={classes.postPaginationContainer}>
            {prev && <Link to={prev.fields.slug} className={classes.postPaginationLink}>← {prev.frontmatter.title}</Link>}
            {next && <Link to={next.fields.slug} className={classes.postPaginationLink}>{next.frontmatter.title} →</Link>}
          </div>
      </Box>
    </Container>
  )
}

export default Post;