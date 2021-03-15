<template>
  <div class="layout_continer">
    <div class="layout">
      <!-- <aside>
      사이드바
    </aside> -->
      <article>
        <h1>타이틀</h1>
        <div class="flexbox">
          <div class="item item1">content1</div>
          <div class="item item2">content2</div>
          <div class="item item3">content3</div>
          <div class="item item4">content4</div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.layout_continer {
  /* width: 100%; */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  .layout {
    /* width: 1280px; */
    width: 1200px;
    margin-top: 100px;
    /* padding: 20px; */
    flex-wrap: nowrap;
    gap: 1em;

    article {
      /*  플렉스 아이템의 초기 크기를 지정 */
      flex-basis: 1200px;
      // 늘릴 비율
      flex-grow: 1;
      // 줄일 비율
      flex-shrink: 1;
      background-color: #ffe0e0;

      /* display: flex;
  justify-content: center; */
      .flexbox {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        /* padding: 10px; */
        /* flex-basis: 1180px; */
        background-color: #f0f0f0;
      }
      .item {
        min-height: 500px;

        flex-basis: 480px;
        flex-shrink: 1;
        flex-grow: 1;

        border: 1px solid green;
      }
      .item1,
      .item3 {
        /* flex: 2; */
        width: 700px;
        /* min-height: 500px; */
        flex-shrink: 1;
        flex-grow: 1;
        /* flex-basis: 700px; */
        background-color: darkcyan;
      }
      .item2,
      .item4 {
        width: 488px;
        /* min-height: 500px; */
        flex-shrink: 1;
        flex-grow: 1;
        /* flex-basis: 488px; */
        /* flex: 1; */
        background-color: silver;
      }
    }
  }
}
</style>
