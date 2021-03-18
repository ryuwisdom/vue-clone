<template>
  <div class="landingPage_container">
    <div class="banner_container">
      <div class="banner_inner_container">
        <div class="banner_contents">
          <div class="banner_left">
            <p>Get only the notifications<br />that you really want.</p>
            <button class="landing_banner_button">
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
        <div class="disclosures">
          <disclosures :lang="lang"></disclosures>
        </div>
        <div class="crypto_assets">
          <crypto-assets :lang="lang"></crypto-assets>
        </div>
        <div class="market_watch">
          <market-watch :lang="lang"></market-watch>
        </div>
        <div class="pr_research">
          <PRResearch :lang="lang"></PRResearch>

        </div>
      </div>


    </div>

</template>

<script>

import Disclosures from "@/components/main-contents/Disclosures";
import CryptoAssets from "@/components/main-contents/CryptoAssets";
import MarketWatch from "@/components/main-contents/MarketWatch";
import PRResearch from "@/components/main-contents/PRResearch";

export default {
  components: {
    Disclosures,
    CryptoAssets,
    MarketWatch,
    PRResearch,
  },
  props: {
    lang: {
      type: String,
      default: 'en'
    },
  },

};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;0,700;1,400&display=swap');
@import url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css');
@import url("https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css");
@import url("https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css");

.landingPage_container {
  width: 100%;
  margin-top: 64px;
  margin-bottom: 100px;
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
      //background-position: 100% 100%;



      .banner_contents {
        margin-top: 104px;
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

    //  배너 미디어 쿼리
      @media all and (max-width: 600px) {
        background-size: 250px auto;
        //align-items: center;
        .banner_contents {
          width: 100%;
          //margin-top: 0;
          .banner_left {
            //background-color: #6971fd;
            width: 80%;

            p {
              width: 100%;
              font-size: 23px;
              //background-color: skyblue;
            }
            .landing_banner_button {
              width: 141px;
            }
          }
        }

        .ticker_container {
          margin-top: 0px;
        }
      }

    }
  }
  .ticker_container {
    height: 42px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    z-index: 3;
    p {
      padding: 10px;
      text-align: center;
    }
  }
  .mainContents_container {
    padding-top: 30px;
    max-width: 1200px;
    display: grid;
    grid-template-columns: minmax(550px, 700px)  minmax(350px, 488px);
    margin: 0 auto;
    row-gap: 40px;
    column-gap: 11px;
    background-color: #ebeef4;

    // 600px ~ 960px
    @media all and (min-width: 601px) and (max-width: 960px) {
      display: grid;
      grid-template-columns: 100%;
      padding: 0px;
      margin-top: 10px;
      .disclosures,
      .crypto_assets,
      .market_watch,
      .pr_research {
        width: 100%;
        color: hotpink;

        .prResearch_container{
          margin-top: 40px;
        background-color: #6971fd;
        }

      }

    }
    // ~600px
    @media all and (max-width: 600px) {
      display: grid;
      grid-template-columns: 100%;
      padding: 50px 0;
      margin: 10px 0;

      //.disclosures {
      //  .disclosures_container {
      //  }
      //  }
      .crypto_assets,
      .market_watch,
      .pr_research {
        width: 100%;

      }
    }

      .disclosures {
        height: 488px;
        display: flex;
        flex-direction: column;
      }

      .crypto_assets {
        height: 488px;
        display: flex;
        flex-direction: column;
      }

      .market_watch {
        height: 430px;
        width: 100%;
        display: flex;
        overflow: hidden;

        .marketWatch_container {
          //width: 100%;
          //background-color: #6971fd;
          //color: skyblue;
        }
      }

      .pr_research {
      height: 376px;
      display: flex;
       }
      }


    }

</style>
