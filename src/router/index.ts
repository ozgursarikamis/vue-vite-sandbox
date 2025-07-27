import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";
import Courses from "../views/Courses.vue";
import CourseLayout from "../views/CourseLayout.vue";
import CourseOverview from "../views/CourseOverview.vue";
import CourseLessons from "../views/CourseLessons.vue";
import { useAuth } from "../composables/useAuth";
import LoginPage from "../views/LoginPage.vue";

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

    if(to.meta.requiresAuth && !isAuthenticated.value) {
        next('/login');
    } else {
        next();
    }
});

export default router;