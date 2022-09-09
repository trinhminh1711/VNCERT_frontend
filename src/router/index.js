import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/login/Login.vue";
import Register from "../views/register/Register.vue";
import ErrorPage from "../components/404.vue";
import HomePage from "../views/home/HomePage.vue";
import UserProfile from "../views/home/account/Account.vue";
import DashBoardPage from "../views/home/dashboard/DashBoard.vue";
import UserList from "../views/home/admin/user/ListUser.vue";
import CourseList from "../views/home/course/Index.vue";
import CourseDetail from "../views/home/course/Detail.vue";
import CourseCreate from "../views/home/course/Create.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    children: [
      {
        path: "dashboard",
        component: DashBoardPage,
        name: "DashBoardPage",
      },
      {
        path: "list-user",
        component: UserList,
        name: "UserList",
      },
      {
        path: "profile",
        component: UserProfile,
        name: "profile",
      },
      {
        path: "course",
        component: CourseList,
        name: "CourseList",
      },
      {
        path: "create-course",
        component: CourseCreate,
        name: "CourseCreate",
      },
      {
        path: "course-detail/:id",
        component: CourseDetail,
        name: "CourseDetail",
      },
    ],
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
  if (sessionStorage.getItem("loginStatus") == null && to.name !== "login") {
    if (to.name !== "register") {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
