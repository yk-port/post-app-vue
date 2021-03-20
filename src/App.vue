<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
</style>
