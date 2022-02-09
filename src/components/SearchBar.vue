<template>
  <nav-base>
    <div class="container">
      <form action="">
        <div class="form-container">
          <div class="search">
            <img :src="SearchIcon" alt="ERROR" />
            <input
              type="search"
              name=""
              id=""
              placeholder="Singapore, singapore"
            />
          </div>
          <div class="search">
            <img :src="DateIcon" alt="ERROR" />
            <input type="search" name="" id="" placeholder="" />
          </div>
          <div class="search">
            <input type="search" name="" id="" placeholder="" />
          </div>
          <input type="button" value="Search" class="searchBtn" />
        </div>
      </form>
    </div>
  </nav-base>
</template>

<script>
import SearchIcon from '../Icon/SVG/SearchIcon.svg'
import DateIcon from '../Icon/SVG/DateIcon.svg'
export default {
  data() {
    return {
      SearchIcon,
      DateIcon,
    }
  },
}
</script>

<style scoped>
.container {
  padding: 0px 110px;
}
.form-container {
  display: flex;
}
nav-base {
  padding: 10px;
}
.search > input {
  padding: 10px;
  height: 40px;
  width: 270px;
  outline: none;
  margin-right: 5px;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 3px;
}
.searchBtn {
  height: 40px;
  width: 150px;
  left: 1145px;
  top: 10px;
  border: 0;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  background: #00a1e6;
}
</style>
