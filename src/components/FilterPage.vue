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
        <h4><strong>Price per night</strong></h4>
        <p><a href="#">Clear</a></p>
      </div>
      <div class="fle">
        <div class="slider">
          <div class="progress"></div>
        </div>
          <div class="range-input">
            <input type="range" name="" id="" class="range-min" min="0" max="10000" value="0">
            <input type="range" name="" id="" class="range-min" min="0" max="10000" value="550">
          </div>
      </div>
      <div class="flex">
        <button class="sgd"><p>SGD 0</p></button>
        <span>-</span>
        <button class="sgd"><p>SGD 550</p></button>
      </div>
    </side-base>
    <side-base class="side-base">
      <div class="flex">
        <h4>Review</h4>
        <p><a href="#">Clear</a></p>
      </div>
      <form action="">
        <div class="flex">
          <div>
            <input type="checkbox" name="Excellent" id="Excellent" checked />
            <label for="Excellent">Excellent</label>
          </div>
          <p>999</p>
        </div>
      </form>
    </side-base>
    <side-base class="side-base">
      <div class="flex">
        <h4>Star rating</h4>
        <p><a href="#">Clear</a></p>
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
          <p>{{ result }}</p>
        </div>
      </form>
    </side-base>
    <side-base class="side-base">
      <div class="flex">
        <h4>Hotel Name</h4>
      </div>
      <form action="">
        <input type="search" name="" id="" placeholder="e.g Hilton, ibs ..." />
      </form>
    </side-base>
    <side-base class="side-base">
      <div class="flex">
        <h4>Reservation policy</h4>
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
        <h4>Meal plan</h4>
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
        <h4>Property type</h4>
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
        <h4>Facilities</h4>
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
            <p><a href="#">Show 26 more</a></p>
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
  .side-base form > input[type='search'] {
    width: auto;
  }
  .side-base {
    .fle {
      .slider {
        height: 5px;
        border-radius: 5px;
        width: 100%;
        position: relative;
        background-color: #ddd;
        .progress{
          height: 5px;
          position: absolute;
          left: 25%;
          right: 25%;
          border-radius: 5px;
          background-color: #00A1E5;
        }
        }
        .range-input{
          position: relative;
          input{
            position: absolute;
            top:-5px;
            left: 0;
            width: 100%;
            height: 5px;
            background: none;
            pointer-events: none;
            -webkit-appearance: none;
          }
           input[type="range"]::-webkit-slider-thumb{
              height: 17px;
              width: 17px;
              border-radius: 50%;
              -webkit-appearance: none;
              background-color: #ffff;
              border: #00A1E5  2px solid;
              pointer-events: auto;
            }
           input[type="range"]::-moz-range-thumb{
              height: 17px;
              width: 17px;
              border-radius: 50%;
              -moz-appearance: none;
              background-color: #ffff;
              border: none;
              pointer-events: auto;
            }
      }
    }
  }
  .flex {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    div {
      input {
        border: 1px solid #757575;
        box-sizing: border-box;
        border-radius: 1px;
        margin-right: 2px;
        width: 14px;
        height: auto;
      }
    }
    span {
      width: 50%;
    }
    h4 {
      font-family: Mulish;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0px;
      text-align: left;
    }
    p {
      a {
        font-family: Mulish;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: right;
        text-decoration: none;
      }
    }
    .sgd {
      background: #ffffff;
      border: 1px solid #dddddd;
      box-sizing: border-box;
      width: fit-content;
      height: auto;
      padding: 4px;
      border-radius: 3px;
      p {
        font-family: Mulish;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: left;
      }
    }
  }
  .small-screen {
    display: none;
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
      .flex {
        display: flex;
        justify-content: space-between;
      }
      .left-btn {
        height: 40px;
        color: #002d63;
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
