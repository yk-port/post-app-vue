<template>
  <div>
    <h4>{{ user.name }}</h4>
    <p>{{ user.id }}</p>
    <p>{{ getEventById(1) }}</p>
  </div>
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
    ...mapState(['user', 'categories'])
  }
}
</script>

<style lang="scss" scoped></style>
