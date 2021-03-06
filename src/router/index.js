import { createRouter, createWebHistory } from 'vue-router'
import filterpage from '../components/FilterPage.vue'
import SearchBar from '../components/SearchBar.vue'

const routes = [
  {
    path: '/filterpage',
    name: 'filterpage',
    component: filterpage,
  },
  {
    path: '/searchBar',
    name: 'searchbar',
    component: SearchBar,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../components/FilterPage.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
