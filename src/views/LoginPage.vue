<script setup>
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth';

const { login } = useAuth();
const router = useRouter();

function loginAndRedirect() {
    login();
    router.replace('/courses/101/lessons'); // or remember intended route later
}
</script>

<template>
    <div>
        <h2>🔐 Login Required</h2>
        <button @click="loginAndRedirect">Login</button>
    </div>
</template>