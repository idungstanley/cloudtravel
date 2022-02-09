<template>
  <main>
    <div class="left">
      <show-map></show-map>
      <side-base>
        <div class="flex">
          <div>
            <h5><strong>Price per night</strong></h5>
            <p><a href="#">Clear</a></p>
          </div>
          <form action="">
           <input type="range" id="vol" name="vol" min="0" max="550">
          </form>
        </div>
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
              <input type="checkbox" name="Very_Good" id="Very_Good" checked />
              <label for="Very_Good">Very Good</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Good" id="Good" checked />
              <label for="Good">Good</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Fair" id="Fair" checked />
              <label for="Fair">Fair</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Poor" id="Poor" checked />
              <label for="Poor">Poor</label>
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="No_review" id="No_review" checked />
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
              <input type="checkbox" name="Very_Good" id="Very_Good" checked />
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
              <input type="checkbox" name="Good" id="Good" checked />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Fair" id="Fair" checked />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="Poor" id="Poor" checked />
              <img src="star.png" alt="" />
              <img src="star.png" alt="" />
            </div>
            <p>999</p>
          </div>
          <div class="flex">
            <div>
              <input type="checkbox" name="No_review" id="No_review" checked />
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
    <div class="right">
      <section>
        <div id="para">
          <p><strong>Singapore: 9999 properties found</strong></p>
        </div>
        <div class="inline">
          <button class="blue">Popularity</button>
          <button>Price (lowest first)</button>
          <button>Reviews</button>
          <button>Discount</button>
        </div>
      </section>
      <section>
        <div class="list-container">
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
              <p><strong>The Fullerton Bay Hotel</strong></p>
              <div>
                <img src="star.png" alt="" />
                <img src="star.png" alt="" />
                <img src="star.png" alt="" />
                <img src="star.png" alt="" />
                <img src="star.png" alt="" />
              </div>
            </div>
            <p
              >80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 (view
              map)</p
            >
            <p
              >“Excellent boutique hotel. Great rooms in excellent location.
              Awesome vibe. Beautiful beac...</p
            >
            <div class="flex">
              <btn>Breakfast</btn>
              <btn>Free cancellation</btn>
              <btn>Pay later</btn>
              <btn>+1</btn>
            </div>
            <div class="flex">
              <img src="badge.png" alt="" />
              <p>Singapore - SG Clean</p>
            </div>
          </div>
          <div class="three">
            <img src="rating.png" alt="" />
            <button>SAVE 16% TODAY!</button>
            <p class="light">Nightly avg.</p>
            <div class="flex">
              <p class="strike">SGD 120</p>
              <p><strong>SGD 100</strong></p>
            </div>
          </div>
        </div>
        <div class="list-container">
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
              <p><strong>The Fullerton Bay Hotel</strong></p>
              <div>
                <img src="star.png" alt="" />
                <img src="star.png" alt="" />
                <img src="star.png" alt="" />
                <img src="star.png" alt="" />
                <img src="star.png" alt="" />
              </div>
            </div>
            <p
              >80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 (view
              map)</p
            >
            <p
              >“Excellent boutique hotel. Great rooms in excellent location.
              Awesome vibe. Beautiful beac...</p
            >
            <div class="flex">
              <btn>Breakfast</btn>
              <btn>Free cancellation</btn>
              <btn>Pay later</btn>
              <btn>+1</btn>
            </div>
            <div class="flex">
              <img src="badge.png" alt="" />
              <p>Singapore - SG Clean</p>
            </div>
          </div>
          <div class="three">
            <img src="rating.png" alt="" />
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
import ShowMap from './ShowMap.vue'
// import image1 from 'image1.png'
import SideBase from './UI/SideBase.vue'
export default {
  components: {
    ShowMap,
    SideBase,
  },
  data() {
    return {}
  },
}
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
#para {
  margin-left: 0;
  margin-bottom: 20px;
  text-align: left;
  margin-left: 40px;
  margin-top: 20px;
}
.inline > button {
  border: none;
  border-radius: 3px;
  margin-left: 1px;
  height: 35px;
}
.list-container {
  display: grid;
  width: 60vw;
  height: auto;
  grid-template-columns: 1fr 2fr 1fr;
  margin: 20px 20px 20px 40px;
  background: #fff !important;
  border-radius: 5px;
  padding: 10px;
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
.inline {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 40px;
}
.two > p {
  font-size: small;
  text-align: left;
}
.three {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.three > img {
  margin-bottom: 40px;
}
.three > button {
  font-family: Mulish;
  font-style: normal;
  font-weight: lighter;
  font-size: 10px;
  margin-bottom: 5px;
  border-radius: 0;
  border: 0;
  height: auto;
  width: fit-content;
  padding: 5px;
  background: #00a1e6;
  color: #ffffff;
}
.left {
  background: #e5e5e5;
  width: 20vw;
  height: 100vh;
  margin-top: 0;
}
form > input[search] {
  /* white */

  background: #ffffff;
  /* line */

  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 3px;
}
.right {
  width: 80vw;
  height: 100vh;
  background: #e5e5e5;
}
.img-left {
  border-radius: 2px;
}
.blue {
  background: #002d63;
}
button {
  width: 205px;
  background: #ffffff;
  height: 44px;
  left: 421px;
  top: 186px;
  border-radius: 5px 0px 0px 5px;
}
.wrapper {
  display: flex;
  margin-left: 10px;
}
.left .flex {
  display: flex;
  justify-content: space-between;
}
</style>
