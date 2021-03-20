<template>
  <div>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents')
  },
  // mapStateを使って、storeの中のstateを参照して取得している
  computed: mapState(['events'])
}
</script>

<style lang="scss" scoped></style>
