import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";
import Login from "@/views/pages/auth/Login.vue";
import Register from "@/views/pages/auth/Register.vue";
import Dashboard from "@/views/pages/Dashboard.vue";
import TodoList from "@/views/pages/TodoList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/todolist",
    name: "todolist",
    component: TodoList,
  },
  // {
  //   path: "/add",
  //   name: "add",
  //   component: () => import("./components/AddTutorial.vue"),
  // },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "NotFound",
  //   component: () => import("./components/NotFound.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
