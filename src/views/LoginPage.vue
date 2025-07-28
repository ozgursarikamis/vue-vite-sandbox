<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth';

const { login } = useAuth();
const router = useRouter();
const route = useRoute();

function loginAndRedirect() {
    login();

    const redirectTo = route.query.redirect || '/';
    router.replace(redirectTo);
}
</script>

<template>
    <div>
        <h2>🔐 Login Required</h2>
        <button @click="loginAndRedirect">Login</button>
    </div>
</template>