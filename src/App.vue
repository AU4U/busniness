<template>
  <div id="app">
    <el-container class="content">
      <el-aside width="200px" class="cont_menu">
        <AsideMenu></AsideMenu>
      </el-aside>
      <el-main class="cont_cont">
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import AsideMenu from '@/page/aside-menu.vue'

export default {
  name: 'App',
  components: {
    'AsideMenu': AsideMenu
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: ARIAL, "Microsoft Yahei", "微软雅黑", serif;
}

.content {
  height: 100%;
  width: 100%;
}

.cont_menu {
  width: 15%;
  height: 100%;
  float: left;
}

.cont_cont {
  width: 85%;
  height: 100%;
  float: left;
  background-color: gray;
}
</style>3