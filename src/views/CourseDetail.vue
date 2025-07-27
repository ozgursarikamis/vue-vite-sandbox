<template>
  <div>
    <h2>Course Details</h2>
    <p>You are viewing course ID: <strong>{{ id }}</strong></p>
  </div>
</template>

<script setup>
defineProps(['id']) // `id` comes from route param
</script>