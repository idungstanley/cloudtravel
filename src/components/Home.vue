<template>
  <main>
    <div class="left">
      <show-map></show-map>
      <side-base>
        <div class="flex">
          <h5><strong>Price per night</strong></h5>
          <p><a href="#">Clear</a></p>
        </div>
        <form action="">
          <div class="flex">
            <input type="range" id="vol" name="vol" min="0" max="550" />
          </div>
          <div class="flex">
            <button class="sgd">SGD 0</button>
            <span>-</span>
            <button class="sgd">SGD 550</button>
          </div>
        </form>
      </side-base>
      <side-base>
        <div class="flex">
          <p>Review</p>
          <p>Clear</p>
        </div>
        <form action="">
          <div class="flex">
            <div>
              <input type="checkbox" name="Excellent" id="Excellent" checked />
              <label for="Excellent">Excellent</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Very_Good" id="Very_Good" />
              <label for="Very_Good">Very Good</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Good" id="Good" />
              <label for="Good">Good</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Fair" id="Fair" />
              <label for="Fair">Fair</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Poor" id="Poor" />
              <label for="Poor">Poor</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="No_review" id="No_review" />
              <label for="No_review">No review</label>
            </div>
            <p>999</p>
          </div>
        </form>
      </side-base>
      <side-base>
        <div class="flex">
          <h4>Star rating</h4>
          <p>Clear</p>
        </div>
        <form action="">
          <div class="flex">
            <div>
              <input type="checkbox" name="Excellent" id="Excellent" checked />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Very_Good" id="Very_Good" />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Good" id="Good" />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Fair" id="Fair" />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Poor" id="Poor" />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="No_review" id="No_review" />
              <img src="star.png" alt="" />
            </div>
            <p>999</p>
          </div>
        </form>
      </side-base>
      <side-base>
        <h5>Hotel Name</h5>
        <form action="">
          <input
            type="search"
            name=""
            id=""
            placeholder="e.g Hilton, ibs ..."
          />
        </form>
      </side-base>
      <side-base>
        <div class="flex">
          <h5>Reservation policy</h5>
        </div>
        <form action="">
          <div class="flex">
            <div>
              <input
                type="checkbox"
                name="Free_cancellation"
                id="Free_cancellation"
              />
              <label for="Free_cancellation">Free cancellation</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Book_now" id="Book_now" />
              <label for="Book_now">Book now, pay later</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="pay" id="pay" />
              <label for="pay">Pay at hotel</label>
            </div>
            <p>999</p>
          </div>
        </form>
      </side-base>
      <side-base>
        <div class="flex">
          <h5>Meal plan</h5>
        </div>
        <form action="">
          <div class="flex">
            <div>
              <input type="checkbox" name="room-only" id="room-only" />
              <label for="room-only">Room only</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Breakfast" id="Breakfast" />
              <label for="Breakfast">Breakfast</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <a href="#">Show 5 more</a>
              <img src="dropdown.png" alt="" />
            </div>
          </div>
        </form>
      </side-base>
      <side-base>
        <div class="flex">
          <h5>Property type</h5>
        </div>
        <form action="">
          <div class="flex">
            <div>
              <input type="checkbox" name="Hotel" id="Hotel" />
              <label for="Hotel">Hotel</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="HBA" id="HBA" />
              <label for="HBA">Hostel/Backpacker accomodation</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Apartment" id="Apartment" />
              <label for="Apartment">Apartment</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <a href="#">Show 9 more</a>
              <img src="dropdown.png" alt="" />
            </div>
          </div>
        </form>
      </side-base>
      <side-base>
        <div class="flex">
          <h5>Facilities</h5>
        </div>
        <form action="">
          <div class="flex">
            <div>
              <input type="checkbox" name="pool" id="pool" />
              <label for="pool">Swimming pool</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="internet" id="internet" />
              <label for="internet">Internet access</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Non-smoking" id="Non-smoking" />
              <label for="Non-smoking">Non-smoking floor</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <a href="#">Show 26 more</a>
              <img src="dropdown.png" alt="" />
            </div>
          </div>
        </form>
      </side-base>
    </div>
    <div class="sort-container">
      <div class="sort">
        <img src="filters.svg" alt="" />
        <p>Sort & Filter</p>
      </div>
      <div class="map-filter">
        <img src="loca.svg" alt="" />
        <p>Map View</p>
      </div>
    </div>
    <div class="right">
      <section>
        <div class="selectOneFilter">
          <div class="select">
            <p>Select One</p>
            <img src="dropdown.svg" alt="" />
          </div>
        </div>
        <div id="para">
          <p><strong>Singapore: 9999 properties found</strong></p>
        </div>
        <option-btns class="optionsFilter"></option-btns>
      </section>
      <section class="show">
        <div
          class="list-container showDetails"
          v-for="result in results"
          :key="result.id"
        >
          <div class="one flex">
            <img class="img-left" src="image1.png" alt="" />
            <!-- <div class="wrapper">
              <img class="img-left" src="image-min2.png" alt="" />
              <img class="img-left" src="image-min2.png" alt="" />
              <img class="img-left" src="image-min3.png" alt="" />
              <img class="img-left" src="image-min4.png" alt="" />
              <img class="img-left" src="image-min5.png" alt="" />
            </div> -->
          </div>
          <div class="two">
            <div class="flex">
              <p
                ><strong>{{ result.property.name }}</strong></p
              >
              <div>
                <img src="star.png" alt="" />
                <!-- <img src="star.png" alt="" />
                <img src="star.png" alt="" />
                <img src="star.png" alt="" />
                <img src="star.png" alt="" /> -->
              </div>
            </div>
            <p class="location"
              >{{ result.property.location.address }},
              {{ result.property.location.city }},
              {{ result.property.location.country }},
              {{ result.property.location.countryCode
              }}<span><a href="">(View in Map)</a></span></p
            >
            <p></p>
            <div class="flex showBtn">
              <btn>Breakfast</btn>
              <btn>Free cancellation</btn>
              <btn>Pay later</btn>
              <btn>+1</btn>
            </div>
            <div class="flex">
              <img src="badge.png" class="badge" alt="" />
              <p class="sm">Singapore - SG Clean</p>
            </div>
          </div>
          <div class="three">
            <img src="rating.png" alt="" class="rating" />
            <button>SAVE 16% TODAY!</button>
            <p class="light">Nightly avg.</p>
            <div class="flex">
              <p class="strike">SGD 120</p>
              <p><strong>SGD 100</strong></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import OptionBtns from './OptionBtns.vue'
import SideBase from './UI/SideBase.vue'
import axios from 'axios'

export default {
  components: {
    SideBase,
    OptionBtns,
  },
  data() {
    return {
      results: [],
      outlets: [],
      summary: [],
      Currency: 'USD',
      rating: 5,
    }
  },
  methods: {
    loadSearch() {
      axios
        .get('http://localhost:8080/job01/search/sgsg')
        .then((response) => {
          let data = response.data
          console.log(data)
          this.Currency = data.meta.currency
          this.outlets = data.outlets.availability
          this.results = this.outlets.results
          this.results.map((result) => {
            this.rating = result.property.starRating
            this.summary = result.property.reviews.summary.text
            console.log(this.summary)
          })
          this.rating = data
          console.log(this.results)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    setRating() {
      this.rating = this
    },
  },
  mounted() {
    this.loadSearch()
  },
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap');

* {
  padding: 0;
  margin: 0;
}

.load-animation {
  display: none;
  position: absolute;
  width: 1050px;
  height: 420px;
  left: 375px;
  top: 230px;
  background: linear-gradient(
    270deg,
    #dddddd 30.88%,
    #f5f5f5 50.54%,
    #dddddd 69.4%
  );
}
#para {
  margin-left: 0;
  margin-bottom: 20px;
  text-align: left;
  margin-left: 40px;
  margin-top: 20px;
}

.list-container {
  display: grid;
  width: 60vw;
  height: auto;
  grid-template-columns: 1fr 2fr 1fr;
  margin: 8px 20px 8px 40px;
  background: #fff !important;
  border-radius: 5px;
  padding: 10px;
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
label {
  font-size: small;
}
main {
  display: flex;
}

.one {
  padding: 5px 8px 5px 5px;
}
.two > p {
  font-size: small;
  text-align: left;
  padding: 2px;
}
.sm {
  font-size: small;
  margin-top: 3px;
}
flex > span {
  width: 50%;
}
.three {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  img {
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

.badge {
  margin: 1px 7px 1px 1px;
}
.sgd {
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  width: fit-content;
  height: auto;
  padding: 3px 20px 3px 5px;
  border-radius: 3px;
}

form > input[search] {
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 3px;
}
.left {
  width: 20vw;
  object-fit: contain;
  padding-bottom: 60px;
  margin-top: 0;
  margin-left: 3vw;
  margin-right: 0;
  .flex {
    display: flex;
    justify-content: space-between;
  }
}
.right {
  width: 60vw;
  margin-left: 0;
  padding-bottom: 60px;
  .selectOneFilter {
    display: none;
  }
}

.img-left {
  border-radius: 2px;
}

.wrapper {
  display: flex;
  margin-left: 10px;
}

@media screen and (max-width: 960px) {
  .list-container {
    padding: 0 10px 0 0;
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
      }
    }
  }

  .right {
    width: 100%;
    .selectOneFilter {
      display: block;
      width: 90%;
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

  .one {
    grid-area: one;
    padding: 0;
    margin: 0;
    .img-left {
      width: 100px;
      height: inherit;
      border-radius: 0;
    }
  }

  .two {
    grid-area: two;
    .flex {
      p {
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
      }
      .location {
        font-family: Mulish;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 14px;
      }
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
