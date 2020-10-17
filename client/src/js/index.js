import '../css/index.scss';
import Vue from 'vue';
import App from '../vue/containers/App.vue';
import { requestApi } from './utilities/requestApi';

const API_CONF = {
  method: 'get',
  url: '/recipes',
};

new Vue({
  el: '#app',
  render: h => h(App),
});

(async () => {
  const recipes = await requestApi(API_CONF);
})();
