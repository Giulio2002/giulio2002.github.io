import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Projects from "@/components/Projects.vue";
import Hackathons from "@/components/Hackathons.vue";
import StuffIDoForFun from "@/components/StuffIDoForFun.vue";
import EIPs from "@/components/EIPs.vue";
import Research from "@/components/Research.vue";

const SITE = "Giulio Rebuffo";

const routes = [
  { path: "/", name: "Home", component: Home, meta: { title: `${SITE} — Ethereum Core Developer` } },
  { path: "/research", name: "Research", component: Research, meta: { title: `Research · ${SITE}` } },
  { path: "/eips", name: "EIPs", component: EIPs, meta: { title: `EIPs · ${SITE}` } },
  { path: "/feats", name: "Projects", component: Projects, meta: { title: `Work · ${SITE}` } },
  { path: "/hackathons", name: "Hackathons", component: Hackathons, meta: { title: `Hackathons · ${SITE}` } },
  { path: "/stuffidoforfun", name: "StuffIDoForFun", component: StuffIDoForFun, meta: { title: `Fun · ${SITE}` } },
  // anything unknown falls back to home
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((to) => {
  const title = (to.meta?.title as string) || `${SITE} — Ethereum Core Developer`;
  document.title = title;
});

export default router;
