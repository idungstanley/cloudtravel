<template>
  <nav-base>
    <form action="">
      <div class="form-container">
        <div class="search">
          <img :src="SearchIcon" class="icon" alt="An Error Occured" />
          <input
            type="search"
            name=""
            v-model="result"
            @click="filterResults"
            @input="loadSearch"
            @change="sendResult"
            autocomplete="off"
            @focus="modal = true"
            id="search"
            placeholder="Singapore, singapore"
          />
          <div v-if="filteredResults && modal" class="autocomplete">
            <ul class="autocomplete-result">
              <li
                v-for="filteredResult in filteredResults"
                :key="filteredResult.id"
                @click="setResult(filteredResult)"
                ><img src="location.svg" alt="" />{{ filteredResult.label }}</li
              >
            </ul>
          </div>
        </div>
        <div class="search hide">
          <img class="icon" :src="DateIcon" alt="ERROR" />
          <input
            type="search"
            name=""
            id="date"
            placeholder="Jul 19  –  Jul 20              1 night"
          />
        </div>
        <div class="search hide">
          <input
            type="search"
            name=""
            id="guest"
            placeholder="2 adults, 0 children, 1 room"
          />
        </div>
        <input type="button" value="Search" class="searchBtn hide" />
      </div>
      <div class="Second-container"> </div>
    </form>
  </nav-base>
</template>

<script>
import SearchIcon from '../Icon/SVG/SearchIcon.svg'
import DateIcon from '../Icon/SVG/DateIcon.svg'
import axios from 'axios'
// import Vue from 'vue'
// import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns'
// import {DropDownListPlugin} from '@syncfusion/ej2-vue-dropdowns'
// Vue.use(DropDownListPlugin)
// Vue.use(AutoCompletePlugin)
export default {
  data() {
    return {
      SearchIcon,
      DateIcon,
      result: '',
      modal: false,
      results: [],
      resultcityCode: [],
      filteredResults: [],
    }
  },
  methods: {
    loadRequest() {
      axios
        .get('http://localhost:8080/job01/autosuggest')
        .then((response) => {
          let data = response.data
          this.results = data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    sendResult(event) {
      this.$emit('saveResult', event.target.value)
    },
    filterResults() {
      this.filteredResults = this.results.filter((result) => {
        return result
          .toString()
          .toLowerCase()
          .startsWith(this.result.toString().toLowerCase())
      })
    },
    setResult(result) {
      this.result = result.cityCode
      this.modal = false
    },
    // loadSearch() {
    //   axios
    //     .get('http://localhost:8080/job01/search/sgsg')
    //     .then((response) => {
    //       let data = response
    //       console.log(data)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // },
  },
  mounted() {
    this.loadRequest()
    // this.loadSearch()
  },
  watch: {
    result() {
      this.filterResults()
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  margin: 0;
}

.search {
  position: relative;
}
#search {
  padding-left: 25px;
  width: 400px;
}
.autocomplete-results {
  z-index: 1000;
  position: absolute;
  padding: 0;
  margin: 0;
  border: 1px solid rgb(186, 206, 228);
  /* overflow: auto; */
  background-color: white;
}
.autocomplete-result {
  border-radius: 3px;
  width: 400px;
  height: auto;
  list-style: none;
  text-align: left;
  padding: 4px 5px;
  cursor: pointer;
  background-color: white;
}
.autocomplete-result > li:hover {
  background-color: #a5b6be;
  color: white;
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
@media screen and (max-width: 960px) {
  /* .form-container {
    display: none;
  } */
  .hide {
    display: none;
  }
  .search {
    width: 100%;
    background-color: #fff;
    outline: none;
    #search{
      width: 100%;
      border: 0;
      
    }
  }
}
</style>
