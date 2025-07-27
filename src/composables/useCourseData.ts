import { computed } from "vue";
import { useRoute } from "vue-router";
import { mockCourses } from "../assets/courseData";

export function useCourseData() {
    const route = useRoute();
    const id = computed(() => route.params.id);
    const course = computed(() => mockCourses.find(x => x.id === id.value));

    return { id, course };
}