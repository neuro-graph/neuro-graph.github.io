import * as React from "react";
import Layout from "../components/Layout";

export const Head = () => <title>Community | Neuro Graph</title>;

export default function CommunityPage() {
  return (
    <Layout>
      <section className="page-header">
        <p className="eyebrow">Open source</p>
        <h1>Community and contribution</h1>
        <p>
          Neuro Graph is designed as public documentation that improves through issues, pull requests, examples, and shared modeling patterns.
        </p>
      </section>

      <section className="section article">
        <h2>How to contribute</h2>
        <ol>
          <li>Open an issue to describe the improvement or documentation gap.</li>
          <li>Fork the repository and create a focused branch.</li>
          <li>Update the relevant documentation page or add a new example.</li>
          <li>Submit a pull request with a clear summary and screenshots when the UI changes.</li>
        </ol>

        <h2>Good contributions</h2>
        <ul>
          <li>Clear glossary definitions</li>
          <li>Graph modeling examples</li>
          <li>Sample queries and expected results</li>
          <li>Architecture diagrams and explanations</li>
          <li>Corrections to confusing or outdated documentation</li>
        </ul>

        <h2>Style guide</h2>
        <p>
          Write in simple language. Explain acronyms. Prefer concrete examples over abstract descriptions. Keep each page focused on one user goal.
        </p>
      </section>
    </Layout>
  );
}
