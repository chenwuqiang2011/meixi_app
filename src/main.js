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

//基于Element UI的全国地区三级联动；
import VueAreaLinkage from 'vue-area-linkage';
Vue.use(VueAreaLinkage);

//VueAwesomeSwiper滑块插件；
import VueAwesomeSwiper from 'vue-awesome-swiper';
// require styles
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

// 轮播图，在入口文件中引入(暂时不支持单组件引入的方式):
import wcSwiper from 'wc-swiper';
import 'wc-swiper/style.css';
Vue.use(wcSwiper);

Vue.prototype.$ajax = axios;
Vue.use(ElementUI);
Vue.use(animate);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
