import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import Layout from "@/components/Layout.vue";
const Err404 = () => import("@/views/error-pages/404");
const Err500 = () => import("@/views/error-pages/500");

const constantRoutes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/404",
        component: Err404
      },
      {
        path: "/500",
        component: Err500
      }
    ]
  }
];

const createRouter = () =>
  new Router({
    mode: "history",
    routes: constantRoutes
  });
const router = createRouter();
export default router;
