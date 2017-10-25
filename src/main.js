import $ from 'jquery'
import baseurl from './assets/common/common.js'

//icon-font;
import './assets/icon-font/iconfont.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './vuex/store.js';

//axios请求
import axios from 'axios';

//动画;
import animate from 'animate.css';

//Element UI;
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-default/index.css';
import './assets/font-awesome/css/font-awesome.css';

Vue.prototype.$ajax = axios;
Vue.use(ElementUI);
Vue.use(animate);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
