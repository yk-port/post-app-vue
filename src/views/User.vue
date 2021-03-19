<template>
  <!-- <p>this is {{ $route.params.username }}'s page!</p> -->
  <p>{{ username }}</p>
</template>

<script>
export default {
  props: ['username']
}
</script>

<style lang="scss" scoped></style>
