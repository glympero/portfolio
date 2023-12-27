/**
 * @type {import('gatsby').GatsbyConfig}
 */

const config = require('./config');

module.exports = {
  siteMetadata: {
    title: config.title,
    siteUrl: config.siteUrl,
    description: config.description,
    author: config.author,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.jpg',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
