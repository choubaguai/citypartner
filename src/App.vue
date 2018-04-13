<template>
  <div id="app">
    <!-- 一级路由出口 -->
    <router-view></router-view>
    <lg-preview></lg-preview>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "./common/css/reset.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
