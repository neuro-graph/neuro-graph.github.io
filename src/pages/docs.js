import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export const Head = () => <title>Documentation | Neuro Graph</title>;

export default function DocsPage() {
  return (
    <Layout>
      <section className="page-header">
        <p className="eyebrow">Documentation</p>
        <h1>Neuro Graph documentation</h1>
        <p>
          Use these guides to understand the graph model, prepare data, publish APIs, and maintain a reliable knowledge graph over time.
        </p>
      </section>

      <section className="section docs-list">
        <Link to="/getting-started/" className="doc-row">
          <span>
            <strong>Getting Started</strong>
            <small>Create your first documented knowledge graph.</small>
          </span>
          <span>→</span>
        </Link>
        <Link to="/concepts/" className="doc-row">
          <span>
            <strong>Core Concepts</strong>
            <small>Learn entities, relationships, schemas, provenance, and graph governance.</small>
          </span>
          <span>→</span>
        </Link>
        <Link to="/api/" className="doc-row">
          <span>
            <strong>API Reference</strong>
            <small>Document endpoints, query examples, responses, and integration contracts.</small>
          </span>
          <span>→</span>
        </Link>
        <Link to="/community/" className="doc-row">
          <span>
            <strong>Community</strong>
            <small>Contribute improvements, examples, glossary terms, and modeling patterns.</small>
          </span>
          <span>→</span>
        </Link>
      </section>
    </Layout>
  );
}
