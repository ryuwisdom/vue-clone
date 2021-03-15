<template>
  <div class="landingPage_container">
    <div class="banner_container">
      <div class="banner_inner_container">
        <div class="banner_contents">
          <div class="banner_left">
            <p>Get only the notifications<br />that you really want.</p>
            <button class="langding_banner_button">
              <span>View Our App</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="ticker_container">
      <p>ticker</p>
    </div>
    <div class="mainContents_container">
      <div class="mainContents_inner_container">
        <div class="mainComponent_box">
          <div class="disclosures item">
            <Disclosures />
          </div>
          <div class="cryptoAssets item">
            <CryptoAssets />
          </div>
          <div class="marketWatch item">
            <MarketWatch />
          </div>
          <div class="prResearch item">
            <PRResearch />
          </div>
        </div>
        <!-- <router-link></router-link> -->
        <!-- <p>components place</p> -->
      </div>
    </div>
    <!-- <router-link>+_+</router-link> -->
  </div>
</template>

<script>
console.log('+_+');
// import Header from '@/components/Header.vue';
import Disclosures from '@/components/MainContents/Disclosures.vue';
import CryptoAssets from '@/components/MainContents/CryptoAssets.vue';
import MarketWatch from '@/components/MainContents/MarketWatch.vue';
import PRResearch from '@/components/MainContents/PRResearch.vue';
export default {
  components: {
    Disclosures,
    CryptoAssets,
    MarketWatch,
    PRResearch,
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;0,700;1,400&display=swap');
@import url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  .landingPage_container {
    /* width: 1200px; */
    /* width: 100%; */
    /* height: 100vh; */
    /* padding-top: 10px; */
    /* height: 360px; */
    /* display: flex;
    justify-content: center; */
    /* align-items: center; */
    /* margin-bottom: 100px; */
    /* z-index: -1; */
    margin-top: 64px;
    flex-direction: column;
    position: relative;
    .banner_container {
      width: 100%;
      height: 360px;

      display: flex;
      justify-content: center;
      background-color: #090a0e;
      /* border: 1px solid yellow; */
      position: relative;

      /* padding-top: 84px; */
      .banner_inner_container {
        /* width: 100%; */
        width: 1200px;
        height: 360px;

        /* margin: 0 50px; */
        /* margin-top: 50px; */
        /* border: 1px solid whitesmoke; */
        /* padding-left: 50px; */
        /* padding: 84px 12px 0 0; */

        /* padding-right: 12px; */
        background-image: url('../assets/images/visual@2x.png');
        background-repeat: no-repeat;
        background-size: 604px 318px;
        background-position: bottom right;
        background-position: 100% 100%;

        /* background-color: gray; */
        .banner_contents {
          /* width: 457px; */
          /* position: absolute;
          top: 100px; */
          margin-top: 104px;
          /* background-color: wheat; */
          .banner_left {
            p {
              color: white;
              font-size: 36px;
              font-weight: bold;
              font-family: 'poppins', 'Roboto', sans-serif;
              margin-bottom: 24px;
            }
            .langding_banner_button {
              width: 141px;
              height: 48px;
              background-color: #ffffff;
              border-radius: 2px;
              padding: 12px 24px;
              border-style: none;
              font-size: 14px;
              font-weight: bold;
              font-family: 'Spoqa Han Sans', sans-serif;
            }
          }
        }
      }
    }
    .ticker_container {
      height: 42px;
      background-color: #ffffff;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
      p {
        padding: 10px;
        text-align: center;
      }
    }
    .mainContents_container {
      /* max-width: 1280px; */
      /* background-color: skyblue; */
      background-color: #ebeef4;
      display: flex;
      justify-content: center;
      align-items: center;
      /* flex-direction: column; */

      .mainContents_inner_container {
        width: 1200px;
        text-align: center;
        background-color: rgb(168, 240, 240);
        background-color: #ebeef4;
        padding: 30px 0;
        margin-top: 10px;
        flex-wrap: nowrap;

        gap: 1em;

        .mainComponent_box {
          display: flex;
          flex-wrap: nowrap;
          gap: 1em;
          justify-content: space-around;
          flex-basis: 1200px;
          // 늘릴 비율
          flex-grow: 1;
          // 줄일 비율
          flex-shrink: 1;
          flex-wrap: wrap;
          .item {
            min-height: 492px;

            flex-basis: 480px;
            flex-shrink: 1;
            flex-grow: 1;
          }
        }
      }
    }
  }
}
</style>
