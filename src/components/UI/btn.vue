<template>
  <button>
   <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
button {
  border: 1px solid #00a1e6;
  box-sizing: border-box;
  height:auto;
  padding: 3px;
  margin: 2px 2px 8px 4px;
  color: #00A1E6;
  width: fit-content;
  border-radius: 0px;
}
</style>
