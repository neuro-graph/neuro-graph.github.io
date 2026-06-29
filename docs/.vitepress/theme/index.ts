import DefaultTheme from 'vitepress/theme'
import OntologyExplorer from './components/OntologyExplorer.vue'
import './style.css'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    app.component('OntologyExplorer', OntologyExplorer)

    if (!import.meta.env.SSR) {
      import('@ui5/webcomponents/dist/Icon.js')

      import('@ui5/webcomponents-icons/dist/overview-chart.js')
      import('@ui5/webcomponents-icons/dist/chain-link.js')
      import('@ui5/webcomponents-icons/dist/heatmap-chart.js')
      import('@ui5/webcomponents-icons/dist/people-connected.js')
      import('@ui5/webcomponents-icons/dist/workflow-tasks.js')
      import('@ui5/webcomponents-icons/dist/document-text.js')
    }
  }
}