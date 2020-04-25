require('dotenv').config({ path: '.env' });

const path = require('path');
const sanityConfig = require('./sanity-config');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: 'Tom Hendra',
    description: 'Portfolio website for Tom Hendra, web developer.',
    author: 'Tom Hendra',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        // your google analytics tracking id
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
        // respect do not track
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...sanityConfig,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    // 'gatsby-plugin-emotion',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'tom-hendra-portfolio',
        short_name: 'tom-hendra',
        start_url: '/',
        background_color: '#3b4252',
        theme_color: '#88c0d0',
        display: 'minimal-ui',
        icon: 'src/images/logo/tomhendra-logo-512.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
  ],
};
