<script setup>
import { RouterLink } from 'vue-router';
defineProps(['id']); // won't work
</script>
<template>
    <div>
        <h2>Course ID: {{ id }}</h2>

        <nav>
            <RouterLink :to="`/courses/${id}`">Overview</RouterLink> |
            <RouterLink :to="`/courses/${id}/lessons`">Lessons</RouterLink>
        </nav>

        <router-view /> <!-- Nested content renders here -->
    </div>
</template>