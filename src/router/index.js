import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '@/views/EventList.vue'
import EventShow from '@/views/EventShow.vue'
import EventNew from '@/views/EventNew.vue'
import User from '@/views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'events',
    component: EventList
  },
  {
    path: '/events/:id',
    name: 'events-show',
    component: EventShow,
    // idをpropsとして渡す処理
    props: true
  },
  {
    path: '/events/new',
    name: 'events-new',
    component: EventNew
  },
  {
    path: '/users/:username',
    name: 'mypage',
    component: User,
    // 動的にpathを指定したい時は↓の記述をすると、動的に表示されるコンポーネントでpropsとして値を受け取れる
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
