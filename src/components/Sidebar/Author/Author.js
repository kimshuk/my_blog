import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {Avatar, Typography, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  avatar: {
    cursor: 'pointer',
    width: 75,
    height: 75
  }
}))

const Author = ({ author }) => {
  const classes = useStyles();

  return (
    <>
      <Avatar 
        className={classes.avatar}
        component={GatsbyLink}
        src={author.photo}
        to="/"
      />
      <Typography
        className={classes.name}
        color="textPrimary"
        variant="h5"
        component="h1"
      >
        {author.name}
      </Typography>
      <Typography
        color="textSecondary"
        variant="subtitle1"
      >
        {author.job}
      </Typography>
      <Typography 
        variant="body2"
      >
        {author.bio}
      </Typography>
    </>
  )
}


export default Author
