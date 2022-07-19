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
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap');

.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 40px;
  margin-bottom: 0;
  width: 100%;
}
.blue {
  background: #002d63;
  color: white;
}

button {
  border: none;
  margin-left: 1.5px;
  height: 35px;
  width:100%;
  background: #ffffff;
  cursor: pointer;
  border-radius: 3px;
}
</style>
