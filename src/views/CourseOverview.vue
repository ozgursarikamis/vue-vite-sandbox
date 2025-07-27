<script setup>
import { useRoute } from 'vue-router';

// defineProps(['id']) // won't work. This component doesn't have an id prop
defineProps(['course']);

const route = useRoute();
const id = route.params.id;
console.log('Overview Component', { CourseId: id });
</script>
<template>
    Course Overview for <strong>{{ id }}</strong>
    <h3>Overview</h3>
    <p>{{ course.description }}</p>
</template>