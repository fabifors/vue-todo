import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router/index.js';
import * as moment from 'moment';

import { VueMasonryPlugin } from 'vue-masonry';

Vue.config.productionTip = false;
Vue.use(VueMasonryPlugin);
Vue.filter('fromToday', function (time) {
  if(!time) return '';
  time = moment(time).fromNow();
  return time;
});

Vue.filter('listCategory', function (lists, categories) {
  const result = [];
  if (categories.length < 1) return lists;
  Object.keys(lists).forEach(id => {
    for( let i = 0; i < categories.length; i += 1) {
      if (lists[id].category === categories[i].id) {
        result.push(lists[id]);
        break;
      }
    }
  });
  console.log('Main,js:', result);
  return result;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
