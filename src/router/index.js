import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SingUp from "../views/SingUp.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/singup",
    name: "singup",
    component: SingUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
