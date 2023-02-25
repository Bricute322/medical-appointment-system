import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/",
    name: "LoginView",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "regiser",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/Landingpage",
    name: "LandingPage",
    component: () => import("@/components/Layout/Navigation.vue"),
  },
  {
    path: "/MainTest",
    name: "MainTest",
    component: () => import("../views/LandingPageView.vue"),
  },
  {
    path: "/Profile",
    name: "ProfilePage",
    component: () => import("../views/ProfilePageView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
