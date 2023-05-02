require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: process.env.URL,
    title: 'Mike Ibberson',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Mike Ibberson',
        short_name: 'MI WebDev',
        start_url: '/',
        background_color: '#FFF',
        theme_color: '#023535',
        display: 'standalone',
        icon: 'static/mi_favicon.png',
        description: 'Portfolio website',
      },
    },
  ],
};
