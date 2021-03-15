<template>
  <div class="header_container">
    <div class="logo">
      <img src="@/assets/images/xangle-logo.png" alt="logo" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header_container {
  width: 100%;
  height: 64px;
  padding: 0 1px 0 0;
  display: flex;

  background-color: #090a0e;
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
}
</style>
