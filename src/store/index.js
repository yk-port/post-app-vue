import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService'

Vue.use(Vuex)

export default new Vuex.Store({
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
    events: []
  },

  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    }
  },

  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvents({ commit }) {
      return EventService.getEvents()
        .then(response => {
          commit('SET_EVENTS', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  modules: {},

  getters: {
    categoryLength: state => {
      return state.categories.length
    },
    // getEventByIdが呼び出されたら、選択されたidに該当するeventを取得する
    getEventById: state => id => {
      return state.todos.find(event => event.id === id)
    }
  }
})
