<template>
  <div class="marketWatch_container">
    <div class="title">
      <p>Market Watch  <font-awesome-icon icon="chevron-right" class="btn_font" /></p>
    </div>
    <div class="marketWatch_list_contents" >
      <div class="list_card" v-for="(card,index) in cardList" :key="index">
        <p class="category">{{card.sub_type}}</p>
        <p class="subject">{{card.title}}</p>
        <p class="content">{{card.summary}}</p>
        <p class="date">{{ checkTimeStamp(card.timestamp)}}</p>
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
      cardList: [],
    }
  },
  methods: {
    checkTimeStamp(time){
      return time.slice(5, 10)
    },
  },
  mounted() {
    axios
        .get('https://api.xangle.io/landing-research-list')
        .then((res)=> {this.cardList = res.data, console.log(this.cardList)})
  }

};
</script>

<style lang="scss">
.marketWatch_container {

  .title {
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
    cursor: pointer;

    p {
      font-size: 18px;
      color: #1e2637;
      font-family: 'Poppins';
      padding-bottom: 20px;
    }
  }
  .marketWatch_list_contents {
      display: flex;
      flex-wrap: wrap;

    .list_card {
      width: 340px;
      height: 184px;
      padding: 16px 20px;
      text-align: left;
      background-color: white;
      margin: 5px;



      .category {
        width: 88px;
        height: 18px;
        font-size: 11px;
        color: #A6AEBA;
        font-family: 'Spoqa Han Sans Neo';
      }
      .subject {
        height: 40px;
        flex-basis: 304px;
        margin-top: 4px;
        color: #1e2637;
        font-size: 14px;
        font-weight: bold;
        font-family: 'Spoqa Han Sans', sans-serif;
      }
      .content {
        width: 304px;
        height: 54px;
        margin: 10px 0;
        font-family: 'SpoqaHanSans';
        font-size: 12px;
        line-height: 1.5;
        letter-spacing: -0.16px;
        overflow: hidden;
      }
      .date {
        width: 31px;
        height: 18px;
        margin: 8px 4px 0 0;
        font-family: SpoqaHanSans;
        font-size: 11px;
        color: #A6AEBA;
      }
    }
  }
}
</style>
