<template>
  <v-app>
    <NavBar />
    <NotificationContainer />
    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NotificationContainer from '@/components/NotificationContainer.vue'

export default {
  components: {
    NavBar,
    NotificationContainer
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
</style>
