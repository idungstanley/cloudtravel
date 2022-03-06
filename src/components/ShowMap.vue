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
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap');
div {
  background-image: url('/map.jpeg');
  width: auto;
  background-size: contain;
  height: 130px;
  margin-top: 15px;
  margin-left: 20px;
  border-radius: 5px;
}
button {
  margin-top: 40px;
  margin-left: 10px;
  height: 40px;
  width: auto;
  padding: 3px 15px;
  border-radius: 3px;
  cursor: pointer;
  color: white;
  background: #002d63;
  border: 1px solid #002d63;
  box-sizing: border-box;
  border-radius: 3px;
}
</style>
