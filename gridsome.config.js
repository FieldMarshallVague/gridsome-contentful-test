// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  templates: {
    ContentfulBlogPost: '/blog/:slug'
  },
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CTF_SPACE_ID, 
        accessToken: process.env.CTF_CD_ACCESS_TOKEN, 
        host: 'cdn.contentful.com',
        environment: process.env.CONTENTFUL_ENVIRONMENT,
        typeName: 'Contentful'
      }
    },
    
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: 'blog/**/*.md',
    //     typeName: 'Post',
    //     route: '/blog/:slug',
    //     resolveAbsolutePaths: true,
    //     remark: {
    //       autolinkClassName: 'fas fa-hashtag',
    //       externalLinksTarget: '_blank',
    //       externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    //       plugins: [
    //         [ 'gridsome-plugin-remark-shiki', { theme: 'nord' } ]
    //       ]
    //     }
    //   }
    // }
  ]
}
