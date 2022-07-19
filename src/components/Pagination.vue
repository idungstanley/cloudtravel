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
          <p @click="changePage()" :class={active:selected}>{{page}}</p>
         
        </span>
        <img
          src="arrow-right.svg"
          class="pointer"
          alt=""
          @click="changePage(1)"
        />
      </p>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
// import { computed } from '@vue/runtime-core'
export default {
  props: ['totalRecords', 'perPageOptions'],
  data() {
    return {
      page: 1,
      showPage: '',
      selected: false,
      perPage: this.perPageOptions[0],
      // pagination: [],
    }
  },
  computed: {
    pages() {
      const remainder = this.totalRecords % this.perPage
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
        this.totalItems = this.pagination.totalItems
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    changePage(val) {
      this.selected = true
      switch (val) {
        case -1:
          this.page = this.page > 1 ? this.page - 1 : this.page
          break
        case 1:
          this.page = this.page < this.pages ? this.page + 1 : this.page
          break
      }
      this.$emit( 'input', { page: this.page, perPage: this.perPage })
    },
  },
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap');

.container {
  display: flex;
  width: 100%;
  justify-content:right;
  height: 50px;
  .flex {
    display: flex;
    justify-content:space-between;
    // margin-left: 15px;
    p > a {
      text-decoration: none;
      font-family: Mulish;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      color: #002d63;
      line-height: 20px;
      letter-spacing: 0px;
      text-align: left;
      margin-right: 100px;
    }
    span > p {
      font-family: Mulish;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0px;
      text-align: right;
    }
  }
  .active {
    background: #002d63;
    border-radius: 5px;
    color: white;
    width: fit-content;
    height: fit-content;
    padding: 1px 5px;
  }
  .pagination-container {
    display: flex;
    img {
      height: 10px;
      width: 6.25px;
      margin-left: 25px;
      margin-top: 5px;
      left: 0px;
      top: 10px;
      border-radius: 0px;
      cursor: pointer;
    }
    .inner-pagination-content {
      display: flex;
      p {
        display: flex;
        justify-content: space-around;
        margin: 0 15px;
        font-family: Mulish;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
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
        p {
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
