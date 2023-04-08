// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BuildTheEarth Docs",
  tagline: "Our home in Minecraft",
  url: "https://docs.buildtheearth.net",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "BuildTheEarth", // Usually your GitHub org/user name.
  projectName: "docs-website", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "BuildTheEarth Documentation",
        items: [
          {
            type: "doc",
            docId: "intro",
            label: "Docs",
            to: "/docs/intro",
          },
          {
            to: "https://github.com/BuildTheEarth/docs-website",
            label: "GitHub",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "Discord",
                href: "https://discordapp.com/invite/buildtheearth",
              },
              {
                label: "Website",
                href: "https://buildtheearth.net",
              },
              {
                label: "GitHub",
                href: "https://github.com/BuildTheEarth",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BuildTheEarth Community.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
