import { createApp } from 'vue'
import App from './App.vue'
import NavBase from './components/UI/NavBase.vue'
import ListBase from './components/UI/ListBase.vue'
import btn from './components/UI/btn.vue'


const app = createApp(App)

app.component('nav-base', NavBase)
app.component('list-base', ListBase)
app.component('btn', btn)

app.mount('#app')
