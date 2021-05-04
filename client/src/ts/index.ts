import '../css/index.scss';
import { createApp } from 'vue';
import App from '../components/App.vue';
import { store, key } from './store/index';
import { router } from './router/index';
import { initializeFirebase } from './utilities/initializeFirebase';

initializeFirebase();

const app = createApp(App);
app.use(store, key);
app.use(router);
app.mount('#app');
