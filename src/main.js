// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-pro-solid';
import regular from '@fortawesome/fontawesome-pro-regular';
import 'element-ui/lib/theme-chalk/index.css';
import './hr-dashboard.scss';
// eslint-disable-next-line
import App from './App';
import router from './router';

Vue.use(ElementUI, { locale });
fontawesome.library.add(solid, regular);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
