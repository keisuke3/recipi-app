import '../css/index.scss';
import Vue from 'vue';
import App from '../vue/components/App.vue';
import { store } from './store/index';

new Vue({
  el: '#app',
  render: h => h(App),
  store,
});
