import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/login/Login.vue";
import Register from "../views/register/Register.vue";
import ErrorPage from "../components/404.vue";
import HomePage from "../views/home/HomePage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/404",
    name: "ErrorPage",
    component: ErrorPage,
  },
  { path: "*", component: ErrorPage },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem('loginStatus') == null && to.name !== 'login') {
    if (to.name !== 'register') {
      next({ name: 'login' });
    }
    else {
      next();
    }
  }
  else {
    next();
  }
})

export default router;
