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
    }
  },
  actions: {
    createEvent({ commit }, event) {
      console.log(event)
      EventService.postEvent(event)
      commit('ADD_EVENT', event)
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
