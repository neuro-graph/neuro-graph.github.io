# Knowledge Graph Concepts

A **knowledge graph** represents information as a connected network of **entities**, **relationships**, and **properties**. Instead of storing knowledge only as isolated rows, documents, or text blocks, a knowledge graph focuses on how things are connected.

In simple terms, a knowledge graph helps answer questions like:

* What is this thing?
* What is it related to?
* Why is it related?
* Where did this fact come from?
* What other information can be discovered through these connections?

Knowledge graphs are widely used in search engines, recommendation systems, semantic web applications, AI systems, digital twins, enterprise data integration, and knowledge management platforms.

---

## Core model

The basic structure of a knowledge graph is:

```txt
(Entity)-[Relationship]->(Entity)
```

This means one thing is connected to another thing through a meaningful relationship.

Example:

```txt
(Neuro Graph)-[DOCUMENTS]->(Knowledge Graphs)
```

This can be read as:

> Neuro Graph documents Knowledge Graphs.

A knowledge graph is usually made from many such connections. Each connection adds more meaning to the overall network.

---

## What is an entity?

An **entity** is a thing in the graph.

It can represent a real-world object, concept, person, organization, document, system, place, event, or topic.

Examples of entities:

```txt
Knowledge Graph
Neuro Graph
Semantic Web
RDF
OWL
SPARQL
Digital Twin
Sensor
Machine
Document
User
```

In a graph, entities are usually represented as **nodes**.

Example:

```txt
[Knowledge Graph]
[Semantic Web]
[RDF]
```

Each entity should have a clear identity so that the system knows exactly what it refers to.

---

## What is a relationship?

A **relationship** describes how two entities are connected.

Relationships are represented as **edges** between nodes.

Example:

```txt
(Knowledge Graph)-[USES]->(RDF)
(Knowledge Graph)-[RELATED_TO]->(Semantic Web)
(SPARQL)-[QUERIES]->(RDF Data)
```

Relationships give meaning to the connection between entities. Without relationships, entities are just disconnected items.

Good relationship names are usually verbs or verb-like phrases, such as:

```txt
USES
CREATED_BY
PART_OF
DEPENDS_ON
DOCUMENTS
RELATED_TO
LOCATED_IN
HAS_SENSOR
BELONGS_TO
```

---

## Entity-relationship-entity pattern

Most knowledge graph facts follow this pattern:

```txt
Subject → Predicate → Object
```

This is also called a **triple**.

Example:

```txt
Knowledge Graph → uses → RDF
```

In RDF-style representation, this can be written as:

```ttl
:KnowledgeGraph :uses :RDF .
```

Another example:

```txt
Neuro Graph → documents → Knowledge Graphs
```

As RDF-style data:

```ttl
:NeuroGraph :documents :KnowledgeGraphs .
```

This simple pattern allows large and complex knowledge structures to be built from small meaningful facts.

---

## Key parts of a knowledge graph

A knowledge graph usually contains the following parts:

| Part         | Meaning                                                  | Example                             |
| ------------ | -------------------------------------------------------- | ----------------------------------- |
| Entity       | A thing or concept                                       | `Knowledge Graph`                   |
| Relationship | A connection between entities                            | `uses`, `documents`, `partOf`       |
| Property     | Extra information about an entity or relationship        | `title`, `createdAt`, `status`      |
| Source       | Where the fact came from                                 | document, URL, database, user input |
| Query        | A way to retrieve connected knowledge                    | SPARQL, Cypher, GraphQL             |
| Ontology     | A schema that defines allowed concepts and relationships | classes, rules, constraints         |

---

## Properties

A **property** describes an entity or relationship in more detail.

Example entity:

```txt
Knowledge Graph
```

Possible properties:

```txt
name: Knowledge Graph
category: Semantic Technology
description: A graph-based representation of knowledge
createdAt: 2025-01-15
source: knowledge-graph.md
```

Properties help store additional details without creating a separate relationship for every small piece of information.

Example:

```ttl
:KnowledgeGraph
  :name "Knowledge Graph" ;
  :category "Semantic Technology" ;
  :description "A graph-based representation of knowledge" .
```

---

## Sources and provenance

A strong knowledge graph should also track **where facts came from**.

This is called **provenance**.

For example, the graph may know:

```txt
Fact:
Knowledge Graph uses RDF

Source:
semantic-web-introduction.md
```

This is important because users may ask:

* Who created this fact?
* Which document supports this statement?
* When was this information added?
* Is this fact trusted?
* Is this fact still current?

Example:

```ttl
:Fact_001
  :subject :KnowledgeGraph ;
  :predicate :uses ;
  :object :RDF ;
  :source :SemanticWebIntroduction ;
  :confidenceScore "0.94" .
```

Provenance is especially useful in AI systems because it makes answers more explainable and traceable.

---

## Example knowledge graph

Here is a small example:

```txt
(Neuro Graph)-[DOCUMENTS]->(Knowledge Graphs)
(Knowledge Graphs)-[USE]->(Entities)
(Knowledge Graphs)-[USE]->(Relationships)
(Knowledge Graphs)-[CAN_BE_QUERIED_WITH]->(SPARQL)
(SPARQL)-[QUERIES]->(RDF Data)
(RDF)-[REPRESENTS]->(Triples)
```

This creates a connected structure:

```txt
Neuro Graph
   └── documents
        └── Knowledge Graphs
              ├── use → Entities
              ├── use → Relationships
              └── can be queried with → SPARQL
                                      └── queries → RDF Data
```

With this graph, a system can answer more than direct lookup questions. It can discover related topics by following connections.

---

## Why knowledge graphs are useful

Knowledge graphs are useful because they make information connected, searchable, reusable, and explainable.

### 1. They connect scattered information

In many systems, information is spread across documents, databases, APIs, and applications.

A knowledge graph can connect these sources into one common structure.

Example:

```txt
Document → mentions → Product
Product → ownedBy → Team
Team → uses → System
System → dependsOn → Database
```

This makes it easier to understand how information is related across the organization.

---

### 2. They improve search

Traditional search often matches keywords.

Knowledge graph search can understand meaning and relationships.

For example, a keyword search for:

```txt
graph query language
```

may return documents containing those exact words.

A knowledge graph can also discover related concepts such as:

```txt
SPARQL
Cypher
RDF
Graph databases
Semantic queries
```

This makes search more intelligent.

---

### 3. They support recommendations

Knowledge graphs can recommend related entities based on graph connections.

Example:

```txt
User reads → Knowledge Graphs
Knowledge Graphs relatedTo → RDF
RDF relatedTo → SPARQL
```

The system can recommend:

```txt
SPARQL
RDF
Semantic Web
OWL
Graph Databases
```

This is useful for learning platforms, content discovery, e-commerce, and enterprise knowledge portals.

---

### 4. They make AI more explainable

AI systems can use knowledge graphs to ground their answers in structured facts.

Instead of only generating text, the AI can refer to connected knowledge.

Example:

```txt
Question:
Why is SPARQL related to Knowledge Graphs?

Graph path:
Knowledge Graphs → use → RDF
SPARQL → queries → RDF Data
```

Answer:

```txt
SPARQL is related to Knowledge Graphs because many knowledge graphs are represented using RDF, and SPARQL is a query language used to retrieve RDF data.
```

The graph path gives a clear explanation.

---

## Knowledge graph vs traditional database

A traditional relational database stores data in tables.

Example:

```txt
Users table
Products table
Orders table
```

A knowledge graph stores data as connected concepts.

Example:

```txt
(User)-[ORDERED]->(Product)
(Product)-[BELONGS_TO]->(Category)
(Category)-[RELATED_TO]->(Topic)
```

Both approaches are useful, but knowledge graphs are better when relationships are complex, flexible, and important.

| Feature        | Traditional database | Knowledge graph         |
| -------------- | -------------------- | ----------------------- |
| Main structure | Tables               | Nodes and edges         |
| Best for       | Structured records   | Connected knowledge     |
| Schema         | Usually fixed        | Flexible and semantic   |
| Relationships  | Joins between tables | First-class graph edges |
| Discovery      | Query known fields   | Explore connected paths |
| Meaning        | Often implicit       | Explicit relationships  |

---

## Knowledge graph vs document storage

Documents store information as text.

Knowledge graphs store information as structured meaning.

Example document sentence:

```txt
SPARQL is a query language for RDF data.
```

Knowledge graph representation:

```txt
(SPARQL)-[IS_A]->(Query Language)
(SPARQL)-[QUERIES]->(RDF Data)
(RDF Data)-[USED_IN]->(Knowledge Graphs)
```

The document is good for human reading.
The knowledge graph is good for machine understanding, querying, and reasoning.

In many systems, both are used together.

---

## Queries

Queries help retrieve information from the graph.

A query can ask:

```txt
Which topics are related to Knowledge Graphs?
Which documents mention RDF?
Which systems depend on this database?
Which sensors belong to this machine?
Which concepts should a learner study next?
```

Example graph query in plain language:

```txt
Find all topics documented by Neuro Graph.
```

Possible result:

```txt
Knowledge Graphs
Entities
Relationships
RDF
SPARQL
Semantic Web
```

In RDF-based systems, SPARQL is commonly used to query graph data.

Example SPARQL-style query:

```sparql
SELECT ?topic
WHERE {
  :NeuroGraph :documents ?topic .
}
```

---

## Ontologies

An **ontology** defines the structure and meaning of a knowledge graph.

It describes:

* what types of entities exist
* what relationships are allowed
* what properties entities can have
* how concepts are related
* what rules can be inferred

Example ontology rules:

```txt
A Document can mention a Topic.
A Topic can be related to another Topic.
A Sensor can observe a Machine.
A Machine can be part of a System.
```

An ontology helps keep the graph consistent.

Without an ontology, different people may model the same idea in different ways.

Example inconsistency:

```txt
(Document)-[mentions]->(Topic)
(Document)-[talksAbout]->(Topic)
(Document)-[containsTopic]->(Topic)
```

An ontology can define one preferred relationship:

```txt
(Document)-[mentions]->(Topic)
```

---

## Reasoning and inference

Knowledge graphs can support reasoning.

Reasoning means the system can derive new knowledge from existing facts.

Example facts:

```txt
Pump A is part of Cooling System 1.
Cooling System 1 supports Data Center Rack 7.
```

The graph can infer:

```txt
Pump A affects Data Center Rack 7.
```

Another example:

```txt
SPARQL queries RDF data.
RDF data is used in Knowledge Graphs.
```

The graph can infer:

```txt
SPARQL is relevant to Knowledge Graphs.
```

This makes knowledge graphs powerful for discovery, recommendations, impact analysis, and decision support.

---

## Simple knowledge graph for Neuro Graph

A documentation system like Neuro Graph could model its content using a knowledge graph.

Example:

```txt
(Neuro Graph)-[HAS_SECTION]->(Concepts)
(Concepts)-[HAS_TOPIC]->(Knowledge Graphs)
(Knowledge Graphs)-[EXPLAINS]->(Entities)
(Knowledge Graphs)-[EXPLAINS]->(Relationships)
(Knowledge Graphs)-[RELATED_TO]->(RDF)
(RDF)-[RELATED_TO]->(SPARQL)
(SPARQL)-[USED_FOR]->(Graph Queries)
```

This would allow the system to answer:

```txt
What should I read after Knowledge Graphs?
Which pages explain RDF?
Which concepts are prerequisites for SPARQL?
Which topics are related to semantic search?
```

---

## Common use cases

Knowledge graphs are used in many areas.

### Search and discovery

They help users find related concepts, documents, people, products, or services.

### Recommendation systems

They suggest related topics, products, learning paths, or next actions.

### Data integration

They connect data from multiple databases, documents, and APIs.

### Digital twins

They describe assets, sensors, systems, locations, and dependencies in a real-world environment.

### AI and retrieval systems

They provide structured context for AI assistants and retrieval-augmented generation systems.

### Enterprise knowledge management

They help organizations map people, documents, projects, systems, and business concepts.

---

## Example: from text to graph

Original sentence:

```txt
Neuro Graph documents Knowledge Graphs, and Knowledge Graphs use entities and relationships.
```

Graph representation:

```txt
(Neuro Graph)-[DOCUMENTS]->(Knowledge Graphs)
(Knowledge Graphs)-[USES]->(Entities)
(Knowledge Graphs)-[USES]->(Relationships)
```

RDF-style representation:

```ttl
:NeuroGraph :documents :KnowledgeGraphs .

:KnowledgeGraphs :uses :Entities .
:KnowledgeGraphs :uses :Relationships .
```

This transformation is important because it turns plain text into machine-readable knowledge.

---

## Best practices

When creating a knowledge graph, follow these practices:

1. Use clear entity names.
2. Use consistent relationship names.
3. Avoid duplicate entities.
4. Track the source of every important fact.
5. Define an ontology before the graph becomes too large.
6. Use properties for descriptive details.
7. Use relationships for meaningful connections.
8. Keep the graph understandable for both humans and machines.

---

## Summary

A knowledge graph represents information as a network of connected entities.

The core pattern is:

```txt
(Entity)-[Relationship]->(Entity)
```

The most important parts are:

* **Entities**: things in the graph
* **Relationships**: connections between things
* **Properties**: details about things
* **Sources**: evidence for facts
* **Queries**: ways to discover connected information
* **Ontologies**: rules and structure for the graph

Knowledge graphs are useful because they make information easier to connect, search, explain, reuse, and reason over.

They are especially powerful when a system needs to understand not only individual facts, but also the relationships between those facts.
