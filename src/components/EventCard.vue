<template>
  <v-card class="mx-auto" max-width="344">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">@{{ event.time }} on {{ event.date }}</div>
        <v-list-item-title class="headline mb-1">
          {{ event.title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          <AttendIcon>
            <span class="attending"
              >{{ event.attendees.length }} attending</span
            >
          </AttendIcon>
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <router-link :to="{ name: 'events-show', params: { id: '1' } }">
        <v-btn outlined rounded text>
          more
        </v-btn>
      </router-link>
      <GoodIcon />
    </v-card-actions>
  </v-card>
</template>

<script>
import AttendIcon from '@/components/AttendIcon.vue'
import GoodIcon from '@/components/GoodIcon.vue'
export default {
  components: {
    AttendIcon,
    GoodIcon
  },
  data() {
    return {
      event: {
        id: 1,
        title: 'Beach Cleanup',
        date: 'Tue May 15 2018',
        time: '6:00',
        attendees: [
          { id: 'abc123', name: 'Adam Jahr' },
          { id: 'def456', name: 'Gregg Pollack' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.attending {
  vertical-align: middle;
}
</style>
