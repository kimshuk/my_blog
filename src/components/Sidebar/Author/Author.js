import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {Avatar, Typography, makeStyles} from '@material-ui/core';

const user = {
  avatar: '/static/images/avatars/my_profile.png',
  jobTitles: 'Web Developer',
  name: 'Andrew Kim',
}

const useStyles = makeStyles(() => ({
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}))

const Author = () => {
  const classes = useStyles();

  return (
    <>
      <Avatar 
        className={classes.avatar}
        component={GatsbyLink}
        src={user.avatar}
        to="/"
      />
      <Typography
        className={classes.name}
        color="textPrimary"
        variant="h5"
      >
        {user.name}
      </Typography>
      <Typography
        color="textSecondary"
        variant="subtitle1"
      >
        {user.jobTitles}
      </Typography>
      <Typography 
        variant="body2"
      >
        {}
      </Typography>
    </>
  )
}


export default Author
