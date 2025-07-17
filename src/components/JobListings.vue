<script setup lang="ts">
import { defineProps, onMounted, reactive } from 'vue';

import JobListing from './JobListing.vue';
import { RouterLink } from 'vue-router';

import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

import axios from 'axios';

// const jobs = ref([]);
// console.log([...jobs.value]);
// console.log(JSON.parse(JSON.stringify(jobs.value)));

defineProps({
    limit: {
        type: Number,
        default: 3
    },
    showButton: {
        type: Boolean,
        default: false
    }
});

const state = reactive({
    jobs: [],
    isLoading: true
});

onMounted(async () => {
    try {
        const response = await axios.get('/api/jobs');
        state.jobs = response.data;
    } catch (error) {
        console.error('error', error);
    } finally {
        state.isLoading = false;
    }
});

</script>

<template>
    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div v-if="state.isLoading" class="text-center text-gray-500">
                <PulseLoader />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="(job as any).id" :job="job" />
            </div>
        </div>
    </section>

    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
            View All Jobs
        </RouterLink>
    </section>
</template>§