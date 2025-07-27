<script setup>
import { useRoute } from 'vue-router';

// defineProps(['id']); // won't work
defineProps(['course'])

const route = useRoute();
const id = route.params.id;
console.log({ CourseId: id });
</script>
<template>
    Lessons for <strong>{{ id }}</strong>
    <ul>
        <li v-for="lesson in course.lessons" :key="lesson">{{ lesson }}</li>
    </ul>
</template>