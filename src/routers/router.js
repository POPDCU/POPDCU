import { createWebHistory, createRouter } from "vue-router";
import PopPage from "@/components/Main.vue";
import TestPage from "@/components/Select_college.vue";

const routes = [
    {
        path: "/",
        name: "PopPage",
        component: PopPage,
    },
    {
        path: "/test",
        name: "TestComponent",
        component: TestPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;