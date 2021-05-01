const routes = [
  {
    path: "/",
    component: () => import("layouts/mainLayout.vue"),
    children: [
      { path: "/home", component: () => import("pages/home.vue") },
      { path: "/about", component: () => import("pages/about.vue") },
    ],
  },
];

export default routes;
