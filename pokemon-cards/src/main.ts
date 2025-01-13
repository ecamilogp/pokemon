import { createApp } from 'vue';
import './style.css';
import router from './router';
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import App from './App.vue';

const myApp = createApp(App);

myApp.use(router);
myApp.use(Quasar, {
  plugins: {},
});
myApp.mount('#app');
