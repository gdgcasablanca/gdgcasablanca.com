module.exports = {
  siteMetadata: {
    title: `GDG Casablanca`,
    description: `Google Developer Groups of Casablanca City is for developers who are interested in Google's developer technology, everything from Android, App Engine, and Google Chrome platforms, to product APIs like the Maps API, YouTube API and Google Calendar API.`,
    author: `@GDGCasablanca`,
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
        name: `GDG Casablanca`,
        short_name: `GDG Casa`,
        start_url: `/`,
        background_color: `#1a73e8`,
        theme_color: `#1a73e8`,
        display: `minimal-ui`,
        icon: `src/images/gdg-casa-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-139563322-1',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
