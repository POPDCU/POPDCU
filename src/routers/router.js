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

export default router;