<template>
  <div
    v-for="(icon, idx) in iconsInComponent"
    :key="icon"
    style="display: inline-block"
  >
    {{ idx + 1 }}. <BaseIcon :name="icon" classes="w-6 h-6 mr-6" />
    {{ idx }}
  </div>
</template>

<script>
import icons from '../icons'
import BaseIcon from './BaseIcon.vue'
export default {
  components: {BaseIcon},

  computed: {
    iconsInComponent() {
      return Object.keys(icons)
    },
  },
}
</script>
