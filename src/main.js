import Vue from "vue";
import VueFormulate from "@braid/vue-formulate";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueRouter from "vue-router";
import routes from "./router/router";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueFormulate);
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  routes,
  render: (h) => h(App),
}).$mount("#app");
