/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Recruiting from '@/components/Recruiting';
import Staffing from '@/components/Staffing';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Recruiting,
    },
    {
      path: '/recruiting',
      name: 'Recruiting',
      component: Recruiting,
    },
    {
      path: '/staffing',
      name: 'Staffing',
      component: Staffing,
    },
  ],
});
