<template>
  <div>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <span v-if="currentPage != 1">
      <router-link
        :to="{ name: 'events', query: { page: currentPage - 1 } }"
        rel="prev"
      >
        Prev Page</router-link
      >
      <spam v-if="isLastPage"> | </spam>
    </span>
    <span v-if="isLastPage">
      <router-link
        :to="{ name: 'events', query: { page: currentPage + 1 } }"
        rel="next"
      >
        Next Page</router-link
      >
    </span>
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
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.currentPage
    })
  },
  // mapStateを使って、storeの中のstateを参照して取得している
  computed: {
    // 現在のページ数をURLのqueryから計算して取得する
    currentPage() {
      return parseInt(this.$route.query.page) || 1
    },
    isLastPage() {
      return this.eventsTotal > this.currentPage * 3
    },
    ...mapState(['events', 'eventsTotal'])
  }
}
</script>

<style lang="scss" scoped></style>
