import * as React from "react";
import Layout from "../components/Layout";

export const Head = () => <title>Core Concepts | Neuro Graph</title>;

const concepts = [
  ["Knowledge graph", "A connected representation of entities and relationships that makes context, meaning, and dependencies easier to query."],
  ["Entity", "A real or conceptual object represented as a node, such as a person, document, project, concept, dataset, or organization."],
  ["Relationship", "A typed connection between two entities, often written as a directional verb such as CITES, OWNS, DEPENDS_ON, or PART_OF."],
  ["Property", "A structured attribute attached to an entity or relationship, such as name, createdAt, confidence, source, or status."],
  ["Schema", "The agreed structure of entity types, relationship types, required properties, naming rules, and validation expectations."],
  ["Provenance", "Metadata that explains where a graph fact came from, when it was added, and how much trust should be placed in it."],
  ["Query pattern", "A reusable way to ask graph questions, such as shortest path, neighborhood lookup, dependency analysis, or recommendation traversal."],
  ["Governance", "The review process that keeps graph definitions, source mappings, and contribution rules consistent across teams."]
];

export default function ConceptsPage() {
  return (
    <Layout>
      <section className="page-header">
        <p className="eyebrow">Reference</p>
        <h1>Core concepts</h1>
        <p>
          These concepts define the vocabulary used throughout Neuro Graph documentation.
        </p>
      </section>

      <section className="section grid two">
        {concepts.map(([title, body]) => (
          <article className="card" key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
}
