import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Neuro Graph',
  description: 'Open-source documentation for knowledge graph exploration, entity discovery, and relationship intelligence.',
  lang: 'en-US',
  base: '/',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#070b16' }],
    ['meta', { property: 'og:title', content: 'Neuro Graph' }],
    ['meta', { property: 'og:description', content: 'Connect, discover, and understand knowledge graphs.' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Neuro Graph',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Docs', link: '/docs/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Concepts', link: '/concepts/' },
      { text: 'Explorer', link: '/explorer/' },
      { text: 'API', link: '/api/' },
      { text: 'Community', link: '/community/' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Introduction', link: '/docs/' },
          { text: 'Getting Started', link: '/getting-started/' }
        ]
      },
      {
        text: 'Concepts',
        items: [
          { text: 'Knowledge Graphs', link: '/concepts/' },
          { text: 'Entities', link: '/concepts/entities' },
          { text: 'Relationships', link: '/concepts/relationships' },
          { text: 'Graph Queries', link: '/concepts/queries' },
          { text: 'RDF/OWL Explorer', link: '/explorer/' }
        ]
      },
      {
        text: 'Developers',
        items: [
          { text: 'API', link: '/api/' },
          { text: 'Community', link: '/community/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/neuro-graph/neuro-graph.github.io' }
    ],

    footer: {
      message: 'Released as open-source documentation.',
      copyright: 'Copyright © 2026 Neuro Graph'
    },

    editLink: {
      pattern: 'https://github.com/neuro-graph/neuro-graph.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
    }
  }
})
