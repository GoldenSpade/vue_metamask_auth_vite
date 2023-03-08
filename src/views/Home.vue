<template>
  <main class="container">
    <DashboardHeader />
    <Auth />
  </main>
</template>

<script setup>
import Auth from '../components/Auth.vue'
import DashboardHeader from '../components/DashboardHeader.vue'
</script>

<style lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>