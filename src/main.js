import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import fastClick from "fastclick";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "./plugins/element.js";
import "styles/reset.css";
import "styles/border.css";
import "styles/iconfont.css";
import 'swiper/swiper-bundle.css';
import 'assets/iconfont/iconfont.js';
import IconSvg from './pages/home/components/IconSvg';

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.component('icon-svg', IconSvg)
Vue.use(VueAwesomeSwiper);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
