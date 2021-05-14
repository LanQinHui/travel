/* eslint-disable prettier/prettier */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/home/Home";

Vue.use(VueRouter);

export default new VueRouter({
  routes : [
    {
      path: '/',
      name: "Home",
      // eslint-disable-next-line prettier/prettier
      component: Home
    }
  ]
})
