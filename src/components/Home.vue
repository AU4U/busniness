<template>
  <div class="content">
    <div class="cont_top"></div>
    <div class="cont_bottom">
      <div class="cont_menu">

      </div>
      <div class="cont_cont">
        
      </div>
    </div>
   </div>
</template>
<script>
// import {uploadFile} from './constants/api'

export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  height: 100%;
  width: 100%;
}
.cont_top{
  height:8%;
  width: 100%;
  background-color: aquamarine;
}
.cont_bottom{
  height:92%;
  width: 100%;
  background-color:blue;
}
.cont_menu{
  width:15%;
  height:100%;
  float: left;
  background-color: brown;
}
.cont_cont{
  width:85%;
  height:100%;
  float: left;
  background-color: blueviolet;
}
</style>
