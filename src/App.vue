<template>
  <div class="main_container">
    <Header :lang="lang" @changeLanguage="e => lang = e.target.value"/>
    <div class="contents">
      <router-view :lang="lang"></router-view >
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
  data() {
    return {
      lang: 'en'
    }
  },

};
</script>

<style lang="scss">
@import '~@/assets/scss/index.scss';
@import '~@/assets/scss/common.scss';
.main_container {
  padding: 0;
  margin: 0;
  position: relative;
  background-color: #ebeef4;
  /* margin-bottom: 100px; */

  .test_component {
    position: fixed;
    bottom: 0;
  }
}
</style>
