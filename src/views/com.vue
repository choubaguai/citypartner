<template>
  <div calss="app">
    <!-- 三级路由出口 -->
     <router-view class="content" name="box"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "./common/css/reset.css";
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
