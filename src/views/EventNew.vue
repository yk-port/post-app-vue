<template>
  <v-form ref="form" lazy-validation>
    <v-container>
      <v-row>
        <v-col cols="6" offset="3">
          <v-select
            v-model="event.category"
            :items="categories"
            label="Category"
            required
          ></v-select>
        </v-col>

        <v-col cols="6" offset="3">
          <v-text-field
            v-model="event.title"
            :counter="40"
            label="Title"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="6" offset="3">
          <v-textarea
            v-model="event.description"
            :counter="200"
            label="Description"
            required
          ></v-textarea>
        </v-col>

        <v-col cols="6" offset="3">
          <v-select
            v-model="event.location"
            :items="locations"
            label="Location"
            required
          ></v-select>
        </v-col>

        <v-col cols="6" offset="3">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Picker in menu"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="event.date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">
                Cancel
              </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>

        <v-col cols="4" offset="4">
          <v-btn color="error" @click="reset">
            Reset
          </v-btn>
          <v-btn color="primary" @click="submit">
            submit
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  // computed: mapState({
  // userName: state => state.user.name,
  // userID: state => state.user.id,
  // categories: state => state.categories

  // ↑の記述を↓に置き換えられる
  // user: 'user',
  // categories: 'categories'
  // })

  // ↑の記述を更に↓に置き換えられる
  // computed: mapState(['user', 'categories'])

  // computedに、何か別のメソッドを追加したい場合、↑の記述を↓のようにスプレッド演算子を使えば動作する
  // computed: {
  //   getEvent() {
  //     return this.$store.getters.getEventById
  //   },
  //   ...mapState(['user', 'categories'])
  // }

  // mapStatemapGettersを短縮すると、↓のような記述で動作する
  computed: {
    ...mapGetters(['getEventById']),
    ...mapState(['user', 'categories', 'locations'])
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      event: {
        attendees: [],
        category: '',
        date: '',
        description: '',
        id: '',
        location: '',
        organizer: '',
        title: ''
      }
    }
  },
  methods: {
    submit() {
      const id = Math.floor(Math.random() * 1000)
      const user = this.$store.state.user
      const event = { ...this.event, id, user }
      this.$store
        .dispatch('createEvent', event)
        .then(() => {
          this.$router.push({
            name: 'events-show',
            params: { id: event.id }
          })
          this.reset()
        })
        .catch(() => {})
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>

<style lang="scss" scoped></style>
