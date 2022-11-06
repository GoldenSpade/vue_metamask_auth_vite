<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 z-30">
    <aside class="w-64 max-h-screen overflow-auto bg-white">
      <section class="flex items-center p-4 border-b sticky top-0 bg-white">
        <button class="ml-2 mr-6 focus:outline-none">
          <BaseIcon name="menu" classes="w-6 h-12" />
        </button>
        <LogoMain />
      </section>

      <SidebarContent />
    </aside>
  </div>
</template>

<script>
import LogoMain from './LogoMain.vue'
import SidebarContent from './SidebarContent.vue'
import BaseIcon from './BaseIcon.vue'

export default {
  components: {LogoMain, SidebarContent, BaseIcon},
}
</script>