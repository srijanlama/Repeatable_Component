import Vue from "vue";
import VueFormulate from "@braid/vue-formulate";
Vue.use(VueFormulate);
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
