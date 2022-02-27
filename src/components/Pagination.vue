<template>
  <section>
        <div class="page-number-container">
          <div class="flex">
            <div class="pad-right"> 
              <p><a href="#">Back to top</a></p>
            </div>
            <div class="number-count">
              <p>Showing Results 1 – 20 of 9999</p>
            </div>
            <div class="flex">
              <img src="arrow-left.svg" class="pointer" alt="" />
              <div class="flex num">
                <p class="active">1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>...</p>
                <p>13</p>
              </div>
              <img src="arrow-right.svg" class="pointer" alt="" />
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
 
}
</script>

<style scoped>
.page-number-container {
  width: 100%;
  height: 50px;
}
.flex {
  display: flex;
  justify-content: flex-start;
}

/* .pad-right {
  padding-right: 100px;
  margin-left: 500px;
} */

.pad-right,
p > a {
  color: #002d63;
  text-decoration: none;
}
.number-count {
  margin-right: 5px;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
}
.active {
  background: #002d63;
  border-radius: 5px;
  color: white;
  width: fit-content;
  height: auto;
  padding: 1px 5px;
}
.flex .num > p {
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
}
.pointer{
  cursor: pointer;
}
</style>