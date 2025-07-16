<script setup lang="ts">
import { defineProps } from 'vue';
import jobData from '../jobs.json';
import { ref } from 'vue';
import JobListing from './JobListing.vue';
import { RouterLink } from 'vue-router';

const jobs = ref(jobData);
console.log([...jobs.value]);
console.log(JSON.parse(JSON.stringify(jobs.value)));

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

</script>

<template>
    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing v-for="job in jobs.slice(0, limit)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>
    
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
            View All Jobs
        </RouterLink>
    </section>
</template>§