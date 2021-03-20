<template>
  <div>
    <v-icon class="mr-2">mdi-account-group</v-icon>
    <!-- 親のコンポーネント※ここではEventCardコンポーネント※でAttendIconコンポーネントを呼び出しているが、AttendIconの中身が子コンポーネントのslotに置き換わって表示される -->
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>
