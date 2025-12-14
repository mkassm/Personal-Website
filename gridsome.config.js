// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Mohamed Kassem",
  siteDescription:
    "Mohamed Kassem (@mkassm) is a software engineer who loves the tech industry, problem solving, and open source contributions.",
  siteUrl: "https://www.mohamedkassem.xyz",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        refs: { tags: { typeName: "Tag", create: true } },
      },
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "Mohamed Kassem portfolio",
          feed_url: "https://www.mohamedkassem.xyz/rss.xml",
          site_url: "https://www.mohamedkassem.xyz",
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.summary,
          url: "https://blog.mohamedkassem.xyz/" + node.slug,
          author: "Mohamed Kassem",
          date: node.date,
        }),
        output: { dir: "./static", name: "rss.xml" },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
        config: { "/*": { changefreq: "daily", priority: 0.5 } },
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: { id: "UA-153855958-2" },
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#000000",
        icon_path: "./src/favicon.png",
        name: "Mohamed Kassem Portfolio",
        short_name: "Mohamed Kassem",
        theme_color: "#FFFFFF",
        lang: "en",
      },
    },
    {
      use: "gridsome-plugin-gtm",
      options: { id: "GTM-57J8VXW", enabled: true, debug: true },
    },
    {
      use: "gridsome-plugin-robots-txt",
      options: {
        host: "https://www.mohamedkassem.xyz",
        sitemap: "https://www.mohamedkassem.xyz/sitemap.xml",
        policy: [
          {
            userAgent: "Googlebot",
            allow: "/",
            disallow: "/search",
            crawlDelay: 2,
          },
          {
            userAgent: "*",
            allow: "/",
            disallow: "/search",
            crawlDelay: 10,
            cleanParam: "ref /articles/",
          },
        ],
      },
    },
  ],
  templates: { Tag: "/tag/:id" },
  transformers: {
    remark: {
      plugins: [
        [
          "gridsome-plugin-remark-shiki",
          { theme: "Material-Theme-Palenight", skipInline: true },
        ],
      ],
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
    },
  },
  icon: "/favicon.ico",
};
