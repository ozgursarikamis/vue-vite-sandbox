import { defineStore } from "pinia";

const fetchMessagesFromServer = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello from the asynchronous server! 🚀');
        }, 1500);
    });
};

export const useMessageStore = defineStore('message', {
    state: () => ({
        message: '',
        isLoading: false,
    }),
    actions: {
        async getMessage() {
            this.isLoading = true;
            this.message = 'loading...';

            try {
                const response = await fetchMessagesFromServer();
                this.message = response;
            } catch (error) {
                this.message = 'Error fetching message';
                console.error('Error fetching message:', error);
            } finally {
                this.isLoading = false;
            }
        }
    }
});