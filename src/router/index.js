import routes from "./router.js";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default function() {
  const Router = new VueRouter({
    routes,
  });

  return Router;
}
