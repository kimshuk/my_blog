import React from 'react';
import { withPrefix, Link as GatsbyLink } from 'gatsby';
import {Avatar, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  avatar: {
    cursor: 'pointer',
    width: 75,
    height: 75
  },
  name: {
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: '1.82813rem',
    margin: '0.8125rem 0 0'
  },
  job: {
    fontSize: 14,
    marginBottom: '0.8125rem'
  },
  bio: {
    fontSize: 14,
    color: '#222222',
    lineHeight: '1.625rem',
    marginBottom: '1.625rem'
  }
}))

const Author = ({ author, isIndex }) => {
  const classes = useStyles();

  return (
    <>
      <Avatar 
        className={classes.avatar}
        component={GatsbyLink}
        src={withPrefix(author.photo)}
        to="/"
      />
      { isIndex === true ? (
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
          component="h1"
        >
          {author.name}
        </Typography>
      ) : (
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
          component="h2"
        >
          {author.name}
        </Typography>
      )}
      <Typography
        className={classes.job}
        color="textSecondary"
        variant="subtitle1"
      >
        {author.job}
      </Typography>
      <Typography 
        className={classes.bio}
        color="textPrimary"
        variant="body2"
      >
        {author.bio}
      </Typography>
    </>
  )
}


export default Author
