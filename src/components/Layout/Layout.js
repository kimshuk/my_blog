import React from "react";
import Helmet from 'react-helmet'
import { useSiteMetadata } from '../../hooks'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';

const Layout = ({ 
  children,
  title,
  description,
  socialImage = ''
}) => {
  const { author } = useSiteMetadata();
  // const metaImage = socialImage || author.photo;

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
      {children}
    </ThemeProvider>
  )
}

export default Layout