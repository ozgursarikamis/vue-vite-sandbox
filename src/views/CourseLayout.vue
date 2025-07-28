<script setup>
import { RouterLink } from 'vue-router';
import { useCourseData } from '../composables/useCourseData';
// defineProps(['id']); // won't work

const { id, course, loading, error } = useCourseData();

</script>
<template>
    <aside class="sidebar">
        <router-view name="sidebar" />
    </aside>
    <main class="main-content">
        <div>
            <h2>📘 Course Detail: {{ id }}</h2>

            <div v-if="loading">
                <div class="loader"></div>
            </div>
            <div v-if="error"> {{ error }}</div>

            <div v-else>
                <nav>
                    <RouterLink :to="`/courses/${id}`">Overview</RouterLink> |
                    <RouterLink :to="`/courses/${id}/lessons`">Lessons</RouterLink>
                </nav>
            </div>

            <router-view name="default" v-if="course" :course="course" /> <!-- Nested content renders here -->
        </div>
    </main>
</template>

<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
    width: 50px;
    padding: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #25b09b;
    --_m:
        conic-gradient(#0000 10%, #000),
        linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
    mask: var(--_m);
    -webkit-mask-composite: source-out;
    mask-composite: subtract;
    animation: l3 1s infinite linear;
}

@keyframes l3 {
    to {
        transform: rotate(1turn)
    }
}
</style>