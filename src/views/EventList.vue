<template>
  <div>
    <p>LIST</p>
    <ul>
      <li>
        <router-link :to="{ name: 'events-show', params: { id: '1' } }"
          >1</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'events-show', params: { id: '2' } }"
          >2</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'events-show', params: { id: '3' } }"
          >3</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
