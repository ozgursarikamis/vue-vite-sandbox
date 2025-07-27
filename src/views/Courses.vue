<script setup>
const courses = [
    { id: '101', title: 'Vue Basics' },
    { id: '102', title: 'Vue Router Deep Dive' },
    { id: '103', title: 'Vue + Pinia' },
]
</script>
<template>
    Courses

    <ul>
        <li v-for="course in courses" :key="course.id">
            <RouterLink :to="{ name: 'CourseDetail', params: { id: course.id } }">
                {{ course.title }}
            </RouterLink>
        </li>
    </ul>
</template>

<style scoped>
ul {
    list-style: none;
    padding: 0;

    li {
        border-bottom: 1px solid red;

        :hover {
            cursor: pointer;
            background: rebeccapurple;
            color: white;
            display: block;
        }
    }
}
</style>