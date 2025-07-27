
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { mockCourses } from '../assets/courseData'

export function useCourseData() {
  const route = useRoute()
  const id = ref(route.params.id)

  const course = ref(null)
  const loading = ref(true)
  const error = ref(null)

  async function fetchCourse(courseId) {
    loading.value = true
    error.value = null
    course.value = null

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const found = mockCourses.find(c => c.id === courseId)

    if (found) {
      course.value = found
    } else {
      error.value = `Course ${courseId} not found`
    }

    loading.value = false;
  }

  // Watch for route changes
  watch(
    () => route.params.id,
    (newId) => {
      id.value = newId
      fetchCourse(newId)
    },
    { immediate: true }
  )

  return {
    id,
    course,
    loading,
    error
  }
}