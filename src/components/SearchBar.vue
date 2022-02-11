<template>
  <div class="container">
    <nav-base>
      <form action="">
        <div class="form-container">
          <div class="search">
            <img :src="SearchIcon" class="icon" alt="An Error Occured" />
            <input
              type="search"
              name=""
              id="search"
              placeholder="Singapore, singapore"
            />
          </div>
          <div class="search">
            <img :src="DateIcon" class="icon" alt="ERROR" />
            <input
              type="search"
              name=""
              id="date"
              placeholder="Jul 19  –  Jul 20              1 night"
            />
          </div>
          <div class="search">
            <input
              type="search"
              name=""
              id="guest"
              placeholder="2 adults, 0 children, 1 room"
            />
          </div>
          <input type="button" value="Search" class="searchBtn" />
        </div>
      </form>
    </nav-base>
  </div>
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
  width: 100%;
  margin: 50px 0 0 0;
}
.search {
  position: relative;
}
#search {
  padding-left: 25px;
  width: 400px;
}
::placeholder {
  padding: 8px;
}
#date::placeholder {
  padding-left: 20px;
}
#date {
  padding-left: 25px;
}
#guest::placeholder {
  padding-left: 5px;
}
#guest {
  padding-left: 10px;
}
.icon {
  position: absolute;
  left: 5px;
  top: 12px;
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
