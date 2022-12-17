<template>
  <div class="relative">
    <button class="relative p-2 focus:outline-none">
      <BaseIcon
        @click="isOpen = !isOpen"
        name="dotsVertical"
        classes="w-5 h-5"
      />
    </button>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transition opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        ref="dropdown"
        @keydown.esc="isOpen = false"
        tabindex="-1"
        class="
          absolute
          top-9
          -right-full
          sm:right-0
          bg-white
          w-72
          border border-t-0
          focus:outline-none
        "
      >
        <section class="py-2 border-b">
          <ul>
            <TheDropdownSettingsListItem
              v-for="item in listItems.slice(0, 8)"
              :icon="item.icon"
              :label="item.label"
              :with-sub-menu="item.withSubMenu"
              :key="item.label"
            />
          </ul>
        </section>
        <section class="py-2">
          <ul>
            <TheDropdownSettingsListItem
              :label="listItems[8].label"
              :with-sub-menu="listItems[8].withSubMenu"
            />
          </ul>
        </section>
      </div>
    </transition>
  </div>
</template>
<script>
import BaseIcon from './BaseIcon.vue'
import TheDropdownSettingsListItem from './TheDropdownSettingsListItem.vue'
export default {
  components: {BaseIcon, TheDropdownSettingsListItem},

  mounted() {
    window.addEventListener('click', (event) => {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false
      }
    })
  },

  data() {
    return {
      isOpen: false,

      listItems: [
        {
          icon: 'sun',
          label: 'Appearance Light:',
          withSubMenu: true,
        },

        {
          icon: 'translate',
          label: 'Language: English',
          withSubMenu: true,
        },

        {
          icon: 'globeALt',
          label: 'Location: Ukraine',
          withSubMenu: true,
        },

        {
          icon: 'cog',
          label: 'Settings',
        },

        {
          icon: 'shieldCheck',
          label: 'Your data in YouTube',
        },

        {
          icon: 'questionMarkCircle',
          label: 'Help',
        },

        {
          icon: 'chatAlt',
          label: 'Send feedback',
        },

        {
          icon: 'calculator',
          label: 'Keyboard shortcuts',
        },
        {
          icon: null,
          label: 'Restricted Mode: Off',
          withSubMenu: true,
        },
      ],
    }
  },

  watch: {
    isOpen() {
      this.$nextTick(() => this.isOpen && this.$refs.dropdown.focus())
    },
  },
}
</script>


  
        