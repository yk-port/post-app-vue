<template>
  <v-app-bar app dense>
    <v-toolbar-title>PostApp</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text>
      <router-link :to="{ name: 'events' }">LIST</router-link>
    </v-btn>
    <v-btn text>
      <router-link :to="{ name: 'events-new' }">NEW</router-link>
    </v-btn>
    <v-btn text>
      <router-link :to="{ name: 'mypage', params: { username: 'tatsuya' } }"
        >ACCOUNT</router-link
      >
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
