<template>
  <div class="about_container">
    <h1>detail</h1>

    <p><img :src="list[0].logo" alt="logo" /></p>
    <p>{{ list[0].name }}</p>
    <p>{{ list[0].slug }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  components: {},
  props: {
    name: String,
  },
  created() {
    axios
        .get('https://api.xangle.io/project/list', {
          params: {
            // page: 0,
            // viewList: 10,
            // query: `${this.$route.params.name}`,
            query: `${this.name}`,
          },
        })
        .then((response) => {
          this.list = response.data;
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    console.log(this.$route);
  },

  data() {
    return {
      list: [],
    };
  },


  watch: {
    name: {
      // handler() {
      //   mockData.asyncFind(this.id, (item) => {
      //     this.item = item;
      //   });
      // },
      //deep과 immediate를 지정하면 배열 요소 내부의 속성이 변경되도 watch안에 메서드 호출
      // 네스트된 객체도 감시할지
      deep: true,
      // 처음 값을 읽어들이는 시점에도 호출할지
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
.about_container {
  margin-top: 100px;
  padding-left: 20px;
}
</style>
