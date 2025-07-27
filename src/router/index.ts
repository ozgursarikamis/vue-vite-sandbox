import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import Courses from "../views/Courses.vue";
import CourseLayout from "../views/CourseLayout.vue";
import CourseOverview from "../views/CourseOverview.vue";
import CourseLessons from "../views/CourseLessons.vue";

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
        name: 'CourseLayout',
        component: CourseLayout,
        props: true,  // 💡 enables auto-passing of route params as props
        children: [
            {
                path: '',
                name: 'CourseOverview',
                component: CourseOverview
            },
            {
                path: 'lessons',
                name: 'CourseLessons',
                component: CourseLessons
            }
        ]
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