import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import Courses from "../views/Courses.vue";
import CourseDetail from "../views/CourseDetail.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/courses',
        name: 'Courses',
        component: Courses
    },
    {
        path: '/courses/:id',
        name: 'Course',
        component: CourseDetail,
        props: true  // 💡 enables auto-passing of route params as props
    },
    {
        path: '/:catchAll(.*)',
        name: 'not-found',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;