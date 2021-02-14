import '../css/index.scss';
import Vue from 'vue';
import App from '../components/App.vue';
import { store } from './store/index';
import { router } from './router/index';

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
});
