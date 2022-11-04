<template>
  <div
    class="
      opacity-0
      group-hover:opacity-100
      absolute
      top-9
      -right-full
      sm:right-0
      bg-white
      w-72
      border border-t-0
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
</template>
<script>
import TheDropdownSettingsListItem from './TheDropdownSettingsListItem.vue'
export default {
  components: {TheDropdownSettingsListItem},

  data() {
    return {
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
}
</script>


  
        