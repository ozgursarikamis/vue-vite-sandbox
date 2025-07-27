import { ref } from "vue";
import { useRouter } from "vue-router";

const isAuthenticated = ref(false);

export function useAuth() {

    const router = useRouter();
    function login() {
        isAuthenticated.value = true;
    }

    function logout() {
        isAuthenticated.value = false;
        router.push('/');
    }

    return {
        isAuthenticated,
        login,
        logout
    }
}