import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Projects from "@/components/Projects.vue";
import Hackathons from "@/components/Hackathons.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;