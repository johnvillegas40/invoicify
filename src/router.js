import { createRouter, createWebHistory } from "vue-router";


//import each page
import Home from "./components/Home.vue";

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: [
        { path: "/", name: "Home", component: Home },
    ]
})

export default router