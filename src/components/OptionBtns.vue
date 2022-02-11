<template>
  <div class="container">
    <button class="blue">Popularity</button>
    <button>Price (lowest first)</button>
    <button>Reviews</button>
    <button>Discount</button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 40px;
  margin-bottom: 0;
  width: 60vw;
}
.blue {
  background: #002d63;
  color: white;
}

button {
  border: none;
  margin-left: 1.5px;
  height: 35px;
  width: 200px;
  background: #ffffff;
  cursor: pointer;
  border-radius: 3px;
}
</style>
