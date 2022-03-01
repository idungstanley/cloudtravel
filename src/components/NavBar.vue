<template>
  <div class="nav-container">
    <div>
      <img :src="CloudtravelLogo" id="ctlogo" alt="ERROR" />
    </div>
    <burger-menu
      @toggle-menu="menuActive = !menuActive"
      :active="menuActive"
    ></burger-menu>
    <div class="links" v-show="menuActive">
      <ul>
        <li
          >English
          <span class="drop-down"><img src="dropdown.png" alt="" /></span
        ></li>
        <li
          >USD <span class="drop-down"><img src="dropdown.png" alt="" /></span
        ></li>
        <li>My Account</li>
        <li>Log out</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BurgerMenu from '../components/BurgerMenu.vue'
import CloudtravelLogo from '../assets/CloudtravelLogo.png'
export default {
  components: {
    BurgerMenu,
  },
  data() {
    return {
      CloudtravelLogo,
      menuActive: false,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav-container {
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0;
  height: 50px;
  border-radius: 0px;
  background: #ffffff;
  border: 1px solid #dddddd;
  .links {
    display: block;
    width: 100%;
    top: 50px;
    position: absolute;
    right: 0;
    z-index: 100;
    ul> li {
      display: block;
      text-align: center;
      padding: 10px;
      background-color: #dddddd;
    }
      li:hover {
        background-color: #a5b6be;
        cursor: pointer;
      }
  }
}
#burger {
  display: none;
}
#ctlogo {
  width: 140px;
  height: auto;

} 
ul {
  list-style-type: none;
  padding: 0;
}
.links {
  margin-right: 20px;
}
li {
  display: inline-block;
  margin: 0 10px;
}

@media screen and (max-width: 960px) {
  .nav-container {
    position: relative;
    widows: 100%;
  }

  #burger {
    display: block;
    position: absolute;
    top: 2vh;
    right: 1vh;
  }
  .links {
    display: block;
  }
}
</style>
