import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Projects from "@/components/Projects.vue";
import Hackathons from "@/components/Hackathons.vue";
import StuffIDoForFun from "@/components/StuffIDoForFun.vue";
import EIPs from "@/components/EIPs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/eips",
    name: "EIPs",
    component: EIPs,
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
  history: createWebHashHistory(),
  routes,
});

export default router;