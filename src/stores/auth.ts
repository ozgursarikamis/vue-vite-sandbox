import { defineStore } from "pinia";

export const useAuthStore = defineStore('user', {
    state: () => ({
        isLoggedIn: false,
        name: 'Guest'
    }),
    actions: {
        login() {
            this.isLoggedIn = true;
            this.name = 'John Doe';
        },
        logout() {
            this.isLoggedIn = false;
            this.name = 'Guest';
        }
    }
});