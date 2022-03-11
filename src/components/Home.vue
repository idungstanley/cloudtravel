<template>
  <search-bar
    @get-search="loadSearch($event)"
    class="searchBarFilter"
  ></search-bar>
  <main>
    <filter-page></filter-page>
    <div class="sort-container">
      <div class="sort">
        <img src="filters.svg" alt="" />
      </div>
      <div class="map-filter">
        <img src="loca.svg" alt="" />
        <p>Map View</p>
      </div>
    </div>
    <div id="modal" class="active"></div>

    <div class="right">
      <section>
        <div class="selectOneFilter">
          <div class="select">
            <p>Select One</p>
            <img src="dropdown.svg" alt="" />
          </div>
        </div>
        <div id="para">
          <h3><strong>Singapore: 9999 properties found</strong></h3>
        </div>
        <option-btns class="optionsFilter"></option-btns>
      </section>
      <section class="show">
        <img
          v-if="isLoading"
          class="animation"
          src="placeholder-loading.gif"
          alt=""
        />
        <div v-else-if="!isLoading && error">
          <div class="error-message">
            <img src="warning.svg" alt="" />
            <h3>{{ error }}</h3>
            <p>error message here</p>
          </div>
        </div>
        <div v-else-if="!isLoading && (!results || results.length === 0)">
          <div class="error-message">
            <img src="searchIcon.svg" alt="" />
            <h3>Sorry! We couldn't find any properties for your search</h3>
          </div>
        </div>
        <div v-else>
          <div
            class="list-container showDetails"
            v-for="result in computedData"
            :key="result.id"
          >
            <div class="one">
              <img
                class="img-left"
                :src="result.property.heroImage.url"
                alt=""
              />
              <div class="wrapper">
                <img
                  src="https://property-gallery.rakutentravelxchange.com/R32M/7PYywOG4.jpg"
                  alt=""
                />
                <img
                  src="https://property-gallery.rakutentravelxchange.com/R32M/4eE039O4.jpg"
                  alt=""
                />
                <img
                  src="https://property-gallery.rakutentravelxchange.com/R32M/QEwA39A7.jpg"
                  alt=""
                />
                <img
                  src="https://property-gallery.rakutentravelxchange.com/R32M/6yVX2mo7.jpg"
                  alt=""
                />
                <img
                  src="https://property-gallery.rakutentravelxchange.com/R32M/Q3J0lrp4.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="two">
              <div class="flex">
                <p
                  ><strong>{{ result.property.name }}</strong></p
                >
                <div>
                  <stars-rating
                    :config="{
                      rating: result.property.starRating,
                      isIndicatorActive: true,
                      style: {
                        fullStarColor: '#E9BF2D',
                        emptyStarColor: '#737373',
                        starWidth: 15,
                        starHeight: 15,
                      },
                    }"
                    :key="result.id"
                  ></stars-rating>
                </div>
              </div>
              <p class="location"
                >{{ result.property.location.address }},
                {{ result.property.location.city }},
                {{ result.property.location.country }},
                {{ result.property.location.countryCode
                }}<span><a href="">(View in Map)</a></span></p
              >
              <p class="ellipsis"
                >Very good wellness hotel. Located near shopping areas with easy
                access to parking.</p
              >
              <div class="flex showBtn">
                <btn>Breakfast</btn>
                <btn>Free cancellation</btn>
                <btn>Pay later</btn>
                <btn>+1</btn>
              </div>
              <div class="flex badge-p">
                <img src="badge.png" class="badge" alt="" />
                <p class="sm">Singapore - SG Clean</p>
              </div>
            </div>
            <div
              class="three"
              v-if="
                result.packages[0].displayRate.value >
                result.packages[0].adjustedDisplayRate.value
              "
            >
              <img src="rating.png" alt="" class="rating" />
              <button
                >SAVE
                {{
                  Math.floor(
                    ((result.packages[0].displayRate.value -
                      result.packages[0].adjustedDisplayRate.value) /
                      result.packages[0].displayRate.value) *
                      100
                  )
                }}
                TODAY!</button
              >
              <p class="light">Nightly avg.</p>
              <div class="flex">
                <p class="strike"
                  >SGD {{ result.packages[0].displayRate.value }}</p
                >
                <p
                  ><strong
                    >SGD
                    {{ result.packages[0].adjustedDisplayRate.value }}</strong
                  ></p
                >
              </div>
            </div>
            <div
              class="three"
              v-else-if="
                result.packages[0].displayRate.value ===
                result.packages[0].adjustedDisplayRate.value
              "
            >
              <img src="rating.png" alt="" class="rating" />
              <button v-show="isNotVisible"
                >SAVE
                {{
                  Math.floor(
                    ((result.packages[0].displayRate.value -
                      result.packages[0].adjustedDisplayRate.value) /
                      result.packages[0].displayRate.value) *
                      100
                  )
                }}
                TODAY!</button
              >
              <p class="light">Nightly avg.</p>
              <div class="flex">
                <p class="strike" v-show="isNotVisible"
                  >SGD {{ result.packages[0].displayRate.value }}</p
                >
                <p
                  ><strong
                    >SGD
                    {{ result.packages[0].adjustedDisplayRate.value }}</strong
                  ></p
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
  <section>
    {{ pagination.page }}
  <Pagination
    v-if="results"
    :totalRecords="results.length"
    :perPageOptions="perPageOptions"
    v-model="pagination"
  ></Pagination>
  </section>
</template>

<script>
import starsRating from '../components/rating-stars.vue'
import OptionBtns from './OptionBtns.vue'
import axios from 'axios'
import Pagination from '../components/Pagination.vue'
import FilterPage from './FilterPage.vue'
import SearchBar from './SearchBar.vue'

const perPageOptions = [5, 20, 50, 100]
export default {
  components: {
    FilterPage,
    OptionBtns,
    starsRating,
    Pagination,
    SearchBar,
  },
  data() {
    return {
      results: [],
      outlets: [],
      summary: [],
      url: [],
      isLoading: false,
      isVisble: true,
      error: null,
      isNotVisible: false,
      galleries: [],
      Currency: 'USD',
      componentLoaded: false,
      perPageOptions,
      pagination: { page: 1, perPage: perPageOptions[0] },
    }
  },
  computed: {
    computedData() {
      if (!this.results) return []
      else {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage
        const lastIndex = this.pagination.page * this.pagination.perPage
        return this.results.slice(firstIndex, lastIndex)
      }
    },
  },
  methods: {
    loadSearch(data) {
      this.isLoading = true
      axios
        .get(`http://localhost:8080/job01/search/${data}`)
        .then((response) => {
          this.isLoading = false
          this.error = null
          this.componentLoaded = true
          let data = response.data
          console.log(data)
          this.Currency = data.meta.currency
          this.outlets = data.outlets.availability
          this.results = this.outlets.results
          this.results.map((result) => {
            this.summary = result.packages[0].food
          })
        })
        .catch((error) => {
          this.isLoading = false
          this.error = 'Opps, something went wrong.'
          console.log(error)
        })
    },
  },
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap');

* {
  padding: 0;
  margin: 0;
}
.searchBarFilter {
  position: sticky;
  top: 0;
}
main {
  width: 100%;
  display: flex;
  .right {
    .para > h3 {
      font-family: Mulish;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
    }
    .show {
      .animation {
        width: 100%;
        height: 600px;
        background: linear-gradient(
          270deg,
          #dddddd 30.88%,
          #f5f5f5 50.54%,
          #dddddd 69.4%
        );
      }
    }
    .error-message {
      margin-top: 25px;
      img {
        width: 20px;
      }
      h3 {
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #757575;
      }
      p {
        color: #757575;
        font-family: Mulish;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;
      }
    }
  }
}
// .load-animation {
//   display: none;
//   position: absolute;
//   width: 1050px;
//   left: 375px;
//   top: 230px;
// }
#para {
  margin-left: 0;
  margin-bottom: 20px;
  text-align: left;
  margin-left: 40px;
  margin-top: 20px;
}

.list-container {
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 1fr 2fr 1fr;
  margin: 8px 20px 8px 40px;
  background: #fff !important;
  border-radius: 5px;
  padding: 10px;
  .one {
    padding: 5px 8px 5px 5px;
    .wrapper {
      display: flex;
      margin-left: 10px;
      img {
        display: flex;
        justify-items: left;
        align-content: left;
        margin-right: 2px;
        width: 48px;
        height: 48px;
      }
    }
  }
  .two {
    p {
      font-family: Mulish;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      text-align: left;
      padding: 2px;
    }
    .ellipsis {
      // width: 30%;
      max-width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .three {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    img {
      width: 100px;
      margin-bottom: 40px;
    }
    button {
      font-family: Mulish;
      font-style: normal;
      font-weight: lighter;
      font-size: 10px;
      margin-bottom: 5px;
      border-radius: 0;
      border: 0;
      cursor: pointer;
      height: auto;
      width: fit-content;
      padding: 5px;
      background: #00a1e6;
      color: #ffffff;
    }
  }
}
.sort-container {
  display: none;
}
.strike {
  font-family: Mulish;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 20px;
  display: flex;
  align-items: flex-end;
  text-align: right;
  text-decoration-line: line-through;
  color: #757575;
}
.light {
  color: #757575;
}
.flex {
  display: flex;
  justify-content: flex-start;
}

.sm {
  font-size: small;
  margin-top: 3px;
}
flex > span {
  width: 50%;
}

.badge {
  margin: 1px 7px 1px 1px;
}

form > input[search] {
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 3px;
}

.right {
  width: 70%;
  margin-left: 1%;
  padding-bottom: 60px;
  .selectOneFilter {
    display: none;
  }
}

.img-left {
  width: 100%;
  height: 150px;
}

@media screen and (max-width: 960px) {
  .list-container {
    max-width: 100%;
    padding: 0 10px 0 0;
    margin: 5px 2px 5px 0;
    .one {
      grid-area: one;
      padding: 0;
      margin: 0;
      .img-left {
        width: 100%;
        // height: auto;
        height: fit-content;
        border-radius: 0;
      }
      .wrapper {
        display: none;
      }
    }
  }
  main {
    flex-direction: column;
  }
  .left {
    display: none;
  }

  .sort-container {
    display: flex;
    justify-content: space-between;
    margin: 2px 0;
    width: 100%;

    .sort {
      display: flex;
      justify-content: center;
      background: #ffffff;
      width: 49vw;
      padding: 10px;
      height: 50px;
      margin-right: 2px;
      p {
        align-items: center;
        text-align: center;
        font-family: Mulish;
        font-style: normal;
        font-weight: normal;
      }
    }
    .map-filter {
      justify-content: center;
      display: flex;
      text-align: center;
      background: #ffffff;
      width: 49vw;
      padding: 10px;
      height: 50px;
      p {
        align-items: center;
        text-align: center;
        font-family: Mulish;
        font-style: normal;
        font-weight: normal;
      }
    }
  }

  .right {
    width: 95%;
    .selectOneFilter {
      display: block;
      width: 100%;
      margin: 5px auto;
    }
  }

  .select {
    height: 1.5rem;
    background: #002d63;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.5rem;
    p {
      font-family: Mulish;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #fff;
    }
  }

  .optionsFilter {
    display: none;
  }

  .showDetails {
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-gap: 1rem;
    grid-template-areas:
      'one two'
      'one three';
  }

  .two {
    grid-area: two;
    .flex {
      display: block;
      p {
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
      }
    }
    .badge-p {
      display: none;
    }
    .location {
      font-family: Mulish;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 14px;
    }
    .ellipsis {
      display: none;
    }
    .showBtn {
      display: none;
    }
  }

  .three {
    grid-area: three;
    .rating {
      display: none;
    }
  }

  .list-container {
    width: 90%;
  }
}
</style>
