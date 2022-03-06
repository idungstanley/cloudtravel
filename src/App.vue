<template>
  <section id="app">
    <nav-bar></nav-bar>
    <search-bar
      class="searchBarFilter hidden"
      @saveResult="loadResult"
    ></search-bar>
    <home></home>
    
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
import axios from 'axios'
export default {
  name: 'App',
  components: {
    NavBar,
    SearchBar,
    Home,
    TopFooter,
    BottomFooter,
  },
  data() {
    return {
      outlets: '',
      results: [],
    }
  },
  mounted() {
    axios
      .get('http://localhost:8080/job01/search/sgsg')
      .then((response) => {
        let data = response.data.outlets.availability
        this.results = data.results
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    loadResult(event) {
      console.log(event)
    },
  },
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
  text-align: center;
  background: #e5e5e5;
  .searchBarFilter{
    position: sticky;
    top: 0;
  }
}
@media screen and (max-width: 960px) {
  .hidden {
    display: none;
  }
}
</style>
