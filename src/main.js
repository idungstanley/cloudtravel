import { createApp } from 'vue'
import App from './App.vue'
import NavBase from './components/UI/NavBase.vue'
import ListBase from './components/UI/ListBase.vue'
import btn from './components/UI/btn.vue'
import ShowMap from './components/ShowMap.vue'
// import TopFooter from './components'

const app = createApp(App)


app.component('nav-base', NavBase)
app.component('list-base', ListBase)
app.component('show-map', ShowMap)
app.component('btn', btn)


app.mount('#app')
