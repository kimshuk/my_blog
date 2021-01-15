import React from 'react';
import styles from './Author.module.scss';
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
        src={user.avatar}
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
