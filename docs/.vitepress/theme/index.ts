import DefaultTheme from 'vitepress/theme'
import OntologyExplorer from './components/OntologyExplorer.vue'
import './style.css'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    app.component('OntologyExplorer', OntologyExplorer)
  }
}