<template>
  <nav>
    <div class="nav-container">
      <div class="flex">
        <p><a href="#">FAQ</a></p>
        <p><a href="#">Terms of use</a></p>
        <p><a href="#">Privacy and policy</a></p>
        <p><a href="#">Contact us</a></p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap');

.nav-container {
  width: 100%;
  height: 4rem;
  background: #333333;
}
.flex {
  padding: 20px 0 20px 80px;
  display: flex;
  word-spacing: 3px;
  align-content: center;
  justify-content: center;
}
.flex > p {
  padding-right: 15px;
  outline: none;
}
p > a {
  color: white;
  text-decoration: none;
  font-family: Mulish;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
}
</style>
