<script>
import Announce from './components/Announce.vue'
import List_of_subjects from './components/List_of_subjects.vue'
import Add_Drop from './components/Add_drop_course.vue'

const routes = {
  '/Announce' : Announce,
  '/List_of_subjects' : List_of_subjects,
  '/Add_drop_course' : Add_Drop
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
  <a href="#/Announce">ประกาศข่าว</a> |
  <a href="#/List_of_subjects">รายชื่อวิชา</a> |
  <a href="#/Add_drop_course">เพิ่มถอนรายวิชา</a>
  <component :is="currentView" />
</template>