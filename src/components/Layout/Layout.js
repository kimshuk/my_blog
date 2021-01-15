import React from "react";
import Helmet from 'react-helmet'
import { useSiteMetadata } from '../../hooks'

const Layout = ({ 
  children,
  title,
  description,
  socialImage = ''
}) => {
  console.log(useSiteMetadata());
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage || author.photo;

  return (
    <>
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
    </>
  )
}

export default Layout