<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body,
#app{
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: ARIAL,"Microsoft Yahei","微软雅黑";
}
</style>
