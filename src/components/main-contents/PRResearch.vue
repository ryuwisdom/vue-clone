<template>
  <div class="prResearch_container">
    <div class="title">
      <p>PR/Research  <font-awesome-icon icon="chevron-right" class="btn_font" /></p>
    </div>
    <div class="prResearch_list_contents">
      <div class="list_card" v-for="card in prResearchList" :key="card._id">
        <div class="card_left_side">
          <p class="subject">{{ card.title }}</p>
          <div class="author_side">
            <span class="author">{{ card.category }}</span>
            <span class="date">{{ checkTimeStamp(card.timestamp)}}</span>
          </div>
        </div>
        <div class="card_right_side">
          <img :src="card.thumbnail_url">
        </div>
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
      prResearchList: [],
    }
  },
  methods: {
    checkTimeStamp(time){
      return time.slice(5, 10)
    },
  },
  mounted() {
    axios
        .get('https://api.xangle.io/landing-content-list?lang=en')
        .then((res)=> {this.prResearchList = res.data, console.log(this.prResearchList)})
  }

};
</script>

<style lang="scss">
.prResearch_container {
  border: 1px solid seagreen;
  width: 100%;
  .title {
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    cursor: pointer;

    p {
      font-size: 18px;
      color: #1e2637;
      font-family: 'Poppins';
      padding-bottom: 20px;
    }
  }

  .prResearch_list_contents {
    display: flex;
    flex-direction: column;
    .list_card {
      height: 95px;
      padding-left: 20px;
      background-color: white;
      border-bottom:  1px solid #dfdfdf;
      display: flex;
      justify-content: space-between;
        .card_left_side {
          display: flex;
          flex-direction: column;
          border: 1px solid aquamarine;
          .subject {
            border: 1px solid salmon;
            //width: 265px;
            height: 40px;
            margin: 16px 20px 5px 0;
            text-align: left;
            font-family: SpoqaHanSans;
            font-size: 14px;
            font-weight: bold;
            color: #1e2637;

          }
          .author_side {
            border: 1px solid salmon;
            display: flex;
            //width: 265px;
            justify-content: flex-start;
            .author {
              height: 18px;
              margin: 5px 4px 16px 0;
              font-family: SpoqaHanSans;
              font-size: 11px;
              color: #A6AEBA;
              text-align: left;
            }
            .date {
              height: 18px;
              margin: 5px 4px 16px 0;
              font-family: SpoqaHanSans;
              font-size: 11px;
              color: #A6AEBA;
              text-align: left;
            }
          }


        }
      .card_right_side {
        border: 1px solid rebeccapurple;
       img {
         height: 94px;

       }
      }
    }
  }
}
</style>
