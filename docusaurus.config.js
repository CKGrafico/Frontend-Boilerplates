module.exports = {
  title: "Frontend Boilerplates",
  tagline: "Collection of Boilerplates with ES6, Vue, React, Nuxt, TypeScript, SCSS, Nodejs. Using good practices and file structures to inspire your real projects.",
  url: "https://boilerplates.js.org",
  baseUrl: "/",
  cname: "boilerplates.js.org",
  favicon: "img/favicon.ico",
  organizationName: "ckgrafico", // Usually your GitHub org/user name.
  projectName: "frontend-boilerplates", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Frontend Boilerplates",
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/ckgrafico",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/CKGrafico/Frontend-Boilerplates",
            },
          ],
        },
      ],
      copyright: `Made with 🍕 by CKGrafico`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "basic",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/ckgrafico/frontend-boilerplates/edit/docs/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
