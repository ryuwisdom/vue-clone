<template>
  <div class="disclosures_container">
    <div class="title">
      <p>Disclosures</p>
      <div class="btn_side">
        <button>
          <font-awesome-icon icon="chevron-left" class="btn_font" />
        </button>
        <button>
          <font-awesome-icon icon="chevron-right" class="btn_font" />
        </button>
      </div>
    </div>
    <div class="disclosures_list_contents">

      <div class="list_component"  v-for="(item, id) in disclosuresList" :key="id">
        <div class="list_component_name col">
          <img
              :src="item.logos[64]"
              alt="logo"
          />
          <span>{{ item.symbol }}</span>
        </div>
        <div class="list_component_title col">
          {{item.title}}
        </div>
        <div class="list_component_price col">
          <span class="price">

          </span>
          <span class="variance">

          </span>
        </div>

        <div class="list_component_date col">03-10</div>
      </div>




    </div>
  <div class="feed_button_side">
<button>Feed</button>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components : {},
  computed: {},
  data() {
    return {
      disclosuresList: [],
    }
  },
  methods: {
    // 0. current_price가 있으면 소수 3째자리
    // null이면 N/A 리턴


    // 1. 아이템의 값이 존재하면 (24h)붙인 후 / 숫자이고 -일때 red, +일때 green,
    // null이면 N/A 리턴

   // 2. timestamp에서 시간 뽑아내기






    numberWithCommas(item) {
      return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  mounted() {
    axios
        .get('https://api.xangle.io/landing-disclosure', {
          params: {
            page: 0,
            items_per_page:8
          }
        })
        .then((res)=> {this.disclosuresList = res.data, console.log(this.disclosuresList)})
  }

};
</script>

<style lang="scss">
.disclosures_container {
  //min-width: 700px;
  //flex-basis: 300px;
  //flex-grow: 1;
  //min-height: 492px;
  //margin-top: 20px;


  .title {
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;

    p {
      font-size: 18px;
      color: #1e2637;
      font-family: 'Poppins';
      padding-bottom: 20px;
    }

    .btn_side {
      width: 68px;
      height: 32px;
      line-height: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        height: 32px;
        width: 32px;
        background-color: #f6f7f9;
        border: 1px solid #dbe1ea;
        border-radius: 4px;
        cursor: pointer;
        .btn_font {
          font-size: 14px;
          //color: #32569a;
          color: black;
        }
      }
    }
  }

  .disclosures_list_contents {
    background-color: white;
    .list_component {
      height: 47px;
      width: 100%;
      border-bottom: 1px solid #dfdfdf;
      display: flex;
      justify-content: space-around;
      text-align: left;
      color: #303d55;

      .col {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      .list_component_name {
        font-size: 11px;
        font-weight: 700;
        line-height: 16.5px;

        img {
          width: 16px;
          height: 16px;
          margin-right: 4px;

        }
      }
      .list_component_title {
        font-size: 12px;
        font-weight: 700;
        width: 54%;
        overflow: hidden;
        white-space: nowrap;
        text-align: left;

      }
      .list_component_price {
        display: flex;
        font-size: 12px;

        .price {

        }
      }

      .list_component_date {
        font-size: 11px;

        color: gray;
      }
    }

  }

  .feed_button_side {
    //width: 700px;
    height: 72px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 240px;
      height: 48px;
      padding: 12px 0;
      border-radius: 2px;
      border-style: none;
      color: white;
      font-size: 16px;
      font-weight: 700;
      font-family: 'Spoqa Han Sans Neo';
      background-image: linear-gradient(259deg, #6971fd, #4130ff);
      cursor: pointer;
    }
    }
  }

</style>
