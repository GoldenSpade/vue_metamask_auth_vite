<template>
  <a href="#" :class="classes">{{ category }}</a>
</template>

<script>
export default {
  props: ['category', 'isAcive'],

  computed: {
    classes() {
      const classes = ['px-3', 'py-1', 'transition', 'rounded-full', 'border']

      return this.isAcive
        ? [
            ...classes,
            'border border-gray-700',
            'bg-gray-600',
            'hover:bg-gray-500',
            'text-white',
          ]
        : [
            ...classes,
            'border border-gray-300',
            'bg-gray-100',
            'hover:bg-gray-200',
          ]
    },
  },
}
</script>


      