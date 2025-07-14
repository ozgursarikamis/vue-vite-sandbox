<script setup>
import { ref } from 'vue';


const name = ref('John Doe');
const status = ref('active');
const tasks = ref([
  'Task 1',
  'Task 2',
  'Task 3'
]);
const newTask = ref('default value for new task');

const link = ref('https://www.google.com');
const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'inactive';
  } else {
    status.value = 'active';
  }
}

const addTask = () => {
  if(newTask.value.trim() === '') return;
  tasks.value.push(newTask.value);
  newTask.value = '';
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1); // remove task by index
}
</script>

<template>
  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label> <br>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">Add</button>
  </form>

  <h1>Hello {{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'inactive'">User is inactive</p>
  <p v-else>User status is unknown</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>

  <a :href="link" target="_blank">Go to Google</a> <br />
  <a v-bind:href="link">Go to Google (v-bind)</a>

  <br>
  <br>
  <button v-on:click="toggleStatus()">Toggle Status</button> <br>
  <button @click="toggleStatus">Toggle @click</button>
</template>

<style scoped></style>