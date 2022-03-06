<template>
  <div class="left">
    <div class="container">
      <div class="flex small-screen">
        <img src="cancel.svg" alt="" />
        <p><strong>Sort & Filter</strong></p>
      </div>
    </div>
    <div class="container">
      <div class="flex small-screen">
        <p class="grey-bg">Sort by</p>
      </div>
    </div>
    <div class="container">
      <div class="flex small-screen space-bt">
        <p>Price (lowest first)</p>
        <img src="dropdown.svg" alt="" />
      </div>
    </div>
    <div class="container">
      <div class="flex small-screen">
        <p class="grey-bg">Filter by</p>
      </div>
    </div>
    <show-map class="show-map"></show-map>
    <side-base class="side-base">
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
    <side-base class="side-base">
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
    <side-base class="side-base">
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
    <side-base class="side-base">
      <h5>Hotel Name</h5>
      <form action="">
        <input type="search" name="" id="" placeholder="e.g Hilton, ibs ..." />
      </form>
    </side-base>
    <side-base class="side-base">
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
    <side-base class="side-base">
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
    <side-base class="side-base">
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
    <side-base class="side-base">
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
    <div class="container fixed">
      <div class="flex small-screen">
        <div class="left-b">
          <button class="left-btn">Clear</button>
        </div>
        <div class="right-b">
          <button class="right-btn">Filter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBase from './UI/SideBase.vue'
export default {
  components: {
    SideBase,
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@500&display=swap');

.left {
  width: 20%;
  object-fit: contain;
  padding-bottom: 60px;
  margin-top: 0;
  margin-right: 1%;
  .sidebase form > input[type='search'] {
    width: auto;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    span {
      width: 50%;
    }
  }
  .small-screen {
    display: none;
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
  label {
    font-size: small;
  }
}

@media screen and (max-width: 960px) {
  .left {
    width: 100%;
    .show-map {
      display: none;
    }
    .side-base {
      width: 100%;
      margin: 0;
      border-radius: 0;
    }
    .container {
      background-color: #fff;
      height: 50px;
      .flex {
        display: flex;
        justify-content: left;
        color: #002d63;
        .space-bt {
          justify-content: space-between;
        }
      }
    }
    .fixed {
      width: 100%;
      height: 60px;
      position: fixed;
      bottom: 0;
      .flex{
       display: flex;
      justify-content: space-between;
      }
      .left-btn {
        height:40px;
        color: #002D63;
        width: auto;
        border-radius: 5px;
        background: #ffffff;
        padding: 5px 50px;
      }
      .right-btn {
        height: 40px;
        width: auto;
        color: #fff;
        padding: 5px 50px;
        border-radius: 5px;
        background: #002d63;
      }
    }
    .small-screen {
      .grey-bg {
        width: 100%;
        height: 50px;
        text-align: left;
        color: #002d63;
        background: #f5f5f5;
      }
    }
  }
}
</style>
