<template>
<div class="bcolor">

</div>
  <nav-bar></nav-bar>
  <div>
    <search-bar></search-bar>
  </div>
  <home></home>
  <!-- <show-map></show-map> -->
</template>

<script>
import NavBar from './components/NavBar.vue'
import SearchBar from './components/SearchBar.vue'
import Home from './components/Home.vue'
// import ShowMap from './components/ShowMap.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SearchBar,
    Home,
    // ShowMap,
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
  color: #2c3e50;
}
</style>
