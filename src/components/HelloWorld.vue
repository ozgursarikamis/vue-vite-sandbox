<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';
import { useAuthStore } from '../stores/auth';
import { useMessageStore } from '../stores/messages';
import { onMounted } from 'vue';

const counterStore = useCounterStore();
const messageStore = useMessageStore();
// ⚠️ If you destructure state properties directly, you lose reactivity!
// const { count, name } = counterStore; // This would NOT update the template.

const { count, name, doubleCount } = storeToRefs(counterStore);

const { increment, decrement } = counterStore;

const authStore = useAuthStore();
const { isLoggedIn } = storeToRefs(authStore);

const { message, isLoading } = storeToRefs(messageStore);

// Call the async action when the component is first mounted to the DOM
onMounted(() => {
  messageStore.getMessage();
});
</script>

<template>
  Is logged in: {{ isLoggedIn }} <br>
  Message: {{ message }} <br>
  Loading: {{ isLoading }} <br>

  <hr>

  <button @click="messageStore.getMessage" :disabled="isLoading">Fetch Message</button>
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
