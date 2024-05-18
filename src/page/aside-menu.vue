<template>
  <div class="content">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1" @click="enterBoard">
            <span slot="title">看板</span>
          </el-menu-item>
          <el-menu-item index="2" @click='enterCustomer'>
            <!-- <i class="el-icon-menu"></i> -->
            <span slot="title">客户</span>
          </el-menu-item>
          <el-menu-item index="3" @click='enterProject'>
            <!-- <i class="el-icon-menu"></i> -->
            <span slot="title">项目</span>
          </el-menu-item>
          <el-menu-item index="4" @click="enterProgress">
            <!-- <i class="el-icon-document"></i> -->
            <span slot="title">历程</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    enterCustomer () {
      if (this.$router.currentRoute.path !== '/customerList') {
        this.$router.push({path: '/customerList'})
      }
    },
    enterBoard () {
      if (this.$router.currentRoute.path !== '/board') {
        this.$router.push({path: '/board'})
      }
    },
    enterProject () {
      if (this.$router.currentRoute.path !== '/projectList') {
        this.$router.push({path: '/projectList'})
      }
    },
    enterProgress () {
      if (this.$router.currentRoute.path !== '/progress') {
        this.$router.push({path: '/progress'})
      }
    }
  }
}
</script>
<style>
.content {
  width: 100%;
  height: 100%;
  background-color: #2d3a4a;
}
</style>