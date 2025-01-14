import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import router from './router';
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import App from './App.vue';

const myApp = createApp(App);
const pinia = createPinia();

myApp.use(router);
myApp.use(Quasar, {
  plugins: {},
});
myApp.use(pinia);
myApp.mount('#app');
