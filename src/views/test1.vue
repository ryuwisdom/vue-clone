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
          <div class="CryptoAssets item">
            <MarketWatch />
          </div>

          <div class="prResearch item">
            <PRResearch />
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
console.log('+_+');
import Disclosures from '@/components/main-contents/Disclosures.vue';
import CryptoAssets from '@/components/main-contents/CryptoAssets.vue';
import MarketWatch from '@/components/main-contents/MarketWatch.vue';
import PRResearch from '@/components/main-contents/PRResearch.vue';
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
@import url("https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css");
@import url("https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  .landingPage_container {
    margin-top: 64px;
    //flex-direction: column;
    .banner_container {
      width: 100%;
      height: 360px;

      display: flex;
      justify-content: center;
      background-color: #090a0e;
      position: relative;
      .banner_inner_container {

        width: 1200px;
        height: 360px;
        background-image: url('../assets/images/visual@2x.png');
        background-repeat: no-repeat;
        background-size: 604px 318px;
        background-position: bottom right;


        .banner_contents {
          margin: 98px 139px 24px 0;

          .banner_left {
            p {
              color: white;
              font-size: 36px;
              font-weight: bold;
              font-family: 'poppins', 'Roboto', sans-serif;
              margin-bottom: 24px;
            }
            .landing_banner_button {
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
      line-height: 25px;
      background-color: #ffffff;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
      p {
        padding: 10px;
        text-align: left;
        font-weight: bold;
      }
    }
    .mainContents_container {

      background-color: #ebeef4;
      display: flex;
      justify-content: center;
      align-items: center;


      .mainContents_inner_container {
        width: 1200px;
        text-align: center;
        background-color: #ebeef4;
        padding: 30px 0;
        margin-top: 10px;
        flex-wrap: nowrap;
        gap: 1em;

        .mainComponent_box {
          display: flex;
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
            flex-basis: 460px;
            flex-shrink: 1;
            flex-grow: 1;
          }
        }
      }
    }
  }
}
</style>
