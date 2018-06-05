// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMDCAdapter from 'vue-mdc-adapter';
import './hr-dashboard.scss';
import App from './App';
import router from './router';


Vue.use(VueMDCAdapter);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
