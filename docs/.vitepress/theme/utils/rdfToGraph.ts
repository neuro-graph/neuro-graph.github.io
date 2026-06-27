import { Parser } from 'n3'

type QuadLike = {
  subject: { termType: string; value: string }
  predicate: { termType: string; value: string }
  object: { termType: string; value: string; language?: string; datatype?: { value: string } }
}

export type GraphNode = {
  id: string
  label: string
  kind: string
  uri?: string
  description?: string
  value?: string
  size?: number
}

export type GraphLink = {
  source: string
  target: string
  label: string
  kind: string
  predicate?: string
}

export type TripleRow = {
  subject: string
  predicate: string
  object: string
  objectType: string
}

export type ParsedGraph = {
  friendly: { nodes: GraphNode[]; links: GraphLink[] }
  ontology: { nodes: GraphNode[]; links: GraphLink[] }
  raw: { nodes: GraphNode[]; links: GraphLink[] }
  triples: TripleRow[]
  stats: {
    triples: number
    classes: number
    properties: number
    individuals: number
  }
}

const RDF_TYPE = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
const RDFS_LABEL = 'http://www.w3.org/2000/01/rdf-schema#label'
const RDFS_COMMENT = 'http://www.w3.org/2000/01/rdf-schema#comment'
const RDFS_SUBCLASS_OF = 'http://www.w3.org/2000/01/rdf-schema#subClassOf'
const RDFS_CLASS = 'http://www.w3.org/2000/01/rdf-schema#Class'
const RDFS_DOMAIN = 'http://www.w3.org/2000/01/rdf-schema#domain'
const RDFS_RANGE = 'http://www.w3.org/2000/01/rdf-schema#range'
const OWL_CLASS = 'http://www.w3.org/2002/07/owl#Class'
const OWL_OBJECT_PROPERTY = 'http://www.w3.org/2002/07/owl#ObjectProperty'
const OWL_DATATYPE_PROPERTY = 'http://www.w3.org/2002/07/owl#DatatypeProperty'
const OWL_NAMED_INDIVIDUAL = 'http://www.w3.org/2002/07/owl#NamedIndividual'
const OWL_EQUIVALENT_CLASS = 'http://www.w3.org/2002/07/owl#equivalentClass'
const OWL_SAME_AS = 'http://www.w3.org/2002/07/owl#sameAs'
const OWL_INVERSE_OF = 'http://www.w3.org/2002/07/owl#inverseOf'

const SCHEMA_TYPE = new Set([
  RDF_TYPE,
  RDFS_LABEL,
  RDFS_COMMENT,
  RDFS_DOMAIN,
  RDFS_RANGE,
  RDFS_SUBCLASS_OF,
  OWL_EQUIVALENT_CLASS,
  OWL_INVERSE_OF
])

function shortName(value: string): string {
  if (!value) return 'Unknown'
  if (value.startsWith('_:')) return value
  const hash = value.lastIndexOf('#')
  const slash = value.lastIndexOf('/')
  const index = Math.max(hash, slash)
  const raw = index >= 0 ? value.slice(index + 1) : value
  try {
    return decodeURIComponent(raw)
  } catch {
    return raw
  }
}

function readablePredicate(value: string): string {
  return shortName(value)
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
}

function literalValue(term: QuadLike['object']): string {
  if (term.termType === 'Literal') return term.value
  return term.value
}

function addNode(map: Map<string, GraphNode>, node: GraphNode) {
  const existing = map.get(node.id)
  if (!existing) {
    map.set(node.id, node)
    return
  }
  map.set(node.id, {
    ...existing,
    ...node,
    label: existing.label || node.label,
    description: existing.description || node.description,
    uri: existing.uri || node.uri
  })
}

function uniqueLinks(links: GraphLink[]) {
  const seen = new Set<string>()
  return links.filter(link => {
    const source = typeof link.source === 'string' ? link.source : String((link.source as any).id)
    const target = typeof link.target === 'string' ? link.target : String((link.target as any).id)
    const key = `${source}|${link.label}|${target}|${link.kind}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export function parseRdfToGraphs(source: string): ParsedGraph {
  if (/^\s*</.test(source) && source.includes('<rdf:RDF')) {
    throw new Error('This browser demo supports Turtle, N-Triples, N-Quads, TriG, and OWL saved as Turtle. RDF/XML .owl files can be added next with an RDF/XML parser or converter.')
  }

  if (!source || !source.trim()) {
  throw new Error('The RDF source is empty. Check that the sample file was loaded correctly.')
}

const parser = new Parser()
const quads = parser.parse(source) as QuadLike[]

  const labels = new Map<string, string>()
  const comments = new Map<string, string>()
  const types = new Map<string, Set<string>>()
  const domains = new Map<string, string[]>()
  const ranges = new Map<string, string[]>()
  const classes = new Set<string>()
  const properties = new Set<string>()
  const objectProperties = new Set<string>()
  const datatypeProperties = new Set<string>()
  const individuals = new Set<string>()
  const resources = new Set<string>()

  const ensureType = (id: string, type: string) => {
    if (!types.has(id)) types.set(id, new Set())
    types.get(id)!.add(type)
  }

  for (const q of quads) {
    if (q.subject.termType !== 'Literal') resources.add(q.subject.value)
    if (q.object.termType !== 'Literal') resources.add(q.object.value)

    if (q.predicate.value === RDFS_LABEL && q.object.termType === 'Literal') {
      labels.set(q.subject.value, q.object.value)
    }
    if (q.predicate.value === RDFS_COMMENT && q.object.termType === 'Literal') {
      comments.set(q.subject.value, q.object.value)
    }
    if (q.predicate.value === RDF_TYPE && q.object.termType !== 'Literal') {
      ensureType(q.subject.value, q.object.value)
      if (q.object.value === OWL_CLASS || q.object.value === RDFS_CLASS) classes.add(q.subject.value)
      if (q.object.value === OWL_OBJECT_PROPERTY) {
        properties.add(q.subject.value)
        objectProperties.add(q.subject.value)
      }
      if (q.object.value === OWL_DATATYPE_PROPERTY) {
        properties.add(q.subject.value)
        datatypeProperties.add(q.subject.value)
      }
      if (q.object.value === OWL_NAMED_INDIVIDUAL) individuals.add(q.subject.value)
    }
    if (q.predicate.value === RDFS_SUBCLASS_OF) {
      classes.add(q.subject.value)
      classes.add(q.object.value)
    }
    if (q.predicate.value === RDFS_DOMAIN && q.object.termType !== 'Literal') {
      properties.add(q.subject.value)
      if (!domains.has(q.subject.value)) domains.set(q.subject.value, [])
      domains.get(q.subject.value)!.push(q.object.value)
      classes.add(q.object.value)
    }
    if (q.predicate.value === RDFS_RANGE && q.object.termType !== 'Literal') {
      properties.add(q.subject.value)
      if (!ranges.has(q.subject.value)) ranges.set(q.subject.value, [])
      ranges.get(q.subject.value)!.push(q.object.value)
      if (!q.object.value.startsWith('http://www.w3.org/2001/XMLSchema#')) classes.add(q.object.value)
    }
  }

  for (const q of quads) {
    if (q.predicate.value === RDF_TYPE && q.object.termType !== 'Literal') {
      if (![OWL_CLASS, RDFS_CLASS, OWL_OBJECT_PROPERTY, OWL_DATATYPE_PROPERTY, OWL_NAMED_INDIVIDUAL].includes(q.object.value)) {
        individuals.add(q.subject.value)
      }
    }
  }

  const labelOf = (id: string) => labels.get(id) || shortName(id)
  const descriptionOf = (id: string) => comments.get(id) || ''
  const nodeKind = (id: string): string => {
    if (classes.has(id)) return 'Class'
    if (objectProperties.has(id)) return 'Object Property'
    if (datatypeProperties.has(id)) return 'Datatype Property'
    if (properties.has(id)) return 'Property'
    if (individuals.has(id)) return 'Individual'
    if (id.startsWith('literal:')) return 'Literal'
    if (id.startsWith('http://www.w3.org/2001/XMLSchema#')) return 'Datatype'
    return 'Resource'
  }

  const buildNode = (id: string, kindOverride?: string): GraphNode => ({
    id,
    label: labelOf(id),
    kind: kindOverride || nodeKind(id),
    uri: id.startsWith('literal:') ? undefined : id,
    description: descriptionOf(id),
    size: classes.has(id) ? 9 : properties.has(id) ? 7 : individuals.has(id) ? 8 : 5
  })

  const ontologyNodes = new Map<string, GraphNode>()
  const ontologyLinks: GraphLink[] = []

  for (const id of classes) addNode(ontologyNodes, buildNode(id, 'Class'))
  for (const id of properties) addNode(ontologyNodes, buildNode(id, nodeKind(id)))

  for (const q of quads) {
    const s = q.subject.value
    const p = q.predicate.value
    const o = q.object.value
    if ([RDFS_SUBCLASS_OF, RDFS_DOMAIN, RDFS_RANGE, OWL_EQUIVALENT_CLASS, OWL_INVERSE_OF, RDF_TYPE].includes(p) && q.object.termType !== 'Literal') {
      addNode(ontologyNodes, buildNode(s))
      addNode(ontologyNodes, buildNode(o))
      ontologyLinks.push({ source: s, target: o, label: readablePredicate(p), kind: 'Ontology', predicate: p })
    }
  }

  const friendlyNodes = new Map<string, GraphNode>()
  const friendlyLinks: GraphLink[] = []

  for (const id of classes) addNode(friendlyNodes, buildNode(id, 'Class'))
  for (const id of individuals) addNode(friendlyNodes, buildNode(id, 'Individual'))

  for (const [property, domainList] of domains.entries()) {
    const rangeList = ranges.get(property) || []
    for (const domain of domainList) {
      for (const range of rangeList) {
        if (range.startsWith('http://www.w3.org/2001/XMLSchema#')) continue
        addNode(friendlyNodes, buildNode(domain, 'Class'))
        addNode(friendlyNodes, buildNode(range, 'Class'))
        friendlyLinks.push({ source: domain, target: range, label: labelOf(property), kind: 'Relationship', predicate: property })
      }
    }
  }

  for (const q of quads) {
    const s = q.subject.value
    const p = q.predicate.value
    const o = q.object.value
    if (q.object.termType === 'Literal') continue

    if (p === RDF_TYPE && individuals.has(s) && classes.has(o)) {
      addNode(friendlyNodes, buildNode(s, 'Individual'))
      addNode(friendlyNodes, buildNode(o, 'Class'))
      friendlyLinks.push({ source: s, target: o, label: 'is a', kind: 'Type', predicate: p })
      continue
    }

    if (!SCHEMA_TYPE.has(p) && !p.startsWith('http://www.w3.org/2002/07/owl#') && !p.startsWith('http://www.w3.org/2000/01/rdf-schema#')) {
      addNode(friendlyNodes, buildNode(s))
      addNode(friendlyNodes, buildNode(o))
      friendlyLinks.push({ source: s, target: o, label: labelOf(p), kind: 'Relationship', predicate: p })
    }
  }

  const rawNodes = new Map<string, GraphNode>()
  const rawLinks: GraphLink[] = []
  const triples: TripleRow[] = []

  for (const q of quads) {
    const s = q.subject.value
    const p = q.predicate.value
    const objectId = q.object.termType === 'Literal'
      ? `literal:${q.object.value}:${q.object.datatype?.value || ''}`
      : q.object.value

    addNode(rawNodes, buildNode(s, nodeKind(s)))
    addNode(rawNodes, q.object.termType === 'Literal'
      ? { id: objectId, label: q.object.value, kind: 'Literal', value: q.object.value, size: 4 }
      : buildNode(objectId, nodeKind(objectId))
    )

    rawLinks.push({ source: s, target: objectId, label: readablePredicate(p), kind: 'Triple', predicate: p })
    triples.push({
      subject: s,
      predicate: p,
      object: literalValue(q.object),
      objectType: q.object.termType
    })
  }

  return {
    friendly: { nodes: Array.from(friendlyNodes.values()), links: uniqueLinks(friendlyLinks) },
    ontology: { nodes: Array.from(ontologyNodes.values()), links: uniqueLinks(ontologyLinks) },
    raw: { nodes: Array.from(rawNodes.values()), links: uniqueLinks(rawLinks) },
    triples,
    stats: {
      triples: triples.length,
      classes: classes.size,
      properties: properties.size,
      individuals: individuals.size
    }
  }
}
