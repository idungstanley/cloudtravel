import { createApp } from 'vue'
import App from './App.vue'
import NavBase from './components/UI/NavBase.vue'
import ListBase from './components/UI/ListBase.vue'
import btn from './components/UI/btn.vue'
import ShowMap from './components/ShowMap.vue'
import StarRating from 'vue-star-rating'
import paginate from 'vue-paginate'
import paginateLinks from 'vue-paginate'
import router from './router'

const app = createApp(App).use(router)


app.component('nav-base', NavBase)
app.component('list-base', ListBase)
app.component('show-map', ShowMap)
app.component('btn', btn)
app.component('star-rating', StarRating)
app.component('paginate', paginate)
app.component('paginate-links', paginateLinks)


app.mount('#app')
