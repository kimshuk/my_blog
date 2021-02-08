import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  menuListContainer: {
    marginBottom: '1.625rem'
  },
  menuList: {
    listStyle: 'none',
    padding: '0',
    margin: '0'
  },
  menuLink: {
    color: theme.palette.primary.main,
    padding: '0',
    margin: '0.625rem 0'
  },
  menuLinkActive: {
    color: theme.palette.secondary.main,
    borderBottom: `1px solid ${theme.palette.secondary.main}`
  }
}))

const Menu = ({ menu }) => {
  const classes = useStyles();

  return (
    <nav className={classes.menuListContainer}>
      <ul className={classes.menuList}>
        {menu.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={classes.menuLink}
              activeClassName={classes.menuLinkActive}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu;