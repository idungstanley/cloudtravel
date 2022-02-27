<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  padding: 8px 110px;
  height: 55px;
  width: 100%;
  background: #002d63;
  border-radius: 3px;
}
@media screen and (max-width: 960px){
  div{
    width: 100%;
   background-color: #fff;
   padding: 5px;
  
  }

}
</style>
