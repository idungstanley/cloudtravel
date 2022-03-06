<template>
  <section>
    <div class="container">
      <div class="flex">
        <p><a href="#">Back to top</a></p>
        <span class="outter-pagination-content">
          <p>Showing Results {{ page }} - {{ showPage }} of {{ pages }}</p>
        </span>
      </div>
      <p class="pagination-container">
        <img
          src="arrow-left.svg"
          class="pointer"
          alt=""
          @click="changePage(-1)"
        />
        <span class="inner-pagination-content">
          <p @click="changePage()" class="active">1</p>
          <p @click="changePage()">2</p>
          <p @click="changePage()">3</p>
          <p @click="changePage()">4</p>
          <p @click="changePage()">5</p>
          <p @click="changePage()">6</p>
          <p @click="changePage()">...</p>
          <p @click="changePage()">13</p>
        </span>
        <img
          src="arrow-right.svg"
          class="pointer"
          alt=""
          @click="changePage(1)"
        />
      </p>
    </div>
    <!-- <div class="page-number-container">
          <div class="flex">
            <div class="pad-right"> 
            </div>
            <div class="number-count">
            </div>
            <div class="flex">
              <div class="flex num">
              </div>
            </div>
          </div>
        </div> -->
  </section>
</template>

<script>
import axios from 'axios'
// import { computed } from '@vue/runtime-core'
export default {
  props: ['totalRecords','perPageOptions'],
  data() {
    return {
      page: '',
      showPage: '',
      perPage: this.perPageOption,
      pagination: [],
    }
  },
  computed: {
    pages() {
      const remainder = this.totalRecords % this.perPage
      console.log(this.perPage)
      if (remainder > 0) {
        return Math.floor(this.totalRecords / this.perPage) + 1
      } else {
        return this.totalRecords / this.perPage
      }
    },
  },
  mounted() {
    axios
      .get('http://localhost:8080/job01/search/sgsg')
      .then((response) => {
        let data = response.data.outlets.availability
        this.pagination = data.pagination
        this.page = this.pagination.page
        this.showPage = this.pagination.showing[1]
        // this.totalRecords = data.results.length
        this.totalItems = this.pagination.totalItems
        console.log(this.showPage)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    changePage(val) {
      switch (val) {
        case -1:
          this.page = this.page > 1 ? this.page - 1 : this.page
          break
        case 1:
          this.page = this.page < this.pages ? this.page + 1 : this.page
          break

        default:
          break
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap');

.container {
  // width: 100%;
  display: flex;
  justify-content: space-around;
  height: 50px;
  .pagination-container {
    display: flex;
    .inner-pagination-content {
      display: flex;
    }
  }
  .flex {
    margin-left: 0 15px;
    display: flex;
    justify-content: space-around;
    p > a {
      //styleName: p;
      font-family: Mulish;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0px;
      text-align: left;
    }
    span > p {
      font-family: Mulish;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0px;
      text-align: center;
    }
  }
}

.pad-right,
p > a {
  color: #002d63;
  text-decoration: none;
}
.number-count {
  margin-right: 5px;
  font-size: 14px;
  line-height: 20px;
  color: #333333;
}
.active {
  background: #002d63;
  border-radius: 5px;
  color: white;
  width: fit-content;
  height: auto;
  padding: 1px 5px;
}
.flex .num > p {
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
}
.pointer {
  cursor: pointer;
}
@media screen and (max-width: 960px) {
  .container {
    display: block;
    justify-content: space-around;
    height: 50px;
    margin-bottom: 10px;
    .pagination-container {
      display: flex;
      width: 100%;
      margin: 10px 0;
      img {
        height: 10px;
        width: 6.25px;
        margin-left: 25px;
        margin-top: 2px;
        left: 0px;
        top: 10px;
        border-radius: 0px;
      }
      .inner-pagination-content {
        p{
          display: flex;
          justify-content: space-around;
          margin: 0 15px;
        }
      }
    }
  }
  .flex {
    display: flex;
    justify-content: flex-start;
  }
}
</style>
