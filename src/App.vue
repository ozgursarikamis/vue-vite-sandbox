<script setup>
import { ref } from 'vue';
import { useAuth } from './composables/useAuth';

const auth = ref(useAuth());
</script>

<template>
  <div>
    <div v-if="auth.isAuthenticated">
      <button @click="auth.logout()">Logout</button>
    </div>
    <div v-else>
      <button @click="auth.login()">Login</button>
    </div>
  </div>
  <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/about">About</RouterLink> | 
  <RouterLink to="/courses">Courses</RouterLink>
  <br>
  <router-view></router-view>
</template>

<style scoped></style>
