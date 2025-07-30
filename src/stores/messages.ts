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
                const userId = Math.round(Math.random() * 100) + 1;
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`);
                if(!response.ok)
                    throw new Error('Network response was not ok');
                const data = await response.json();
                this.message = data.title;
            } catch (error) {
                this.message = 'Error fetching message';
                console.error('Error fetching message:', error);
            } finally {
                this.isLoading = false;
            }
        }
    }
});