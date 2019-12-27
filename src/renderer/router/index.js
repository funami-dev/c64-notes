import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "editore",
      component: require("@/views/Editor").default
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
