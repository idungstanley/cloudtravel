<template>
  <div class="nav-container">
    <div>
      <img :src="CloudtravelLogo" id="ctlogo" alt="ERROR" />
    </div>
    <burger-menu
      @toggle-menu="menuActive = !menuActive"
      :active="menuActive"
    ></burger-menu>
    <div class="links">
      <ul>
        <li>
          <a class="drop-down" href=""
            >English<img src="dropdown.png" alt="" /></a
        ></li>
        <li
          ><a class="drop-down" href="">USD<img src="dropdown.png" alt="" /></a
        ></li>
        <li><a href="">My Account</a></li>
        <li><a href="">Log out</a></li>
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
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap');

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
    display: flex;
    margin-right: 20px;

    ul {
      display: flex;
      list-style: none;
      padding: 0;
      li {
        margin: 0 10px;
        display: flex;
        a {
          // flex: 1 1 50%;
          font-family: Mulish;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0.01em;
          text-align: right;
          color: #000000;
          text-decoration: none;
          img{
            padding:2px 5px;
          }
        }
      }
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
    width: 100%;
    top: 50px;
    position: absolute;
    right: 0;
    z-index: 100;
    ul {
      width: 100%;
      li > a {
        text-decoration: none;
      }
    }
    ul > li {
      display: flex;
      justify-content: center;
      padding: 10px;
      background-color: #dddddd;
    }
    li:hover {
      background-color: #a5b6be;
      cursor: pointer;
    }
  }
}
</style>
