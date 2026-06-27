import * as React from "react";
import Layout from "../components/Layout";

export const Head = () => <title>Getting Started | Neuro Graph</title>;

export default function GettingStartedPage() {
  return (
    <Layout>
      <section className="page-header">
        <p className="eyebrow">Guide</p>
        <h1>Getting started</h1>
        <p>
          This guide shows how to plan a small knowledge graph and document it clearly from day one.
        </p>
      </section>

      <section className="section article">
        <h2>1. Choose a domain</h2>
        <p>
          Start with one focused use case such as research papers, biomedical concepts, organizational knowledge, application metadata, or product relationships.
          A small graph with clear definitions is better than a large graph with unclear meaning.
        </p>

        <h2>2. Define your entities</h2>
        <p>
          Entities are the things your graph describes. Example entity types include Person, Organization, Document, Dataset, Concept, Project, Disease, Protein, or Event.
        </p>
        <pre><code>{`Entity: ResearchPaper
Properties:
  - title
  - publicationYear
  - doi
  - abstract
Relationships:
  - AUTHORED_BY -> Person
  - CITES -> ResearchPaper
  - ABOUT -> Concept`}</code></pre>

        <h2>3. Define relationships</h2>
        <p>
          Relationships explain how entities connect. Name relationships with clear verbs and document direction, required properties, and examples.
        </p>
        <pre><code>{`(:ResearchPaper)-[:CITES]->(:ResearchPaper)
(:ResearchPaper)-[:AUTHORED_BY]->(:Person)
(:Person)-[:AFFILIATED_WITH]->(:Organization)`}</code></pre>

        <h2>4. Add provenance</h2>
        <p>
          Provenance records where knowledge came from. Track source system, extraction date, confidence score, and human review status whenever possible.
        </p>

        <h2>5. Publish examples</h2>
        <p>
          Every model decision should include an example. Add sample nodes, relationships, queries, and expected results so future contributors can follow the same pattern.
        </p>
      </section>
    </Layout>
  );
}
