---
layout: home

hero:
  name: Neuro Graph
  text: Connect. Discover. Understand.
  tagline: Open-source documentation for building, exploring, and explaining knowledge graphs with clear entity and relationship models.
  image:
    src: /logo.svg
    alt: Neuro Graph logo
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/
    - theme: alt
      text: Read the Docs
      link: /docs/

features:
  - icon: 🧠
    title: Entity-first knowledge
    details: Model people, organizations, documents, systems, and concepts as connected graph entities.
  - icon: 🔗
    title: Relationship intelligence
    details: Document how relationships are discovered, stored, queried, and explained.
  - icon: ⚡
    title: Fast developer docs
    details: Built with VitePress, local search, sidebar navigation, dark mode, and GitHub Pages deployment.
---
<div class="home-explorer-section">

<div class="home-explorer-heading">

<p class="home-explorer-eyebrow">Interactive RDF / OWL Explorer</p>

<h2>Try Neuro Graph directly in the docs</h2>

<p>
Choose a sample ontology, upload RDF/OWL data, switch between friendly, ontology,
and raw triple views, and inspect each node with relationships and metadata.
</p>

</div>

<ClientOnly>
  <OntologyExplorer />
</ClientOnly>

</div>