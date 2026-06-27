# API

This page documents example API patterns for Neuro Graph.

## Create an entity

```http
POST /entities
Content-Type: application/json
```

```json
{
  "type": "Concept",
  "name": "Knowledge Graph",
  "description": "A graph-based representation of connected information."
}
```

## Create a relationship

```http
POST /relationships
Content-Type: application/json
```

```json
{
  "sourceId": "project:neuro-graph",
  "type": "DOCUMENTS",
  "targetId": "concept:knowledge-graph"
}
```

## Search entities

```http
GET /search?q=knowledge+graph
```
