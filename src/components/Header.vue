<template>
  <div class="header_container">
    <div class="logo">
      <img src="@/assets/images/xangle-logo.png" alt="logo" />
    </div>
<div class="select_bar">

  <select class="language_select" @change="e => $emit('changeLanguage', e)">
    <option value="en" selected>USD</option>
    <option value="ko">KRW</option>
    <option value="ru">RUB</option>
    <option value="id" >IDR</option>
    <option value="jp" >JPY</option>
  </select>
</div>

  </div>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      default: 'en'
    },
  },
};
</script>

<style lang="scss" scoped>
.header_container {
  width: 100%;
  height: 64px;
  padding: 0 1px 0 0;
  display: flex;
  justify-content: space-between;

  background-color: #020105;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;

  .logo {
    padding: 15px 15px;

    img {
      width: 108px;
      /* width: 50px; */
      height: 30px;
      cursor: pointer;
      /* position: absolute;
      top: 15px;
      left: 10px; */
    }
  }
  .select_bar {
    display: flex;
justify-content: center;
    align-items: center;
    padding-right: 10px;
.language_select{
      width: 100px;
    height: 30px;

option {
  width: 100px;
  height: 60px;
}
  }
}
}
</style>
