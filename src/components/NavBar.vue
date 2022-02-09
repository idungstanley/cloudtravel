<template>
  <div class="nav-container">
    <div>
      <img :src="CloudtravelLogo" alt="ERROR" />
    </div>
    <div>
      <ul>
        <li>English <span class="drop-down"><img src="dropdown.png" alt=""></span></li>
        <li>USD <span class="drop-down"><img src="dropdown.png" alt=""></span></li>
        <li>My Account</li>
        <li>Log out</li>
      </ul>
    </div>
  </div>
</template>

<script>
import CloudtravelLogo from '../assets/CloudtravelLogo.png'
export default {
  data() {
    return {
      CloudtravelLogo,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-container {
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  margin-bottom: 0;
  height: 60.93241500854492px;
  left: 0px;
  top: 0px;
  border-radius: 0px;

  background: #ffffff;
  /* line */

  border: 1px solid #dddddd;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
