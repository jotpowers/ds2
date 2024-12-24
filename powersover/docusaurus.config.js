module.exports = {
  title: 'Powers Over ...',
  tagline: 'Everything you never wanted to know',
  url: 'https://jotpowers.github.io',
  baseUrl: '/ds2/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/jp.ico',
  organizationName: 'jotpowers', // Usually your GitHub org/user name.
  projectName: 'ds2', // Usually your repo name.
  themeConfig: {
	// jot
    googleAdsense: {
      dataAdClient: "ca-pub-7431564940208130",
    },
    navbar: {
      //title: 'Collected Bric-à-brac',
      title: 'Powers Over ...',
      logo: {
        alt: 'Logo',
        src: 'img/jp.ico',
      },
      items: [
        {
          //to: 'docs/',
          to: '/',
          //activeBasePath: 'docs',
          label: 'Documentation',
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
              to: 'doc1',
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
      copyright: `Copyright © ${new Date().getFullYear()} Jot Powers. Built with Docusaurus and Anger`,
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
//jot
//  plugins: [
//    'docusaurus-plugin-google-adsense',
// ],
};
