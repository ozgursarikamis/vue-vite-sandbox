import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

import { useAuth } from "../composables/useAuth";

const CourseLayout = () => import('../views/CourseLayout.vue');
const CourseOverview = () => import('../views/CourseOverview.vue');
const CourseLessons = () => import('../views/CourseLessons.vue');
const LoginPage = () => import('../views/LoginPage.vue');
const NotFound = () => import('../views/NotFound.vue');
const About = () => import('../views/About.vue');

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
    // {
    //     path: '/courses',
    //     name: 'Courses',
    //     component: Courses
    // },
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
                component: CourseLessons,
                // beforeEnter: (to, from, next) => {
                //     console.log({ to, from, next });

                //     const { isAuthenticated } = useAuth();

                //     if (isAuthenticated.value) {
                //         next();
                //     } else {
                //         next('/login')
                //     }
                // },
                meta: { requiresAuth: true }
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
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

// Add global guard:
router.beforeEach((to, from, next) => {
    const { isAuthenticated } = useAuth();

    if (to.meta.requiresAuth && !isAuthenticated.value) {
        next({
            path: '/login',
            query: { redirect: to.fullPath } // 👈 capture where they wanted to go
        });
    } else {
        next();
    }
});

export default router;