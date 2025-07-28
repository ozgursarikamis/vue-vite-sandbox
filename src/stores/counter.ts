import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => ({ // DATA
        name: '[COUNTER] My counter',
        count: 0
    }),
    getters: { // computed properties derived from state
        doubleCount: (state) => state.count * 2
    },
    actions: { // Methods to modify the state
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    }
});