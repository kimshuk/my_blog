module.exports = {
  siteMetadata: {
    title: `Andrew's Tech Blog`,
    description: `Blog about anything I learned or worth mentioning`,
    author: `Andrew Kim`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog by Andrew`,
        short_name: `Blog by Andrew`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#0442BF`,
        display: `standalone`,
        icon: `src/images/my_profile.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    'gatsby-transformer-remark'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
