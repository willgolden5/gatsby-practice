module.exports = {
  siteMetadata: {
    title: "gatsby-practice",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "k6ivABQyfmR5te6P8QMGuLDOULXqxqknLgaDIyGPbnE",
        spaceId: "gqfzf5om5m4h",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
