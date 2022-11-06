<template>
  <svg
    :class="classes"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    v-html="path"
  ></svg>
</template>

<script>
import icons from '../icons'
export default {
  props: ['name', 'classes'],

  data() {
    return {
      path: icons[this.name],
    }
  },
  computed: {
    classes() {
      return this.classes || 'w-6 h-6'
    },
  },
}
</script>