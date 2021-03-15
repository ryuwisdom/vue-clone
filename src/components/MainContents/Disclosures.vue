<template>
  <div class="disclosures_container">
    <div class="title">
      <p>Disclosures</p>
      <div class="btn_side">
        <button>
          <font-awesome-icon icon="chevron-left" class="btn_font" />
        </button>
        <button>
          <font-awesome-icon icon="chevron-right" class="btn_font" />
        </button>
      </div>
    </div>
    <div class="disclosures_list_contents">
      <div class="list_component">
        <div class="list_component_name">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/upload.xangle.io/images/project/5fb31d7e8f91a947187042f5/64.png"
            alt=""
          />
          <span>BTC</span>
        </div>
        <div class="list_component_title">
          New listing: Liquid (10 March 2021)
        </div>
        <div class="list_component_price">
          <span class="price">$0.036588</span>
          <span class="variance">-6.7%(24h)</span>
        </div>

        <div class="list_component_date">03-10</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.disclosures_container {
  /* width: 0px; */
  min-width: 700px;
  flex-basis: 300px;
  flex-grow: 1;
  min-height: 492px;
  /* background-color: darksalmon; */
  margin-top: 20px;

  .title {
    height: 40px;
    /* padding: 12px 0px 12px 0px; */
    /* background-color: springgreen; */
    display: flex;
    /* line-height: 40px; */
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
      /* background-color: tan; */
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        height: 32px;
        width: 32px;
        background-color: #f6f7f9;
        border: 1px solid #dbe1ea;
        border-radius: 4px;
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
      padding: 16px 12px;
      border-bottom: 1px solid #dfdfdf;
      display: grid;
      grid-template-columns: 104px 360px 175px 30px;
      text-align: left;
      color: #303d55;

      .list_component_name {
        display: flex;
        font-size: 11px;
        font-weight: 700;
        line-height: 16.5px;

        img {
          width: 16px;
          height: 16px;
          margin-right: 8px;
        }
      }
      .list_component_title {
        font-size: 12px;
        font-weight: 700;
        margin-right: 8px;
      }
      .list_component_price {
        display: flex;
        font-size: 12px;

        .price {
          margin-right: 7px;
        }
      }

      .list_component_date {
        font-size: 11px;
        line-height: 16.5px;
        color: gray;
      }
    }
  }
}
</style>
