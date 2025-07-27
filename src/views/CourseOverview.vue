<script setup>
defineProps(['id']) // won't work. This component doesn't have an id prop

import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.params.id;
console.log('Overview Component', { CourseId: id });
</script>
<template>
    Course Overview for <strong>{{ id }}</strong>
</template>