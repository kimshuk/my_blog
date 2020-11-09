module.exports = {
  siteMetadata: {
    title: `Andrew's Tech Blog`,
    description: `Blog about anything I learned or worth mentioning`,
    author: {
      name: 'Andrew Kim',
      photo: './src/images/my_profile.png',
      bio: 'Eiusmod elit nostrud sunt eiusmod sint labore mollit ea labore ut aute incididunt labore.',
      contacts: {
        email: 'jeesoo2002@gmail.com',
        github: 'kimshuk',
        linkedin: 'andrew-kim-72b5598b',
        website: 'www.jeesookim.com'
      }
    }
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
      resolve: `gatsby-plugin-material-ui`,
      options: {

      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`
      }
    },
    `gatsby-transformer-remark`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
