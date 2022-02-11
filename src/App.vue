<template>
  <section id="app">
    <nav-bar></nav-bar>
    <div>
      <search-bar></search-bar>
    </div>
    <home></home>
    <page-numbers></page-numbers>
    <top-footer></top-footer>
    <bottom-footer></bottom-footer>
  </section>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'
import Home from './components/Home.vue'
import BottomFooter from './components/BottomFooter.vue'
import TopFooter from './components/TopFooter.vue'
import PageNumbers from './components/PageNumbers.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    SearchBar,
    Home,
    TopFooter,
    BottomFooter,
    PageNumbers,
  },
  data() {
    return {
      outlets: [],
    }
  },
  methods: {
    loadRequest() {
      fetch('https://hiring.zumata.xyz/job01/autosuggest', { mode: 'no-cors' })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.log(error)
        })
    },
  },
  mounted() {
    this.loadRequest()
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  text-align: center;
  background: #e5e5e5;
}
</style>
