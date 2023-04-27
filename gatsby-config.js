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
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'Mike Ibberson',
    //     short_name: 'MI',
    //     start_url: '/',
    //     background_color: '#000',
    //     theme_color: '#FFF',
    //   },
    // },
  ],
};
