<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: 'test',
      tasks: [
        'Task 1',
        'Task 2',
        'Task 3'
      ],
      link: 'https://www.google.com'
    }
  },
  methods: {
    toggleStatus() {
      if(this.status === 'active') {
        this.status = 'inactive'
      } else {
        this.status = 'active'
      }
    }
  }
}
</script>

<template>
  <h1>Hello {{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'inactive'">User is inactive</p>
  <p v-else>User status is unknown</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>    
  </ul>

  <a :href="link" target="_blank">Go to Google</a> <br />
  <a v-bind:href="link">Go to Google (v-bind)</a>

  <button v-on:click="toggleStatus()">Toggle Status</button>
</template>

<style scoped>

</style>