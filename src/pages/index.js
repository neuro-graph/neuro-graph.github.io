import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export const Head = () => (
  <>
    <title>Neuro Graph | Open-source knowledge graph documentation</title>
    <meta
      name="description"
      content="Neuro Graph is an open-source documentation hub for knowledge graph concepts, architecture, APIs, examples, and community practices."
    />
  </>
);

export default function HomePage() {
  return (
    <Layout>
      <section className="hero">
        <div className="eyebrow">Open-source Knowledge Graph Documentation</div>
        <h1>Build connected knowledge systems with Neuro Graph.</h1>
        <p className="hero-copy">
          Neuro Graph helps teams document, model, query, and operate knowledge graphs.
          Start with the core concepts, follow practical guides, and grow your graph with
          clear patterns for entities, relationships, metadata, provenance, and APIs.
        </p>
        <div className="hero-actions">
          <Link to="/getting-started/" className="button primary">Get started</Link>
          <Link to="/docs/" className="button secondary">Read the docs</Link>
        </div>
      </section>

      <section className="section grid three">
        <article className="card">
          <h2>Model knowledge</h2>
          <p>
            Define entities, relationships, properties, labels, taxonomies, and schemas so your graph stays understandable as it grows.
          </p>
        </article>
        <article className="card">
          <h2>Connect data</h2>
          <p>
            Map source data into graph structures, preserve provenance, and create reusable ingestion patterns for teams and applications.
          </p>
        </article>
        <article className="card">
          <h2>Query insights</h2>
          <p>
            Use graph queries, traversal patterns, and APIs to discover relationships, context, dependencies, recommendations, and paths.
          </p>
        </article>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Why Neuro Graph?</p>
          <h2>A documentation-first foundation for graph projects.</h2>
          <p>
            Knowledge graph projects often fail because the model, naming rules, data lineage, and query patterns are scattered across tools.
            Neuro Graph gives you a public, version-controlled place to explain how your graph works and how others can contribute safely.
          </p>
        </div>
        <div className="panel">
          <h3>Documentation areas</h3>
          <ul className="check-list">
            <li>Concepts and graph vocabulary</li>
            <li>Getting started tutorials</li>
            <li>Architecture and modeling guides</li>
            <li>API and query references</li>
            <li>Contribution and governance rules</li>
          </ul>
        </div>
      </section>

      <section className="section cta">
        <h2>Start with a small graph, then document every decision.</h2>
        <p>
          Create a sample entity model, add relationships, publish query examples, and invite contributors to improve the documentation through pull requests.
        </p>
        <Link to="/concepts/" className="button primary">Explore concepts</Link>
      </section>
    </Layout>
  );
}
