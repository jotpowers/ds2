module.exports = {
  title: 'Collected Bric-à-brac',
  tagline: 'Everything you never wanted to know',
  url: 'https://jotpowers.github.io',
  baseUrl: '/ds2/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/jp.ico',
  organizationName: 'jotpowers', // Usually your GitHub org/user name.
  projectName: 'ds2', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Collected Bric-à-brac',
      logo: {
        alt: 'My Site Logo',
        src: 'img/jp.ico',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/jotpowers',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/jotpowers',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/jotpowers',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jot Powers. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
	  routeBasePath: '/', // doc's only mode? jot
          // Please change this to your repo.
          //editUrl:
           // 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
