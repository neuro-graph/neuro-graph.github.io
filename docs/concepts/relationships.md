# Relationships

Relationships connect entities and explain how they are associated.

## Examples

```txt
(Person)-[WORKS_FOR]->(Organization)
(Document)-[MENTIONS]->(Concept)
(Project)-[USES]->(Dataset)
(Concept)-[RELATED_TO]->(Concept)
```

## Relationship shape

```json
{
  "source": "project:neuro-graph",
  "type": "DOCUMENTS",
  "target": "concept:knowledge-graph",
  "confidence": 0.95
}
```

## Good relationship names

Use clear verbs or verb phrases. Prefer `MENTIONS`, `DEPENDS_ON`, `CREATED_BY`, and `RELATED_TO` over unclear names like `LINKED`.
