<template>
  <div class="main_container">
    <Header />
    <div class="contents">
      <router-view></router-view>
    </div>
    <Footer />
    <!-- <div class="test_component">test</div> -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import '~@/assets/scss/index.scss';
.main_container {
  padding: 0;
  margin: 0;
  position: relative;
  /* margin-bottom: 100px; */
  .contents {
    /* margin-bottom: 100px; */
  }

  .test_component {
    position: fixed;
    bottom: 0;
  }
}
</style>
