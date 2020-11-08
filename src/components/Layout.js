import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core'
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
          author
          description
          title
        }
      }
    }
  `)

console.log(data, "data");


  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid item sm>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          </Grid>
          <Grid item sm>
            <CssBaseline />
            <main>{children}</main>
            <footer></footer>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout