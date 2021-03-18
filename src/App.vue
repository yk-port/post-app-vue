<template>
  <v-app>
    <v-app-bar app dense>
      <v-toolbar-title>PostApp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <router-link :to="{ name: 'home' }">home</router-link>
      </v-btn>
      <v-btn text>
        <router-link :to="{ name: 'about' }">about</router-link>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
