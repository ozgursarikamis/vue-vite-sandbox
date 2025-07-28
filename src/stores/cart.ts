import { defineStore } from "pinia";
import { useUserStore } from "./auth";

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: []
    }),
    actions: {
        async checkout() {
            const userStore = useUserStore();
            if(userStore.isLoggedIn) {
                alert('You must be logged in to checkout');
                return;
            }

            console.log('Proceeding to checkout');
            // API call to process the payment would go here...
        }
    }
});