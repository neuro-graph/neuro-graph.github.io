import { defineConfig } from 'vitepress'
import { businessProcessSidebar } from './businessProcessSidebar'

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
          { text: 'Docs', link: '/docs' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Concepts', link: '/concepts/' },
          { text: 'Business Processes', link: '/business-processes/README' },
          { text: 'Explorer', link: '/explorer/' },
          { text: 'API', link: '/api' },
          { text: 'Community', link: '/community' }
       ],

    sidebar: {
        '/business-processes/': businessProcessSidebar,

        '/': [
          {
            text: 'Overview',
            items: [
              { text: 'Introduction', link: '/docs' },
              { text: 'Getting Started', link: '/getting-started' }
            ]
          },
          {
            text: 'Concepts',
            collapsed: false,
            link: '/concepts/',
            items: [
              {
                text: 'Knowledge Graph in the Web of Data',
                collapsed: true,
                link: '/concepts/knowledge-graph-in-the-web-of-data/',
                items: [
                  {
                    text: 'Data Information and Knowledge',
                    link: '/concepts/knowledge-graph-in-the-web-of-data/data-information-and-knowledge'
                  },
                  {
                    text: 'How to Represent Knowledge',
                    link: '/concepts/knowledge-graph-in-the-web-of-data/how-to-represent-knowledge'
                  },
                  {
                    text: 'Linked Data and the Web of Data',
                    link: '/concepts/knowledge-graph-in-the-web-of-data/linked-data-and-the-web-of-data'
                  },
                  {
                    text: 'The Art of Understanding',
                    link: '/concepts/knowledge-graph-in-the-web-of-data/the-art-of-understanding'
                  },
                  {
                    text: 'The Semantic Web',
                    link: '/concepts/knowledge-graph-in-the-web-of-data/the-semantic-web'
                  },
                  {
                    text: 'Towards a Universal Knowledge Representation',
                    link: '/concepts/knowledge-graph-in-the-web-of-data/towards-a-universal-knowledge-representation'
                  }
                ]
              },
              {
                text: 'Basic Semantic Technologies',
                link: '/concepts/basic-semantic-technologies/',
                collapsed: true,
                items: [
                  {
                    text: 'How to Identify and Access Things',
                    link: '/concepts/basic-semantic-technologies/how-to-identify-and-access-things'
                  },
                  {
                    text: 'How to Represent Simple Facts with RDF',
                    link: '/concepts/basic-semantic-technologies/how-to-represent-simple-facts-with-rdf'
                  },
                  {
                    text: 'Logical Inference with RDF(s)',
                    link: '/concepts/basic-semantic-technologies/logical-inference-with-rdf(s)'
                  },
                  {
                    text: 'Model Building with RDFS',
                    link: '/concepts/basic-semantic-technologies/model-building-with-rdfs'
                  },
                  {
                    text: 'RDF Complex Data Structures',
                    link: '/concepts/basic-semantic-technologies/rdf-complex-data-structures'
                  },
                  {
                    text: 'RDF Turtle Serialization',
                    link: '/concepts/basic-semantic-technologies/rdf-turtle-serialization'
                  },
                  {
                    text: 'RDFa RDF on the Web',
                    link: '/concepts/basic-semantic-technologies/rdfa-rdf-on-the-web'
                  }
                ]
              },
              {
                text: 'Querying RDFS with SPARQL',
                collapsed: true,
                link: '/concepts/querying-rdfs-with-sparql/',
                items: [
                  {
                    text: 'Complex Queries with SPARQL',
                    link: '/concepts/querying-rdfs-with-sparql/complex-queries-with-sparql'
                  },
                  {
                    text: 'DBpedia Knowledge Graph',
                    link: '/concepts/querying-rdfs-with-sparql/dbpedia-knowledge-graph'
                  },
                  {
                    text: 'How to Query RDF(s)',
                    link: '/concepts/querying-rdfs-with-sparql/how-to-query-rdf(s)'
                  },
                  {
                    text: 'More Complex SPARQL Queries',
                    link: '/concepts/querying-rdfs-with-sparql/more-complex-sparql-queries'
                  },
                  {
                    text: 'RDF Databases',
                    link: '/concepts/querying-rdfs-with-sparql/rdf-databases'
                  },
                  {
                    text: 'SPARQL is More Than a Query Language',
                    link: '/concepts/querying-rdfs-with-sparql/sparql-is-more-than-a-query-language'
                  },
                  {
                    text: 'SPARQL Subqueries and Property Paths',
                    link: '/concepts/querying-rdfs-with-sparql/sparql-subqueries-and-property-paths'
                  },
                  {
                    text: 'Wikidata Knowledge Graph',
                    link: '/concepts/querying-rdfs-with-sparql/wikidata-knowledge-graph'
                  }
                ]
              },
              
              {
                text: 'Knowledge Representation with Ontologies',
                collapsed: true,
                link: '/concepts/knowledge-representation-with-ontologies/',
                items: [
                  {
                    text: 'Brief History of Ontologies',
                    link: '/concepts/knowledge-representation-with-ontologies/brief-history-of-ontologies'
                  },
                  {
                    text: 'Description Logics',
                    link: '/concepts/knowledge-representation-with-ontologies/description-logics'
                  },
                  {
                    text: 'Essential Logics',
                    link: '/concepts/knowledge-representation-with-ontologies/essential-logics'
                  },
                  {
                    text: 'First Steps in OWL',
                    link: '/concepts/knowledge-representation-with-ontologies/first-steps-in-owl'
                  },
                  {
                    text: 'How to Design Your Own Ontology',
                    link: '/concepts/knowledge-representation-with-ontologies/how-to-design-your-own-ontology'
                  },
                  {
                    text: 'More OWL',
                    link: '/concepts/knowledge-representation-with-ontologies/more-owl'
                  },
                  {
                    text: 'OWL and Beyond',
                    link: '/concepts/knowledge-representation-with-ontologies/owl-and-beyond'
                  },
                  {
                    text: 'Why We Do Need Logic',
                    link: '/concepts/knowledge-representation-with-ontologies/why-we-do-need-logic'
                  }
                ]
              },
              {
                text: 'Knowledge Graph Applications',
                collapsed: true,
                link: '/concepts/knowledge-graph-applications/',
                items: [
                  {
                    text: 'Knowledge Graph Analytics',
                    link: '/concepts/knowledge-graph-applications/knowledge-graph-analytics'
                  },
                  {
                    text: 'Knowledge Graph Programming',
                    link: '/concepts/knowledge-graph-applications/knowledge-graph-programming'
                  },
                  {
                    text: 'Knowledge Graph Visualization',
                    link: '/concepts/knowledge-graph-applications/knowledge-graph-visualization'
                  },
                  {
                    text: 'Knowledge Graphs',
                    link: '/concepts/knowledge-graph-applications/knowledge-graphs'
                  },
                  {
                    text: 'Ontologies in Action',
                    link: '/concepts/knowledge-graph-applications/ontologies-in-action'
                  },
                  {
                    text: 'RDF and OWL Knowledge Graphs',
                    link: '/concepts/knowledge-graph-applications/rdf-and-owl-knowledge-graphs'
                  }
                ]
              },
              {
                text: 'Advance Knowledge Graph Applications',
                collapsed: true,
                link: '/concepts/advance-knowledge-graph-applications/',
                items: [
                  {
                    text: 'Exploratory Search and Recommender System',
                    link: '/concepts/advance-knowledge-graph-applications/exploratory-search-and-recommender-system'
                  },
                  {
                    text: 'Knowledge Graph Completion',
                    link: '/concepts/advance-knowledge-graph-applications/knowledge-graph-completion'
                  },
                  {
                    text: 'Knowledge Graph Embeddings',
                    link: '/concepts/advance-knowledge-graph-applications/knowledge-graph-embeddings'
                  },
                  {
                    text: 'Knowledge Graphs Mappings and Alignment',
                    link: '/concepts/advance-knowledge-graph-applications/knowledge-graphs-mappings-and-alignment'
                  },
                  {
                    text: 'Semantic Search',
                    link: '/concepts/advance-knowledge-graph-applications/semantic-search'
                  },
                  {
                    text: 'The Graph in Knowledge Graphs',
                    link: '/concepts/advance-knowledge-graph-applications/the-graph-in-knowledge-graphs'
                  }
                ]
              }
            ]
          },
          {
            text: 'Developers',
            items: [
              { text: 'API', link: '/api' },
              { text: 'Community', link: '/community' }
            ]
          }
        ]
},

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
