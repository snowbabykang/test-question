import Vue from 'vue'
import App from './App.vue'

import Question from '../lib/index';
Vue.use(Question);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App)
})
