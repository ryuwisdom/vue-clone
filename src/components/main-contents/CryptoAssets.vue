<template >
  <div class="cryptoAssets_container">
    <div class="title">
      <p>Crypto Assets</p>
    </div>
    <div class="cryptoAssets_list_contents">
      <div class="list_subject">
        <div class="subject_name">Coin Name</div>
        <div class="subject_price">Price (24h)</div>
        <div class="subject_volume">Volume (24h)</div>
      </div>

      <div class="list_component">

        <div class="list_component_inner_area" v-for="(price, id) in priceList" :key="id">
<!--        <router-link :to="`/grid/${price.name}`" exact>-->

          <div class="list_component_name col">
            <img
                :src="price.icon_url"
                alt="logo"
            />
            <span>{{price.slug}}</span>
          </div>
          <div class="list_component_price col">
            <span>${{price.price}}</span>

            <span :style="checkPositiveNum (price.percent_change_24h)">{{price.percent_change_24h.toFixed(2)}}%</span>
          </div>
          <div class="list_component_volume col">${{price.volume_24h_reported}}</div>

<!--          <div class="list_component_price col">-->
<!--            <span>${{numberWithCommas(price.price.toFixed(2))}}</span>-->

<!--            <span :style="checkPositiveNum (price.percent_change_24h)">{{price.percent_change_24h.toFixed(2)}}%</span>-->
<!--          </div>-->
<!--          <div class="list_component_volume col">${{numberWithCommas(checkVolumePrice(price.volume_24h_reported))}}</div>-->

<!--        </router-link> -->


        </div>
      </div>


      <div class="full_list_btn_side">
<button>
  Full List
</button>
      </div>
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
      priceList: [],

    }
  },
  props : {
    lang : {
      type : String,
      default: 'en'
    }
  },
  watch: {
    // lang 값의 변경이 일어날때 아래 함수가 실행
    lang () {
      console.log('lang changed')
      this.fetchLandingCryptoAssets()
    }
  },
  methods: {
    checkCurrentPrice(item) {
      if (!item) return 'N/A';

      if (item > 1) {
        return item.toFixed(3);
      } else {
        return item.toFixed(6);
      }
    },
    checkVolumePrice(item) {
      if (!item) return 'N/A';

      if (item > 1) {
        return item.toFixed(0);
      }
    },

    checkPercentChange(item) {
      if (!item) return 'N/A';

      let result = `${Math.floor(item).toFixed(1)}% 24(h)`;
      if (item > 0) result = '+' + result;
      return result;
    },

    checkTimeStamp(time){
      return time.slice(5, 10)
    },

    checkPositiveNum (change) {
      if(!change) return
      if (change > 0 ) {return {'color' : '#2bb669' }} else { return { 'color' : '#ff6363' }}
    },

    numberWithCommas(item) {
      return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    async fetchLandingCryptoAssets(){
      const res = await axios.get('https://api.xangle.io/information/component/price/latest', {
        params: {
          limit: 10,
          lang: this.lang
        },
      });

      console.log(res.data)

      this.priceList = res.data.map((price) => {
        price.price = this.numberWithCommas(price.price);
        price.volume_24h_reported = this.numberWithCommas(this.checkVolumePrice(price.volume_24h_reported));
        price.timestamp = this.checkTimeStamp(price.timestamp);

        return price;
      });

      console.log(this.priceList);


    },
  },
  mounted() {
    this.fetchLandingCryptoAssets()
   // axios
   //  .get('https://api.xangle.io/information/component/price/latest', {
   //    params: {
   //      limit: 10,
   //    }
   //  })
   //  .then((res)=> {this.priceList = res.data, console.log(this.priceList)})
  }

};
</script>

<style lang="scss">
.cryptoAssets_container {

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
  }

  .cryptoAssets_list_contents {
    background-color: white;

    .list_subject {
      height: 27px;
      padding: 17px 5px;
     display: flex;
      font-size: 11px;
      justify-content: left;
      align-items: center;
      color: #A6AEBA;
      border-bottom: 1px solid #dfdfdf;

      .subject_name,  {
        width: 25%;
        height: 27px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .subject_price {
        width:35%;
        height: 27px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .subject_volume {
        width: 40%;
        height: 27px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .list_component {
      padding: 10px 5px;

      .list_component_inner_area {
        height: 32px;
        display: flex;
        justify-content: space-around;
        text-align: center;
        line-height: 5px;
        font-size: 11px;
        background-color: white;


        .col {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 11px;
          font-weight: 700;
        }

        .list_component_name {
            width: 25%;
          img {
            width: 16px;
            height: 16px;
            margin-right: 8px;
          }
        }

         .list_component_volume {
            width: 40%;
           font-weight: 400;
          }

          .list_component_price {
            width: 35%;

            span {
            &:nth-child(1) {
              letter-spacing: 0.3px;
              padding-right: 9px;

            }
            }
          }
      }
    }
  }
  .full_list_btn_side {
    width: inherit;
    height: 72px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top:  1px solid #dfdfdf;

    button {
      width: 240px;
      height: 48px;
      background-color: white;
      border: 1px solid #dfdfdf;
      font-size: 16px;
      font-weight: 700;
      font-family: 'Spoqa Han Sans Neo';
      cursor: pointer;

    }
  }
}

</style>
