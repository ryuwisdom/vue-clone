<template>
  <div class="prResearch_container">
    <div class="title">
      <p>PR/Research  <font-awesome-icon icon="chevron-right" class="btn_font" /></p>
    </div>
    <div class="prResearch_list_contents">
      <div class="list_card">
        <div class="card_left_side">
          <p class="subject">[Xangle Research] Defi, dejavu of 2017 ICO market boom?</p>
          <div class="author_side">
            <span class="author">Cross Angle</span>
            <span class="date">03-02</span>
          </div>
        </div>
        <div class="card_right_side">
          <img src="https://s3.ap-northeast-2.amazonaws.com/upload.xangle.io/images/content/thumbnail/image-7e25d545-8c98-47c8-93f0-b25ab96c4138.png">
        </div>
      </div>
      <div class="list_card">
        <div class="card_left_side">
          <p class="subject">[Xangle Research] Defi, dejavu of 2017 ICO market boom?</p>
          <div class="author_side">
            <span class="author">Cross Angle</span>
            <span class="date">03-02</span>
          </div>
        </div>
        <div class="card_right_side">
          <img src="https://s3.ap-northeast-2.amazonaws.com/upload.xangle.io/images/content/thumbnail/image-7e25d545-8c98-47c8-93f0-b25ab96c4138.png">
        </div>
      </div>
      <div class="list_card">
        <div class="card_left_side">
          <p class="subject">[Xangle Research] Defi, dejavu of 2017 ICO market boom?</p>
          <div class="author_side">
            <span class="author">Cross Angle</span>
            <span class="date">03-02</span>
          </div>
        </div>
        <div class="card_right_side">
          <img src="https://s3.ap-northeast-2.amazonaws.com/upload.xangle.io/images/content/thumbnail/image-7e25d545-8c98-47c8-93f0-b25ab96c4138.png">
        </div>
      </div>
      <div class="list_card">
        <div class="card_left_side">
          <p class="subject">[Xangle Research] Defi, dejavu of 2017 ICO market boom?</p>
          <div class="author_side">
            <span class="author">Cross Angle</span>
            <span class="date">03-02</span>
          </div>
        </div>
        <div class="card_right_side">
          <img src="https://s3.ap-northeast-2.amazonaws.com/upload.xangle.io/images/content/thumbnail/image-7e25d545-8c98-47c8-93f0-b25ab96c4138.png">
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.prResearch_container {
  /* width: 500px; */
  //min-width: 488px;
  //height: 492px;
  //background-color: yellow;
  //margin-top: 20px;
  //min-width: 350px;
  //flex-basis: 300px;
  //flex-grow: 1;

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
    //width: 488px;
    display: flex;
    flex-direction: column;
    .list_card {
      height: 95px;
      padding-left: 20px;
      background-color: white;
      border-bottom:  1px solid #dfdfdf;
      display: flex;
      justify-content: flex-start;
        .card_left_side {
          display: flex;
          flex-direction: column;
          .subject {
            width: 265px;
            height: 40px;
            margin: 16px 20px 5px 0;
            text-align: left;
            font-family: SpoqaHanSans;
            font-size: 14px;
            font-weight: bold;
            color: #1e2637;

          }
          .author_side {
            display: flex;
            width: 265px;;
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
       img {
         //width: 183px;
         height: 94px;
         //margin: 0 0 0 20px;
       }
      }
    }
  }
}
</style>
