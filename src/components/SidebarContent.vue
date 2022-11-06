<template>
  <SidebarSection>
    <ul>
      <SidebarNavItem label="Home" icon="home" is-active />
      <SidebarNavItem label="Trending" icon="fire" />
      <SidebarNavItem label="Subscription" icon="collection" />
    </ul>
  </SidebarSection>

  <SidebarSection>
    <ul>
      <SidebarNavItem label="Library" icon="dublicate" />
      <SidebarNavItem label="History" icon="clock" />
    </ul>
  </SidebarSection>

  <SidebarSection class="px-8 py-4 font-medium leading-5 border-b">
    <span class="text-sm">
      Sign in to like videos, comment, and subscribe.
    </span>

    <ButtonLogin
      classes="s
          focus:outline-none
          flex
          items-center
          px-2
          py-0.5
          mt-3
          text-sm text-blue-700
          uppercase
          border border-blue-700
          rounded-sm
        "
    />
  </SidebarSection>

  <SidebarSection>
    <SidebarSectionHeading title="Best of YouTube" />

    <ul>
      <SidebarNavItem label="Music" icon="music" />
      <SidebarNavItem label="Sports" icon="alert" />
      <SidebarNavItem label="Gaming" icon="puzzle" />
      <SidebarNavItem label="Movies" icon="movie" />
      <SidebarNavItem label="News" icon="news" />
      <SidebarNavItem label="Live" icon="live" />
      <SidebarNavItem label="360&deg Video" icon="eye" />
    </ul>
  </SidebarSection>

  <SidebarSection>
    <ul>
      <SidebarNavItem label="Browse channels" icon="add" />
    </ul>
  </SidebarSection>

  <SidebarSection>
    <SidebarSectionHeading title="More from YouTube" />

    <ul>
      <SidebarNavItem label="YouTube Premium" icon="play" />
      <SidebarNavItem label="Live" icon="live" />
    </ul>
  </SidebarSection>

  <SidebarSection>
    <ul>
      <SidebarNavItem label="Settings" icon="cog" />
      <SidebarNavItem label="Report history" icon="report" />
      <SidebarNavItem label="Help" icon="help" />
      <SidebarNavItem label="Send feedback" icon="feedback" />
    </ul>
  </SidebarSection>

  <SidebarSection class="px-6 py-4 text-xs font-semibold space-y-4">
    <TheFooter />
  </SidebarSection>
</template>

<script>
import SidebarSection from './SidebarSection.vue'
import SidebarSectionHeading from './SidebarSectionHeading.vue'
import SidebarNavItem from './SidebarNavItem.vue'
import ButtonLogin from './ButtonLogin.vue'
import TheFooter from './TheFooter.vue'

export default {
  components: {
    SidebarSection,
    SidebarSectionHeading,
    SidebarNavItem,
    ButtonLogin,
    TheFooter,
  },
}
</script>