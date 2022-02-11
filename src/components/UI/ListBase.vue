<template>
  <section>
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(3, 100px 1fr 100px );
  width: 60vw;
  height: auto;
  margin: 10px 20px 10px 40px;
  background: #ffffff;
  border-radius: 5px;
}
</style>
