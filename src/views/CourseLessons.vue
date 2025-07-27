<script setup>
import { useRoute } from 'vue-router';

defineProps(['id']); // won't work

const route = useRoute();
const id = route.params.id;
console.log({ CourseId: id });
</script>
<template>
    Lessons for <strong>{{ id }}</strong>
</template>