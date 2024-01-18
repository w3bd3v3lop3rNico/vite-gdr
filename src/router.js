import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Index from "./pages/characters/Index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/characters",
      name: "characters",
      component: Index,
    },
  ],
});

export { router };
