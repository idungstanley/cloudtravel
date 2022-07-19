<template>
  <nav-base class="stick">
    <form action="">
      <div class="form-container">
        <div class="search">
          <img :src="SearchIcon" class="icon" alt="An Error Occured" />
          <input
            type="text"
            name=""
            v-model="result"
            @click="filterResults"
            @input="sendResult"
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
        <input
          type="button"
          value="Search"
          class="searchBtn hide"
          @click.prevent="passEmit"
        />
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
  mounted() {
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
  methods: {
    sendResult(event) {
      this.$emit('savResult', { result: event.target.value })
    },
    filterResults() {
      if (this.result.length == 0) {
        this.filteredResults = this.result
      }
      this.filteredResults = this.results.filter((result) => {
        console.log(
          result
            .toString()
            .toLowerCase()
            .startsWith(this.result.toString().toLowerCase())
        )
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
    passEmit() {
      this.$emit('get-search', this.result)
    },
  },

  watch: {
    result() {
      this.filterResults()
    },
  },
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap');

.container {
  width: 100%;
  margin: 0;
}
.stick {
  position: sticky;
  top: 0;
  z-index: 10000;
}

.search {
  position: relative;
}
#search {
  padding-left: 25px;
  width: 400px;
}
.autocomplete {
  position: absolute;
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 3px;
  z-index: 1000;
  padding: 0;
  margin-top: 3px;
  overflow: auto;
}
.autocomplete-result {
  border-radius: 3px;
  width: 400px;
  padding: 0;
  height: auto;
  list-style: none;
  text-align: left;
  cursor: pointer;
  background-color: white;
  li {
    padding: 5px;
    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    img {
      margin-right: 4px;
      height: 12px;
      width: 12px;
    }
  }
  :hover {
    background-color: #dddddd;
    color: white;
  }
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
  width: 20vw;
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
    #search {
      width: 100%;
      border: 0;
    }
  }
}
</style>
