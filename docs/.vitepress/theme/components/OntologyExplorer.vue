<template>
  <div class="ng-explorer">
    <div class="ng-explorer__topbar">
      <div>
        <p class="ng-kicker">Interactive RDF / OWL explorer</p>
        <h2>Explore semantic graph data visually</h2>
        <p>Choose a sample ontology, upload Turtle/N-Triples/TriG/N-Quads, then switch between friendly, ontology, and raw triple views.</p>
      </div>

      <div class="ng-actions">
        <label class="ng-select-label">
          Sample
          <select v-model="selectedSample" @change="loadSelectedSample">
            <option v-for="sample in samples" :key="sample.path" :value="sample.path">
              {{ sample.name }}
            </option>
          </select>
        </label>

        <label class="ng-upload">
          Upload RDF / OWL
          <input type="file" accept=".ttl,.n3,.nt,.nq,.trig,.owl,.rdf" @change="handleUpload" />
        </label>
      </div>
    </div>

    <div v-if="error" class="ng-error">{{ error }}</div>

    <div class="ng-stats" v-if="parsed">
      <div><strong>{{ parsed.stats.triples }}</strong><span>Triples</span></div>
      <div><strong>{{ parsed.stats.classes }}</strong><span>Classes</span></div>
      <div><strong>{{ parsed.stats.properties }}</strong><span>Properties</span></div>
      <div><strong>{{ parsed.stats.individuals }}</strong><span>Individuals</span></div>
    </div>

    <div class="ng-tabs" role="tablist" aria-label="Explorer views">
      <button :class="{ active: viewMode === 'friendly' }" @click="setView('friendly')">Friendly view</button>
      <button :class="{ active: viewMode === 'ontology' }" @click="setView('ontology')">Ontology view</button>
      <button :class="{ active: viewMode === 'raw' }" @click="setView('raw')">Raw triples</button>
    </div>

    <div class="ng-layout">
      <div class="ng-graph-card">
        <div ref="graphEl" class="ng-graph" aria-label="3D graph visualization"></div>
      </div>

      <aside class="ng-details">
        <template v-if="selectedNode">
          <p class="ng-kicker">Selected node</p>
          <h3>{{ selectedNode.label }}</h3>
          <div class="ng-pill">{{ selectedNode.kind }}</div>

          <dl>
            <dt>URI</dt>
            <dd>{{ selectedNode.uri || selectedNode.id }}</dd>

            <template v-if="selectedNode.description">
              <dt>Description</dt>
              <dd>{{ selectedNode.description }}</dd>
            </template>
          </dl>

          <div class="ng-relations">
            <h4>Outgoing relationships</h4>
            <p v-if="outgoing.length === 0">No outgoing relationships in this view.</p>
            <ul v-else>
              <li v-for="(link, index) in outgoing" :key="`out-${index}`">
                <strong>{{ link.label }}</strong> → {{ labelFor(link.target) }}
              </li>
            </ul>
          </div>

          <div class="ng-relations">
            <h4>Incoming relationships</h4>
            <p v-if="incoming.length === 0">No incoming relationships in this view.</p>
            <ul v-else>
              <li v-for="(link, index) in incoming" :key="`in-${index}`">
                {{ labelFor(link.source) }} → <strong>{{ link.label }}</strong>
              </li>
            </ul>
          </div>
        </template>

        <template v-else>
          <p class="ng-kicker">How to use</p>
          <h3>Click any node</h3>
          <p>The side panel will show the label, type, URI, description, incoming relationships, and outgoing relationships.</p>
        </template>
      </aside>
    </div>

    <div v-if="viewMode === 'raw' && parsed" class="ng-triples">
      <h3>Raw triples</h3>
      <p>Showing the first {{ visibleTriples.length }} triples. Use the graph above to inspect subject-predicate-object connections.</p>
      <div class="ng-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Predicate</th>
              <th>Object</th>
              <th>Object type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(triple, index) in visibleTriples" :key="index">
              <td>{{ shorten(triple.subject) }}</td>
              <td>{{ shorten(triple.predicate) }}</td>
              <td>{{ shorten(triple.object) }}</td>
              <td>{{ triple.objectType }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { parseRdfToGraphs, type GraphLink, type GraphNode, type ParsedGraph } from '../utils/rdfToGraph'

type ViewMode = 'friendly' | 'ontology' | 'raw'

const samples = [
  { name: 'Retail ontology', path: '/samples/retail-ontology.ttl' },
  { name: 'People RDF', path: '/samples/people-rdf.ttl' }
]

const graphEl = ref<HTMLElement | null>(null)
const selectedSample = ref(samples[0].path)
const viewMode = ref<ViewMode>('friendly')
const parsed = ref<ParsedGraph | null>(null)
const currentGraph = ref<{ nodes: GraphNode[]; links: GraphLink[] }>({ nodes: [], links: [] })
const selectedNode = ref<GraphNode | null>(null)
const error = ref('')

let graphInstance: any
let ForceGraph3D: any
let SpriteText: any

const colorByKind: Record<string, string> = {
  Class: '#7dd3fc',
  Individual: '#a78bfa',
  Resource: '#f8fafc',
  Relationship: '#22d3ee',
  Property: '#fbbf24',
  'Object Property': '#34d399',
  'Datatype Property': '#fb7185',
  Datatype: '#c084fc',
  Literal: '#94a3b8'
}

const visibleTriples = computed(() => parsed.value?.triples.slice(0, 150) || [])

const selectedId = computed(() => selectedNode.value?.id)

const outgoing = computed(() => {
  if (!selectedId.value) return []
  return currentGraph.value.links.filter(link => linkEndpointId(link.source) === selectedId.value)
})

const incoming = computed(() => {
  if (!selectedId.value) return []
  return currentGraph.value.links.filter(link => linkEndpointId(link.target) === selectedId.value)
})

function linkEndpointId(endpoint: string | GraphNode | any) {
  return typeof endpoint === 'string' ? endpoint : endpoint?.id
}

function labelFor(endpoint: string | GraphNode | any) {
  const id = linkEndpointId(endpoint)
  const node = currentGraph.value.nodes.find(item => item.id === id)
  return node?.label || shorten(id)
}

function shorten(value: string) {
  if (!value) return ''
  const hash = value.lastIndexOf('#')
  const slash = value.lastIndexOf('/')
  const index = Math.max(hash, slash)
  const short = index >= 0 ? value.slice(index + 1) : value
  return short.length > 64 ? `${short.slice(0, 61)}...` : short
}

function graphForMode(mode: ViewMode) {
  if (!parsed.value) return { nodes: [], links: [] }
  return parsed.value[mode]
}

function setView(mode: ViewMode) {
  viewMode.value = mode
  currentGraph.value = graphForMode(mode)
  selectedNode.value = currentGraph.value.nodes[0] || null
  renderGraph()
}

async function initGraph() {
  if (!graphEl.value) return

  const graphMod = await import('3d-force-graph')
  const spriteMod = await import('three-spritetext')
  ForceGraph3D = graphMod.default
  SpriteText = spriteMod.default

  graphInstance = ForceGraph3D()(graphEl.value)
    .backgroundColor('rgba(0,0,0,0)')
    .nodeId('id')
    .nodeVal((node: GraphNode) => node.size || 5)
    .nodeColor((node: GraphNode) => colorByKind[node.kind] || '#e2e8f0')
    .nodeLabel((node: GraphNode) => `${node.label}<br/><small>${node.kind}</small>`)
    .linkLabel((link: GraphLink) => link.label)
    .linkColor(() => 'rgba(125, 211, 252, 0.55)')
    .linkDirectionalArrowLength(3.5)
    .linkDirectionalArrowRelPos(1)
    .linkOpacity(0.55)
    .onNodeClick((node: GraphNode) => {
      selectedNode.value = node
      graphInstance.centerAt?.(node.x, node.y, 800)
      graphInstance.zoomToFit?.(700, 70, node)
    })
    .nodeThreeObject((node: GraphNode) => {
      const sprite = new SpriteText(node.label)
      sprite.color = colorByKind[node.kind] || '#e2e8f0'
      sprite.textHeight = node.kind === 'Class' ? 4.6 : 3.6
      sprite.backgroundColor = 'rgba(7, 11, 22, 0.74)'
      sprite.padding = 3
      sprite.borderRadius = 4
      return sprite
    })

  resizeGraph()
  window.addEventListener('resize', resizeGraph)
}

function resizeGraph() {
  if (!graphEl.value || !graphInstance) return
  graphInstance.width(graphEl.value.clientWidth)
  graphInstance.height(graphEl.value.clientHeight)
}

function renderGraph() {
  if (!graphInstance) return
  const data = {
    nodes: currentGraph.value.nodes.map(node => ({ ...node })),
    links: currentGraph.value.links.map(link => ({ ...link }))
  }
  graphInstance.graphData(data)
  setTimeout(() => graphInstance?.zoomToFit?.(800, 80), 250)
}

async function parseAndRender(source: string) {
  error.value = ''
  try {
    const result = parseRdfToGraphs(source)
    parsed.value = result
    currentGraph.value = graphForMode(viewMode.value)
    selectedNode.value = currentGraph.value.nodes[0] || null
    await nextTick()
    renderGraph()
  } catch (err: any) {
    error.value = err?.message || String(err)
  }
}

async function loadSelectedSample() {
  try {
    error.value = ''
    const response = await fetch(selectedSample.value)
    if (!response.ok) throw new Error(`Could not load sample: ${selectedSample.value}`)
    const source = await response.text()
    await parseAndRender(source)
  } catch (err: any) {
    error.value = err?.message || String(err)
  }
}

async function handleUpload(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  const source = await file.text()
  await parseAndRender(source)
}

onMounted(async () => {
  await initGraph()
  await loadSelectedSample()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeGraph)
  graphInstance?._destructor?.()
})
</script>
