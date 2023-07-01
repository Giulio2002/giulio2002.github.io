import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Projects from "@/components/Projects.vue";
import Hackathons from "@/components/Hackathons.vue";
import StuffIDoForFun from "@/components/StuffIDoForFun.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/feats",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/hackathons",
    name: "Hackathons",
    component: Hackathons,
  },
  {
    path: "/stuffidoforfun",
    name: "StuffIDoForFun",
    component: StuffIDoForFun,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;