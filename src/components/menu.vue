<template>
    <div class="content">
        <el-row class="tac">
    <el-col :span="24">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <!-- <i class="el-icon-location"></i> -->
          <span>看板</span>
        </template>
      </el-submenu>
      <el-menu-item index="2">
        <!-- <i class="el-icon-menu"></i> -->
        <span slot="title" @click='enterCustomer'>客户</span>
      </el-menu-item>
      <el-menu-item index="3">
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
      alert('ddddd')
      this.$router.push({ path: '/customerLIst'})
      console.log('tioazhuan')
    }
  }
}
</script>
  <style>
  .content{
    width: 100%;
    height:100%;
    background-color: #2d3a4a;
  }
  </style>