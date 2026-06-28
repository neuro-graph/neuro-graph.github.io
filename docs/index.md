---
layout: home

hero:
  name: Neuro Graph
  text: Knowledge Graph Playground.
  tagline: Open-source space for building, exploring, and explaining knowledge graphs with clear entity and relationship models.
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

---
<div class="ng-home-features">

<div class="ng-home-feature">
  <div class="ng-home-feature-icon">
    <ui5-icon name="overview-chart"></ui5-icon>
  </div>
  <h3>RDF/OWL Visualization</h3>
  <p>Model people, organizations, documents, systems, and concepts as connected graph entities.</p>
</div>

<div class="ng-home-feature">
  <div class="ng-home-feature-icon">
    <ui5-icon name="chain-link"></ui5-icon>
  </div>
  <h3>Business Process & Entity correlation</h3>
  <p>Generate RDF turtle based on relationship inference between entity and business process</p>
</div>

<div class="ng-home-feature">
  <div class="ng-home-feature-icon">
    <ui5-icon name="heatmap-chart"></ui5-icon>
  </div>
  <h3>Trusted LLM, Neuro-Symbolic AI & Digital Twin Foundation</h3>
  <p>Provide foundation knowledge for building of Trusted LLM, Neuri-Symbolic AI & Digital Twin Foundation</p>
</div>

</div>

<div class="home-explorer-section">

<div class="home-explorer-heading">

<p class="home-explorer-eyebrow">Interactive RDF / OWL Explorer</p>

<h2>Neuro Explorer to visualize Knowledge Graph</h2>

<p>
Choose a sample ontology, upload RDF/OWL data, switch between friendly, ontology,
and raw triple views, and inspect each node with relationships and metadata.
</p>

</div>

<ClientOnly>
  <OntologyExplorer />
</ClientOnly>

</div>