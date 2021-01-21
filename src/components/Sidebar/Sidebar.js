import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { useSiteMetadata } from '../../hooks';
import Contacts from './Contacts/Contacts';
import Author from './Author/Author';
import Menu from './Menu/Menu';

const useStyles = makeStyles((theme) => ({
  copyrightText: {
    color: '#b6b6b6'
  }
}))

const Sidebar = () => {
  const { author, menu } = useSiteMetadata();
  const classes = useStyles();

  return (
    <>
      <Author author={author} />
      <Menu menu={menu} />
      <Contacts contacts={author.contacts} />
      <Typography className={classes.copyrightText} variant="caption">© {new Date().getFullYear()}, Built by Andrew Kim</Typography>
    </>
  )
};

export default Sidebar;