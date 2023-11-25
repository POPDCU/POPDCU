import { createWebHistory, createRouter } from "vue-router";
import PopPage from "@/components/Main.vue";
import SelectCollege from "@/components/Select_college.vue";

const routes = [
    {
        path: "/",
        name: "PopPage",
        component: PopPage,
    },
    {
        path: "/select",
        name: "SelectCollege",
        component: SelectCollege,
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    }
];



const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    const userCollege = localStorage.getItem('UserCollege');
  
    // UserCollege 값이 없으면 '/'로의 이동을 허용하지 않음
    if (!userCollege && to.path === '/') {
      next('/select');
    } else {
      next();
    }
  });
export default router;