import React from "react";
import PropTypes from 'prop-types';
import { Grid, Link } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import { graphql, useStaticQuery } from 'gatsby';
import Header from './header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          description
          title
          author {
            name
          }
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item sm>
          <Header siteMetadata={data.site.siteMetadata} />
          <Link to="/">Articles</Link>
          <Link to="/about-me">About me</Link>
        </Grid>
        <Grid item sm>
          <CssBaseline />
          <main>{children}</main>
          <footer style={{
              marginTop: `2rem`
            }}>
              © {new Date().getFullYear()}, Built by
              {` `}
              <Link to="https://www.jeesookim.com/">Andrew Kim</Link>
          </footer>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout