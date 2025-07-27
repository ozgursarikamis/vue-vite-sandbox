<script setup>
import { RouterLink } from 'vue-router';
import { useCourseData } from '../composables/useCourseData';
// defineProps(['id']); // won't work

const { id, course } = useCourseData();

</script>
<template>
    <div>
        <h2>Course ID: {{ id }}</h2>

        <nav v-if="course">
            <RouterLink :to="`/courses/${id}`">Overview</RouterLink> |
            <RouterLink :to="`/courses/${id}/lessons`">Lessons</RouterLink>
        </nav>

        <router-view v-if="course" :course="course" /> <!-- Nested content renders here -->
    </div>
</template> 