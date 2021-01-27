import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
// import store from "./store";
import vueContextMenu from "@/components/ContextMenu/index.js";

Vue.use(vueContextMenu);

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
