<template>
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

          <div class="list_component_name">
            <img
                :src="price.icon_url"
                alt="logo"
            />
            <span>{{price.slug}}</span>
          </div>
          <div class="list_component_price">
            <span>{{price.price.toFixed(2)}}</span>
<!--            <span>2.77%</span>-->
          </div>
          <div class="list_component_volume">$44,992,677,301</div>

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
      // viewList: 10,


    }
  },
  methods: {
    name() {
      
    }
  },
  mounted() {
   axios
    .get('https://api.xangle.io/information/component/price/latest', {
      params: {
        limit: 10,
      }
    })
    .then((res)=> {this.priceList = res.data, console.log(this.priceList)})
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
      padding: 17px;
     display: flex;
      font-size: 11px;
      justify-content: space-around;
      align-items: center;
      color: #A6AEBA;
      border-bottom: 1px solid #dfdfdf;

      .subject_name, .subject_price, .subject_volume {
        height: 27px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .list_component {

      .list_component_inner_area {
        height: 32px;
        display: flex;
        justify-content: space-around;
        text-align: center;
        line-height: 5px;
        padding: 17px 10px;
        font-size: 11px;
        background-color: white;


        .list_component_name, list_component_price , list_component_volume {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 11px;
          font-weight: 700;
          padding-left: 5px;

          img {
            width: 16px;
            height: 16px;
            margin-right: 8px;
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
