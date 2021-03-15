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
      <div class="top_items">
        <div class="disclosueres item">
          <h1>Disclosures</h1>
        </div>
        <div class="crypto_assets item">CryptoAssets</div>
      </div>

      <div class="bottom_items">
        <div class="market_watch item">MarketWatch</div>
        <div class="pr_research item">PR/Research</div>
      </div>
      <!-- <div class="mainComponent_box">
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;0,700;1,400&display=swap');
@import url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css');

.landingPage_container {
  margin-top: 64px;
  width: 100%;
  /* display: flex;
  justify-content: center;

  flex-direction: column; */

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
      background-position: 100% 100%;

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
    max-width: 1200px;
    /* width: 100%; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    background-color: rosybrown;

    .top_items {
      /* min-width: 1200px; */
      /* max-width: 1200px; */
      display: flex;
      justify-content: center;
      /* display: grid; */
      /* grid-template-columns: 700fr 488fr; */
      /* grid-template-columns: 700px 488px; */

      gap: 20px;
      /* display: flex; */
      margin-bottom: 20px;

      .disclosueres {
        /* max-width: 1200px; */
        /* flex-basis: 700px; */
        /* width: 700px; */
        /* max-width: 700px; */
        height: 500px;
        background-color: green;
      }

      .crypto_assets {
        /* flex-basis: 488px; */
        /* width: 488px; */
        /* max-width: 488px; */
        height: 500px;
        background-color: darkcyan;
      }
    }

    .bottom_items {
      /* min-width: 1200px; */
      display: flex;
      /* display: grid;
      grid-template-columns: 700px 488px; */
      gap: 20px;

      .market_watch {
        /* width: 700px; */
        height: 500px;
        background-color: yellow;
      }

      .pr_research {
        /* width: 488px; */
        height: 500px;
        background-color: rebeccapurple;
      }
    }
  }
}

// 961px보다 크고 1200px보다 작을때
@media all and (min-width: 961px) {
  .mainContents_container {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;

    .top_items,
    .bottom_items {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      .disclosueres,
      .market_watch {
        width: 60%;
        color: red;
      }
      .crypto_assets,
      .pr_research {
        color: white;
        width: 40%;
      }
    }
  }
}
// 601px보다 크고 960px보다 작을때
// 600px ~ 960px 일 때
@media all and (min-width: 601px) and (max-width: 960px) {
  .mainContents_container {
    max-width: 960px;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* padding: 20px; */
    background-color: yellow;

    .top_items,
    .bottom_items {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;

      .disclosueres,
      .crypto_assets,
      .market_watch,
      .pr_research {
        color: white;
        width: 100%;
      }
    }
  }
}
// 600px 보다 작을 때
@media all and (max-width: 600px) {
  .mainContents_container {
    max-width: 600px;
    display: flex;
    align-items: center;
    flex-direction: column;
    /* padding: 20px; */
    background-color: yellow;

    .top_items,
    .bottom_items {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;

      .disclosueres,
      .crypto_assets,
      .market_watch,
      .pr_research {
        color: white;
        width: 100%;
        height: 350px;
      }
    }
  }
}
</style>
