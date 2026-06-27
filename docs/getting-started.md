# Getting Started

This guide helps you start documenting a Neuro Graph project.

## 1. Define your entities

Start with the important things in your domain.

```txt
Person
Organization
Project
Document
Concept
Dataset
```

## 2. Define relationships

Relationships explain how entities are connected.

```txt
Person WORKS_FOR Organization
Document MENTIONS Concept
Project USES Dataset
Concept RELATED_TO Concept
```

## 3. Add source context

For every fact or relationship, track where it came from.

```json
{
  "entity": "Graph Database",
  "source": "technical-documentation.md",
  "confidence": 0.92
}
```

## 4. Query the graph

Use graph queries to discover paths, neighborhoods, and related entities.

```cypher
MATCH (a:Entity)-[r]->(b:Entity)
RETURN a, r, b
LIMIT 25
```
