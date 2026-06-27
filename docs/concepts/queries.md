# Graph Queries

Queries help you discover connections in the graph.

## Find related entities

```cypher
MATCH (entity)-[relationship]-(related)
WHERE entity.name = "Neuro Graph"
RETURN entity, relationship, related
```

## Find paths

```cypher
MATCH path = shortestPath((a)-[*..4]-(b))
WHERE a.name = "Neuro Graph" AND b.name = "Knowledge Graph"
RETURN path
```

## Find entity neighborhoods

```cypher
MATCH (entity { name: "Knowledge Graph" })-[r]-(neighbor)
RETURN r, neighbor
LIMIT 50
```
