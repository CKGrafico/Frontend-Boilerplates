import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './styles/app.scss';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
