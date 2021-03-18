<template>
  <div class="disclosures_container">
    <div class="title">
      <p>Disclosures</p>
      <div class="btn_side">
        <button @click="goToPrevPage">
          <font-awesome-icon icon="chevron-left" class="btn_font" />
        </button>
        <button @click="goToNextPage">
          <font-awesome-icon icon="chevron-right" class="btn_font" />
        </button>
      </div>
    </div>
    <div class="disclosures_list_contents">
      <div
        class="list_component"
        v-for="item in disclosuresList"
        :key="item.disclosure_id"
      >
        <div class="list_component_name col">
          <img :src="item.logos[64]" alt="logo" />
          <span>{{ item.symbol }}</span>
        </div>
        <div class="list_component_title col">
          {{ item.title }}
        </div>
        <div class="list_component_price col">
          <span class="price">
            {{ item.current_price }}
          </span>
          <span class="variance" :style="checkPositiveNum(item.percent_change)">
            {{ item.percent_change }}
          </span>
        </div>

        <div class="list_component_date col">
          {{ item.timestamp }}
        </div>
      </div>
    </div>
    <div class="feed_button_side">
      <button>Feed</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  components: {},
  computed: {},
  data() {
    return {
      disclosuresList: [],
      page: 0,
      items_per_page: 8,
    };
  },

  // watch: {
  //   page () {
  //     this.fetchLandingDisclosure()
  //   }
  // },

  methods: {
    checkCurrentPrice(item) {
      if (!item) return 'N/A';

      if (item > 1) {
        return `$${item.toFixed(3)}`;
      } else {
        return `$${item.toFixed(6)}`;
      }
    },

    checkPercentChange(item) {
      if (!item) return '';

      let result = `${Math.floor(item).toFixed(1)}% 24(h)`;
      if (item > 0) result = '+' + result;
      return result;
    },

    checkTimeStamp(time) {
      return time.slice(5, 10);
    },

    checkPositiveNum(change) {
      if (!change) return;
      if (change[0] === '+') {
        return { color: 'green' };
      } else {
        return { color: 'red' };
      }
    },

    numberWithCommas(item) {
      return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    async fetchLandingDisclosure() {
      const res = await axios.get('https://api.xangle.io/landing-disclosure', {
        params: {
          page: this.page,
          items_per_page: 8,
        },
      });

      this.disclosuresList = res.data.map((item) => {
        item.current_price = this.checkCurrentPrice(item.current_price);
        item.percent_change = this.checkPercentChange(item.percent_change);
        item.timestamp = this.checkTimeStamp(item.timestamp);

        return item;
      });

      console.log(this.disclosuresList);
    },
    // fetchLandingDisclosure () {
    //   return axios
    //       .get('https://api.xangle.io/landing-disclosure', {
    //         params: {
    //           page: this.page,
    //           items_per_page: 8,
    //         },
    //       })
    //       .then((res) => {
    //         (this.disclosuresList = res.data), console.log(this.disclosuresList);
    //       });
    // },

    goToNextPage() {
      console.log('next');
      this.page += 1;
      this.fetchLandingDisclosure();
    },

    // 페이지가 -가 되었을 때 네트워크 처리 하기
    // 첫 페이지(page : 1)에서 prev버튼은 inactive 처리, 스타일 포함

    goToPrevPage() {
      console.log('prev');
      if (this.page === 0) return;
      this.page -= 1;
      this.fetchLandingDisclosure();
    },
  },

  mounted() {
    this.fetchLandingDisclosure();
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/common.scss';

.disclosures_container {
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
        outline: none;
        cursor: pointer;

        .btn_font {
          font-size: 14px;
          color: #32569a;
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
      justify-content: left;
      text-align: left;
      color: #303d55;

      .col {
        display: flex;
        justify-content: left;
        align-items: center;
      }

      .list_component_name {
        width: 14%;
        /* display: flex;
        justify-content: center;
        align-items: center; */
        @include flexCenter;
        font-size: 11px;
        font-weight: 700;

        img {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }
      }

      .list_component_title {
        font-size: 12px;
        font-weight: 700;
        width: 53%;
        overflow: hidden;
        white-space: nowrap;
        text-align: left;
      }

      .list_component_price {
        width: 25%;
        font-size: 12px;
        display: flex;
        justify-content: left;
        letter-spacing: 0.5px;
        margin-left: 9px;

        .price {
          width: 40%;
        }

        .variance {
          width: 40%;
          white-space: nowrap;
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
