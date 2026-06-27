---
pageClass: ng-explorer-page
aside: false
---

# RDF/OWL Visual Explorer

Neuro Graph turns semantic web data into an interactive graph that is easier to understand than raw RDF syntax.

<ClientOnly>
  <OntologyExplorer />
</ClientOnly>

## What this explorer does

1. You open this documentation page.
2. You select a sample RDF/OWL file or upload your own file.
3. Neuro Graph parses the RDF triples in the browser.
4. It extracts classes, properties, individuals, labels, comments, domains, ranges, and relationships.
5. You switch between friendly, ontology, and raw triple views.
6. You click a node to inspect its label, type, URI, description, incoming relationships, and outgoing relationships.

## Supported input in this version

This first version supports RDF and OWL written in N3-compatible formats:

- Turtle: `.ttl`
- N-Triples: `.nt`
- N-Quads: `.nq`
- TriG: `.trig`
- OWL saved as Turtle

RDF/XML `.rdf` or `.owl` can be added later with an RDF/XML parser or a conversion step.

## View modes

### Friendly view

Shows a simplified business-friendly model, such as:

```text
Customer → placesOrder → Order
Order → containsProduct → Product
```

### Ontology view

Shows schema-level constructs:

```text
Class
Object Property
Datatype Property
subClassOf
domain
range
```

### Raw triples

Shows the exact subject-predicate-object triples extracted from the source file.
