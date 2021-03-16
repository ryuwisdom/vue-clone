<template>
  <div class="marketWatch_container">
    <div class="title">
      <p>Market Watch  <font-awesome-icon icon="chevron-right" class="btn_font" /></p>
    </div>
    <div class="marketWatch_list_contents">
      <div class="list_card">
        <p class="category">Category</p>
        <p class="subject">Liquid delists 28 assets to become licensed crypto exchange in Singapore</p>
        <p class="content">On July 27th, Liquid, Japanese Crypto exchange, has updated the list of 28 assets that are delisted on 24th. Due to heightened compliance requirements set by …</p>
        <p class="date">03-12</p>
      </div>
      <div class="list_card">
        <p class="category">Category</p>
        <p class="subject">Liquid delists 28 assets to become licensed crypto exchange in Singapore</p>
        <p class="content">On July 27th, Liquid, Japanese Crypto exchange, has updated the list of 28 assets that are delisted on 24th. Due to heightened compliance requirements set by …</p>
        <p class="date">03-12</p>
      </div>
      <div class="list_card">
        <p class="category">Category</p>
        <p class="subject">Liquid delists 28 assets to become licensed crypto exchange in Singapore</p>
        <p class="content">On July 27th, Liquid, Japanese Crypto exchange, has updated the list of 28 assets that are delisted on 24th. Due to heightened compliance requirements set by …</p>
        <p class="date">03-12</p>
      </div>
      <div class="list_card">
        <p class="category">Category</p>
        <p class="subject">Liquid delists 28 assets to become licensed crypto exchange in Singapore</p>
        <p class="content">On July 27th, Liquid, Japanese Crypto exchange, has updated the list of 28 assets that are delisted on 24th. Due to heightened compliance requirements set by …</p>
        <p class="date">03-12</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.marketWatch_container {
  /* width: 500px; */
  min-width: 700px;
  min-height: 492px;
  /* height: 500px; */
  //background-color: beige;
  //display: flex;
  padding-top: 20px;
  flex-basis: 300px;
  flex-grow: 1;

  .title {
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
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
      justify-content: flex-start;
      flex-wrap: wrap;

    .list_card {
      width: 344px;
      height: 183px;
      padding: 16px 20px;
      text-align: left;
      background-color: white;
      margin: 3px;


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
