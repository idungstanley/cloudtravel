<template>
  <section id="app">
    <nav-bar></nav-bar>
    <div>
      <search-bar class="searchBarFilter hidden" @saveResult='loadResult'></search-bar>
    </div>
    <home></home>
    <pagination class="hidden"></pagination>
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
import Pagination from './components/Pagination.vue'
// import axios from 'axios'
export default {
  name: 'App',
  components: {
    NavBar,
    SearchBar,
    Home,
    TopFooter,
    BottomFooter,
    Pagination,
  },
  data() {
    return {
      outlets: '',
    }
  },
  methods:{
    loadResult(event){
    alert('this has fired')
    console.log(event);
    }
  }
  

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
@media screen and (max-width:960px) {

}
</style>
