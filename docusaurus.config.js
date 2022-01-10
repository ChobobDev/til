// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TIL',
  tagline: 'Dinosaurs are cool',
  url: 'https://chobobdev.github.io/',
  baseUrl: '/TIL/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'chobobdev', // Usually your GitHub org/user name.
  projectName: 'TIL', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/chobobdev/TIL/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TIL',
        logo: {
          alt: 'My Site Logo',
          src: 'img/gopherb.svg',
        },
        items: [
          {
            href: 'https://github.com/chobobdev/TIL',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'TIL',
                to: '/',
              },
            ],
          },
          {
            title: 'Other',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/ChobobDev',
              },
              {
                label: 'Blog',
                href: 'https://chobobdev.github.io/blog/',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/seongbin-cho-120641170/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TIL, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
