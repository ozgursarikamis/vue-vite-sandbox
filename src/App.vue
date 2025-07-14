<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: 'test'
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
    
  </ul>
</template>

<style scoped>

</style>