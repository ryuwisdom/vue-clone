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
        <div class="disclosueres">
          <h1>Disclosures</h1>

          <div class="list_component">
            <div class="list_component_name">1</div>
            <div class="list_component_title">2</div>
            <div class="list_component_price">3</div>
            <div class="list_component_date">4</div>
          </div>
        </div>
        <div class="crypto_assets">CryptoAssets</div>
      </div>

      <div class="bottom_items">
        <div class="market_watch">MarketWatch</div>
        <div class="pr_research">PR/Research</div>
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
  display: flex;
  justify-content: center;
  flex-direction: column;

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
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    flex-direction: column;
    /* max-width: 1200px; */
    margin: 20px;
    background-color: rosybrown;

    /* .mainComponent_box {
      min-width: 1200px;
      background-color: rosybrown; */
    /* display: grid; */
    /* grid-template-columns: 2fr 1fr 2fr 1fr; */
    /* gap: 10px; */
    .top_items {
      max-width: 1200px;
      /* display: grid;
      grid-template-columns: 700px 488px;
      gap: 20px; */
      display: flex;
      margin-bottom: 20px;

      .disclosueres {
        /* max-width: 1200px; */
        max-width: 700px;

        height: 500px;
        background-color: green;

        .list_component {
          display: flex;
          background-color: white;

          .list_component_name {
            flex: 1;
            border: 1px dotted gray;
          }
          .list_component_title {
            flex: 2;
            border: 1px dotted gray;
          }
          .list_component_price {
            flex: 3;
            border: 1px dotted gray;
          }
          .list_component_date {
            flex: 4;
            border: 1px dotted gray;
          }
        }
      }

      .crypto_assets {
        /* width: 488px; */
        height: 500px;
        background-color: darkcyan;
      }
    }

    .bottom_items {
      display: grid;
      grid-template-columns: 700px 488px;
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
@media all and (min-width: 960px) {
  /* .disclosueres,
  .crypto_assets,
  .market_watch,
  .pr_research {
    display: none;
  } */

  /* .top_items,
  .bottom_items {
    display: none;
  } */
}
// 601px보다 크고 960px보다 작을때
// 600px ~ 960px 일 때
@media all and (min-width: 601px) and (max-width: 960px) {
  // pc
  .disclosueres,
  .crypto_assets,
  .market_watch,
  .pr_research {
    /* display: none; */
  }
}
// 600px 보다 작을 때
@media all and (max-width: 600px) {
  .top_items,
  .bottom_items {
    display: block;
  }

  .disclosueres,
  .crypto_assets,
  .market_watch,
  .pr_research {
    width: 100%;
  }
}
</style>
