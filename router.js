import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from './src/views/LandingPage.vue';
import grid from '@/views/grid.vue';
import test1 from '@/views/test1.vue';
import CryptoAssetsDetail from '@/views/CryotoAssetsDetail.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    // 초기 url
    { path: '/', redirect: 'home' },
    {
      path: '/home',
      component: LandingPage,
    },
    {
      path: '/grid',
      component: grid,
    },
      {
          path: '/grid/:name',
          component: CryptoAssetsDetail,
          props: (route) => ({
              name: String(route.params.name)
          }),
      },
    {
      path: '/test1',
      component: test1,
    },
  ],
});

export default router;
