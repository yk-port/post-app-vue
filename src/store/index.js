import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService'
import * as notification from '@/store/modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notification
  },

  state: {
    user: 'Adam Jahr',
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    locations: ['Japan', 'Korea', 'China', 'India', 'America'],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ],
    events: [],
    event: {},
    eventsTotal: 0
  },

  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_EVENTS_TOTAL(state, eventsTotal) {
      state.eventsTotal = eventsTotal
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },

  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvents({ commit, dispatch }, { perPage, page }) {
      return EventService.getEvents(perPage, page)
        .then(response => {
          commit('SET_EVENTS', response.data)
          commit('SET_EVENTS_TOTAL', response.headers['x-total-count'])
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: `There was a problem creating your event: ${error.message}`
          }
          dispatch('notification/add', notification, { root: true })
        })
    },
    fetchEvent({ commit, getters, dispatch }, id) {
      const event = getters.getEventById(id)

      if (event) {
        commit('SET_EVENT', event)
      } else {
        return EventService.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            const notification = {
              type: 'error',
              message: `There was a problem creating your event: ${error.message}`
            }
            dispatch('notification/remove', notification, { root: true })
          })
      }
    }
  },

  getters: {
    categoryLength: state => {
      return state.categories.length
    },
    // getEventByIdが呼び出されたら、選択されたidに該当するeventを取得する
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
