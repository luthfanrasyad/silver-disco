import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import checkView from 'vue-check-view';
import vuetify from '@/plugins/vuetify' ;
import './assets/css/main.scss';

Vue.config.productionTip = false;
Vue.use(checkView);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
