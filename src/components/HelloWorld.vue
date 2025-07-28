<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';
import { useAuthStore } from '../stores/auth';

const counterStore = useCounterStore();
// ⚠️ If you destructure state properties directly, you lose reactivity!
// const { count, name } = counterStore; // This would NOT update the template.

const { count, name, doubleCount } = storeToRefs(counterStore);

const { increment, decrement } = counterStore;

const authStore = useAuthStore();
const { isLoggedIn } = storeToRefs(authStore);

</script>

<template>
  Is logged in: {{ isLoggedIn }}
  <div>
    <h1>{{ name }}</h1>
    <h2>Current count: {{ count }}</h2>
    <h3>Double count: {{ doubleCount }}</h3>

    <button @click="increment">Increment ++</button>
    <button @click="decrement">Decrement --</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
