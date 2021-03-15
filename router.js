import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from './src/views/LandingPage.vue';
import test from '@/views/test.vue';
import test1 from '@/views/test1.vue';
Vue.use(VueRouter);

const router = new VueRouter({
  // url에 #이 나오지 않도록
  mode: 'history',
  routes: [
    // 초기 url
    { path: '/', redirect: 'home' },
    {
      path: '/home',
      component: LandingPage,
    },
    {
      path: '/test',
      component: test,
    },
    {
      path: '/test1',
      component: test1,
    },
  ],
});

export default router;
