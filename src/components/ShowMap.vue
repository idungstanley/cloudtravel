<template>
  <div>
    <button>Show On Map</button>
  </div>
</template>

<script>
// import map from '../assets/map.jpeg'
export default {
  data() {
    return {
      // map,
    }
  },
}
</script>

<style scoped>
div {
  background-image: url('/map.jpeg');
  width: 250px;
  height: 130px;
  margin-top: 15px;
  margin-left: 20px;
  border-radius: 5px;
}
button {
  /* position: absolute;
  top: 45px;
  left: 20px; */
  margin-top: 40px;
  margin-left: 10px;
  height: 40px;
  width: 170px;
  border-radius: 3px;
  background: #002d63;
  border: 1px solid #002d63;
  box-sizing: border-box;
  border-radius: 3px;
}
</style>
