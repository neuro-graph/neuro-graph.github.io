import * as React from "react";
import Layout from "../components/Layout";

export const Head = () => <title>API Reference | Neuro Graph</title>;

export default function ApiPage() {
  return (
    <Layout>
      <section className="page-header">
        <p className="eyebrow">Reference</p>
        <h1>API reference</h1>
        <p>
          Use this page as a starting point for documenting graph endpoints, query formats, and integration contracts.
        </p>
      </section>

      <section className="section article">
        <h2>Example: list entities</h2>
        <pre><code>{`GET /api/entities?type=Concept

Response 200
{
  "data": [
    {
      "id": "concept:knowledge-graph",
      "type": "Concept",
      "name": "Knowledge Graph",
      "properties": {
        "status": "published"
      }
    }
  ]
}`}</code></pre>

        <h2>Example: get relationships</h2>
        <pre><code>{`GET /api/entities/{id}/relationships

Response 200
{
  "data": [
    {
      "type": "RELATED_TO",
      "direction": "outgoing",
      "target": "concept:semantic-web",
      "properties": {
        "confidence": 0.92,
        "source": "curated"
      }
    }
  ]
}`}</code></pre>

        <h2>Documentation checklist</h2>
        <ul>
          <li>Endpoint purpose</li>
          <li>Authentication requirements</li>
          <li>Request parameters</li>
          <li>Response schema</li>
          <li>Error codes</li>
          <li>Rate limits</li>
          <li>Example queries and responses</li>
        </ul>
      </section>
    </Layout>
  );
}
